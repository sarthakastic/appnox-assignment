import React from "react";
import imagesData from "../utils/artistImages.json";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Results = () => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div>
        <Navbar />
        <div className="flex flex-wrap gap-10 justify-around items-center mx-5  ">
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
