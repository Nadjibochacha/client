import React from 'react'
import './footer.css'
import { FaLocationDot } from "react-icons/fa6"
import { FaPhone } from "react-icons/fa6"
import {FaMessage} from 'react-icons/fa6'
import { Link } from 'react-router-dom'


const Footer = () => {
    const date = new Date();
  return (
    <div id='footer' className='p-2 bg-black text-white'>
      <div className="row">
        <div className="col-12 col-md-4">
            <h3>about us</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet voluptas dicta corporis. 
                Excepturi dolorum, quis veritatis officiis suscipit iste 
                sequi explicabo cum quisquam repudiandae debitis illo, a aspernatur quas enim?
            </p>
        </div>
        <div className="col-12 col-md-4">
            <h3>catigory</h3>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Shop">Shop </Link></li>
                <li><Link to="/Card">Cart</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </div>
        <div className="col-12 col-md-4">
            <h3>contact us</h3>
            <p><FaLocationDot/> Ali mendjli 4 constantine</p>
            <p><FaPhone/> +213445654321</p>
            <p><FaMessage/> email@gmail.com</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center border-top border-secondary pt-2">
            <p>copyright &copy; {date.getFullYear()} : <a href="https://www.proware.tech">Med dev</a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer
