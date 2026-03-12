import { useState } from 'react'
import { LandingPage } from './components/LandingPage'
import { LoadingScreen } from './components/LoadingScreen'
import { JudgesMessage } from './components/JudgesMessage'
import { FingerprintScanner } from './components/FingerprintScanner'
import { MapPage } from './components/MapPage'
import './App.css'

type AppState = 'landing' | 'loading' | 'judges' | 'fingerprint' | 'map'

function App() {
  const [state, setState] = useState<AppState>('landing')

  const handleEnter = () => {
    setState('loading')
  }

  const handleLoadingComplete = () => {
    setState('judges')
  }

  const handleJudgesMessageComplete = () => {
    setState('fingerprint')
  }

  const handleFingerprintComplete = () => {
    setState('map')
  }

  return (
    <>
      {state === 'landing' && <LandingPage onEnter={handleEnter} />}
      {state === 'loading' && <LoadingScreen onComplete={handleLoadingComplete} />}
      {state === 'judges' && <JudgesMessage onComplete={handleJudgesMessageComplete} />}
      {state === 'fingerprint' && <FingerprintScanner onComplete={handleFingerprintComplete} />}
      {state === 'map' && <MapPage />}
    </>
  )
}

export default App
