import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div id='contact' className='row justify-content-center align-items-center p-5'>
        <div className="w-50 p-3 content">
            <h1>Contact us</h1>
            <form className='mt-5 text-start'>
                <div className="mb-4 row justify-content-center">
                <span  className="col-12 col-md-3 ">Name</span>
                <input type="text" className="col-12 col-md-7" id="name" placeholder='Name' required />
                </div>
                <div className="mb-4 row justify-content-center">
                <span  className="col-12 col-md-3 ">Email address</span>
                <input type="email" className="col-12 col-md-7" id="email" placeholder='Email' required />
                </div>
                <div className="mb-4 row justify-content-center">
                <span  className="col-12 col-md-3 form-label">Message</span>
                <textarea className="col-12 col-md-7" id="message" rows="2" placeholder='Message' required></textarea>
                </div>
                <button type="submit" className="btn btn-warning ms-5">Send</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
