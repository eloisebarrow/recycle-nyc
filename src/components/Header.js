import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header-styles'>
      <img src="https://res.cloudinary.com/eloise/image/upload/v1567019346/recycling_vd5cly.png" className="recycle-logo" alt="Recycle"/>
      <h1 id="title">Recycle NYC</h1>
      <div className='hamburger'>
        <i class="fas fa-bars"></i>

      </div>
      <ul className='ul-styles'>
        <li><Link className='link-styles' to="/">home</Link></li>
        <li><Link className='link-styles' to="/about">about</Link></li>
        <li><Link className='link-styles' to="/resources">resources</Link></li>
        <li><Link className='link-styles' to="/by-borough">by borough</Link></li>
        <li><Link className='link-styles' to="/near-you">near you</Link></li>
      </ul>
      <h3 className='headline'>Waste not, want not: find a public recycling bin near you!</h3>
    </header>
  )
}

export default Header
