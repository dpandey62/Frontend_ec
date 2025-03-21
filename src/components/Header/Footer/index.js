import { IoShirtOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { CiBadgeDollar } from "react-icons/ci";
import { RiDiscountPercentLine } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="fcontainer">
                <div className="inforow">
                    <div className="col d-flex align-items-center">
                        <span><IoShirtOutline /></span>
                        <span className="ml-2">Everyday Fresh Product</span>
                        
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><TbTruckDelivery /></span>
                        <span className="ml-2">Free delivery for order over $70</span>
                        
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><RiDiscountPercentLine /> </span>
                        <span className="ml-2">Daily mega Discounts</span>
                        
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><CiBadgeDollar /></span>
                        <span className="ml-2">Best Price on the market</span>
                        
                    </div>
                   
                   
                </div>

                {/* foot data*/}
                <div className="row mt-5 linkswrap">

                    <div className="col2">
                        <h6>Our Company</h6>
                        <ul>
                            <li><a href="ab">About Us</a></li>
                            <li><a href="our">Our Team</a></li>
                            <li><a href="con">Contact Us</a></li>
                            <li><a href="faq">FAQ</a></li>
                            <li><a href="car">Careers</a></li>
                            <li><a href="ter">Terms & Conditions</a></li>
                            <li><a href="pv">Privacy Policy</a></li>


                        </ul>


                    </div>

                    <div className="col2">
                        <h6>Our Company</h6>
                        <ul>
                        <li><a href="ab">About Us</a></li>
                            <li><a href="our">Our Team</a></li>
                            <li><a href="con">Contact Us</a></li>
                            <li><a href="faq">FAQ</a></li>
                            <li><a href="car">Careers</a></li>
                            <li><a href="ter">Terms & Conditions</a></li>
                            <li><a href="pv">Privacy Policy</a></li>


                        </ul>


                    </div>

                    <div className="col2">
                        <h6>Our Company</h6>
                        <ul>
                        <li><a href="ab">About Us</a></li>
                            <li><a href="our">Our Team</a></li>
                            <li><a href="con">Contact Us</a></li>
                            <li><a href="faq">FAQ</a></li>
                            <li><a href="car">Careers</a></li>
                            <li><a href="ter">Terms & Conditions</a></li>
                            <li><a href="pv">Privacy Policy</a></li>


                        </ul>


                    </div>

                    <div className="col2">
                        <h6>Our Company</h6>
                        <ul>
                        <li><a href="ab">About Us</a></li>
                            <li><a href="our">Our Team</a></li>
                            <li><a href="con">Contact Us</a></li>
                            <li><a href="faq">FAQ</a></li>
                            <li><a href="car">Careers</a></li>
                            <li><a href="ter">Terms & Conditions</a></li>
                            <li><a href="pv">Privacy Policy</a></li>

                        </ul>


                    </div>

                 {/*  <div className="col22">
                        <h6>Our Company</h6>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Team</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>


                        </ul>


                    </div>*/}

                    

                    

                </div>

                <div className="copyright mt-3 pt-3pb-3 d-flex">
                    <p className="mb-0">Copyright 2022. All rights reserved.</p>
                    <ul className="list list-inline ml-auto mb-0">
                       

                            <li className="list-inline-item"> 
                               
                                <a href ="fac"> <FaFacebookSquare /></a>
                            </li>

                            <li className="list-inline-item"> 
                               
                                <a href ="twi"> <FaTwitter /></a>
                            </li>

                            <li className="list-inline-item"> 
                               
                                <a href ="ins"> <FaInstagram /></a>
                            </li>
                        
                    </ul>
                    


                </div>

            </div>
        </footer>
    )
};

export default Footer;


