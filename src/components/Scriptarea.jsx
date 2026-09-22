import { useState } from "react";

function Scriptarea() {
  const [textareaValue, setextareaValue] = useState();

  return (
    <div className="mt-8">
      <p className="text-sm text-gray-400">PASTE CONVESATION SCRIPT</p>

      <textarea
        id="message"
        name="message"
        rows="6"
        className="block w-full px-4 py-3 text-gray-900 placeholder-gray-400 placeholder:text-sm bg-white border border-gray-300 rounded-lg shadow-sm transition duration-150 ease-in-out resize-y focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        placeholder="me: boss we added the thing
boss: how does it look?
picture:
boss: WHAT IS THAT"
              value={textareaValue}
        onChange={(e) => setextareaValue(e.target.value)}
      ></textarea>
    </div>
  );
}

export default Scriptarea;
