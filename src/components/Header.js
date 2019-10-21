import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className='header-styles'>
      <Link to="/" id="title"><h1>Recycle NYC</h1></Link>

      <h3 className='headline'>Waste not, want not: find a public recycling bin near you!</h3>

      <ul className="ul-styles">
        <li><Link className='link-styles' to="/by-borough">by borough</Link></li>
        <li><Link className='link-styles' to="/near-you">near you</Link></li>
      </ul>
    </header>
  )
}

export default Header;
