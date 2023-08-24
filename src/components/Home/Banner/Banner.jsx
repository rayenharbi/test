import React from "react";

import "./Banner.scss";
import Products from "../../Products/Products";
import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero-banner" >
            
                
            
            <div className="content">
                <div className="text-content">
                    <h1>MADE BY TWO TEENAGERS</h1>
                    <p>
                        Convallis interdum purus adipiscing dis parturient
                        posuere ac a quam a eleifend montes parturient posuere
                        curae tempor
                    </p>
                    <div className="ctas">
                        <Link to={"About"}>
                        <div className="banner-cta">Read More</div>
                        </Link>
                        <Link to={"/product/:id"}>
                        <div className="banner-cta v2">Shop Now</div>
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;
