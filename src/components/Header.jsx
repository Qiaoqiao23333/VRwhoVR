import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <div className="logo-section">
          <img 
            src="/header-banner.png" 
            alt="SALZBURG - Die Bühne der Welt" 
            className="header-banner"
          />
        </div>
        <h2 className="main-cta">EXPLORE YOUR BENEFITS WITH YOUR SALZBURG CARD</h2>
      </div>
    </div>
  )
}

export default Header

