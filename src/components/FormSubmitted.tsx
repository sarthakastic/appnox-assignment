import { Check } from "lucide-react";

import { Link } from "react-router-dom";

const FormSubmitted = () => {
  return (
    <div>
      <div className="flex flex-col w-screen h-screen justify-center gap-5 items-center text-center font-inter ">
        <div className="border-2 rounded-full p-4 ">
          <Check />
        </div>
        <h4 className="font-dmserif text-2xl md:text-6xl ">Message Inviato</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <Link className="border-2 border-black p-2 rounded-full " to="/search">
          Chuidi
        </Link>
      </div>
    </div>
  );
};

export default FormSubmitted;
