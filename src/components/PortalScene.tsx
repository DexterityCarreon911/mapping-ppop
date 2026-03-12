import { useEffect, useRef } from 'react';
import type { MutableRefObject } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import {
  IcosahedronGeometry,
  BufferGeometry,
  Points,
  PointsMaterial,
  Float32BufferAttribute,
  Mesh,
  MeshStandardMaterial,
  SphereGeometry,
  TorusGeometry,
  BoxGeometry,
  PointLight,
  Color,
  Group,
} from 'three';
import gsap from 'gsap';

interface PortalSceneProps {
  onComplete: () => void;
  timeline: MutableRefObject<gsap.core.Timeline | null>;
}

interface AnimationState {
  time: number;
  cameraZ: number;
  cameraX: number;
  cameraY: number;
  cameraRotX: number;
  cameraRotY: number;
  particleFlow: number;
  energyPulse: number;
  meshScale: number;
  whiteFlash: number;
}

export const PortalScene = ({ onComplete, timeline }: PortalSceneProps) => {
  const { camera, scene } = useThree();
  const meshesRef = useRef<Mesh[]>([]);
  const particleSystemsRef = useRef<Points[]>([]);
  const lightsRef = useRef<PointLight[]>([]);
  const groupRef = useRef<Group | null>(null);

  const animStateRef = useRef<AnimationState>({
    time: 0,
    cameraZ: 20,
    cameraX: 0,
    cameraY: 0,
    cameraRotX: 0,
    cameraRotY: 0,
    particleFlow: 0,
    energyPulse: 0,
    meshScale: 0.1,
    whiteFlash: 0,
  });

  // Create the main 3D structure
  useEffect(() => {
    const group = new Group();
    scene.add(group);
    groupRef.current = group;

    // ===== CORE SPHERE (CENTER OF EVERYTHING) =====
    const coreGeom = new SphereGeometry(1.2, 128, 128);
    const coreMat = new MeshStandardMaterial({
      color: new Color(0x00ffe5),
      emissive: new Color(0x00ffe5),
      emissiveIntensity: 3,
      metalness: 0.8,
      roughness: 0.1,
    });
    const coreMesh = new Mesh(coreGeom, coreMat);
    coreMesh.scale.set(0.3, 0.3, 0.3);
    group.add(coreMesh);
    meshesRef.current.push(coreMesh);

    // ===== INNER ROTATING ICOSAHEDRON =====
    const icoGeom = new IcosahedronGeometry(1, 5);
    const icoMat = new MeshStandardMaterial({
      color: new Color(0x7b2fff),
      emissive: new Color(0x7b2fff),
      emissiveIntensity: 2.5,
      metalness: 0.85,
      roughness: 0.15,
    });
    const icoMesh = new Mesh(icoGeom, icoMat);
    icoMesh.scale.set(0.6, 0.6, 0.6);
    group.add(icoMesh);
    meshesRef.current.push(icoMesh);

    // ===== MULTIPLE ROTATING RINGS (TORUS) =====
    for (let i = 0; i < 5; i++) {
      const ringGeom = new TorusGeometry(1.5 + i * 0.6, 0.18, 32, 128);
      const ringColor = i % 2 === 0 ? 0x00ffe5 : 0x7b2fff;
      const ringMat = new MeshStandardMaterial({
        color: new Color(ringColor),
        emissive: new Color(ringColor),
        emissiveIntensity: 1.8,
        metalness: 0.7,
        roughness: 0.25,
      });
      const ringMesh = new Mesh(ringGeom, ringMat);
      ringMesh.rotation.x = Math.random() * Math.PI * 0.5;
      ringMesh.rotation.y = Math.random() * Math.PI * 0.5;
      ringMesh.rotation.z = Math.random() * Math.PI * 0.5;
      ringMesh.userData = { initialRotX: ringMesh.rotation.x, initialRotY: ringMesh.rotation.y, orbitSpeed: 0.3 + i * 0.1 };
      group.add(ringMesh);
      meshesRef.current.push(ringMesh);
    }

    // ===== ORBITING CUBES =====
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const boxGeom = new BoxGeometry(0.4, 0.4, 0.4);
      const boxColor = Math.random() > 0.5 ? 0x00ffe5 : 0x7b2fff;
      const boxMat = new MeshStandardMaterial({
        color: new Color(boxColor),
        emissive: new Color(boxColor),
        emissiveIntensity: 1.5,
        metalness: 0.75,
        roughness: 0.2,
      });
      const boxMesh = new Mesh(boxGeom, boxMat);
      boxMesh.userData = { angle, radius: 5, rotationSpeed: 0.01 + Math.random() * 0.02 };
      group.add(boxMesh);
      meshesRef.current.push(boxMesh);
    }

    // ===== ADVANCED LIGHTING =====
    // Cyan light
    const lightCyan = new PointLight(0x00ffe5, 3, 80);
    lightCyan.position.set(10, 8, 10);
    lightCyan.castShadow = true;
    group.add(lightCyan);
    lightsRef.current.push(lightCyan);

    // Violet light
    const lightViolet = new PointLight(0x7b2fff, 2.5, 80);
    lightViolet.position.set(-10, -6, 5);
    lightViolet.castShadow = true;
    group.add(lightViolet);
    lightsRef.current.push(lightViolet);

    // White light
    const lightWhite = new PointLight(0xffffff, 1.5, 60);
    lightWhite.position.set(0, 0, 20);
    group.add(lightWhite);
    lightsRef.current.push(lightWhite);

    // Additional accent lights
    const lightAccent1 = new PointLight(0x00ffff, 1.5, 50);
    lightAccent1.position.set(15, 0, 0);
    group.add(lightAccent1);
    lightsRef.current.push(lightAccent1);

    const lightAccent2 = new PointLight(0xff00ff, 1.5, 50);
    lightAccent2.position.set(-15, 0, 0);
    group.add(lightAccent2);
    lightsRef.current.push(lightAccent2);

    return () => {
      scene.remove(group);
      meshesRef.current.forEach((mesh) => {
        if (mesh.geometry) mesh.geometry.dispose();
        if (mesh.material && !Array.isArray(mesh.material)) {
          mesh.material.dispose();
        }
      });
      lightsRef.current.forEach((light) => {
        if (light.parent) light.parent.remove(light);
      });
    };
  }, [scene]);

  // ===== CREATE MASSIVE PARTICLE SYSTEMS =====
  useEffect(() => {
    const createParticles = (count: number, color: number, speed: number) => {
      const geometry = new BufferGeometry();
      const posArray = new Float32Array(count * 3);
      const velArray = new Float32Array(count * 3);

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        const radius = 8 + Math.random() * 15;

        posArray[i3] = Math.sin(phi) * Math.cos(theta) * radius;
        posArray[i3 + 1] = Math.sin(phi) * Math.sin(theta) * radius;
        posArray[i3 + 2] = Math.cos(phi) * radius;

        velArray[i3] = (Math.random() - 0.5) * speed;
        velArray[i3 + 1] = (Math.random() - 0.5) * speed;
        velArray[i3 + 2] = (Math.random() - 0.5) * speed;
      }

      geometry.setAttribute('position', new Float32BufferAttribute(posArray, 3));
      geometry.setAttribute('velocity', new Float32BufferAttribute(velArray, 3));

      const material = new PointsMaterial({
        color,
        size: 0.2,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.7,
      });

      const pts = new Points(geometry, material);
      scene.add(pts);
      particleSystemsRef.current.push(pts);
    };

    // Create three massive particle systems
    createParticles(3500, 0x00ffe5, 0.12);  // Cyan - largest
    createParticles(2500, 0x7b2fff, 0.09);  // Violet
    createParticles(1500, 0xffffff, 0.06);  // White

    return () => {
      particleSystemsRef.current.forEach((ps) => {
        scene.remove(ps);
        ps.geometry.dispose();
        if (ps.material instanceof PointsMaterial) {
          ps.material.dispose();
        }
      });
      particleSystemsRef.current = [];
    };
  }, [scene]);

  // ===== GSAP ANIMATION TIMELINE (4 SECONDS TOTAL) =====
  useEffect(() => {
    if (timeline.current) return;

    const tl = gsap.timeline({ onComplete });

    // PHASE 1: EMERGENCE (0s-1s) - Everything builds up
    tl.to(
      animStateRef.current,
      {
        meshScale: 1,
        energyPulse: 1,
        duration: 1,
        ease: 'power2.inOut',
      },
      0
    );

    // PHASE 2: ORBITAL DANCE (1s-2.5s) - Things start spinning, camera moves
    tl.to(
      animStateRef.current,
      {
        cameraZ: 10,
        cameraY: 3,
        cameraRotX: 0.4,
        cameraRotY: 0.6,
        particleFlow: 1,
        duration: 1.5,
        ease: 'power1.inOut',
      },
      1
    );

    // PHASE 3: WARP DRIVE (2.5s-3.8s) - Everything spirals inward HARD
    tl.to(
      animStateRef.current,
      {
        cameraZ: -10,
        cameraX: 0,
        particleFlow: 4,
        energyPulse: 3,
        duration: 1.3,
        ease: 'power3.in',
      },
      2.5
    );

    // FINAL FLASH (3.8s-4s)
    tl.to(
      animStateRef.current,
      {
        whiteFlash: 1,
        duration: 0.05,
      },
      3.75
    );

    tl.to(
      animStateRef.current,
      {
        whiteFlash: 0,
        duration: 0.25,
      },
      3.8
    );

    timeline.current = tl;
  }, [timeline, onComplete]);

  // ===== RENDER LOOP - WHERE THE MAGIC HAPPENS =====
  useFrame(() => {
    const state = animStateRef.current;
    state.time += 0.016;

    // Update camera with aggressive movement
    camera.position.x = state.cameraX + Math.sin(state.time * 0.3) * 2;
    camera.position.y = state.cameraY + Math.cos(state.time * 0.25) * 1.5;
    camera.position.z = state.cameraZ;
    camera.rotation.x = state.cameraRotX;
    camera.rotation.y = state.cameraRotY + state.time * 0.1;

    if (groupRef.current) {
      // ===== MESH ANIMATIONS =====
      const meshArr = meshesRef.current;

      // Core sphere - pulsing and glowing
      if (meshArr[0]) {
        const scale = state.meshScale * (0.3 + 0.3 * Math.sin(state.time * 4));
        meshArr[0].scale.set(scale, scale, scale);
        meshArr[0].rotation.x += 0.003;
        meshArr[0].rotation.y += 0.006;
      }

      // Ico - spinning wildly
      if (meshArr[1]) {
        meshArr[1].rotation.x += 0.008;
        meshArr[1].rotation.y += 0.012;
        meshArr[1].rotation.z += 0.005;
        const icoScale = state.meshScale * (0.6 + 0.4 * Math.sin(state.time * 3));
        meshArr[1].scale.set(icoScale, icoScale, icoScale);
      }

      // Rings - different rotation speeds
      for (let i = 2; i < 7; i++) {
        const ring = meshArr[i];
        if (ring && ring.userData) {
          ring.rotation.x += ring.userData.orbitSpeed * 0.005;
          ring.rotation.y += ring.userData.orbitSpeed * 0.008;
          ring.rotation.z += ring.userData.orbitSpeed * 0.003;
          const scl = state.meshScale * (0.8 + (i - 2) * 0.15);
          ring.scale.set(scl, scl, scl);
        }
      }

      // Orbiting cubes
      for (let i = 7; i < meshArr.length; i++) {
        const box = meshArr[i];
        if (box && box.userData) {
          const angle = box.userData.angle;
          const rad = box.userData.radius * state.meshScale + state.particleFlow * 0.5;
          const orbitTime = state.time * 0.5 + angle;

          box.position.set(
            Math.cos(orbitTime) * rad + Math.sin(state.time * 0.4) * 2,
            Math.sin(orbitTime * 0.7) * rad * 0.5,
            Math.sin(orbitTime * 0.6) * rad + state.particleFlow * 0.3
          );

          box.rotation.x += 0.01;
          box.rotation.y += 0.015;
          box.rotation.z += 0.008;
        }
      }

      // Update mesh materials based on energy
      meshArr.forEach((mesh) => {
        if (mesh.material && !Array.isArray(mesh.material)) {
          const mat = mesh.material as MeshStandardMaterial;
          if (mat.emissiveIntensity !== undefined) {
            mat.emissiveIntensity = state.energyPulse * (1 + Math.sin(state.time * 3) * 0.5);
          }
        }
      });
    }

    // ===== MASSIVE PARTICLE SYSTEM UPDATES =====
    particleSystemsRef.current.forEach((ps, psIdx) => {
      ps.rotation.x += 0.001 * (psIdx + 1);
      ps.rotation.y += 0.002 * (psIdx + 1);
      ps.rotation.z += 0.0005 * (psIdx + 1);

      const positions = ps.geometry.attributes.position.array as Float32Array;
      const velocities = ps.geometry.attributes.velocity.array as Float32Array;

      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        const z = positions[i + 2];
        const len = Math.sqrt(x * x + y * y + z * z);

        // Spiral inward
        const inwardForce = (state.particleFlow * 0.5) / (Math.max(len, 2));
        positions[i] += velocities[i] - (x / Math.max(len, 0.1)) * inwardForce;
        positions[i + 1] += velocities[i + 1] - (y / Math.max(len, 0.1)) * inwardForce;
        positions[i + 2] += velocities[i + 2] - (z / Math.max(len, 0.1)) * inwardForce + state.particleFlow * 0.3;

        // Reset particles at center
        if (len < 1.5 || state.particleFlow > 3) {
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.random() * Math.PI;
          const newRad = 15 + Math.random() * 20;

          positions[i] = Math.sin(phi) * Math.cos(theta) * newRad;
          positions[i + 1] = Math.sin(phi) * Math.sin(theta) * newRad;
          positions[i + 2] = Math.cos(phi) * newRad;
        }
      }

      ps.geometry.attributes.position.needsUpdate = true;
    });

    // ===== DYNAMIC LIGHTING =====
    lightsRef.current.forEach((light, idx) => {
      light.intensity = 1.5 + state.energyPulse * 1.5 * Math.sin(state.time * 2.5 + idx);
      light.position.x += Math.sin(state.time * 0.4 + idx) * 0.15;
      light.position.y += Math.cos(state.time * 0.35 + idx) * 0.15;
      light.position.z += Math.sin(state.time * 0.45 + idx) * 0.1;
    });
  });

  return null;
};
