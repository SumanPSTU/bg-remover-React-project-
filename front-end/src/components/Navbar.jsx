import React from 'react'
import { assets } from './../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between mx-4 py-3 lg:mx-40'>
            <Link to={"/"}>
                <img className='w-32 sm:w-44 cursor-pointer' src={assets.logo} alt="logo" />
            </Link>
            <button className='flex items-center gap-4 bg-zinc-800 text-white py-2 px-3.5 sm:px-6 text-sm  sm:py-3 rounded-full cursor-pointer hover:scale-110 duration-600 transition justify-center'>Get started <img className='w-3 sm:w-4' src={assets.arrow_icon} alt="" /></button>

        </div>
    )
}

export default Navbar
