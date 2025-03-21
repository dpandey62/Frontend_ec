import HomeBanner from "../../components/Header/HomeBanner";

import banner1 from "../../assest/images/banner1.jpg"; 
import banner2 from "../../assest/images/banner2.jpg";
import banner3 from "../../assest/images/banner3.jpg"; 
import banner4 from "../../assest/images/banner4.jpg"; 
import banner5 from "../../assest/images/8f0bb7dd1533286d.webp";
import banner6 from "../../assest/images/aa3c181b834bbe2a.webp" 
import newsletter from "../../assest/images/coupon.png" ; // Adjust the path as per your folder structure
import Button from '@mui/material/Button';
import { FaArrowRight } from "react-icons/fa6";



import { IoMailOutline } from "react-icons/io5";
import Homecat from "../../components/Header/Homecat";
import Productlist from  "../../components/Header/Productlist" ;









const Home=()=>{

   

  

     

    return(
        <>



    <HomeBanner/>
    <Homecat/>

    <section className="homeproduct">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                  <div className="sticky">
                    <div className="banner">
                    
                    <img src={banner1} alt="Description" className="cursor w-100" />
                    </div>

                    
                    <div className="banner mt-4">
                    
                    <img src={banner2} alt="Description" className="cursor w-100" />
                    </div>
                </div>

                </div>

                <div className="col-md-3">
                    <div className="ra_d-flex align-item-center">
                        <div className="info w-75">
                            <h3 className="mb-0 hd">BEST SELLERS</h3>
                            <p className=" text-sml mb-0">Best selling products. Do not miss the current offers until the end of March.  </p>
                        </div>
                        
                <Button className="viewAllBtn">View All
                        <FaArrowRight />
                        </Button>
                    </div>

                        <Productlist/>
                    {/*1 wala slider hai */}

                   {/*} <div className="product_row w-150 mt-3">
                        <Slider {...productslideroptions}>

                        <div class="item Productitem">
                                   <div class="product_img">
                                      <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Product"/>
                                      <span className="badge badge-primary">20%</span>

                                                                    <div className="actions">
                                                                    <Button><SlSizeFullscreen /></Button>
                                                                    <Button><FaRegHeart /></Button>
                                                                    </div>
                                                                                                            
                                         </div>
                                     <div class="best-product-cart">
                                             <h4>Footwear</h4>
                                             <div className="d-flex">
                                                <span className="oldprice">$120.00</span>
                                                <span className="newprice text-danger">$100.00</span>
                                             </div>
                                                <Rating  className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" precision={0.5} />
                                                    {/* <button>Add to Cart</button>*
                                                    </div>
                                 </div>
                                         {/*cart product*
                                 <div class="item Productitem">
                                   <div class="product_img">
                                      <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Product"/>
                                      <span className="badge badge-primary">20%</span>

                                                        <div className="actions">
                                                        <button onClick={() => viewProductDetails("Product 1")}><SlSizeFullscreen />
                                                       
                                                                  </button>
                                                          {isOpenProductModal && (
                                                                   <ProductModal
                                            product={selectedProduct}
                                               closeProductModal={closeProductModal}  />
                                                     )}
                                                        <Button><FaRegHeart /></Button>
                                                        </div>
                                                                                            
                                         </div>
                                     <div class="best-product-cart">
                                             <h4>Footwear</h4>
                                             <div className="d-flex">
                                                <span className="oldprice">$120.00</span>
                                                <span className="newprice text-danger">$100.00</span>
                                             </div>
                                                <Rating  className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" precision={0.5}/>
                                                    {/* <button>Add to Cart</button>*
                                                    </div>
                                 </div>
                           
                               
                                         {/*cart product*
                                 <div class="item Productitem">
                                   <div class="product_img">
                                      <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Product"/>
                                      <span className="badge badge-primary">20%</span>

                                                                    <div className="actions">
                                                                    <Button><SlSizeFullscreen /></Button>
                                                                    <Button><FaRegHeart /></Button>
                                                                    </div>
                                                                                                            
                                         </div>
                                     <div class="best-product-cart">
                                             <h4>Footwear</h4>
                                             <div className="d-flex">
                                                <span className="oldprice">$120.00</span>
                                                <span className="newprice text-danger">$100.00</span>
                                             </div>
                                                <Rating  className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" precision={0.5} />
                                                    {/* <button>Add to Cart</button>*
                                                    </div>
                                 </div>
                                         {/*cart product*
                                 <div class="item Productitem">
                                   <div class="product_img">
                                      <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Product"/>
                                      <span className="badge badge-primary">20%</span>

                                                        <div className="actions">
                                                        <button onClick={() => viewProductDetails("Product 1")}><SlSizeFullscreen />
                                                       
                                                                  </button>
                                                          {isOpenProductModal && (
                                                                   <ProductModal
                                            product={selectedProduct}
                                               closeProductModal={closeProductModal}  />
                                                     )}
                                                        <Button><FaRegHeart /></Button>
                                                        </div>
                                                                                            
                                         </div>
                                     <div class="best-product-cart">
                                             <h4>Footwear</h4>
                                             <div className="d-flex">
                                                <span className="oldprice">$120.00</span>
                                                <span className="newprice text-danger">$100.00</span>
                                             </div>
                                                <Rating  className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" precision={0.5}/>
                                                    {/* <button>Add to Cart</button>*
                                                    </div>
                                 </div>
                                     {/*cart product*
                                 <div class="item Productitem">
                                   <div class="product_img">
                                      <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Product"/>
                                        
                                      <span className="badge badge-primary">20%</span>

                                            <div className="actions">
                                            <Button onClick={()=>viewProductDetails("Product 1")}><SlSizeFullscreen /></Button>
                                            <Button><FaRegHeart /></Button>
                                            </div>
                                                                                    
                                         </div>
                                     <div class="best-product-cart">
                                             <h4>Footwear</h4>
                                             <div className="d-flex">
                                                <span className="oldprice">$120.00</span>
                                                <span className="newprice text-danger">$100.00</span>
                                             </div>
                                                <Rating  className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" precision={0.5}/>
                                                   {/*  <button>Add to Cart</button>*
                                                    </div>
                                 </div>
                                    {/*cart product*
                                 <div class="item Productitem">
                                   <div class="product_img">
                                      <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Product"/>
                                      
                                      <span className="badge badge-primary">20%</span>

                                      <div className="actions">
                                      <Button onClick={()=>viewProductDetails("Product 1")}><SlSizeFullscreen /></Button>
                                        <Button><FaRegHeart /></Button>
                                      </div>


                                         </div>
                                     <div class="best-product-cart">
                                             <h4>Footwear</h4>
                                             <div className="d-flex">
                                                <span className="oldprice">$120.00</span>
                                                <span className="newprice text-danger">$100.00</span>
                                             </div>
                                             <Rating  className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" precision={0.5}/>
                                                   {/*  <button>Add to Cart</button>*
                                                    </div>
                                 </div>
                        </Slider>
                    </div>*/}



                    <div className="raa d-flex align-item-center">
                        <div className="info w-75">
                            <h3 className="mb-0 hd">BEST SELLERS</h3>
                            <p className=" text-sml mb-0">Best selling products. Do not miss the current offers until the end of March.  </p>
                        </div>
                        
                <Button className="viewAllBt">View All
                        <FaArrowRight />
                        </Button>
                    </div>

                    <Productlist/>
                     {/*2 wala slider hai */}

                {/*    <div className="product_ro w-150 mt-3">
                        <Slider {...productslideroptions}>
                           
                                <div class="item Productitem">
                                   <div class="product_img">
                                      <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Product"/>
                                      <span className="badge badge-primary">20%</span>

                                      <div className="actions">
                                      <Button onClick={()=>viewProductDetails("Product 1")}><SlSizeFullscreen /></Button>
                                        <Button><FaRegHeart /></Button>
                                      </div>
                                         </div>

                                     <div class="best-product-cart">
                                             <h4>Footwear</h4>
                                            
                                                <p>$99.99</p>
                                                <Rating className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" precision={0.5}/>
                                                  <button>Add to Cart</button>
                                                   
                                                 </div>
                                 </div>
                                         
                                 <div class="item Productitem">
                                   <div class="product_img">
                                      <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Product"/>
                                      <span className="badge badge-primary">20%</span>

                                                                    <div className="actions">
                                                                    <Button onClick={()=>viewProductDetails("Product 1")}><SlSizeFullscreen /></Button>
                                                                    <Button><FaRegHeart /></Button>
                                                                    </div>
                                                                                                            
                                         </div>
                                     <div class="best-product-cart">
                                             <h4>Footwear</h4>
                                             <div className="d-flex">
                                                <span className="oldprice">$120.00</span>
                                                <span className="newprice text-danger">$100.00</span>
                                             </div>
                                                <Rating  className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" precision={0.5} />
                                                     <button>Add to Cart</button>
                                                    </div>
                                 </div>
                                         {/*cart product
                                 <div class="item Productitem">
                                   <div class="product_img">
                                      <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Product"/>
                                      <span className="badge badge-primary">20%</span>

                                                        <div className="actions">
                                                        <Button onClick={()=>viewProductDetails("Product 1")}><SlSizeFullscreen /></Button>
                                                        <Button><FaRegHeart /></Button>
                                                        </div>
                                                                                            
                                         </div>
                                     <div class="best-product-cart">
                                             <h4>Footwear</h4>
                                             <div className="d-flex">
                                                <span className="oldprice">$120.00</span>
                                                <span className="newprice text-danger">$100.00</span>
                                             </div>
                                                <Rating  className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" precision={0.5}/>
                                                    {/* <button>Add to Cart</button>
                                                    </div>
                                 </div>
                                     {/*cart product*
                                 <div class="item Productitem">
                                   <div class="product_img">
                                      <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Product"/>
                                        
                                      <span className="badge badge-primary">20%</span>

                                            <div className="actions">
                                            <Button onClick={()=>viewProductDetails("Product 1")}><SlSizeFullscreen /></Button>
                                            <Button><FaRegHeart /></Button>
                                            </div>
                                                                                    
                                         </div>
                                     <div class="best-product-cart">
                                             <h4>Footwear</h4>
                                             <div className="d-flex">
                                                <span className="oldprice">$120.00</span>
                                                <span className="newprice text-danger">$100.00</span>
                                             </div>
                                                <Rating  className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" precision={0.5}/>
                                                   {/*  <button>Add to Cart</button>*
                                                    </div>
                                 </div>
                                    {/*cart product*
                                 <div class="item Productitem">
                                   <div class="product_img">
                                      <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Product"/>
                                      
                                      <span className="badge badge-primary">20%</span>

                                      <div className="actions">
                                        <Button onClick={()=>viewProductDetails("Product 1")}><SlSizeFullscreen /></Button>
                                        <Button><FaRegHeart /></Button>
                                      </div>


                                         </div>
                                     <div class="best-product-cart">
                                             <h4>Footwear</h4>
                                             <div className="d-flex">
                                                <span className="oldprice">$120.00</span>
                                                <span className="newprice text-danger">$100.00</span>
                                             </div>
                                             <Rating  className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" precision={0.5}/>
                                                   {/*  <button>Add to Cart</button>*
                                                    </div>
                                 </div>
                        </Slider>
                    </div> */} 


                    
                </div>

                  {/*
                     isOpenProductModal && <ProductModal productId={selectedProduct} closeProductModal={closeProductModal} />


                  }
                

               
               {/**new banner  */}
               <div className="d-flex mt-2 mb-5 bannersec">
                <div className="banner 
                 ">
                    
                    <img src={banner3} alt="Description" className="cursor w-100" />
                    </div>
                    <div className="banner ">
                    
                    <img src={banner4} alt="Description" className="cursor w-100" />
                    </div>
                    </div>
                   
                                     
                  

                </div>

      

            </div>

                  <img src={banner5} alt="Flight img"  className="banner-main" />


            <div className="banner-container">

                <div className="banner ">
                    
                    <img src={banner6} alt="Description" className="cursor w-100" />
                </div>
                     <div className="banner ">
                    
                         <img src={banner6} alt="Description" className="cursor w-100" />
                    </div>

                    <div className="banner ">
                    
                    <img src={banner6} alt="Description" className="cursor w-100" />
               </div>

               
             </div>
                   


                  

             <Homecat/>
                


                       
    </section>

        {/*new baner section  newsletter */}
        <section className="newsletter mt-3 mb-3  d-flex align-items-center">
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <p className="text-white mb-0">$20 discount for yor first order</p>
                  <h4 className="txt-white">Join our newsletter and get...</h4>
                  <p className="text-light">Join our email subscription now to get updates on
                 <br/> promotions and coupons. </p>



                 
                <form> 
                  <IoMailOutline />
                  <input type="email" name="email" placeholder="Enter your email" />
                  <button type="submit">Subscribe</button>
                  
                 </form>
                  
   
               </div>

               <div className="col-md-6">
                  <img src={newsletter} alt="coupns"/>
                  <form className="d-flex mt-4 mb-4">

                  </form>
               </div>


            </div>
         </div>

           </section>
     
           
        </>

    )
}

export default Home;