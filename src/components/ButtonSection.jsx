import React, { useState } from "react";

function ButtonSection() {
  const [text, setText] = useState("");
  const [isUpperCase, setIsUpperCase] = useState(false);

  // iOS 3-row QWERTY base (lowercase)
  const rows = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
  ];

  // Self-contained key handlers
  const handleKeyClick = (letter) => {
    const char = isUpperCase ? letter.toUpperCase() : letter.toLowerCase();
    setText((prev) => prev + char);
  };

  const handleBackspace = () => {
    setText((prev) => prev.slice(0, -1));
  };

  const handleSpace = () => {
    setText((prev) => prev + " ");
  };

  const handleReturn = () => {
    setText((prev) => prev + "\n");
  };

  return (
    <div className="w-full max-w-[440px] mx-auto flex flex-col gap-2">
      {/* Self-contained Display / Output Area */}
   

      {/* iOS Keyboard Container */}
      <div className="w-full select-none bg-[#d1d5db] px-1.5 pt-2 pb-5 flex flex-col gap-2.5 rounded-b-2xl">
        {/* Row 1: Q - P */}
        <div className="flex justify-center gap-1.5 w-full">
          {rows[0].map((letter) => {
            const displayChar = isUpperCase ? letter.toUpperCase() : letter;
            return (
              <button
                key={letter}
                type="button"
                onClick={() => handleKeyClick(letter)}
                className="flex-1 max-w-[38px] h-[44px] bg-white active:bg-[#b0b3b8] text-black text-[22px] font-normal rounded-[6px] shadow-[0_1px_0px_0px_rgba(0,0,0,0.35)] flex items-center justify-center transition-colors active:scale-95"
              >
                {displayChar}
              </button>
            );
          })}
        </div>

        {/* Row 2: A - L */}
        <div className="flex justify-center gap-1.5 w-full px-4">
          {rows[1].map((letter) => {
            const displayChar = isUpperCase ? letter.toUpperCase() : letter;
            return (
              <button
                key={letter}
                type="button"
                onClick={() => handleKeyClick(letter)}
                className="flex-1 max-w-[38px] h-[44px] bg-white active:bg-[#b0b3b8] text-black text-[22px] font-normal rounded-[6px] shadow-[0_1px_0px_0px_rgba(0,0,0,0.35)] flex items-center justify-center transition-colors active:scale-95"
              >
                {displayChar}
              </button>
            );
          })}
        </div>

        {/* Row 3: Shift + Z - M + Backspace */}
        <div className="flex justify-center gap-1.5 w-full">
          {/* Shift Key */}
          <button
            type="button"
            aria-label="Shift"
            onClick={() => setIsUpperCase((prev) => !prev)}
            className={`flex-[1.4] h-[44px] rounded-[6px] shadow-[0_1px_0px_0px_rgba(0,0,0,0.35)] flex items-center justify-center active:scale-95 transition-all ${
              isUpperCase
                ? "bg-white text-black"
                : "bg-[#abb0b8] active:bg-white text-black"
            }`}
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 4l-7 8h4v8h6v-8h4l-7-8z" />
            </svg>
          </button>

          {rows[2].map((letter) => {
            const displayChar = isUpperCase ? letter.toUpperCase() : letter;
            return (
              <button
                key={letter}
                type="button"
                onClick={() => handleKeyClick(letter)}
                className="flex-1 max-w-[38px] h-[44px] bg-white active:bg-[#b0b3b8] text-black text-[22px] font-normal rounded-[6px] shadow-[0_1px_0px_0px_rgba(0,0,0,0.35)] flex items-center justify-center transition-colors active:scale-95"
              >
                {displayChar}
              </button>
            );
          })}

          {/* Backspace Key */}
          <button
            type="button"
            aria-label="Delete"
            onClick={handleBackspace}
            className="flex-[1.4] h-[44px] bg-[#abb0b8] active:bg-white text-black rounded-[6px] shadow-[0_1px_0px_0px_rgba(0,0,0,0.35)] flex items-center justify-center active:scale-95 transition-all"
          >
            <svg
              className="w-6 h-6 stroke-current fill-none stroke-[2]"
              viewBox="0 0 24 24"
            >
              <path d="M21 4H8l-6 8 6 8h13a1 1 0 001-1V5a1 1 0 00-1-1z" />
              <line x1="17" y1="9" x2="11" y2="15" />
              <line x1="11" y1="9" x2="17" y2="15" />
            </svg>
          </button>
        </div>

        {/* Row 4: 123, Spacebar, Return */}
        <div className="flex justify-center gap-1.5 w-full mt-0.5">
          <button
            type="button"
            className="flex-[1.3] h-[44px] bg-[#abb0b8] active:bg-white text-black text-[15px] font-medium rounded-[6px] shadow-[0_1px_0px_0px_rgba(0,0,0,0.35)] flex items-center justify-center"
          >
            123
          </button>
          <button
            type="button"
            onClick={handleSpace}
            className="flex-[4] h-[44px] bg-white active:bg-[#b0b3b8] text-[#8e8e93] text-[15px] rounded-[6px] shadow-[0_1px_0px_0px_rgba(0,0,0,0.35)] flex items-center justify-center active:scale-95 transition-all"
          >
            space
          </button>
          <button
            type="button"
            onClick={handleReturn}
            className="flex-[1.5] h-[44px] bg-[#abb0b8] active:bg-white text-black text-[15px] font-medium rounded-[6px] shadow-[0_1px_0px_0px_rgba(0,0,0,0.35)] flex items-center justify-center active:scale-95 transition-all"
          >
            return
          </button>
        </div>
      </div>
    </div>
  );
}

export default ButtonSection;
