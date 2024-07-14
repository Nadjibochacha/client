import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './hero.css';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';

const Product = ({ title, src, price }) => {
  const handleDetail = () => {
    Swal.fire({
      title: 'Details',
      text: "Here are more details about the product.",
      icon: 'info',
      showCancelButton: true,
    });
  };

  const addToCart = () => {
    let cart = Cookies.get('cart');
    cart = cart ? JSON.parse(cart) : [];
  
    // Check if the product already exists in the cart
    if (cart.find(item => item.name === title)) {
      Swal.fire({
        title: 'Warning!',
        text: 'Product already exists.',
        icon: 'info',
        timer: 1900,
        showConfirmButton: false
      });
      return; // Return early if the product already exists
    }
  
    // Add the new product to the cart
    cart.push({ name: title, price: price, qte: 1, subtotal : price * 1});
  
    // Update the cart in the cookies
    Cookies.set('cart', JSON.stringify(cart), { expires: 3 });
  
    // Update the total
    let total = Cookies.get('total');
    total = total ? Number(total) : 0;
    total += Number(price);
    Cookies.set('total', total, { expires: 3 });
  
    Swal.fire({
      title: 'Success!',
      text: 'Product added to cart.',
      icon: 'success',
      timer: 1500,
      showConfirmButton: false
    });
  };
  

  return (
    <Card id='card'>
      <Card.Img variant="top" src={src} style={{ height: "13rem" }} />
      <Card.Body className='border-top'>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className='text-danger'>${price}</Card.Subtitle>
        <Card.Text><a onClick={handleDetail} className='text-secondary' style={{ cursor: 'pointer' }}>details</a></Card.Text>
        <Button variant="warning" onClick={addToCart}>Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
