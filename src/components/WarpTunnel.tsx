import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface WarpTunnelSceneProps {
  onComplete: () => void;
}

// Tunnel geometry and animation
export const TunnelGeometry = ({ onComplete }: WarpTunnelSceneProps) => {
  const starsRef = useRef<THREE.Points>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const startTimeRef = useRef<number>(Date.now());
  const isCompleteRef = useRef(false);

  useEffect(() => {
    // Create star field
    const starsGeometry = new THREE.BufferGeometry();
    const starCount = 1000;
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 2] = Math.random() * 200 - 100;
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Store initial positions for tunnel effect
    (starsGeometry as any).userData.initialPositions = new Float32Array(positions);

    // Create particle system for flying particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 500;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 50;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      particlePositions[i * 3 + 2] = Math.random() * 50;

      particleVelocities[i * 3] = (Math.random() - 0.5) * 0.5;
      particleVelocities[i * 3 + 1] = (Math.random() - 0.5) * 0.5;
      particleVelocities[i * 3 + 2] = -Math.random() * 1.5;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    (particlesGeometry as any).userData.velocities = particleVelocities;

    if (starsRef.current) {
      starsRef.current.geometry = starsGeometry;
    }

    if (particlesRef.current) {
      particlesRef.current.geometry = particlesGeometry;
    }

    return () => {
      starsGeometry.dispose();
      particlesGeometry.dispose();
    };
  }, []);

  useFrame(() => {
    if (isCompleteRef.current) return;

    const elapsed = (Date.now() - startTimeRef.current) / 1000;

    if (elapsed > 4) {
      if (!isCompleteRef.current) {
        isCompleteRef.current = true;
        onComplete();
      }
      return;
    }

    // Update star positions for tunnel effect
    if (starsRef.current && starsRef.current.geometry) {
      const positions = starsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 2] -= 0.5;
        if (positions[i + 2] < -100) {
          positions[i + 2] = 100;
        }
      }
      starsRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // Update particle positions
    if (particlesRef.current && particlesRef.current.geometry) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      const velocities = (particlesRef.current.geometry as any).userData.velocities as Float32Array;

      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += velocities[i];
        positions[i + 1] += velocities[i + 1];
        positions[i + 2] += velocities[i + 2];

        // Reset particles that go too far back
        if (positions[i + 2] < -50) {
          positions[i] = (Math.random() - 0.5) * 50;
          positions[i + 1] = (Math.random() - 0.5) * 50;
          positions[i + 2] = 50;
          velocities[i] = (Math.random() - 0.5) * 0.5;
          velocities[i + 1] = (Math.random() - 0.5) * 0.5;
          velocities[i + 2] = -Math.random() * 1.5;
        }
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <>
      <color attach="background" args={['#00001A']} />

      {/* Stars */}
      <points ref={starsRef}>
        <bufferGeometry />
        <pointsMaterial
          size={0.5}
          color="#FFFFFF"
          sizeAttenuation
          transparent
          opacity={0.8}
        />
      </points>

      {/* Flying particles */}
      <points ref={particlesRef}>
        <bufferGeometry />
        <pointsMaterial
          size={0.3}
          color="#00FFE5"
          sizeAttenuation
          transparent
          opacity={0.6}
        />
      </points>

      {/* Ambient light for the space */}
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 20]} intensity={1} color="#7B2FFF" />
    </>
  );
};
