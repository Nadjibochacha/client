import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import watch from '../images/hero2.png'
import phone from '../images/phone.png'
import Product from '../components/product'

const Shop = () => {
  return (
    <div id='shop'>
      <div className="row justify-content-around mb-4">
        <h1 className='text-uppercase mt-2'>shop products</h1> 
        <div className="col-4 col-md-3 mt-2">
          <center>
            <div className="catigory">
              <h4 className='text-uppercase w-100'>all catigories</h4>
              <ul>
                <li><a href="#cat1"># catigory 1</a></li>
                <li><a href="#cat2"># catigory 2</a></li>
                <li><a href="#cat3"># catigory 3</a></li>
              </ul>
            </div>
          </center>  
        </div>
        <div className="col-md-8">
          <div id="cat1" className="row">
            <div className="col-sm-6 col-md-4 mt-3"><center><Product title="product 1" src={watch} price="45"/></center></div>
            <div className="col-sm-6 col-md-4 mt-3"><center><Product title="product 2" src={phone} price="25"/></center></div>
            <div className="col-sm-6 col-md-4 mt-3"><center><Product title="product 3" src={watch} price="55"/></center></div>
          </div>
          <div id="cat2" className="row">
            <div className="col-sm-6 col-md-4 mt-3"><center><Product title="product 4" src={watch} price="15"/></center></div>
            <div className="col-sm-6 col-md-4 mt-3"><center><Product title="product 5" src={watch} price="20"/></center></div>
          </div>
          <div id="cat3" className="row">
            <div className="col-sm-6 col-md-4 mt-3"><center><Product title="product 6" src={phone} price="35"/></center></div>
            <div className="col-sm-6 col-md-4 mt-3"><center><Product title="product 7" src={phone} price="40"/></center></div>
            <div className="col-sm-6 col-md-4 mt-3"><center><Product title="product 8" src={watch} price="50"/></center></div>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Shop
