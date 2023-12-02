// Gallery.js
import { Link } from 'react-router-dom';
import React from "react";

const Gallery = () => {
  return (
    
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
  {/* <!-- Card 1 --> */}
  <Link to="/Cat">
  <div class="bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105">
    <img src="https://placekitten.com/200/287" alt="Image 1" class="w-full h-auto rounded-md mb-4"/>
    <h2 class="text-lg font-semibold mb-2">Card 1</h2>
    <p>This is the description for card 1.</p>
  </div>
  </Link>

  {/* <!-- Card 2 --> */}
  <div class="bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105">
    <img src="https://placekitten.com/200/287" alt="Image 2" class="w-full h-auto rounded-md mb-4"/>
    <h2 class="text-lg font-semibold mb-2">Card 2</h2>
    <p>This is the description for card 2.</p>
  </div>

  {/* <!-- Card 3 --> */}
  <div class="bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105">
    <img src="https://placekitten.com/200/287" alt="Image 3" class="w-full h-auto rounded-md mb-4"/>
    <h2 class="text-lg font-semibold mb-2">Card 3</h2>
    <p>This is the description for card 3.</p>
  </div>

  {/* <!-- Card 4 --> */}
  <div class="bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105">
    <img src="https://placekitten.com/200/287" alt="Image 4" class="w-full h-auto rounded-md mb-4"/>
    <h2 class="text-lg font-semibold mb-2">Card 4</h2>
    <p>This is the description for card 4.</p>
  </div>

  {/* <!-- Card 5 --> */}
  <div class="bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105">
    <img src="https://placekitten.com/200/287" alt="Image 5" class="w-full h-auto rounded-md mb-4"/>
    <h2 class="text-lg font-semibold mb-2">Card 5</h2>
    <p>This is the description for card 5.</p>
  </div>

  {/* <!-- Card 6-10 (flex-grow) --> */}
  <div class="sm:flex flex-col bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105">
    <img src="https://placekitten.com/200/287" alt="Image 6" class="w-full h-auto rounded-md mb-4"/>
    <h2 class="text-lg font-semibold mb-2">Card 6</h2>
    <p>This is the description for card 6.</p>
  </div>
  <div class="sm:flex flex-col bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105">
    <img src="https://placekitten.com/200/287" alt="Image 7" class="w-full h-auto rounded-md mb-4"/>
    <h2 class="text-lg font-semibold mb-2">Card 7</h2>
    <p>This is the description for card 7.</p>
  </div>
  <div class="sm:flex flex-col bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105">
    <img src="https://placekitten.com/200/287" alt="Image 8" class="w-full h-auto rounded-md mb-4"/>
    <h2 class="text-lg font-semibold mb-2">Card 8</h2>
    <p>This is the description for card 8.</p>
  </div>
  <div class="sm:flex flex-col bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105">
    <img src="https://placekitten.com/200/287" alt="Image 9" class="w-full h-auto rounded-md mb-4"/>
    <h2 class="text-lg font-semibold mb-2">Card 9</h2>
    <p>This is the description for card 9.</p>
  </div>
  <div class="sm:flex flex-col bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105">
    <img src="https://placekitten.com/200/287" alt="Image 10" class="w-full h-auto rounded-md mb-4"/>
    <h2 class="text-lg font-semibold mb-2">Card 10</h2>
    <p>This is the description for card 10.</p>
  </div>

  {/* <!-- Card 11-15 (flex-grow) --> */}
  <div class="md:flex flex-col bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105">
    <img src="https://placekitten.com/200/287" alt="Image 11" class="w-full h-auto rounded-md mb-4"/>
    <h2 class="text-lg font-semibold mb-2">Card 11</h2>
    <p>This is the description for card 11.</p>
  </div>
  <div class="md:flex flex-col bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105">
    <img src="https://placekitten.com/200/287" alt="Image 12" class="w-full h-auto rounded-md mb-4"/>
    <h2 class="text-lg font-semibold mb-2">Card 12</h2>
    <p>This is the description for card 12.</p>
  </div>
  <div class="md:flex flex-col bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105">
    <img src="https://placekitten.com/200/287" alt="Image 13" class="w-full h-auto rounded-md mb-4"/>
    <h2 class="text-lg font-semibold mb-2">Card 13</h2>
    <p>This is the description for card 13.</p>
  </div>
  <div class="md:flex flex-col bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105">
    <img src="https://placekitten.com/200/287" alt="Image 14" class="w-full h-auto rounded-md mb-4"/>
    <h2 class="text-lg font-semibold mb-2">Card 14</h2>
    <p>This is the description for card 14.</p>
  </div>
  <div class="md:flex flex-col bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105">
    <img src="https://placekitten.com/200/287" alt="Image 15" class="w-full h-auto rounded-md mb-4"/>
    <h2 class="text-lg font-semibold mb-2">Card 15</h2>
    <p>This is the description for card 15.</p>
  </div>
</div>
  );
};

export default Gallery;
