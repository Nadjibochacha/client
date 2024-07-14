import React from 'react'
import image from '../images/hero2.png'
import './hero.css'

const Hero = () => {
  return (
    <div id='hero'>
      <div className="inter">
        <div className="row justify-content-center align-items-center p-2">
            <div className="col-12 col-md-4">
                <h1>appel watch</h1>
                <p>30% off at your first order</p>
                <button type="submit" className='btn btn-warning w-25'>Shop Now</button>
            </div>
            <div className="col-12 col-md-6">
                <img src={image} alt="apple watch" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
