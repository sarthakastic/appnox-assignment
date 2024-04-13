import { Trash } from "lucide-react";

const ImageUploader = ({
  images,
  setImages,
}: {
  images: any;
  setImages: any;
}) => {
  const handleImageChange = (e: any) => {
    const fileList = e.target.files;
    const newImages = Array.from(fileList).map((file: any) =>
      URL.createObjectURL(file)
    );
    setImages([...images, ...newImages]);
  };

  const handleImageDelete = (index: any) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <div className="flex ">
      <div
        className={`relative border-dashed border-2 border-[#A7A6A6]  min-h-40 min-w-40 bg-[#F6F6F6] flex items-center justify-center ${
          images.length === 0 ? "w-full" : "w-40"
        } `}
      >
        <label
          htmlFor="image-upload"
          className="cursor-pointer absolute inset-0 flex items-center justify-center"
        >
          {images.length === 0 ? (
            <p className="text-[#A7A6A6]">CARCIA IMAGINI</p>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-[#A7A6A6]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H4a1 1 0 1 1 0-2h5V4a1 1 0 0 1 1-1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </label>
        <input
          id="image-upload"
          className="hidden"
          type="file"
          multiple
          onChange={handleImageChange}
        />
      </div>
      <div
        className={` ${
          images.length === 0 ? "hidden" : "flex"
        } overflow-x-scroll  min-h-40 min-w-40 max-w-full   h-40 `}
      >
        {images.length > 0 && (
          <div
            className=" left-0 top-0 bottom-0 flex items-center justify-center   z-10"
            onClick={() => {
              const container = document.getElementById("image-container");
              if (container) {
                container.scrollLeft -= 100;
              }
            }}
          >
            <p className="hover:bg-gray-200 border rounded-full p-1 px-2  ">
              &lt;
            </p>
          </div>
        )}
        <div
          id="image-container"
          className="flex overflow-x-scroll flex-nowrap h-full max-w-72 xl:max-w-[640px] "
        >
          {images.map((image: any, index: any) => (
            <div key={index} className=" image-item w-40">
              <img
                src={image}
                alt={`image-${index}`}
                className="image-thumbnail border-2 p-5 min-w-40"
              />
              <button
                type="button"
                onClick={() => handleImageDelete(index)}
                className="delete-button"
              >
                <Trash />
              </button>
            </div>
          ))}
        </div>
        {images.length > 0 && (
          <div
            className=" right-0 top-0 bottom-0 flex items-center justify-center  z-10"
            onClick={() => {
              const container = document.getElementById("image-container");
              if (container) {
                container.scrollLeft += 100;
              }
            }}
          >
            <p className="hover:bg-gray-200 border rounded-full p-1 px-2  ">
              &gt;
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
