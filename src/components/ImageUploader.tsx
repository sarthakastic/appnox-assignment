import React, { useState } from "react";

const ImageUploader = () => {
  const [images, setImages] = useState<any>([]);

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
    <div>
      <div className="relative h-52 w-52 bg-stone-400 flex items-center justify-center">
        <label
          htmlFor="image-upload"
          className="cursor-pointer absolute inset-0 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H4a1 1 0 1 1 0-2h5V4a1 1 0 0 1 1-1z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <input
          id="image-upload"
          className="hidden"
          type="file"
          multiple
          onChange={handleImageChange}
        />
      </div>
      <div className="image-upload-container">
        {images.map((image: any, index: any) => (
          <div key={index} className="image-item">
            <img
              src={image}
              alt={`image-${index}`}
              className="image-thumbnail"
            />
            <button
              onClick={() => handleImageDelete(index)}
              className="delete-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H4a1 1 0 1 1 0-2h5V4a1 1 0 0 1 1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
      <button onClick={() => setImages([])}>Clear All</button>
      <button onClick={() => console.log(images)}>Submit</button>
    </div>
  );
};

export default ImageUploader;
