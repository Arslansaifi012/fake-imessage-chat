import { useState } from "react";

const SetupThePrankVideo = () => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);

  const [promptValue, setpromptValue] = useState("");
  const [pranktypeValue, setprankTypeVlaue] = useState("");
  const [pictureValue, setPictureVlaue] = useState(3);
  const [appScreenVlaue, setappScreenvalue] = useState(4.25);
  const [pausefatreValue, setpauseafteVlaue] = useState(0.5);

  return (
    <div className="parent-section flex items-center justify-center ">
      <div className="setupTheprankvideo bg-[#FAF9F7] p-5 rounded-3xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-[#151515] font-bold font-sans">
            Set up the prank video
          </h3>

          <p className="text-sm text-gray-600">9:16 vertical export</p>
        </div>

        {/* Images + Prompt */}
        <div className="imagepreview-setup flex flex-wrap items-center gap-5">
          {/* Edited Image */}
          <label htmlFor="edited-image" className="cursor-pointer shrink-0">
            <input
              type="file"
              id="edited-image"
              accept="image/*"
              className="hidden"
              onChange={(e) => setImage1(e.target.files[0])}
            />

            {!image1 ? (
              <div className="h-35 w-35 flex items-center justify-center bg-[#F0EDE8] border border-dashed rounded-2xl">
                <p className="text-gray-500 text-center">
                  + Edited prank picture
                </p>
              </div>
            ) : (
              <img
                src={URL.createObjectURL(image1)}
                alt="Edited prank"
                className="object-cover h-50 w-50 rounded-2xl"
              />
            )}
          </label>

          {/* Original Image */}
          <label htmlFor="original-image" className="cursor-pointer shrink-0">
            <input
              type="file"
              id="original-image"
              accept="image/*"
              className="hidden"
              onChange={(e) => setImage2(e.target.files[0])}
            />

            {!image2 ? (
              <div className="h-35 w-35 flex items-center justify-center bg-[#F0EDE8] border border-dashed rounded-2xl">
                <p className="text-gray-500 text-center">
                  + Original prank picture
                </p>
              </div>
            ) : (
              <img
                src={URL.createObjectURL(image2)}
                alt="Original prank"
                className="object-cover h-50 w-50 rounded-2xl"
              />
            )}
          </label>

          {/* Prompt */}
          <div className="w-full sm:w-auto">
            <input
              type="text"
              id="promptInput"
              placeholder="Enter prompt"
              className="border border-gray-400 rounded-2xl h-10 w-full sm:w-80 px-3"
              value={promptValue}
              onChange={(e) => setpromptValue(e.target.value)}
            />
          </div>
        </div>

        {/* Video Customization */}
        <div className="video-customization-section flex flex-wrap items-center gap-4 mt-5">
          {/* Prank Type */}
          <div>
            <p className="text-gray-400 text-xs mb-1">PRANK TYPE</p>

            <select
              name="video"
              id="choose-type"
              className="border border-gray-400 h-10 w-40 rounded-2xl px-3"
              value={pranktypeValue}
              onChange={(e) => setprankTypeVlaue(e.target.value)}
            >
              <option value="image">Image</option>
              <option value="video">Video</option>
            </select>
          </div>

          {/* Picture */}
          <div>
            <p className="text-gray-400 text-xs mb-1">PICTURE</p>

            <input
              type="number"
              className="border border-gray-400 rounded-2xl h-10 w-40 px-3"
              value={pictureValue}
              onChange={(e) => setPictureVlaue(e.target.value)}
            />
          </div>

          {/* AI App Screen */}
          <div>
            <p className="text-gray-400 text-xs mb-1">AI APP SCREEN</p>

            <input
              type="number"
              className="border border-gray-400 rounded-2xl h-10 w-40 px-3"
              value={appScreenVlaue}
              onChange={(e) => setappScreenvalue(e.target.value)}
            />
          </div>

          {/* Pause After */}
          <div>
            <p className="text-gray-400 text-xs mb-1">PAUSE AFTER</p>

            <input
              type="number"
              value={pausefatreValue}
              onChange={(e) => setpauseafteVlaue(e.target.value)}
              className="border border-gray-400 min-[1] max-[3]:: rounded-2xl h-10 w-40 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Button */}
        <div>
          <button className="bg-[#087CFF] text-white px-5 h-10 rounded-2xl mt-5">
            Export full preview ↓
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetupThePrankVideo;
