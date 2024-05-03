import React, { useState, useEffect } from "react";

const Card = () => {
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch("https://source.unsplash.com/random");
      const data = response.url;
      setImageURL(data);
    };

    const intervalId = setInterval(fetchImage, 5000); // Fetch image every 3 seconds

    fetchImage(); // Initial fetch

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow ">
      {imageURL && ( // Render image only if imageURL is not empty
        <a href="/">
          <img
            className="p-8 rounded-t-lg border-gray-700 bg-gray-800"
            src={imageURL}
            alt="random_image"
          />
        </a>
      )}
      <div className="px-5 pb-5 border-gray-700 bg-gray-800">
        <a href="/">
          <h5 className="text-3xl font-semibold tracking-tight text-white ">
            Random Images
          </h5>
        </a>
      </div>
    </div>
  );
};

export default Card;
