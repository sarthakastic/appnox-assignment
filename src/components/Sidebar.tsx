import {
  CircleHelp,
  Images,
  MessageSquareMore,
  MonitorPlay,
  SquareArrowRight,
} from "lucide-react";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className=" h-screen w-16  flex flex-col justify-between items-center px-5 py-2 border-r">
      <div className="">
        <SquareArrowRight />
      </div>
      <div className="flex flex-col gap-4">
        <Images />
        <div>
          <div className="w-full  flex justify-end">
            <div className="bg-red-500 w-1 h-1  "></div>
          </div>
          <MonitorPlay />
        </div>
        <CircleHelp />
      </div>
      <div>
        <MessageSquareMore
          className={`${
            !location.pathname.includes("results") &&
            "bg-black text-white rounded-full p-1"
          } `}
        />
      </div>
    </div>
  );
};

export default Sidebar;
