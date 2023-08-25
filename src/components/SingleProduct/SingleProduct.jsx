import { useContext, useState, useEffect } from "react";
import { Context } from "../../utils/context";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";

const SingleProduct = () => {
    const [size, SetSize] = useState('S');
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const { handleAddToCart } = useContext(Context);
    const [product, setProduct] = useState({});
    useEffect(() => {
        const getProduct = async () => {
          const response = await fetch(`/api/getProduct/${id}`);
          const data = await response.json();
          setProduct(data);
        }
        getProduct();
      }, [id]);
    
    const SelectSize = (event) => {
        var sizeElements = document.querySelectorAll('.psize');
        var size_target = event.target;
        SetSize(size_target.getAttribute("value"));
        sizeElements.forEach(function(element) {
          element.classList.remove('active');
        })
        size_target.classList.add('active');
      }
    const decrement = () => {
        setQuantity((prevState) => {
            if (prevState === 1) return 1;
            return prevState - 1;
        });
    };
    const increment = () => {
        setQuantity((prevState) => prevState + 1);
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };

    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                    {product.images && product.images.length > 0 ? (
    <Slider {...sliderSettings}>
      {product.images.map((image, index) => (
        <div key={index} className="slider-image-container">
          <img src={image} alt={`Product ${index}`} className="slider-image" />
        </div>
      ))}
    </Slider>
  ) : (
    <p>No images available for this product.</p>
  )}
                    </div>
                    
                    <div className="right">
                        <span className="name">{product.title}</span>
                        <span className="price">&#8377;{product.price}</span>
                        <span className="desc">{product.description}</span>
                        <div className="product_size">  
                          <div className="psize active" value="S" onClick={SelectSize}>S</div>
                          <div className="psize" value="M" onClick={SelectSize}>M</div>
                          <div className="psize" value="L" onClick={SelectSize}>L</div>
                          <div className="psize" value="XL" onClick={SelectSize}>XL</div>
                        </div>
                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={decrement}>-</span>
                                <span>{quantity}</span>
                                <span onClick={increment}>+</span>
                            </div>
                            <button
                                className="add-to-cart-button"
                                onClick={() => {
                                    handleAddToCart(product, quantity, size);
                                    setQuantity(1);
                                    SetSize('S');
                                    document.querySelectorAll('.psize').forEach(function(element) {
                                        element.classList.remove('active');
                                    })
                                    document.querySelector('.psize[value="S"]').classList.add('active');
                                }}
                            >
                                <FaCartPlus size={20} />
                                ADD TO CART
                            </button>
                        </div>

                        <span className="divider" />
                        <div className="info-item">
                            <span className="text-bold">
                                Category:{" "}
                                <span>
                                    {
                                        product.title
                                    }
                                </span>
                            </span>
                            <span className="text-bold">
                                Share:
                                <span className="social-icons">
                                    <FaFacebookF size={16} />
                                    <FaTwitter size={16} />
                                    <FaInstagram size={16} />
                                    <FaLinkedinIn size={16} />
                                    <FaPinterest size={16} />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <RelatedProducts
                    productId={id}
                />
            </div>
        </div>
    );
};

export default SingleProduct;
