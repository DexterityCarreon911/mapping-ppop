import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FingerprintScanner.css';

interface FingerprintScannerProps {
  onComplete: () => void;
}

export const FingerprintScanner = ({ onComplete }: FingerprintScannerProps) => {
  const [progress, setProgress] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const progressRef = useRef(0);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleStartScanning = () => {
    if (isScanning || progress >= 100) return;
    
    setIsScanning(true);
    progressRef.current = progress;
    
    intervalRef.current = setInterval(() => {
      progressRef.current += 2;
      setProgress(progressRef.current);
      
      if (progressRef.current >= 100) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        setProgress(100);
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    }, 30);
  };

  const handleStopScanning = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsScanning(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fingerprint-scanner-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <div className="scanner-content">
          <motion.div
            className="scanner-header"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="scanner-title">AUTHENTICATION REQUIRED</h1>
            <p className="scanner-subtitle">Press and hold fingerprint to verify identity</p>
          </motion.div>

          <motion.div
            className="fingerprint-container"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="fingerprint-wrapper">
              <motion.div
                className={`fingerprint-button ${isScanning ? 'scanning' : ''} ${progress >= 100 ? 'verified' : ''}`}
                onMouseDown={handleStartScanning}
                onMouseUp={handleStopScanning}
                onMouseLeave={handleStopScanning}
                onTouchStart={handleStartScanning}
                onTouchEnd={handleStopScanning}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="fingerprint-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
                    <path d="M12 6c-3.31 0-6 2.69-6 6 0 1.66.67 3.16 1.76 4.24l1.41-1.41C8.45 14.11 8 13.11 8 12c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.11-.45 2.11-1.17 2.83l1.41 1.41C17.33 15.16 18 13.66 18 12c0-3.31-2.69-6-6-6z" fill="currentColor"/>
                    <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="currentColor"/>
                  </svg>
                </div>
                
                <div className="scanning-ring">
                  <motion.div
                    className="ring"
                    animate={isScanning ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 2, repeat: isScanning ? Infinity : 0, ease: "linear" }}
                  />
                </div>
                
                <div className="progress-ring">
                  <svg className="progress-svg" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="2"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 45}`}
                      strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                      animate={{ strokeDashoffset: 2 * Math.PI * 45 * (1 - progress / 100) }}
                      transition={{ duration: 0.3 }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00ff88" />
                        <stop offset="100%" stopColor="#00bbff" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </motion.div>
              
              <div className="progress-text">
                <span className="progress-percentage">{Math.round(progress)}%</span>
                {progress >= 100 && <span className="verified-text">VERIFIED</span>}
                {isScanning && progress < 100 && <span className="scanning-text">SCANNING...</span>}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="scanner-footer"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="status-indicators">
              <div className={`indicator ${progress > 0 ? 'active' : ''}`}>
                <div className="indicator-dot"></div>
                <span>FINGERPRINT DETECTED</span>
              </div>
              <div className={`indicator ${progress >= 50 ? 'active' : ''}`}>
                <div className="indicator-dot"></div>
                <span>ANALYZING PATTERNS</span>
              </div>
              <div className={`indicator ${progress >= 100 ? 'active' : ''}`}>
                <div className="indicator-dot"></div>
                <span>IDENTITY CONFIRMED</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
