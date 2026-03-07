import React from 'react'
import './Home.css'
import weatherhome_png from './assets/weatherhome.png'

const Home = () => {
  return (
    <div className='home'>
      <h1>Weather</h1>
      <p>Find the latest weather updates for your city.</p>
      <button className='weather-button'>Get Started</button>
      <div className="weatherhome-img">
        <img src={weatherhome_png} alt="" />
      </div>
    </div>
  )
}

export default Home


