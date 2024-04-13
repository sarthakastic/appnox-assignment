import "./App.css";
import Contact from "./components/Contact";
import { AtSign, MessageCircle } from "lucide-react";
import Sidebar from "./components/Sidebar";
import Register from "../src/components/Register";
import { useState } from "react";
import FormSubmitted from "./components/FormSubmitted";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="flex flex-col md:flex-row w-screen justify-around font-inter  ">
      <div className="hidden  fixed md:flex max-w-16 w-fit left-0  ">
        <Sidebar />
      </div>
      {isSubmitted ? (
        <FormSubmitted />
      ) : (
        <>
          <div className=" w-screen md:w-full  md:ml-16 ">
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
