import React from 'react'

const Hero = () => {
  return (
    <section className='hero-wrapper'>
        <div className=' flexCenter hero-container'>
                <div className='hero-left'> 
                        left section
                </div>
                <div className='flexCenter hero-right'>
                 <div className='image-container'>
                        <img src="./hero-image.png" alt="hero" />
                 </div>
                </div>
        </div>
    </section>
  )
}

export default Hero
