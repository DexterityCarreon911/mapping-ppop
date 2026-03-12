import { useEffect } from 'react';
import './UniverseLoader.css';

interface UniverseLoaderProps {
  onComplete: () => void;
}

export const UniverseLoader = ({ onComplete }: UniverseLoaderProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="universe-loader">
      {/* Portal/Tunnel Effect */}
      <div className="portal">
        <div className="portal-ring portal-ring-1"></div>
        <div className="portal-ring portal-ring-2"></div>
        <div className="portal-ring portal-ring-3"></div>
        <div className="portal-center"></div>
      </div>

      {/* Stars/Particles traveling through tunnel */}
      <div className="tunnel-container">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`tunnel-star tunnel-star-${i}`}></div>
        ))}
      </div>

      {/* Loading Text */}
      <div className="loading-text">
        <span className="loading-line">
          <span className="loading-word">Initializing IT World...</span>
          <span className="cursor"></span>
        </span>
      </div>

      {/* Progress bar */}
      <div className="progress-container">
        <div className="progress-bar"></div>
      </div>

      {/* Status indicators */}
      <div className="status-indicators">
        <div className="status-item">
          <div className="status-dot"></div>
          <span>Accessing Database</span>
        </div>
        <div className="status-item">
          <div className="status-dot"></div>
          <span>Loading Dimensions</span>
        </div>
        <div className="status-item">
          <div className="status-dot"></div>
          <span>Calibrating Navigation</span>
        </div>
      </div>
    </div>
  );
};
