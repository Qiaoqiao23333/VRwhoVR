import React from 'react'
import './Map.css'

function Map({ selectedAttraction }) {
  // 固定位置：地图左下角区域（绿色区域附近）
  const pinPosition = {
    left: '15%',
    bottom: '20%'
  }

  const handleGreenAreaClick = () => {
    // 这个按钮用于未来的 chatbot 集成
    console.log('Green area clicked - chatbot will be integrated here')
  }

  return (
    <div className="map-container">
      <img 
        src="/map.png" 
        alt="Salzburg Map" 
        className="map-image"
      />
      
      {/* 右上角绿色区域的可点击层（用于未来集成 chatbot） */}
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
      
      {/* 图钉图标 - 当选中景点时显示在固定位置 */}
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
          <div className="pin-icon">
            <div className="pin-top"></div>
            <div className="pin-circle"></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Map

