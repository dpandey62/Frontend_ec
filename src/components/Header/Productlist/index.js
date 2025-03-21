// Import your modal if it's in another file

import { SlSizeFullscreen } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import Slider from "react-slick";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { useState } from "react";
import ProductModal from '../productModal'; // Import the productModal component

const Productlist = () => {
   const [isOpenproductModal, setisOpenproductModal] = useState(false);
   const [selectedProduct, setSelectedProduct] = useState(null); // State to hold selected product details

   const viewProductdetail = (productDetails) => {
      setSelectedProduct(productDetails); // Set the selected product details
      setisOpenproductModal(true); // Open the modal
   }

   var productslideroptions = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
   };

   return (
      <>
         <div className="product_ro w-150 mt-3">
            <Slider {...productslideroptions}>
               <div className="item Productitem">
                  <div className="product_img">
                     <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Product"/>
                     <span className="badge badge-primary">20%</span>
                     <div className="actions">
                        <Button onClick={() => viewProductdetail({ name: "Footwear", price: 99.99, image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" })}>
                           <SlSizeFullscreen />
                        </Button>
                        <Button><FaRegHeart /></Button>
                     </div>
                  </div>
                  <div className="best-product-cart">
                     <h4>Footwear</h4>
                     <p>$99.99</p>
                     <Rating className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" precision={0.5}/>
                  </div>
               </div>

               <div className="item Productitem">
                  <div className="product_img">
                     <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Product"/>
                     <span className="badge badge-primary">20%</span>
                     <div className="actions">
                        <Button onClick={() => viewProductdetail({ name: "Footwear", price: 99.99, image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" })}>
                           <SlSizeFullscreen />
                        </Button>
                        <Button><FaRegHeart /></Button>
                     </div>
                  </div>
                  <div className="best-product-cart">
                     <h4>Footwear</h4>
                     <p>$99.99</p>
                     <Rating className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" precision={0.5}/>
                  </div>
               </div>
                  {/* Additional product items can be added here */}
                  <div className="item Productitem">
                  <div className="product_img">
                     <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Product"/>
                     <span className="badge badge-primary">20%</span>
                     <div className="actions">
                        <Button onClick={() => viewProductdetail({ name: "Footwear", price: 99.99, image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" })}>
                           <SlSizeFullscreen />
                        </Button>
                        <Button><FaRegHeart /></Button>
                     </div>
                  </div>
                  <div className="best-product-cart">
                     <h4>Footwear</h4>
                     <p>$99.99</p>
                     <Rating className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" precision={0.5}/>
                  </div>
               </div>

               <div className="item Productitem">
                  <div className="product_img">
                     <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Product"/>
                     <span className="badge badge-primary">20%</span>
                     <div className="actions">
                        <Button onClick={() => viewProductdetail({ name: "Footwear", price: 99.99, image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" })}>
                           <SlSizeFullscreen />
                        </Button>
                        <Button><FaRegHeart /></Button>
                     </div>
                  </div>
                  <div className="best-product-cart">
                     <h4>Footwear</h4>
                     <p>$99.99</p>
                     <Rating className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" precision={0.5}/>
                  </div>
               </div>

               <div className="item Productitem">
                  <div className="product_img">
                     <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Product"/>
                     <span className="badge badge-primary">20%</span>
                     <div className="actions">
                        <Button onClick={() => viewProductdetail({ name: "Footwear", price: 99.99, image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" })}>
                           <SlSizeFullscreen />
                        </Button>
                        <Button><FaRegHeart /></Button>
                     </div>
                  </div>
                  <div className="best-product-cart">
                     <h4>Footwear</h4>
                     <p>$99.99</p>
                     <Rating className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" precision={0.5}/>
                  </div>
               </div>

               <div className="item Productitem">
                  <div className="product_img">
                     <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Product"/>
                     <span className="badge badge-primary">20%</span>
                     <div className="actions">
                        <Button onClick={() => viewProductdetail({ name: "Footwear", price: 99.99, image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" })}>
                           <SlSizeFullscreen />
                        </Button>
                        <Button><FaRegHeart /></Button>
                     </div>
                  </div>
                  <div className="best-product-cart">
                     <h4>Footwear</h4>
                     <p>$99.99</p>
                     <Rating className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" precision={0.5}/>
                  </div>
               </div>

               <div className="item Productitem">
                  <div className="product_img">
                     <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Product"/>
                     <span className="badge badge-primary">20%</span>
                     <div className="actions">
                        <Button onClick={() => viewProductdetail({ name: "Footwear", price: 99.99, image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" })}>
                           <SlSizeFullscreen />
                        </Button>
                        <Button><FaRegHeart /></Button>
                     </div>
                  </div>
                  <div className="best-product-cart">
                     <h4>Footwear</h4>
                     <p>$99.99</p>
                     <Rating className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" precision={0.5}/>
                  </div>
               </div>
               <div className="item Productitem">
                  <div className="product_img">
                     <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Product"/>
                     <span className="badge badge-primary">20%</span>
                     <div className="actions">
                        <Button onClick={() => viewProductdetail({ name: "Footwear", price: 99.99, image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" })}>
                           <SlSizeFullscreen />
                        </Button>
                        <Button><FaRegHeart /></Button>
                     </div>
                  </div>
                  <div className="best-product-cart">
                     <h4>Footwear</h4>
                     <p>$99.99</p>
                     <Rating className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" precision={0.5}/>
                  </div>
               </div>

               {/* Additional product items can be added here */}
            </Slider>
         </div>

         {isOpenproductModal && <ProductModal product={selectedProduct} onClose={() => setisOpenproductModal(false)} />}
      </>
   );
}

export default Productlist;
