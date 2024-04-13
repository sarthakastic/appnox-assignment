import {
  CircleHelp,
  Image,
  Images,
  MessageSquareMore,
  MonitorPlay,
  SendToBack,
  SquareArrowRight,
  Video,
} from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <div className="h-screen w-10  flex flex-col justify-between items-center px-5 py-2 border-r">
      <div className="">
        <SquareArrowRight />
      </div>
      <div className="flex flex-col">
        <Images />
        <MonitorPlay />
        <CircleHelp />
      </div>
      <div>
        <MessageSquareMore className="bg-black text-white rounded-full p-1" />
      </div>
    </div>
  );
};

export default Sidebar;
