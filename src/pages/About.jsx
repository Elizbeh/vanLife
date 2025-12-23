import React from 'react'
import AboutImg from '../assets/aboutImg.png'
function About() {
  return (
    <div className='about-container'>
      <img className='about-img' src={AboutImg} alt="Hero image" />
      <div className='about-text'>
        <h1 className='about-title'about-title>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p className='about-mission'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
          (Hitch costs extra 😉)</p>
        <p className='team-mission'>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
      </div>
      <div className='about-banner'>
        <h2 className='banner-title'>Your destination is waiting.
            Your van is ready.</h2>
        <button className='about-btn'>Explore our vans</button>
      </div>
    </div>
  )
}

export default About