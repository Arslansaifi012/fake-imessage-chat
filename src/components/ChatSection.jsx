import React from "react";


function ChatSection() {
  const messages = [
    { text: "Hey! Are we still on for dinner tonight?", sent: true },
    { text: "Let me know whenever you're free!", sent: true },
    { text: "Yeah definitely! Same place as last time?", sent: false },
    { text: "7 PM works for me!", sent: false },
    { text: "7 PM works for me!", sent: false },
    { text: "7 PM works for me!", sent: false },
    { text: "i am arslan!", sent: false },
    { text: "Yeah definitely! Same place as last time?", sent: false },
    { text: "Hey! Are we still on for dinner tonight?", sent: true },
    { text: "buy brothet hood ", sent: true },
    { text: "Hey! Are we still on for dinner tonight?", sent: true },

  ];

  return (
    <div className="chat-container">
      {/* Scoped CSS to ensure elliptical radii and overlays render 100% reliably */}
      <style>{`
        .chat-container {
          --bubble-bg: #ffffff; /* Must match container background */
          background-color: var(--bubble-bg);
          padding: 24px 32px;  /* 32px padding prevents the 26px mask from sticking out */
          max-width: 440px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .bubble {
          position: relative;
          max-width: 75%;
          padding: 8px 16px;
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

        /* --- REMOVE TAIL FOR CONSECUTIVE MESSAGES --- */
        .bubble.no-tail::before,
        .bubble.no-tail::after {
          display: none;
        }

        /* Optional: groups consecutive bubbles closer together */
        .bubble.no-tail {
          margin-bottom: -10px;
        }
      `}</style>

      {messages.map(({ text, sent }, i) => {
        // True only if this is the final message in a cluster from the same person
        const isLastInGroup =
          i === messages.length - 1 || messages[i + 1].sent !== sent;

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
