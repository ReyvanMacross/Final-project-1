import React from "react";

const Containerkitty = () => {
  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 ml-14 mt-6 mb-6">
      
      <li className="me-2">
        <a
          href="#"
          className="text-white text-xl font-black bg-pink-500 self-stretch grow items-center pt-2 pb-2 px-2 rounded-[50px] border-[3px] border-solid border-pink-500"
          aria-current="page"
        >
          Overview
        </a>
      </li>
      <li className="me-2">
        <a
          href="#"
          className="text-stone-300 text-xl font-black self-center my-auto dark:hover:bg-gray-800 dark:hover:text-white rounded-[50px]"
        >
          Character
        </a>
      </li>
      <li className="me-2">
        <a
          href="#"
          className="text-stone-300 text-xl font-black self-center my-auto dark:hover:bg-gray-800 dark:hover:text-white rounded-[50px]"
        >
          Review
        </a>
      </li>
      
    </ul>
  );
};

export default Containerkitty;
