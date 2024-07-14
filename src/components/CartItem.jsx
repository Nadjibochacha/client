import React, { useEffect, useState } from 'react';
import cookie from 'js-cookie';
import './CartItem.css';

const CartItem = ({ title, price, src, qte }) => {
    const [count, setCount] = useState(qte);
    const [subTotal, setSubTotal] = useState(price * qte);
    let cart = JSON.parse(cookie.get('cart') || '[]');
    let total = Number(cookie.get('total') || 0);

    useEffect(() => {
        setSubTotal(count * Number(price));
    }, [count]);

    useEffect(() => {
        total = 0;
        cart = cart.map((item) => {
            if (item.name === title) {
                item.qte = count;
                item.subtotal = subTotal;
            }
            total += Number(item.price) * item.qte;
            return item;
        });
        cookie.set('cart', JSON.stringify(cart), { expires: 3 });
        cookie.set('total', total, { expires: 3 });
    }, [count, subTotal]);

    const handelRemove = () => {
        let updatedCart = cart.filter(item => item.name !== title);
        let newTotal = updatedCart.reduce((acc, item) => acc + Number(item.price) * item.qte, 0);
        cookie.set('cart', JSON.stringify(updatedCart), { expires: 3 });
        cookie.set('total', newTotal, { expires: 3 });
        window.location.reload();
    };

    return (
        <div id='item' className='container p-2'>
            <div className="row justify-content-center align-items-center m-1">
                <div className="col-6 col-md-3">
                    <img src={src} className='' alt="product"/>
                </div>
                <div className="col-6 col-md-4">
                    <h5 className='text-uppercase'>{title}</h5>
                    <p>Price: ${price}</p>
                    <button className='btn btn-danger' onClick={handelRemove}>Remove</button>
                </div>
                <div className="col-6 col-md-4">
                    <div className="quantity mb-3">
                        <span className='' onClick={() => setCount(count + 1)}>+</span>
                        <span className='w-50'>{count}</span>
                        <span className='' onClick={() => {
                            if (count > 1) {
                                setCount(count - 1);
                            }
                        }}>-</span>
                    </div>
                    <p>Subtotal: ${subTotal}</p>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
