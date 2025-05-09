import React from 'react';
import { assets } from '../assets/assets';

const Steps = () => {
  return (
    <div className="mt-10 mx-4 py-6 gap-y-10 lg:px-20 xl:px-40">
      <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl bg-gradient-to-r from-gray-900 to-gray-400 text-transparent bg-clip-text leading-tight text-center font-semibold">
        Steps to remove background <br /> image in seconds
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        <div className="flex gap-4 bg-white items-start drop-shadow-md p-7 pb-10 rounded cursor-pointer hover:scale-105 transition-transform">
          <img src={assets.upload_icon} alt="Upload Icon" className="w-10 sm:w-12 lg:w-14" />
          <div>
            <h2 className="text-lg sm:text-xl font-medium">Upload Image</h2>
            <p className="text-sm sm:text-base">Select your image from folder</p>
          </div>
        </div>

        <div className="flex gap-4 bg-white items-start drop-shadow-md p-7 pb-10 rounded cursor-pointer hover:scale-105 transition-transform">
          <img src={assets.remove_bg_icon} alt="Process Icon" className="w-10 sm:w-12 lg:w-14" />
          <div>
            <h2 className="text-lg sm:text-xl font-medium">Process Image</h2>
            <p className="text-sm sm:text-base">AI automatically removes background</p>
          </div>
        </div>

        <div className="flex gap-4 bg-white items-start drop-shadow-md p-7 pb-10 rounded cursor-pointer hover:scale-105 transition-transform">
          <img src={assets.download_icon} alt="Download Icon" className="w-10 sm:w-12 lg:w-14" />
          <div>
            <h2 className="text-lg sm:text-xl font-medium">Download Image</h2>
            <p className="text-sm sm:text-base">Save your edited image instantly</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
