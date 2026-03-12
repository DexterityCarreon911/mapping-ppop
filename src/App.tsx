import { useState } from 'react'
import { LandingPage } from './components/LandingPage'
import { LoadingScreen } from './components/LoadingScreen'
import { MapPage } from './components/MapPage'
import './App.css'

type AppState = 'landing' | 'loading' | 'map'

function App() {
  const [state, setState] = useState<AppState>('landing')

  const handleEnter = () => {
    setState('loading')
  }

  const handleLoadingComplete = () => {
    setState('map')
  }

  return (
    <>
      {state === 'landing' && <LandingPage onEnter={handleEnter} />}
      {state === 'loading' && <LoadingScreen onComplete={handleLoadingComplete} />}
      {state === 'map' && <MapPage />}
    </>
  )
}

export default App
