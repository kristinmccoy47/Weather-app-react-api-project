import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Weather from './components/Weather'
import Home from './Home'

const App = () => {
  return (
    <Router basename="/Weather-app-react-api-project">
      <div className='app'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

