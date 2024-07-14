import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';
import useCartCount from './countCart';
import cookie from 'js-cookie'

const Header = () => {
  const cartCount = useCartCount();
  const handelLogout = () =>{
    cookie.remove('login')
    window.location.href = '/';
  }
  return (
    <Navbar expand="lg" id="nav" className="navbar-dark">
      <Container>
        <Navbar.Brand href="/">logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 justify-content-center">
            <NavLink className="nav-link me-4" to="/">Home</NavLink>
            <NavLink className="nav-link me-4" to="/Shop">Shop</NavLink>
            <NavLink className="nav-link me-4" to="/Card">
              Cart {cartCount > 0 ? (
                <span className="bg-success text-white ps-2 pe-2">{cartCount}</span>
              ) : (
                <span className="bg-danger text-white ps-2 pe-2">{cartCount}</span>
              )}
            </NavLink>
            <NavLink className="nav-link me-4" to="/Contact">Contact</NavLink>
          </Nav>
          {
            cookie.get('login')? (
              <button className="btn btn-warning" onClick={handelLogout}>Logout</button>
            ):(
              <button type="submit" className="btn btn-warning" ><Link to="/Login">Login</Link></button>
            )
          }
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
