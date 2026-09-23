import { Chevron, Video } from "react-ios-icons";
import { assets } from "../assets/assets";
import ChatSection from "../components/ChatSection";
import TypingSection from "../components/TypingSection";
import Liberary from "../components/Liberary";
import { useState } from "react";
import ButtonSection from "../components/ButtonSection";

function ChatPreview() {
  const [dataFromchild, setdataFromchild] = useState();

  const handleDatafromchild = (childData) => {
    console.log(childData);
    setdataFromchild(childData);
  };

  return (
    <div className="w-full flex items-center justify-center p-4">
      {/* iOS Device Frame Container */}
      <div className="w-full max-w-[390px] h-[780px] bg-[#FFFFFF] rounded-[48px] shadow-2xl border-[8px] border-[#1C1C1E] flex flex-col relative overflow-hidden">
        {/* Header */}
        <div className="relative w-full h-[72px] bg-[#F6F6F6]/90 backdrop-blur-md border-b border-[#E5E5EA] flex-shrink-0 z-30">
          {/* Left */}
          <div className="absolute left-3 top-0 h-full flex items-center gap-1">
            <div className="text-[#007AFF] flex items-center -mr-1">
              <Chevron className="-rotate-90 w-6 h-6 stroke-[3]" />
            </div>

            <div className="flex items-center justify-center h-[20px] min-w-[28px] px-1.5 rounded-full bg-[#007AFF]">
              <p className="text-[12px] font-semibold text-white leading-none">
                92
              </p>
            </div>
          </div>

          {/* Center */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1.5 flex flex-col items-center">
            <img
              src={assets.profile}
              className="h-[40px] w-[40px] rounded-full object-cover shadow-sm"
              alt="Profile"
            />

            <div className="flex items-center gap-0.5 mt-0.5">
              <p className="text-[11px] font-medium text-black">boss 😎😍</p>
              <Chevron className="-rotate-90 text-gray-400 w-3 h-3 scale-75" />
            </div>
          </div>

          {/* Right */}
          <div className="absolute right-4 top-0 h-full flex items-center text-[#007AFF]">
            <Video className="w-7 h-7" />
          </div>
        </div>

        {/* Chat */}
        <div className="chat-section flex-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <ChatSection />
        </div>

        {/* Library Modal */}
        <div
          className={`${
            dataFromchild
              ? "liberary-section absolute bottom-0 right-0 left-0 z-40 bg-white"
              : "hidden"
          }`}
        >
          <Liberary />
        </div>

        {/* Footer: Typing bar + Keyboard */}
        <div className="relative flex-shrink-0 flex flex-col bg-[#F6F6F6] border-t border-[#E5E5EA] z-20">
          <div className="typing-section w-full">
            <TypingSection sendDataToparent={handleDatafromchild} />
          </div>
          <ButtonSection />
        </div>
      </div>
    </div>
  );
}

export default ChatPreview;
