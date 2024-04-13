import React from "react";

const ProductCard = ({
  image,
  views,
  productName,
  productAddress,
  imageDescription,
}: {
  image: string;
  views: number;
  productName: string;
  productAddress: string;
  imageDescription: string;
}) => {
  return (
    <div className=" max-w-80 text-wrap ">
      <div className="relative text-center ">
        <img src={image} alt="images" />
        <p
          style={{
            position: "absolute",
            top: "10%",
            left: "10%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "10px",
          }}
        >
          {views}
        </p>
      </div>
      <p className="py-5">{imageDescription}</p>
      <p>{productName}</p>
      <p className="font-semibold">{productAddress}</p>
    </div>
  );
};

export default ProductCard;
