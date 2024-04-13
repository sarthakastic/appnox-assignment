import "./App.css";
import Contact from "./components/Contact";
import { AtSign, Check, MessageCircle } from "lucide-react";
import Sidebar from "./components/Sidebar";
import logo from "./assets/menu_back.png";
import Register from "../src/components/Register";
import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="flex flex-col md:flex-row w-screen justify-around  ">
      <div className="hidden  fixed md:flex max-w-16 w-fit left-0  ">
        <Sidebar />
      </div>
      {isSubmitted ? (
        <div className="flex flex-col w-screen h-screen justify-center items-center">
          <div className="border-2 rounded-full p-4 ">
            <Check />
          </div>
          <h4>Message Inviato</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <Link className="border rounded-full " to="/search">
            Chuidi
          </Link>
        </div>
      ) : (
        <>
          <div className=" w-screen md:w-full md:ml-16 ">
            <Register setIsSubmitted={setIsSubmitted} />
          </div>
          <div className="w-screen h-screen md:w-1/3 flex flex-col ">
            <Contact
              subText="Prefersceri usare Whatsapp?"
              text="+ye737373687399220"
              logo={<MessageCircle />}
            />
            <Contact
              subText="Preferisci inviarci una Email?"
              text="info@mediartrade.com"
              logo={<AtSign />}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
