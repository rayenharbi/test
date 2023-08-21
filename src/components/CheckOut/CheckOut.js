import React from 'react';
import './CheckOut.css'
function CheckOut() {
  return (
    <div className='container'>
    
    <div>
      <form>
        <label htmlFor="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
        <label htmlFor="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
        <label htmlFor="lname">Number</label>
        <input type="Text" id="lname" name="lastname" placeholder="Phone" />
        <label htmlFor="City">City</label>
        <select id="country" name="country">
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
        <label htmlFor="lname">Adresse</label>
        <input type="Text" id="lname" name="lastname" placeholder="Your Adresse" />
        <label htmlFor="lname">ZipCode (CodePostal)</label>
        <input type="Text" id="lname" name="lastname" placeholder="Your ZipCode" />
        <input type="submit" defaultValue="Submit" />
      </form>
    </div>
  </div>
  );
}

export default CheckOut;