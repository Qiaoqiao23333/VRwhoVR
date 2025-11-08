import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Map from './components/Map'
import AttractionList from './components/AttractionList'
import ChatButton from './components/ChatButton'
import AppButton from './components/AppButton'

function App() {
  const [selectedAttraction, setSelectedAttraction] = useState(null)

  const handleAttractionClick = (attraction) => {
    setSelectedAttraction(attraction)
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
          <AttractionList onAttractionClick={handleAttractionClick} />
          <AppButton />
        </div>
      </div>
    </div>
  )
}

export default App

