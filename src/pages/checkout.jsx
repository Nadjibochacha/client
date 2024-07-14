import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import './checkout.css'
import ReactToPrint from 'react-to-print';

const Checkout = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    phone: '',
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  useEffect(() => {
    const cartItems = JSON.parse(Cookies.get('cart') || '[]');
    const totalAmount = Cookies.get('total') ? Number(Cookies.get('total')) : 0;
    setCart(cartItems);
    setTotal(totalAmount);
  }, []);

  const handleInputChange = (e, type) => {
    const { name, value } = e.target;
    if (type === 'shipping') {
      setShippingInfo({ ...shippingInfo, [name]: value });
    } else {
      setPaymentInfo({ ...paymentInfo, [name]: value });
    }
  };

  const handlePlaceOrder = () => {
    // Here you would typically send the data to the server
    Swal.fire({
      title: 'Order Placed!',
      text: 'Your order has been successfully placed.',
      icon: 'success',
      confirmButtonText: 'OK',
    }).then(() => {
      Cookies.remove('cart');
      Cookies.remove('total');
      navigate('/Shop');
    });
  };


  return (
    <div id='check' className='p-5'>
      <div className="container bg-white p-2">
        <div className="title">
          <h1>complete your order</h1>
          <p>you are a few steps away from completing your order ...</p>
        </div>
        <div className="content row mt-2 p-2 justify-content-center">
          <div className="col-md-6">
            <h3>billing details</h3>
            <form >
              <div className="form-group mb-3">
                <label htmlFor="name">Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="name" required placeholder="Enter your name" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="company">Company name </label>
                <input type="text" className="form-control" id="company" placeholder="Enter your Company name" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="region">Country / Region <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="region" required placeholder="Enter your Country / Region" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="address">Address <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="address" required placeholder="Enter your address" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="zip">Postal Code <span className="text-danger">*</span></label>
                <input type="number" className="form-control" id="zip" required placeholder="Postal Code" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="city">City <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="city" required placeholder="Enter your city" />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="phone">Phone Number <span className="text-danger">*</span></label>
                <input type="number" className="form-control" id="phone" required placeholder="Enter your address" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email">Email <span className="text-danger">*</span></label>
                <input type="email" className="form-control" id="email" required placeholder="Enter your email" />
              </div>
              
              
              <div className="form-group mb-3">
                <h3>Payment Information</h3>
                <div className="form-group mb-3">
                  <label htmlFor="cardnum">Card Number <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="cardnum" required  placeholder="Card Number" />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="date">Expiry Date <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="date" required placeholder="Expiry Date" />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="cvv">CVV <span className="text-danger">*</span></label>
                  <input type="number"  className="form-control" id="cvv" required placeholder="CVV" />
                </div>
              </div>

            </form>
          </div>
          <div className="col-md-4">
            <div id='bill' className="bill mb-4 ms-2">
              <h3>your order</h3>
              <table className='rounded-2'>
                <thead>
                  <tr>
                    <th>product</th>
                    <th>quantity</th>
                    <th>subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.qte}</td>
                      <td>{item.subtotal}</td>
                    </tr>
                  ))}

                </tbody>
                <tfoot>
                  <tr>
                    <td>total : </td>
                    <td colSpan={2}>{total}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-5">
                <button type="submit" onClick={handlePlaceOrder} className="btn btn-warning text-capitalize">
                  place order
                </button>
              </div>
              <div className="col-md-5">
                <ReactToPrint
                  trigger={() => <button className="btn btn-warning text-capitalize ">Print Order</button>}
                  content={() => document.getElementById('bill')}
                  documentTitle='Bill'
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
