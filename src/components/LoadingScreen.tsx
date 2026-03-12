import { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion, AnimatePresence } from 'framer-motion';
import { TunnelGeometry } from './WarpTunnel';
import './LoadingScreen.css';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isCompleteRef = useRef(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const [displayedText, setDisplayedText] = useState('');
  const [showPortal, setShowPortal] = useState(false);
  const fullText = 'ENTERING THE PPOP UNIVERSE';

  // Typewriter effect
  useEffect(() => {
    let charIndex = 0;
    const typewriterInterval = setInterval(() => {
      if (charIndex <= fullText.length) {
        setDisplayedText(fullText.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typewriterInterval);
      }
    }, 60); // Adjust speed as needed

    return () => clearInterval(typewriterInterval);
  }, []);

  // Show portal circle after 1.5 seconds
  useEffect(() => {
    const portalTimer = setTimeout(() => {
      setShowPortal(true);
    }, 1500);

    return () => clearTimeout(portalTimer);
  }, []);

  // Initialize Web Audio API for ambient space sound
  useEffect(() => {
    // Auto-transition after ~4 seconds
    const transitionTimer = setTimeout(() => {
      handleWarpComplete();
    }, 4000);

    const initAudio = () => {
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        audioContextRef.current = audioContext;

        // Create ambient space tone
        const now = audioContext.currentTime;
        const duration = 4;

        // Oscillator for deep ambient tone
        const osc1 = audioContext.createOscillator();
        const osc2 = audioContext.createOscillator();
        const gain = audioContext.createGain();
        const lowPassFilter = audioContext.createBiquadFilter();

        osc1.type = 'sine';
        osc2.type = 'triangle';

        osc1.frequency.setValueAtTime(50, now);
        osc2.frequency.setValueAtTime(75, now);

        lowPassFilter.frequency.value = 200;
        lowPassFilter.type = 'lowpass';

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.05, now + 0.5);
        gain.gain.linearRampToValueAtTime(0.03, now + duration - 0.5);
        gain.gain.linearRampToValueAtTime(0, now + duration);

        osc1.connect(lowPassFilter);
        osc2.connect(lowPassFilter);
        lowPassFilter.connect(gain);
        gain.connect(audioContext.destination);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + duration);
        osc2.stop(now + duration);
      } catch (e) {
        console.log('Web Audio API not supported or blocked:', e);
      }
    };

    initAudio();

    return () => {
      clearTimeout(transitionTimer);
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const handleWarpComplete = () => {
    if (!isCompleteRef.current) {
      isCompleteRef.current = true;
      setTimeout(() => {
        onComplete();
      }, 300);
    }
  };

  return (
    <AnimatePresence>
      <div ref={containerRef} className="loading-screen-container">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 75 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 100,
          }}
        >
          <TunnelGeometry onComplete={handleWarpComplete} />
        </Canvas>

        {/* Typewriter text overlay */}
        <motion.div
          className="typewriter-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="typewriter-text">{displayedText}</p>
          <motion.span
            className="cursor"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            |
          </motion.span>
        </motion.div>

        {/* Expanding portal circle */}
        {showPortal && (
          <>
            {/* Warp expansion waves */}
            <motion.div className="portal-warp-1" />
            <motion.div className="portal-warp-2" />
            <motion.div className="portal-warp-3" />

            {/* Main portal circle */}
            <motion.div
              className="portal-circle"
              initial={{ scale: 0.1, opacity: 0.8 }}
              animate={{ scale: 3 }}
              transition={{ duration: 2.5, ease: 'easeInOut' }}
            />
          </>
        )}
      </div>
    </AnimatePresence>
  );
};
