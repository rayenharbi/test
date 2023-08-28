import './CheckOut.css';
import React, { useContext, useState } from "react";
import { Context } from "../../utils/context";
import CartItem from "./CartItem/CartItem"
import { useNavigate } from 'react-router-dom'

function CheckOut() {
  const [success, setSuccess] = useState(false);
  const { cartItems, cartSubTotal, clearCart } = useContext(Context);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    city: 'Tunis',
    items: cartItems,
    total: cartSubTotal
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/validateBag", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // Handle success
          clearCart();
        } else {
          // Handle errors
          console.error('Form data submission failed');
        }
      } catch (error) {
        console.error('An error occurred while submitting the form:', error);
      }
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (cartItems.length === 0) {
    navigate('/');
    return null; // Render nothing
  }
  
  return (
    <div className='checkoutContainer'>
    <div className='checkout'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">Full Name</label>
        <input type="text" className="clientData" id="fname" name="name" placeholder="Full name" value={formData.name} onChange={handleInputChange}/>
        <label htmlFor="fname">Email</label>
        <input type="email" id="fname" className="clientData" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange}/>
        <label htmlFor="phone">Number</label>
        <input type="Text" id="lname" className="clientData" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange}/>
        <label htmlFor="City">City</label>
        <select id="country" className="clientData" name="city" value={formData.city} onChange={handleInputChange}>
          <option value="australia">Tunis</option>
          <option value="Ariena">Ariena</option>
          <option value="Ben Arous">Ben Arous</option>
          <option value="Nabeul">Nabeul</option>
          <option value="Zaghnuan">Zaghnuan</option>
          <option value="Bizerte">Bizerte</option>
          <option value="Beja">Beja</option>
          <option value="Jendouba">Jendouba</option>
          <option value="Kef">Kef</option>
          <option value="Seliana">Seliana</option>
          <option value="Sousse">Sousse</option>
          <option value="Monastir">Monastir</option>
          <option value="Mahdia">Mahdia</option>
          <option value="Sfax">Sfax</option>
          <option value="Kairouan">Kairouan</option>
          <option value="Kasserine">Kasserine</option>
          <option value="Sidi Bouzid">Sidi Bouzid</option>
          <option value="Gabes">Gabes</option>
          <option value="Mednine">Mednine</option>
          <option value="Tataouine">Tataouine</option>
          <option value="Gafsa">Gafsa</option>
          <option value="Tozeur">Tozeur</option>
          <option value="Kebli">Kebili</option>
          
          
        </select>
        <label htmlFor="Address">Address</label>
        <input type="Text" className="clientData" id="address" name="address" placeholder="Your Address" value={formData.address} onChange={handleInputChange}/>
        <input className='submitbtn' type="submit" defaultValue="Submit" />
      </form>
    </div>
    <div className='cartItems'>
            {cartItems?.map((item) => (
                <div className='cartItem'>
                    <div className="img-container">
                        <img
                            src={
                                item.images[0].src
                            }
                        />
                    </div>
                    <div className="item-details">
                        <div className="item_title">{item.title}</div>
                        <div>{item.size}</div>
                        <div className="text">
                            <span>{item.quantity}</span>
                            <span>x</span>
                            <span className="highlight">
                                <span>&#8377;</span>
                                {item.price *
                                    item.quantity}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
            <div className='cartSummary'>
              <div className='summaryText'>
                <span>Total Items:</span>
                <span>{cartItems.length}</span>
              </div>
              <div className='summaryText'>
                <span>Cart Total:</span>
                <span className='highlight2'>{cartSubTotal}</span>
              </div>
            </div>
          </div>         
  </div>
  );
}

export default CheckOut;