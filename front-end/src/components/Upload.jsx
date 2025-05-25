import React from 'react';
import { assets } from '../assets/assets';

const Upload = () => {
    return (
        <div className='bg-gray-100 py-6 flex justify-center flex-col items-center'>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-500 text-transparent bg-clip-text leading-tight text-center">
                See the magic. Try now
            </h1>
            <div className="mt-12">
                <input type="file" id="upload1" hidden />
                <label 
                    className="inline-flex gap-3 px-6 sm:px-8 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full cursor-pointer hover:scale-105 transition duration-500 items-center"
                    htmlFor="upload1"
                >
                    <img src={assets.upload_btn_icon} alt="Upload Icon" className="w-5 sm:w-6" />
                    <p className="text-white text-sm sm:text-md">Upload your image</p>
                </label>
            </div>
        </div>
    );
}

export default Upload;
