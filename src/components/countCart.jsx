import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const useCartCount = () => {
  const [cartCount, setCartCount] = useState(() => {
    let cart = Cookies.get('cart');
    return cart ? JSON.parse(cart).length : 0;
  });

  useEffect(() => {
    const updateCartCount = () => {
      let cart = Cookies.get('cart');
      setCartCount(cart ? JSON.parse(cart).length : 0);
    };

    // Listen to changes in the cookies
    const intervalId = setInterval(updateCartCount, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return cartCount;
};

export default useCartCount;
