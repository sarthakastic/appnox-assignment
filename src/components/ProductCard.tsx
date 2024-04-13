import { Eye } from "lucide-react";

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
          className="flex rounded-full px-2 py-1 text-white gap-1"
          style={{
            position: "absolute",
            top: "10%",
            left: "15%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <Eye /> {views}
        </p>
      </div>
      <p className="py-5">{imageDescription}</p>
      <p>{productName}</p>
      <p className="font-semibold">{productAddress}</p>
    </div>
  );
};

export default ProductCard;
