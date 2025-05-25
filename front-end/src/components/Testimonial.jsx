import React from 'react';
import { testimonialsData } from '../assets/assets';

const Testimonial = () => {
  return (
    <div className="bg-gray-100 py-12">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-500 text-transparent bg-clip-text leading-tight text-center">
        Customer Testimonials  
      </h1>

      {/* Testimonial Data */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6 py-10">
        {testimonialsData.map((item) => (
          <article key={item.id} className="bg-white rounded-xl p-6 shadow-lg transform transition duration-300 hover:scale-105">
            <blockquote className="text-md text-gray-700  border-l-3 pl-4 border-gray-400">
              “{item.text}”
            </blockquote>
            <div className="flex items-center gap-4 mt-6">
              <img className="w-12 h-12 rounded-full object-cover border-2 border-gray-300 hover:scale-107 transition-all duration-300" src={item.image} alt={`Photo of ${item.author}`} />
              <div>
                <p className="text-lg font-semibold">{item.author}</p>
                <p className="text-sm text-gray-500">{item.jobTitle}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
