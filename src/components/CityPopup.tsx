import type { City } from '../data/cities';
import './CityPopup.css';

interface CityPopupProps {
  city: City | null;
  onClose: () => void;
}

export const CityPopup = ({ city, onClose }: CityPopupProps) => {
  if (!city) return null;

  return (
    <div className="city-popup-overlay" onClick={onClose}>
      <div className="city-popup" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="popup-header">
          <h2>{city.name}</h2>
        </div>

        <div className="popup-content">
          <div className="info-section">
            <h3>Culture</h3>
            <p>{city.culture}</p>
          </div>

          <div className="info-section">
            <h3>Famous Food</h3>
            <p>{city.food}</p>
          </div>

          <div className="info-section">
            <h3>Festivals & Events</h3>
            <p>{city.festivals}</p>
          </div>

          <div className="info-section">
            <h3>Technology & IT</h3>
            <p>{city.tech}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
