import "./cart.css";
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";
import phone1 from "../../../assest/images/download.jpeg";



const Cart = () => {
    return (
        <section className="section_cart">
            <div className="cart_container">
                {/* Cart Header */}
                <div className="cart_header">
                    <h2 className="hd mb-0">Your Cart</h2>
                    <p>There are <span>3</span> products in your cart</p>
                </div>

                {/* Cart Table */}
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img src={phone1} alt="Product" className="cart-img" />
                                    <Link className="linname">Motorola Edge 50 Pro</Link>
                                    <Rating className="rat" name="read-only" value={4} readOnly size="small" precision={0.5} />
                                </td>
                                <td>₹20,999</td>
                                <td>
                                    <input type="number" min="1" className="qty-input" defaultValue="1" />
                                </td>
                                <td>₹20,999</td>
                                <td><button className="btn btn-danger">Remove</button></td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={phone1} alt="Product" className="cart-img" />
                                    <Link className="linname">Motorola Edge 50 Pro</Link>
                                    <Rating className="rat" name="read-only" value={4} readOnly size="small" precision={0.5} />
                                </td>
                                <td>₹20,999</td>
                                <td>
                                    <input type="number" min="1" className="qty-input" defaultValue="1" />
                                </td>
                                <td>₹20,999</td>
                                <td><button className="btn btn-danger">Remove</button></td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={phone1} alt="Product" className="cart-img" />
                                    <Link className="linname">Motorola Edge 50 Pro</Link>
                                    <Rating className="rat" name="read-only" value={4} readOnly size="small" precision={0.5} />
                                </td>
                                <td>₹20,999</td>
                                <td>
                                    <input type="number" min="1" className="qty-input" defaultValue="1" />
                                </td>
                                <td>₹20,999</td>
                                <td><button className="btn btn-danger">Remove</button></td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={phone1} alt="Product" className="cart-img" />
                                    <Link className="linname">Motorola Edge 50 Pro</Link>
                                    <Rating className="rat" name="read-only" value={4} readOnly size="small" precision={0.5} />
                                </td>
                                <td>₹20,999</td>
                                <td>
                                    <input type="number" min="1" className="qty-input" defaultValue="1" />
                                </td>
                                <td>₹20,999</td>
                                <td><button className="btn btn-danger">Remove</button></td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={phone1} alt="Product" className="cart-img" />
                                    <Link className="linname">Motorola Edge 50 Pro</Link>
                                    <Rating className="rat" name="read-only" value={4} readOnly size="small" precision={0.5} />
                                </td>
                                <td>₹20,999</td>
                                <td>
                                    <input type="number" min="1" className="qty-input" defaultValue="1" />
                                </td>
                                <td>₹20,999</td>
                                <td><button className="btn btn-danger">Remove</button></td>
                            </tr>
                            
                           
                        </tbody>
                    </table>
                </div>

                {/* Cart Summary */}
                <div className="cart_summary">
                    <h3>Cart Summary</h3>
                    <div className="summary_row">
                        <span>Subtotal :</span> <span>₹20,999</span>
                    </div>
                    <div className="summary_row">
                        <span>Shipping :</span> <span>Free</span>
                    </div>
                    <div className="summary_row">
                        <span>Tax :</span> <span>300</span>
                    </div>
                    <div className="summary_row total">
                        <span>Total :</span> <span>₹21,299</span>
                    </div>
                    <button className="checkout_btn">Proceed to Checkout</button>
                </div>

                {/* Continue Shopping */}
                <div className="continue_shopping">
                <a href="/home"><button className="btn btn-outline-primary">Continue Shopping</button></a>
                </div>
            </div>
        </section>
    );
};

export default Cart;
