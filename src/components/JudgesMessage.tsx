import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './JudgesMessage.css';

interface JudgesMessageProps {
  onComplete: () => void;
}

export const JudgesMessage = ({ onComplete }: JudgesMessageProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(true);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const charIndexRef = useRef(0);
  const fullText = 'Welcome, Honored Judges. From sea to shining sea, witness the digital innovation that powers the American Dream. Across mountains, deserts, and coastlines, these cities represent the spirit of progress, diversity, and possibility that defines our nation. Let the journey begin...';

  useEffect(() => {
    // Initialize speech synthesis
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(fullText);
    
    utterance.rate = 0.9; // Slightly slower for clarity
    utterance.pitch = 1;
    utterance.volume = 1;
    
    // Sync text display with speech
    let typewriterInterval: ReturnType<typeof setInterval>;
    let advanceTimer: ReturnType<typeof setTimeout>;
    
    utterance.onstart = () => {
      charIndexRef.current = 0;
      setIsSpeaking(true);
      
      // Calculate approximate chars per millisecond based on speech rate
      const estimatedDuration = (fullText.length / (utterance.rate * 150)) * 1000; // rough estimate
      const charsPerMs = fullText.length / estimatedDuration;
      
      typewriterInterval = setInterval(() => {
        if (charIndexRef.current <= fullText.length) {
          setDisplayedText(fullText.substring(0, charIndexRef.current));
          charIndexRef.current++;
        }
      }, 1 / charsPerMs); // Dynamic interval based on speech
    };
    
    utterance.onend = () => {
      setIsSpeaking(false);
      clearInterval(typewriterInterval);
      setDisplayedText(fullText);
      
      // Auto advance after 2 seconds
      advanceTimer = setTimeout(() => {
        onComplete();
      }, 2000);
    };
    
    utterance.onerror = (event) => {
      console.error('Speech synthesis error:', event);
      clearInterval(typewriterInterval);
      setIsSpeaking(false);
    };
    
    utteranceRef.current = utterance;
    synth.cancel(); // Clear any existing speech
    synth.speak(utterance);
    
    return () => {
      clearInterval(typewriterInterval);
      clearTimeout(advanceTimer);
      synth.cancel();
    };
  }, [fullText, onComplete]);

  return (
    <motion.div
      className="judges-message-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="judges-content">
        <motion.div
          className="message-box"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="message-header">
            <div className="header-glow" />
            <h1 className="judges-title">SYSTEM NOTIFICATION</h1>
          </div>

          <div className="message-text">
            <p className="judges-message">{displayedText}</p>
            <motion.span
              className="message-cursor"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              ▌
            </motion.span>
          </div>

          <div className="message-footer">
            <motion.div
              className="footer-line"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 2, duration: 1 }}
            />
          </div>
        </motion.div>

        <motion.div
          className="system-indicator"
          animate={{ opacity: [0.5, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          ● SYSTEM ONLINE
        </motion.div>
      </div>
    </motion.div>
  );
};
