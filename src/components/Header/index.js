import { Link } from 'react-router-dom';
import Logo from '../../assest/images/Screenshot 2024-08-26 231756.png';
import Button from '@mui/material/Button';
import CountryDropdown from './CountryDropdown';
import React from "react";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Navigation from './Navigation';
import LoginDropdown from './LoginPage/login'; // Updated import statement


const Header = () => {
    return (
        <div className="headerwrapper">
            <div className="top-strip bg-blue">
                <div className="container1">
                    <p className="pa mb-0 mt-0 text-center ">Due to covid time that product is late delivery to customer</p>
                </div>
            </div>

            <nav className="navbar">
                <div className="logowrapper d-flex align-items-center">
                    <Link to={'/'}>
                        <img src={Logo} alt="Company Logo" />
                    </Link>
                </div>

                <div className="raw">
                    <CountryDropdown />
                </div>

                <div className="headersearch">
                    <input type="text" placeholder="Search for Products, Brands and More" />
                    <Button><IoIosSearch /></Button>
                </div>
                <div className="nav-icons">
                   
                        <LoginDropdown />
                 
                    <span className="cart"> <HiOutlineShoppingCart /> Cart</span>
                    <span className="seller">Become a Seller</span>
                   
                </div>
                <Navigation/>
            </nav>
           
        </div>
    );
}

export default Header;
