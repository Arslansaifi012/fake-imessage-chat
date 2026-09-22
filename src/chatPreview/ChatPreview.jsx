import { Chevron, Video } from "react-ios-icons";
import { assets } from "../assets/assets";
import ChatSection from "../components/ChatSection";
import TypingSection from "../components/TypingSection";

function ChatPreview() {
  return (
    <div className="border border-dashed w-[50%] p-8 flex items-center justify-center">
      <div className="w-[50%] bg-[#F8F8FA]">
        {/* Header */}
        <div className="relative w-full h-[88px] border-b border-gray-300">
          {/* Left */}
          <div className="absolute left-3 top-0 h-full flex items-center gap-2">
            <div className="rotate-[270deg] text-[#087CFF]">
              <Chevron />
            </div>

            <div className="flex items-center justify-center h-6 min-w-9 px-2 rounded-full bg-[#087CFF]">
              <p className="text-sm text-white">92</p>
            </div>
          </div>

          {/* Center */}
          <div className="absolute left-1/2 -translate-x-1/2 top-2 flex flex-col items-center">
            <img
              src={assets.profile}
              className="h-[52px] w-[52px] rounded-full object-cover"
              alt="Profile"
            />

            <div className="flex items-center gap-1">
              <p className="text-xs text-black">boss 😎😍</p>

              <Chevron className="rotate-[90deg] text-gray-400" />
            </div>
          </div>

          {/* Right */}
          <div className="absolute right-5 top-0 h-full flex items-center text-[#087CFF]">
            <Video />
          </div>
        </div>

        {/* Chat */}
        <div className="chat-section">
          <ChatSection />
        </div>

        {/* Typing */}
        <div className="typing-section">
          <TypingSection />

        </div>
      </div>
    </div>
  );
}

export default ChatPreview;
