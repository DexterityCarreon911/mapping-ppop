import { useState } from 'react';
import './LandingPage.css';

interface LandingPageProps {
  onEnter: () => void;
}

export const LandingPage = ({ onEnter }: LandingPageProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="landing-container">
      {/* Animated background elements */}
      <div className="stars"></div>
      <div className="star star-1"></div>
      <div className="star star-2"></div>
      <div className="star star-3"></div>
      <div className="star star-4"></div>
      <div className="star star-5"></div>
      
      {/* Grid background */}
      <div className="grid-bg"></div>
      
      {/* Glowing lines */}
      <svg className="glowing-lines" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ff88" />
            <stop offset="100%" stopColor="#0088ff" />
          </linearGradient>
        </defs>
        <circle cx="250" cy="250" r="200" fill="none" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.3" />
        <circle cx="250" cy="250" r="150" fill="none" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.2" />
        <circle cx="250" cy="250" r="100" fill="none" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.1" />
      </svg>

      {/* Content */}
      <div className="landing-content">
        <h1 className="landing-title">IT WORLD</h1>
        <p className="landing-subtitle">Explore the Culture of American Cities</p>
        
        <button
          className={`enter-button ${isHovered ? 'hovered' : ''}`}
          onClick={onEnter}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          ENTER IT WORLD
        </button>

        <p className="landing-hint">Click above to begin your journey</p>
      </div>

      {/* Floating particles */}
      <div className="particle particle-1"></div>
      <div className="particle particle-2"></div>
      <div className="particle particle-3"></div>
      <div className="particle particle-4"></div>
      <div className="particle particle-5"></div>
    </div>
  );
};
