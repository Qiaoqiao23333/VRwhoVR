import React from 'react'
import './Map.css'

function Map({ selectedAttraction }) {
  // Fixed position: bottom-left area of the map (near green area)
  const pinPosition = {
    left: '15%',
    bottom: '20%'
  }

  const handleGreenAreaClick = () => {
    // This button is for future chatbot integration
    console.log('Green area clicked - chatbot will be integrated here')
  }

  return (
    <div className="map-container">
      <img 
        src="/map.png" 
        alt="Salzburg Map" 
        className="map-image"
      />
      
      {/* Clickable layer for top-right green area (for future chatbot integration) */}
      <div 
        className="clickable-green-area"
        onClick={handleGreenAreaClick}
        style={{
          position: 'absolute',
          top: '5%',
          right: '5%',
          width: '30%',
          height: '35%',
          cursor: 'pointer',
          zIndex: 5
        }}
      />
      
      {/* Pin icon - displayed at fixed position when attraction is selected */}
      {selectedAttraction && (
        <div 
          className="pin-container"
          style={{
            position: 'absolute',
            left: pinPosition.left,
            bottom: pinPosition.bottom,
            transform: 'translate(-50%, 100%)',
            pointerEvents: 'none',
            zIndex: 10
          }}
        >
          <img 
            src="/pin.png" 
            alt="Pin" 
            className="pin-image"
          />
        </div>
      )}
    </div>
  )
}

export default Map

