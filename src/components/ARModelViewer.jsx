import React from 'react'
import './ARModelViewer.css'

function ARModelViewer({ isOpen, onClose }) {
  if (!isOpen) return null

  const handleOverlayClick = (e) => {
    // 如果点击的是遮罩层（不是模型本身），则关闭
    if (e.target.classList.contains('ar-overlay')) {
      onClose()
    }
  }

  return (
    <div className="ar-overlay" onClick={handleOverlayClick}>
      <div className="ar-model-container" onClick={(e) => e.stopPropagation()}>
        <button className="ar-close-button" onClick={onClose}>×</button>
        <model-viewer
          src="/WavingMozart.usdz"
          ios-src="/WavingMozart.usdz"
          alt="A 3D model in AR"
          auto-rotate
          camera-controls
          ar
          ar-modes="webxr scene-viewer quick-look"
          className="ar-model-viewer"
        />
      </div>
    </div>
  )
}

export default ARModelViewer

