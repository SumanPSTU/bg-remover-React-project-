import React from 'react';
import { assets } from './../assets/assets';

const Footer = () => {
  return (
    <footer className="flex flex-wrap flex-col-reverse md:flex-row items-center justify-between mx-4 py-6  gap-y-10 lg:px-20 xl:px-40">
      {/* Logo */}
      <a href="https://yourwebsite.com">
        <img src={assets.logo} alt="Logo" className="w-40" />
      </a>

      

      {/* Copyright Text */}
      <p className="text-gray-600 text-sm border-l-2 ps-2">All rights reserved. Copyright @BG Removal</p>

      {/* Social Icons */}
      <div className="flex items-center gap-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={assets.facebook_icon} alt="Facebook" className="w-9 hover:scale-105 transition duration-300" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={assets.twitter_icon} alt="Twitter" className="w-9 hover:scale-105 transition duration-300" />
        </a>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          <img src={assets.google_plus_icon} alt="Google Plus" className="w-9 hover:scale-105 transition duration-300" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
