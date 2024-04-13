import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Contact from "./components/Contact";
import { Backpack } from "lucide-react";
import Sidebar from "./components/Sidebar";
import ImageUploader from "./components/ImageUploader";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div>
        <ImageUploader />
      </div>
      <div className="w-screen h-screen flex flex-col  ">
        <Contact
          subText="Prefersceri usare Whatsapp?"
          text="+ye737373687399220"
          logo={<Backpack />}
        />
        <Contact
          subText="Prefersceri usare Whatsapp?"
          text="+ye737373687399220"
          logo={<Backpack />}
        />
      </div>
    </div>
  );
}

export default App;
