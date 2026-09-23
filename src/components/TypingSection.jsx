import React, { useState } from "react";
import { Microphone } from "react-ios-icons";

function TypingSection({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    if (onSend) onSend(text);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  const openLiberaryfunction = (e) => {
  
    
    
    
    
  }

  return (
    <div className="w-full bg-[#f9f9fb]/90 backdrop-blur-md border-t border-[#e5e5ea] px-3 py-2">
      <div className="max-w-[440px] mx-auto flex items-center gap-2">
        
        <button
          type="button"
          aria-label="Add attachment"
          onClick={openLiberaryfunction}
          className="h-8 w-8 flex-shrink-0 rounded-full bg-[#e3e3e8] text-[#86868b] hover:bg-[#d6d6dc] active:scale-95 transition-all flex items-center justify-center font-medium text-lg"
        >
          +
        </button>

        <div className="relative flex-1 flex items-center">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="iMessage"
            className="w-full h-9 pl-3.5 pr-10 text-[16px] placeholder-[#8e8e93] bg-white border border-[#c6c6c8] focus:border-[#8e8e93] rounded-full outline-none leading-none transition-colors"
          />

         
          <div className="absolute right-1.5 flex items-center justify-center">
            {text.trim().length > 0 ? (
              <button
                type="button"
                onClick={handleSend}
                aria-label="Send message"
                className="h-7 w-7 rounded-full bg-[#0b93f6] active:bg-[#0077e6] text-white flex items-center justify-center transition-all shadow-sm"
              >
                {/* iOS Send Up-Arrow Icon */}
                <svg
                  className="w-4 h-4 translate-y-[-0.5px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="19" x2="12" y2="5" />
                  <polyline points="5 12 12 5 19 12" />
                </svg>
              </button>
            ) : (
              <button
                type="button"
                aria-label="Dictate"
                className="text-[#8e8e93] hover:text-[#555558] p-1 flex items-center justify-center"
              >
                <Microphone className="text-[18px]" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TypingSection;
