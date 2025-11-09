import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Map from './components/Map'
import AttractionList from './components/AttractionList'
import ChatButton from './components/ChatButton'
import AppButton from './components/AppButton'
import ARModelViewer from './components/ARModelViewer'

function App() {
  const [selectedAttraction, setSelectedAttraction] = useState(null)
  const [showARModel, setShowARModel] = useState(false)

  const handleAttractionClick = (attraction) => {
    setSelectedAttraction(attraction)
    
    // If "Mozarts Wohnhaus" is clicked, show AR model
    if (attraction === 'Mozarts Wohnhaus') {
      setShowARModel(true)
    }
  }

  const handleCloseARModel = () => {
    setShowARModel(false)
  }

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <div className="left-section">
          <div className="filters-text">Filters</div>
          <ChatButton />
        </div>
        <div className="center-section">
          <Map selectedAttraction={selectedAttraction} />
        </div>
        <div className="right-section">
          <AttractionList 
            onAttractionClick={handleAttractionClick}
            selectedAttraction={selectedAttraction}
          />
          <AppButton />
        </div>
      </div>
      <ARModelViewer isOpen={showARModel} onClose={handleCloseARModel} />
    </div>
  )
}

export default App

