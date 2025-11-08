import React from 'react'
import './ChatButton.css'

function ChatButton() {
  const handleClick = () => {
    console.log('Chat with Kartie clicked')
    // 未来会集成 chatbot
  }

  return (
    <div className="chat-button-container">
      <button className="chat-button" onClick={handleClick}>
        <img src="/logo.png" alt="Kartie" className="chat-button-logo" />
      </button>
    </div>
  )
}

export default ChatButton

