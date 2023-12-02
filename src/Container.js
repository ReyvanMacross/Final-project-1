import React from "react";

const Container = () => {
  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 ml-14 mt-6 mb-6">
      <li className="me-2">
        <a
          href="#"
          className="text-stone-300 text-xl font-black self-center my-auto dark:hover:bg-gray-800 dark:hover:text-white rounded-[50px]"
        >
          All
        </a>
      </li>
      <li className="me-2">
        <a
          href="#"
          className="text-white text-xl font-black bg-pink-500 self-stretch grow items-center pt-2 pb-2 px-2 rounded-[50px] border-[3px] border-solid border-pink-500"
          aria-current="page"
        >
          Cat
        </a>
      </li>
      <li className="me-2">
        <a
          href="#"
          className="text-stone-300 text-xl font-black self-center my-auto dark:hover:bg-gray-800 dark:hover:text-white rounded-[50px]"
        >
          Action
        </a>
      </li>
      <li className="me-2">
        <a
          href="#"
          className="text-stone-300 text-xl font-black self-center my-auto dark:hover:bg-gray-800 dark:hover:text-white rounded-[50px]"
        >
          Adventure
        </a>
      </li>
      <li>
        <a
          className="text-stone-300 text-xl font-black self-center my-auto dark:hover:bg-gray-800 dark:hover:text-white rounded-[50px]"
        >
          Comedy
        </a>
      </li>
    </ul>
  );
};

export default Container;
