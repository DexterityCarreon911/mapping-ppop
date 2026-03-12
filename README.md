# IT World Explorer - US City Culture Map

An interactive map-based website for exploring the culture, food, festivals, and technology influence of major cities in the United States. Built with React, TypeScript, Vite, and Leaflet.js.

## Features

- **Futuristic Dark-Themed Landing Page**: Animated entry screen with glowing effects, particles, and a prominent "ENTER IT WORLD" button
- **Loading Animation**: Cinematic 2-3 second portal/tunnel animation when entering the main experience
- **Interactive Map**: Dark-themed, zoomable and pannable United States map using Leaflet.js
- **City Markers**: 10 major US cities with clickable markers featuring pulsing animations
- **City Information Popups**: Click any city marker to view:
  - Culture and history
  - Famous local food
  - Festivals and events
  - Technology and IT industry influence
- **Smooth Animations**: Professional, futuristic UI with hover effects and smooth transitions
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Leaflet.js** - Interactive map library
- **CSS3** - Styling with animations and gradients
- **No Backend** - All data stored locally in TypeScript

## Explored Cities

1. New York - Diverse culture and fintech hub
2. Los Angeles - Entertainment industry
3. Chicago - Architecture and jazz heritage
4. Houston - Multicultural diversity
5. Miami - Latin American culture
6. Seattle - Tech culture and nature
7. San Francisco - Innovation and venture capital
8. Washington DC - History and government tech
9. Boston - Biotech cluster
10. Las Vegas - Entertainment capital

## Project Structure

```
src/
├── components/
│   ├── LandingPage.tsx       # Futuristic entry screen
│   ├── LandingPage.css       # Landing page styling
│   ├── UniverseLoader.tsx    # Loading animation component
│   ├── UniverseLoader.css    # Loading animation styling
│   ├── MapPage.tsx           # Main map interface
│   ├── MapPage.css           # Map styling
│   ├── CityPopup.tsx         # City information popup
│   └── CityPopup.css         # Popup styling
├── data/
│   └── cities.ts             # City data and information
├── App.tsx                   # Main app component with routing logic
├── App.css                   # Global app styling
├── index.css                 # Root styles
└── main.tsx                  # Application entry point
```

## Installation & Setup

### Prerequisites
- Node.js 16+ and npm

### Steps

1. **Navigate to the project directory:**
   ```bash
   cd mappingss
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The website will open at `http://localhost:5175/`

## Available Scripts

- **`npm run dev`** - Start development server with Vite
- **`npm run build`** - Build for production (output in `dist/` folder)
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint and TypeScript type checking

## How to Use

1. **Landing Page**: Click the "ENTER IT WORLD" button to begin
2. **Loading Animation**: Watch the cinematic portal animation (2-3 seconds)
3. **Map Interaction**:
   - Use scroll to zoom in/out on the map
   - Click and drag to pan around
   - Hover over city markers to see city names
   - Click any marker to view detailed city information
4. **City Popup**: Read culture, food, festivals, and tech information. Click the ✕ button or outside the popup to close it

## Design Highlights

### Dark Futuristic Theme
- Deep blue and black background with neon green (#00ff88) accents
- Glowing effects and particle animations
- Monospace font for technical aesthetic
- Smooth, cinematic animations

### Interactive Elements
- Animated particles and glowing lines on landing page
- Portal/tunnel effect in loading animation
- Pulsing city markers on the map
- Hover effects on buttons and city markers
- Smooth popup transitions

### User Experience
- Fast, optimized for school project presentations
- Clear visual hierarchy
- Accessible controls and readable text
- No external backend required

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Modify City Data
Edit `src/data/cities.ts` to:
- Add or remove cities
- Update city coordinates (latitude/longitude)
- Change culture, food, festival, or tech information

### Customize Colors
Main colors are defined in CSS files:
- Primary neon green: `#00ff88`
- Primary blue: `#0088ff`
- Background dark: `#0a0e27`
- Accent: `#1a1a3e`

### Adjust Animations
All animation timings are configurable in CSS:
- Landing page animations: `src/components/LandingPage.css`
- Loading animation: `src/components/UniverseLoader.css` (currently 3 seconds)
- Popup animations: `src/components/CityPopup.css`

## Performance

- **Build Size**: ~350KB minified (107KB gzipped)
- **Load Time**: Fast with Vite's optimized dev server
- **Map Performance**: Leaflet is highly optimized for interactive maps

## School Project Notes

This project is designed to be:
- ✅ Impressive with professional UI/UX
- ✅ Easy to demonstrate and present
- ✅ Well-organized and maintainable
- ✅ Independently functional (no dependencies on external APIs)
- ✅ Quick to set up and run
- ✅ Suitable for portfolio showcasing

## License

Educational project - free to use, modify, and distribute.

## Credits

- **Leaflet.js** - Open source mapping library
- **React & TypeScript** - Application framework
- **Vite** - Build tool
- **CartoDB** - Map tiles provider

---

**Enjoy exploring the cultures of American cities!** 🌍
