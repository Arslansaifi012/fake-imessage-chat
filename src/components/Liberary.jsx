import { assets } from "../assets/assets";

function Liberary() {
  return (
    <div>
      <ol className="flex item-center justify-center grid grid-cols-3 gap-1">
        <li>
          <img src={assets.image1} alt="" className="h-35 w-40 "/>
        </li>
        <li>
          <img src={assets.image2} alt="" className="h-35 w-40 "/>
        </li>
        <li>
          <img src={assets.image3} alt="" className="h-35 w-40 "/>
        </li>
        <li>
          <img src={assets.image4} alt="" className="h-35 w-40 "/>
        </li>
        <li>
          <img src={assets.image5} alt="" className="h-35 w-40 "/>
        </li>
        <li>
          <img src={assets.image6} alt="" className="h-35 w-40 "/>
        </li>
        <li>
          <img src={assets.image7} alt="" className="h-35 w-40 "/>
        </li>
        <li>
          <img src={assets.image8} alt="" className="h-35 w-40 "/>
        </li>

        <li>
          <img src={assets.image8} alt="" className="h-35 w-40 "/>
        </li>
      </ol>
    </div>
  );
}

export default Liberary;
