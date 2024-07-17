import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Onboarding from './components/Onboarding/Onboarding'
import Login from './components/Auth/Login'
import LoginSuccess from './components/Auth/LoginSuccess'
import Register from './components/Auth/Register'
import Tracking from './components/TrackingScreen/Tracking'
import { AnimatePresence } from "framer-motion"

function LocationProvider({ children }) {
  return <AnimatePresence>{children}</AnimatePresence>
}

function RoutesWithAnimation() {
  const location = useLocation()

  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<Onboarding />} />
      <Route path="/login" element={<Login />} />
      <Route path="/loginsuccess" element={<LoginSuccess />} />
      <Route path="/register" element={<Register />} />
      <Route path="/tracking" element={<Tracking />} />
    </Routes>
  )
}



function App() {
  return (
    <div className=' overflow-x-hidden relative w-screen h-screen font-Inter'>
      <Router>
        <LocationProvider>
          <RoutesWithAnimation />
        </LocationProvider>
      </Router>
    </div>
  )
}

export default App
