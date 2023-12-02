// Header.js

import React, { useState, useEffect } from 'react';

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://t3.ftcdn.net/jpg/03/66/87/62/360_F_366876295_wD9iae2SEfw3GB1sRDLjOMXmWwEWJ426.jpg',
    'https://t3.ftcdn.net/jpg/03/66/87/62/360_F_366876295_wD9iae2SEfw3GB1sRDLjOMXmWwEWJ426.jpg',
    'https://t3.ftcdn.net/jpg/03/66/87/62/360_F_366876295_wD9iae2SEfw3GB1sRDLjOMXmWwEWJ426.jpg',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  return (
    <div className="relative">
      <img
        className="object-cover w-full h-96 transition-transform duration-500 transform"
        src={images[currentIndex]}
        alt="image"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between">
        <button
          className="bg-gray-800 text-white p-2 rounded-full"
          onClick={() =>
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
          }
        >
          &lt;
        </button>
        <button
          className="bg-gray-800 text-white p-2 rounded-full"
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Header;
