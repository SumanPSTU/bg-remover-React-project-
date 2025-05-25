import React from 'react';
import { testimonialsData } from '../assets/assets';
import App from './../App';

const Testimonial = () => {
  return (
    <div>
      {/* title */}
      <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl bg-gradient-to-r from-gray-900 to-gray-400 text-transparent bg-clip-text leading-tight text-center font-semibold">
        Customer Testimonials  
      </h1>

      {/* Testimonial data */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 py-8'>
        {testimonialsData.map((item, index) => (
          <div key={index} className='bg-white rounded-xl p-6 drop-shadow-md max-w-lg m-auto'>
            <p>”</p>
            <p>{item.text}</p>
            <div>
              <img src={item.image} alt="testimonial image" />
              <div>
                <p>{item.author}</p>
                <p>{item.jobTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
