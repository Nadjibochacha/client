import React from 'react'
import Hero from '../components/hero'
import './home.css'
import watch from '../images/hero2.png'
import Product from '../components/product'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div id='home'>
      <Hero/>
      <div className="division p-2 bg-body-secondary text-capitalize text-start mt-4 container rounded-3">
        new products
      </div>
      <div className="row justify-content-center align-items-center ms-2 mb-3 mt-4">
        <div className="mt-2 col-12 col-sm-6 col-md-4 col-lg-3"><center> <Product title="product" src={watch} price="30" /></center></div>
        <div className="mt-2 col-12 col-sm-6 col-md-4 col-lg-3"><center> <Product title="product" src={watch} price="30" /></center></div>
        <div className="mt-2 col-12 col-sm-6 col-md-4 col-lg-3"><center> <Product title="product" src={watch} price="30" /></center></div>
        <div className="mt-2 col-12 col-sm-6 col-md-4 col-lg-3"><center> <Product title="product" src={watch} price="30" /></center></div>
        <div className="mt-2 col-12 col-sm-6 col-md-4 col-lg-3"><center> <Product title="product" src={watch} price="30" /></center></div>
        <div className="col-12 mt-3">
          <div className='btn btn-warning text-capitalize w-25 '><Link to="/Shop" className='text-decoration-none text-black'>show more</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Home
