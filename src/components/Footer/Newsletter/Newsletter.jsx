import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTiktok,
} from "react-icons/fa";
import "./Newsletter.scss";
import { Link } from 'react-router-dom';

const Newsletter = () => {
    return (
        <div className="newsletter-section">
            
            <div className="newsletter-content">
            
                <span className="small-text">Newsletter</span>
                <span className="big-text">
                    Sign up for latest updates and offers
                </span>
                <div className="form">
                    <input type="text" placeholder="Email Address" />
                    <button>Subscribe</button>
                </div>
                <span className="text">
                    Will be used in accordance with our Privacy Policy
                </span>
                <span className="social-icons">
                
                    <div className="icon">
                        
                        <FaTiktok size={14} />
                        
                    </div>
                    
                  
                    <Link to={"https://www.instagram.com/menci.tn/"}>
                    <div className="icon">
                        <FaInstagram size={14} />
                    </div>
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default Newsletter;
