import "./App.css";
import Contact from "./components/Contact";
import { Backpack } from "lucide-react";
import Sidebar from "./components/Sidebar";
import ImageUploader from "./components/ImageUploader";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="flex  ">
      <div>
        <Sidebar />
      </div>
      <div className="w-full">
        <ContactUs />
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
