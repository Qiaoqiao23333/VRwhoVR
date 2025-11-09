import React, { useState } from 'react'
import './ChatButton.css'
import BotpressWebchat from './BotpressWebchat'

function ChatButton() {
  const [showChatbot, setShowChatbot] = useState(false)

  const handleClick = () => {
    setShowChatbot(true)
  }

  const handleCloseChatbot = () => {
    setShowChatbot(false)
    if (window.botpress && window.botpress.close) {
      window.botpress.close()
    }
  }

  return (
    <>
      <div className="chat-button-container">
        <button className="chat-button" onClick={handleClick}>
          <img src="/logo.png" alt="Kartie" className="chat-button-logo" />
        </button>
      </div>
      {showChatbot && (
        <div className="chatbot-overlay" onClick={handleCloseChatbot}>
          <div className="chatbot-container" onClick={(e) => e.stopPropagation()}>
            <button className="chatbot-close-button" onClick={handleCloseChatbot}>×</button>
            <BotpressWebchat isOpen={showChatbot} onClose={handleCloseChatbot} />
          </div>
        </div>
      )}
    </>
  )
}

export default ChatButton

