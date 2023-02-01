import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {BiShoppingBag} from 'react-icons/bi';
import { open } from './State/Slice/CheckoutSlice';
import { change } from './State/Slice/LangSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function NavbarComponent() {
    const dispatch=useDispatch();
    const {amount}=useSelector((state=>state.cart));
    const {lang}=useSelector((state)=>state.lang);
    
  return (
    <Navbar className='bg-dark navbar position-sticky'>
        <div className="container d-flex">
            <Navbar.Brand className='text-light'>
                <Link to='/' className='logo'>
                <h2>
                    <span className='text-warning'>Al</span>Verchi
                </h2>
                </Link>
            </Navbar.Brand>
            <Nav >
                <Nav.Link 
                className='text-light mx-2'
                onClick={()=>dispatch(change())}>
                    {lang ? "AZ" : "EN"}
                </Nav.Link>
                <Nav.Link 
                onClick={()=>dispatch(open())}
                className='text-light position-relative'>
                    <BiShoppingBag size='1.5rem'/>
                    <small className="cart-badge ">
                        {amount}
                    </small>
                </Nav.Link>
            </Nav>
        </div>
    </Navbar>
  )
}
