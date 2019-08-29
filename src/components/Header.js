import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Header = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false)

  return (

    <header className='header-styles'>

      <h1 id="title">Recycle NYC</h1>
      <div
      className={`${!sidebarVisible ? 'hamburger' : 'hideburger'}`}
      onClick={() => setSidebarVisible(true)}
      >
        <div className="hamburger-slice"></div>
        <div className="hamburger-slice"></div>
        <div className="hamburger-slice"></div>
      </div>
      <ul className={`ul-styles sidebar ${sidebarVisible ? 'sidebar-active' : ''}`}>
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
