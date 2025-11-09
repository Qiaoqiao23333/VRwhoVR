import React from 'react'
import './ARModelViewer.css'

function ARModelViewer({ isOpen, onClose }) {
  if (!isOpen) return null

  const handleOverlayClick = (e) => {
    // If overlay (not the model itself) is clicked, close the viewer
    if (e.target.classList.contains('ar-overlay')) {
      onClose()
    }
  }

  return (
    <div className="ar-overlay" onClick={handleOverlayClick}>
      <div className="ar-model-container" onClick={(e) => e.stopPropagation()}>
        <button className="ar-close-button" onClick={onClose}>×</button>
        <model-viewer
          src="/WavingMozart.glb"
          ios-src="/WavingMozart.glb"
          alt="A 3D model in AR"
          auto-rotate
          camera-controls
          ar
          ar-modes="webxr scene-viewer quick-look"
          className="ar-model-viewer"
          style={{ width: '100%', height: '500px' }}
        />
      </div>
    </div>
  )
}

export default ARModelViewer

