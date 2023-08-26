import React from 'react';
import './Contact.css'
function ContactForm() {
  return (
    
      

    <div className="contactContainer">
    <div className="contact">
      <form action="/action_page.php">
        <label htmlFor="fname">First Name</label>
        <input
          className="inputField"
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />
  
        <label htmlFor="lname">Last Name</label>
        <input
          className="inputField"
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />
  
        <label htmlFor="subject">Subject</label>
        <textarea
          className="inputField"
          id="subject"
          name="subject"
          placeholder="Write something.."
          style={{ height: '200px' }}
        ></textarea>
  
        <input className="submitButton" type="submit" value="Submit" />
      </form>
    </div>
  </div>
  
  );
}

export default ContactForm;