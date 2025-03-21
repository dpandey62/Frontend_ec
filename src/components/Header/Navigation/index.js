import Button from '@mui/material/Button';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAngleDown } from "react-icons/fa";
import React, { useState } from "react";
import "./Navigation.css";
import { FaAngleRight } from "react-icons/fa";


const Navigation = () => {
  
  const [isopenSidebarVal, setisopenSidebarVal] = useState(false);
  return (
    <nav className="navigation">
      <div className="container">
        <div className="nav-header">
          <Button
            className="menu-toggle"
            onClick={() => setisopenSidebarVal(!isopenSidebarVal)}
          >
            <GiHamburgerMenu className="menu-icon" /> ALL CATEGORIES
            <FaAngleDown className="dropdown-icon" />
          </Button>
        </div>

        <div className={`sidebar ${isopenSidebarVal ? "open" : ""}`}>
        onMouseLeave={() => setisopenSidebarVal(false)}
          <ul className="menu-list">
            <li className="menu-item">
              <a href="/MEN"><Button>Men <FaAngleRight className='ml-auto'/></Button></a>
              <ul className="submenu">
                <li><a href="/MEN"><Button>Men's Clothing</Button></a></li>
                <li><a href="/Women"><Button>Men's Watches</Button></a></li>
                <li><a href="/Kids"><Button>Men's Pants</Button></a></li>
                <li><a href="/Footwear"><Button>Men's Sportswear</Button></a></li>
                <li><a href="/Accessories"><Button>Men's Accessories</Button></a></li>
                <li><a href="/Beauty"><Button>Men's Rainwear</Button></a></li>
              </ul>
            </li>

            <li>
              <a href="/Women"><Button>Women <FaAngleRight className='ml-auto'/></Button></a>
              <ul className="submenu">
                <li><a href="/MEN"><Button>Men's Clothing</Button></a></li>
                <li><a href="/Women"><Button>Men's Watches</Button></a></li>
                <li><a href="/Kids"><Button>Men's Pants</Button></a></li>
                <li><a href="/Footwear"><Button>Men's Sportswear</Button></a></li>
                <li><a href="/Accessories"><Button>Men's Accessories</Button></a></li>
                <li><a href="/Beauty"><Button>Men's Rainwear</Button></a></li>
              </ul>
            </li>

            <li><a href="/Kids"><Button>Kids</Button></a></li>
            <li><a href="/Footwear"><Button>Footwear</Button></a></li>
            <li><a href="/Accessories"><Button>Accessories</Button></a></li>
          </ul>
        </div>

        <div className="nav-links">
          <ul className="nav-list">
            {["Home", "Fashion", "Electronic", "Bakery", "Grocery", "Blog", "Contact"].map((item, index) => (
              <li key={index} className="nav-item">
                <a href={`/${item.toLowerCase()}`}><Button>{item}</Button></a>
                {item !== "Home" && item !== "Contact" && (
                  <ul className="submenu">
                    {["Men", "Women", "Kids", "Footwear", "Accessories", "Beauty"].map((subItem, subIndex) => (
                      <li key={subIndex}><a href={`/${subItem.toUpperCase()}`}><Button>{subItem}</Button></a></li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
       
      </div>
      
    </nav>

 
    
  );
};

export default Navigation;
