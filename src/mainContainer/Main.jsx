import Contactarea from "../accesories/Contactarea"
import SetupPrank from "../accesories/SetupPrank"
import ChatPreview from "../chatPreview/ChatPreview"
import Scriptarea from "../components/Scriptarea";

function Main() {
  return (
    <div  className=" flex items-center justify-around">
      <div className="border-1 border-dashed w-[40%] p-8 bg-white">
        <Contactarea />
        <SetupPrank />
        <Scriptarea />
      </div>

      <ChatPreview />
    </div>
  );
}

export default Main