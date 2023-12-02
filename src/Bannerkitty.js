// BannerKitty.js

import React from 'react';

const BannerKitty = () => {
  return (
    <div className="relative h-[705px] flex items-center justify-center">
      {/* Carousel Container */}
      <div className="carousel-container overflow-hidden w-full">
        {/* Slide 1 */}
        <div
          className="carousel-slide bg-cover bg-center h-[705px] text-white flex items-center justify-center"
          style={{
            backgroundImage: "url('https://www.themusicman.uk/wp-content/uploads/2021/09/cat-organ2-min.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Your Heading 1</h1>
            <p className="text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu</p>
            <div className="space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Button 1</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded">Button 2</button>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        {/* Add more slides as needed */}
      </div>
    </div>
  );
};

export default BannerKitty;
