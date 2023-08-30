import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTiktok,
} from "react-icons/fa";
import "./Newsletter.scss";
import { Link } from 'react-router-dom';

const Newsletter = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
    
        if (form.checkValidity() === false) {
          event.stopPropagation();
        } else {
          try {
            const response = await fetch("http://127.0.0.1:8000/api/subscribe", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({email: document.getElementById('email_input').value}),
            });
    
            if (response.ok) {
              // Handle success
              console.log('Form data submitted successfully');
              // You can perform further actions like showing a success message
            } else {
              // Handle errors
              console.error('Form data submission failed');
            }
          } catch (error) {
            console.error('An error occurred while submitting the form:', error);
          }
        }
      };
    
    return (
        <div className="newsletter-section">
            
            <div className="newsletter-content">
            
                <span className="small-text">Newsletter</span>
                <span className="big-text">
                    Sign up for latest updates and offers
                </span>
                <form className="form" onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email Address" id="email_input"/>
                    <button type="submit">Subscribe</button>
                </form>
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
