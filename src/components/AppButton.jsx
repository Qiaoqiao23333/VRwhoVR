import React from 'react'
import './AppButton.css'

function AppButton() {
  const handleClick = () => {
    console.log('Get the Kartie App clicked')
  }

  return (
    <button className="app-button" onClick={handleClick}>
      GET THE KARTIE APP
    </button>
  )
}

export default AppButton

