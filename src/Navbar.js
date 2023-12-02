import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0044baea-1a03-40e9-816f-90154e9cd58d?" alt="Logo" className="h-8 " />
        </div>
        <div className="flex items-center mx-auto">
          <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-black border border-slate-800 rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search " required/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;