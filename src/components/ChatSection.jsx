import React, { useState } from "react";
import { assets } from "../assets/assets";

function ChatSection() {
  const messages = [
    { text: "Hey! Are we still on for dinner tonight?", sent: true },
    { text: "Let me know whenever you're free!", sent: true },
    { text: "Yeah definitely! Same place as last time?", sent: false },
    { text: "7 PM works for me!", sent: false },
    { text: "7 PM works for me!", sent: false },
    { image: assets.profile, sent: false },
    { text: "7 PM works for me!", sent: false },
    { text: "i am arslan!", sent: false },
    { text: "Yeah definitely! Same place as last time?", sent: false },
    { text: "Hey! Are we still on for dinner tonight?", sent: true },
    { text: "buy brothet hood ", sent: true },
    { text: "Hey! Are we still on for dinner tonight?", sent: true },
    { text: "Hey! Are we still on for dinner tonight?", sent: true },
    { text: "Hey! Are we still on for dinner tonight?", sent: true },
    { text: "Hey! Are we still on for dinner tonight?", sent: true },
    { text: "Hey! Are we still on for dinner tonight?", sent: true },
    { text: "Hey! Are we still on for dinner tonight?", sent: true },
    { text: "Hey! Are we still on for dinner tonight?", sent: true },
    { text: "Hey! Are we still on for dinner tonight?", sent: true },
    { text: "Hey! Are we still on for dinner tonight?", sent: true },
    { text: "Hey! Are we still on for dinner tonight?", sent: true },
  ];

  return (
    <div className="chat-container">
      <style>{`
       .chat-container {
          --bubble-bg: #ffffff;
          background-color: var(--bubble-bg);
          padding: 24px 32px;
          max-width: 440px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 12px;

          /* --- SCROLLING ACTIVE WITH HIDDEN SCROLLBAR --- */
          // height: 600px;
          max-height: 85vh;
          overflow-y: auto;          /* scrolling still works */
          overflow-x: hidden;
          scroll-behavior: smooth;

          /* Hide scrollbar for Firefox */
          scrollbar-width: none;

          /* Hide scrollbar for IE & Edge */
          -ms-overflow-style: none;
        }

        /* Hide scrollbar for Chrome, Safari and Opera */
        .chat-container::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
        }

        .bubble {
          position: relative;
          max-width: 75%;
          padding: 8px 12px;
          font-size: 15px;
          line-height: 1.4;
          word-wrap: break-word;
          border-radius: 20px;
        }

        .bubble::before,
        .bubble::after {
          content: "";
          position: absolute;
          bottom: 0;
          height: 20px;
        }

        /* --- SENT MESSAGE (Right / Blue) --- */
        .bubble-sent {
          align-self: flex-end;
          background-color: #0b93f6;
          color: white;
        }
        .bubble-sent::before {
          right: -7px;
          width: 20px;
          background-color: #0b93f6;
          border-bottom-left-radius: 16px 14px;
        }
        .bubble-sent::after {
          right: -26px;
          width: 26px;
          background-color: var(--bubble-bg);
          border-bottom-left-radius: 10px;
        }

        /* --- RECEIVED MESSAGE (Left / Gray) --- */
        .bubble-received {
          align-self: flex-start;
          background-color: #e5e5ea;
          color: black;
        }
        .bubble-received::before {
          left: -7px;
          width: 20px;
          background-color: #e5e5ea;
          border-bottom-right-radius: 16px 14px;
        }
        .bubble-received::after {
          left: -26px;
          width: 26px;
          background-color: var(--bubble-bg);
          border-bottom-right-radius: 10px;
        }

        /* Remove tail on consecutive messages */
        .bubble.no-tail::before,
        .bubble.no-tail::after {
          display: none;
        }

        .bubble.no-tail {
          margin-bottom: -6px;
        }

        /* --- IMAGE STYLES --- */
        .image-wrapper {
          display: flex;
          max-width: 65%;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .image-sent {
          align-self: flex-end;
        }

        .image-received {
          align-self: flex-start;
        }

        .chat-image {
          width: 100%;
          height: auto;
          max-height: 260px;
          object-fit: cover;
          display: block;
          border-radius: 18px;
        }
      `}</style>

      {messages.map(({ text, image, sent }, i) => {
        const isLastInGroup =
          i === messages.length - 1 || messages[i + 1].sent !== sent;

        if (image) {
          return (
            <div
              key={i}
              className={`image-wrapper ${sent ? "image-sent" : "image-received"}`}
            >
              <img src={image} alt="attachment" className="chat-image" />
            </div>
          );
        }

        return (
          <div
            key={i}
            className={`bubble ${sent ? "bubble-sent" : "bubble-received"} ${
              !isLastInGroup ? "no-tail" : ""
            }`}
          >
            {text}
          </div>
        );
      })}
    </div>
  );
}

export default ChatSection;
