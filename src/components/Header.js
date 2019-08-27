import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header-styles'>
      <h1>Recycle NYC</h1>
      <ul className='ul-styles'>
        <li><Link className='link-styles' to="/">home</Link></li>
        <li><Link className='link-styles' to="/about">about</Link></li>
        <li><Link className='link-styles' to="/resources">resources</Link></li>
        <li><Link className='link-styles' to="/by-borough">by borough</Link></li>
        <li><Link className='link-styles' to="/near-you">near you</Link></li>
      </ul>
      <h3 className='h3-styles'>Waste not, want not: find a public recycling bin near you!</h3>
    </header>
  )
}

export default Header
