import React, { useState } from 'react';
import './Contact.css'
function ContactForm() {
  const [success, setSuccess] = useState(false)
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/contact", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({sender_first_name: document.getElementById('fname').value,
                                sender_last_name: document.getElementById('lname').value,
                                content: document.getElementById('subject').value}),
        });

        if (response.ok) {
          // Handle success
          setSuccess(true);
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
    <div className="contactContainer">
    <div className="contact">
    {success ? ( 
          <p className="successMessage">Message sent successfully! Thank you for contacting us</p>
        ) : (
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name</label>
        <input
          className="inputField"
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
          required
        />
  
        <label htmlFor="lname">Last Name</label>
        <input
          className="inputField"
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
          required
        />
  
        <label htmlFor="subject">Subject</label>
        <textarea
          className="inputField"
          id="subject"
          required
          name="subject"
          placeholder="Write something.."
          style={{ height: '200px' }}
        ></textarea>
  
        <input className="submitButton" type="submit" value="Send" />
      </form>)}
    </div>
  </div>
  
  );
}

export default ContactForm;