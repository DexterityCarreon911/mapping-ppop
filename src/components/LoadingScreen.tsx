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

  // Initialize Web Audio API for ambient space sound and warning sounds
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

        // Create warning beeps
        const createWarningBeep = (startTime: number, frequency: number) => {
          const warningOsc = audioContext.createOscillator();
          const warningGain = audioContext.createGain();
          const warningFilter = audioContext.createBiquadFilter();

          warningOsc.type = 'square';
          warningOsc.frequency.setValueAtTime(frequency, startTime);

          warningFilter.type = 'highpass';
          warningFilter.frequency.value = 800;

          warningGain.gain.setValueAtTime(0, startTime);
          warningGain.gain.linearRampToValueAtTime(0.15, startTime + 0.01);
          warningGain.gain.linearRampToValueAtTime(0.15, startTime + 0.1);
          warningGain.gain.linearRampToValueAtTime(0, startTime + 0.15);

          warningOsc.connect(warningFilter);
          warningFilter.connect(warningGain);
          warningGain.connect(audioContext.destination);

          warningOsc.start(startTime);
          warningOsc.stop(startTime + 0.15);
        };

        // Schedule warning beeps at intervals
        createWarningBeep(now + 1.0, 1000);
        createWarningBeep(now + 1.5, 1200);
        createWarningBeep(now + 2.2, 800);
        createWarningBeep(now + 2.7, 1100);
        createWarningBeep(now + 3.3, 900);

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
      </div>
    </AnimatePresence>
  );
};
