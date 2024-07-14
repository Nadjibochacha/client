import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import phone from '../images/phone.png';

const Card = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cartCookie = Cookies.get('cart');
    const totalCookie = Cookies.get('total');

    if (cartCookie) {
      const cartItems = JSON.parse(cartCookie);
      setCart(cartItems);
    }

    if (totalCookie) {
      setTotal(Number(totalCookie));
    }
  }, []);

  return (
    <div id='cart' className='mb-3'>
      {Cookies.get('login') ? (
        cart.length > 0 ? (
          <>
            {cart.map((item, i) => (
              <CartItem key={i} title={item.name} price={item.price} qte={item.qte} src={phone} />
            ))}
            <div className={total >= 0 ? 'text-success' : 'text-danger'}>
              <h3>Total: {total}$</h3>
              <button className='btn btn-warning text-capitalize'>
                <Link to="/Checkout" className='text-decoration-none text-dark'>Checkout</Link>
              </button>
            </div>
          </>
        ) : (
          <div className='mt-5 mb-5'>
            <h1>Your cart is empty</h1>
            <Link to="/Shop">Shop Now</Link>
          </div>
        )
      ) : (
        <div className='mt-5 mb-5'>
          <h1>You don't have authorization to see this page. Please login.</h1>
          <Link to="/Login">Login Now</Link>
        </div>
      )}
    </div>
  );
};

export default Card;
