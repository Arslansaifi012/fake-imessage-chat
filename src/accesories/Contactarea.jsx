import { useState } from "react";
import { assets } from "../assets/assets";

const Contactarea = () => {
  const [image, setImage] = useState(false);

  function imageSelector() {}

  return (
    <div className="contact-section ">
      <div className="flex items-center justify-between">
        <p className="font-bold">
          <span className="text-blue-600 italic">01</span> Set the scene
        </p>

        <div>
          <p className="text-gray-400 text-sm">Who are you taling to?</p>
        </div>
      </div>

      <div className="py-10">
        <div className="contact-details flex items-center gap-2">
          <label htmlFor="image-selector" className="cursor-pointer">
            <input
              type="file"
              id="image-selector"
              accept="image/*"
              alt="selected image"
              className="hidden"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />

            <img
              src={!image ? assets.profile : URL.createObjectURL(image)}
              alt="Image Preview"
              className="h-13 w-15 rounded-full object-cover"
            />
          </label>

          {/* <div className="plus-icon">
          </div> */}

          <div className="name-input h-full w-full">
            <p className="text-gray-400 text-xs mb-1">CONTACT NAME</p>
            <input
              type="text"
              placeholder="name"
              className="borde w-full h-[45px] p-2  text-gray-900 placeholder-gray-600 placeholder:text-sm bg-white border border-gray-100 rounded-lg shadow-sm transition duration-150 ease-in-out resize-y focus:outline-none focus:border-indigo-200 focus:ring-2 focus:ring-indigo-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactarea;
