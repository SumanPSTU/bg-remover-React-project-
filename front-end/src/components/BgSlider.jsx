import React, { useState } from 'react'
import { assets } from '../assets/assets';
import './../slide.css';

const BgSlider = () => {

    const [sliderPosition, setSliderPosition] = useState(50);

 

    const handleSlideChange = (e) => {
        setSliderPosition(e.target.value)
    }

    return (
        <div className='mt-16 mx-4 py-6 gap-y-10 lg:px-20 xl:px-40'>

            <h1 className='text-xl sm:text-2xl lg:text-3xl xl:text-4xl bg-gradient-to-r from-gray-900 to-gray-400 text-transparent bg-clip-text leading-tight text-center font-semibold mb-16'>Remove Background With High <br /> Quality and Accuracy</h1>

            <div className='relative w-full max-w-3xl overflow-hidden m-auto rounded-xl'>

                {/* {background image} */}
                <img src={assets.image_w_bg} style={{clipPath:`inset(0 ${100.2-sliderPosition}% 0 0)`}} alt="img-with-bg" />

                <img className='absolute top-0 right-0 w-full h-full'  src={assets.image_wo_bg} style={{clipPath:`inset(0 0 0 ${sliderPosition}%)`}} alt="img-without-bg" />
                
                <input className='absolute top-1/2 left-1/2 -translate-x-1/2 -trasnlate-y-1/2
                w-full z-10 slider cursor-grab' type="range" min={0} max={100} value={sliderPosition} onChange={handleSlideChange} />

            </div>

        </div>
    )
}

export default BgSlider;
