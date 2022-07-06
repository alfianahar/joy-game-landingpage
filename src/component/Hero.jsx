import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <>
      <Navbar />
      <img src={process.env.PUBLIC_URL + 'img/image 55.png'} alt="hero" />
    </>
  )
}

export default Hero