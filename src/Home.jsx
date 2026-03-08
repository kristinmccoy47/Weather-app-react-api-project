import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import weatherhome_png from './assets/weatherhome.png'

const Home = () => {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    navigate('/weather')
  }

  return (
    <div className='home'>
        <div className="home-text">
      <h1 className='home-title'>Weather</h1>
      <p className='home-description'> Find the latest weather updates for your city.</p>
      <button className='weather-button' onClick={handleGetStarted}>Get Started</button>
      </div>
      <div className="weatherhome-img">
        <img src={weatherhome_png} alt="" />
      </div>
    </div>
  )
}

export default Home



