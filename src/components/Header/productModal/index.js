import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Dialog, IconButton, Grid, Typography } from "@mui/material";
import { IoMdClose, IoMdHeartEmpty } from "react-icons/io";
import { BiGitCompare } from "react-icons/bi";
import Rating from "@mui/material/Rating";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./productModal.css";
import Minislider from "./Minislider";

const ProductModal = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product.image || "placeholder.jpg");

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  return (
    <Dialog open onClose={onClose} className="product-dialog" maxWidth="md" fullWidth>
      <div className="product-modal">
        {/* Close Button */}
        <IconButton className="closes" onClick={onClose} aria-label="Close">
          <IoMdClose />
        </IconButton>

        {/* Product Title & Rating */}
        <div>
          <Typography variant="h5" className="product-title">{product.name}</Typography>
          <div className="product-rating">
            <Rating name="read-only" value={product.rating || 4} readOnly size="small" precision={0.5} />
          </div>
        </div>

        <Grid container spacing={2}>
          {/* Left Section - Image and Slider */}
          <Grid item xs={12} md={6}>
            <div className="product-modal__image">
              <InnerImageZoom 
                src={selectedImage} 
                zoomSrc={selectedImage} 
                zoomType="hover" 
                hideHint={true}  
                zoomScale={1.5}
                alt={product.name || "Product image"} 
              />
            </div>
            <Minislider setSelectedImage={setSelectedImage} images={product.images} />
          </Grid>

          {/* Right Section - Product Details */}
          <Grid item xs={12} md={6}>
            <p className="price">Price : 
              {product.oldPrice && <span className="old-price">${product.oldPrice}</span>}
              <span className="new-price">${product.price}</span>
            </p>
            <span className="stock-status">IN STOCK</span>
            <p className="product-description">{product.description || "No description available."}</p>

            {/* Quantity Selector */}
            <div className="product-actions">
              <Button variant="outlined" className="quantity-btn" onClick={() => handleQuantityChange(-1)}>-</Button>
              <span className="quantity">{quantity}</span>
              <Button variant="outlined" className="quantity-btn" onClick={() => handleQuantityChange(1)}>+</Button>
            </div>

            <Button variant="contained" color="primary" className="add-to-cart" aria-label="Add to Cart">
              Add to Cart
            </Button>

            {/* Wishlist & Compare */}
            <div className="wishlist-compare">
              <Button startIcon={<IoMdHeartEmpty />} className="wishlist-btn">
                Add to Wishlist
              </Button>
              <Button startIcon={<BiGitCompare />} className="compare-btn">
                Compare
              </Button>
            </div>

            {/* Product Information */}
            <div className="product-details">
              <p><strong>Type :</strong> {product.type || "Footwear"}</p>
              <p><strong>MFG :</strong> {product.mfg || "20 May 2022"}</p>
              <p><strong>Life :</strong> {product.life || "10 years"}</p>
            </div>
          </Grid>
        </Grid>
      </div>
    </Dialog>
  );
};

ProductModal.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    rating: PropTypes.number,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number,
    description: PropTypes.string,
    type: PropTypes.string,
    mfg: PropTypes.string,
    life: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProductModal;
