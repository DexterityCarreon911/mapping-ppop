import { useEffect, useState } from 'react';
import type { City } from '../data/cities';
import './CityPopup.css';

interface CityPopupProps {
  city: City | null;
  onClose: () => void;
}

interface CityImages {
  culture: string;
  food: string;
  festivals: string;
  tech: string;
}

export const CityPopup = ({ city, onClose }: CityPopupProps) => {
  const [images, setImages] = useState<CityImages>({
    culture: '',
    food: '',
    festivals: '',
    tech: '',
  });

  useEffect(() => {
    if (!city) return;

    const fetchImages = async () => {
      try {
        const queries = [
          { key: 'culture', query: `${city.name} culture landmarks` },
          { key: 'food', query: `${city.name} food cuisine` },
          { key: 'festivals', query: `${city.name} festival celebration` },
          { key: 'tech', query: `${city.name} technology innovation` },
        ];

        const fetchedImages: Partial<CityImages> = {};

        for (const item of queries) {
          try {
            // Try Unsplash API first
            const unsplashKey = 'eK8bvWkWvNLLAJN_Y7iqSdDj40FGzK4kHE8AJ8JKhqU';
            const response = await fetch(
              `https://api.unsplash.com/search/photos?query=${encodeURIComponent(item.query)}&per_page=1&client_id=${unsplashKey}`
            );
            const data = await response.json();
            console.log(`Fetched ${item.key}:`, data);
            
            if (data.results && data.results[0] && data.results[0].urls?.regular) {
              fetchedImages[item.key as keyof CityImages] = data.results[0].urls.regular;
            } else {
              // Fallback: use Picsum Photos placeholder
              const fallbackUrl = `https://picsum.photos/400/250?random=${Math.random()}`;
              fetchedImages[item.key as keyof CityImages] = fallbackUrl;
            }
          } catch (error) {
            console.error(`Failed to fetch ${item.key} image:`, error);
            // Use fallback image on error
            const fallbackUrl = `https://picsum.photos/400/250?random=${Math.random()}`;
            fetchedImages[item.key as keyof CityImages] = fallbackUrl;
          }
        }

        console.log('Final images:', fetchedImages);
        setImages(fetchedImages as CityImages);
      } catch (error) {
        console.error('Failed to fetch images:', error);
      }
    };

    fetchImages();
  }, [city]);

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
            {images.culture && <img src={images.culture} alt="Culture" className="section-image" />}
            <p>{city.culture}</p>
          </div>

          <div className="info-section">
            <h3>Famous Food</h3>
            {images.food && <img src={images.food} alt="Food" className="section-image" />}
            <p>{city.food}</p>
          </div>

          <div className="info-section">
            <h3>Festivals & Events</h3>
            {images.festivals && <img src={images.festivals} alt="Festivals" className="section-image" />}
            <p>{city.festivals}</p>
          </div>

          <div className="info-section">
            <h3>Technology & IT</h3>
            {images.tech && <img src={images.tech} alt="Technology" className="section-image" />}
            <p>{city.tech}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
