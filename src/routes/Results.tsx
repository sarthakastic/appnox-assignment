import { useEffect, useState } from "react";
import imagesData from "../utils/artistImages.json";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Results = () => {
  const [name, setName] = useState("Giorgio De Chirico");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (typeof storedName === "string") {
      setName(storedName);
    }
  }, []);

  return (
    <div className="flex font-inter ">
      <div className="hidden md:flex fixed left-0 h-full">
        <Sidebar />
      </div>
      <div className="md:ml-16 flex-grow  overflow-x-hidden">
        <div className="w-full ">
          <Navbar />
        </div>
        <p className="w-full flex justify-center font-dmserif items-center p-8 md:p-24 text-4xl md:text-7xl">
          {name}
        </p>
        <p className="w-full flex  justify-start items-center font-dmserif p-10 text-2xl md:text-4xl">
          Risultati 1,364
        </p>
        <div className="flex flex-wrap gap-20 justify-around items-center md:m-5">
          {imagesData?.map((data, index) => (
            <ProductCard
              key={index}
              image={data.imagesrc}
              views={data.views}
              productName={data.productName}
              productAddress={data.productAddress}
              imageDescription={data.imagedescription}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
