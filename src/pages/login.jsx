import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './login.css'
import cookie from 'js-cookie'

const Login = () => {
    const [email, setEamil] = useState('')
    const [password, setPassword] = useState('')
    const handelSubmit = (e) =>{
        if (email !== "" && password !=="") {
            e.preventDefault();
            cookie.set('login', 'loggedin', {expires: 1 })
            window.location.href = '/Card'
        }
    }
  return (
    <div id='login' className='row  justify-content-center align-items-center'>
        <div className="col-11 col-md-4 content mb-3 p-0 bg-light mt-4">
            <div className="head p-3">
                <h1 className='text-uppercase'>Login</h1>
                <p>Welcome back! Sign in to your account.</p>
            </div>
            <Tabs defaultActiveKey="login" id="uncontrolled-tab-example" className="mb-3 p-2">
                <Tab eventKey="login" title="Login">
                    <Form>
                        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3 ms-1 me-1">
                            <Form.Control type="email" onChange={e=>setEamil(e.target.value)} placeholder="name@example.com" required />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password" className=' ms-1 me-1'>
                            <Form.Control type="password" onChange={e=>setPassword(e.target.value)} placeholder="Password" required />
                        </FloatingLabel>
                        <button type="submit" className='btn-orange mt-5 w-100' onClick={handelSubmit}>Login</button>
                    </Form>
                </Tab>
                <Tab eventKey="singup" title="Sing Up">
                    <Form>
                        <FloatingLabel controlId="floatingInput0" label="Full Name" className="mb-3 ms-1 me-1">
                            <Form.Control type="text" placeholder="name" required />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput1" label="Home address" className="mb-3 ms-1 me-1">
                            <Form.Control type="text" placeholder="address" required />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput2" label="Email address" className="mb-3 ms-1 me-1">
                            <Form.Control type="email" placeholder="name@example.com" required />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput3" label="Phone Number" className="mb-3 ms-1 me-1">
                            <Form.Control type="number" placeholder='Phone Number' required />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword1" label="Password" className="mb-3 ms-1 me-1">
                            <Form.Control type="password" placeholder="Password" required />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword2" label="Confirmed Password" className="mb-3 ms-1 me-1">
                            <Form.Control type="password" placeholder="Password" required />
                        </FloatingLabel>
                        <button type="submit" className='btn-orange mt-5 w-100' onClick={handelSubmit}>Sign Up</button>
                    </Form>
                </Tab>
            </Tabs>
        </div>
    </div>
  )
}

export default Login
