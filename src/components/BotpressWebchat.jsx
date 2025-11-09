import { useEffect } from "react";

const BotpressWebchat = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    // Check if scripts already exist
    let script1 = document.querySelector('script[src="https://cdn.botpress.cloud/webchat/v3.3/inject.js"]');
    let script2 = document.querySelector('script[src="https://files.bpcontent.cloud/2025/11/09/08/20251109082400-Z9VU9CID.js"]');

    if (!script1) {
      script1 = document.createElement("script");
      script1.src = "https://cdn.botpress.cloud/webchat/v3.3/inject.js";
      script1.async = true;
      document.body.appendChild(script1);
    }

    if (!script2) {
      script2 = document.createElement("script");
      script2.src = "https://files.bpcontent.cloud/2025/11/09/08/20251109082400-Z9VU9CID.js";
      script2.defer = true;
      document.body.appendChild(script2);
    }

    const initBotpress = () => {
      if (window.botpress) {
        window.botpress.init({
          botId: "b879f717-377c-4dc8-a969-38e9d183e5bc",
          clientId: "2a78665c-b136-44f5-97e7-b6972bba936e",
        });

        window.botpress.on("webchat:ready", () => {
          window.botpress.open();
        });
      }
    };

    // Wait for scripts to load
    if (window.botpress) {
      initBotpress();
    } else {
      script1.onload = () => {
        // Wait a bit for the second script to load
        setTimeout(() => {
          initBotpress();
        }, 100);
      };
    }

    return () => {
      if (window.botpress && window.botpress.close) {
        window.botpress.close();
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return null; // Botpress injects itself into the DOM
};

export default BotpressWebchat;

