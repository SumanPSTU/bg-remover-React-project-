import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className="flex flex-wrap flex-col-reverse sm:flex-row mx-4 py-6 mt-10 gap-y-10 lg:px-20 xl:px-40 justify-center items-center">

      {/* Left div */}
      <div className="w-full sm:w-1/2 px-4 max-sm:px-2 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-neutral-700 text-left ">
          Remove the <br/> 
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent me-1 pe-1.5">
            background
          </span> 
          from <br />images for free.
        </h1>
        <p className="mt-4 text-sm sm:text-md lg:text-lg text-gray-600 text-left">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus sit nulla ducimus accusantium amet sint quos voluptatum aliquam ratione maxime.
        </p>

        <div className="mt-6">
          <input type="file" name="" id="upload1" hidden />
          <label className="inline-flex gap-3 px-6 sm:px-8 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full cursor-pointer hover:scale-105 transition duration-500 items-center duration-300" htmlFor="upload1 ">
            <img src={assets.upload_btn_icon} alt="" className="w-5 sm:w-6" />
            <p className="text-white text-sm sm:text-md">Upload your image</p>
          </label>
        </div>
      </div>

      {/* Right div */}
      <div className="w-full sm:w-1/2 flex justify-center">
        <img src={assets.header_img} alt="" className="max-w-full sm:max-w-[90%] lg:max-w-[80%] hover:scale-108 duration-500" />
      </div>

    </div>
  )
}

export default Header
