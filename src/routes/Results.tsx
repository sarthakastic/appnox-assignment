import React, { useEffect, useState } from "react";
import imagesData from "../utils/artistImages.json";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Results = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (typeof storedName === "string") {
      setName(storedName);
    }
  }, []);

  return (
    <div className="flex">
      <div className="hidden md:flex fixed left-0">
        <Sidebar />
      </div>
      <div className="md:ml-16">
        <Navbar />
        <p className="w-full flex justify-center items-center p-28 text-7xl ">
          {name}
        </p>
        <p className="w-full flex justify-start items-center md:p-10 text-4xl ">
          Risultati 1,364
        </p>
        <div className="flex flex-wrap gap-20 justify-around items-center m-5  ">
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
