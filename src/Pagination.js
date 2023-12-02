import React from 'react';

const Pagination = () => {
    return (
        <div className="flex items-center justify-center space-x-4 mb-6">
            <a href="#" className="flex items-center justify-center w-10 h-10 text-xl text-gray-500 bg-gray-300 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                </svg>
            </a>

            <a href="#" className="w-10 h-10 flex items-center justify-center text-xl text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                1
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center text-xl text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                2
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center text-xl text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                3
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center text-xl text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                4
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center text-xl text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                5
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center text-xl text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                6
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center text-xl text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </a>
        </div>
    );
}

export default Pagination;
