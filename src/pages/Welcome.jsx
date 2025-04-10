import React from 'react';
import ImageOne from '../assests/image1.jpg'
import ImageTwo from '../assests/image2.jpg'

const Welcome = () => {
  return (
    <section className="w-full px-4 py-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left side - Images and Clients Count */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <div className="relative w-full max-w-md">
            <img
              src={ImageOne}
              alt="Worker with clipboard"
              className="rounded-md w-full h-auto object-cover"
            />
            <div className="absolute top-0 left-0 w-1/2">
              <img
                src={ImageTwo}
                alt="Worker with boxes"
                className="rounded-md object-cover w-full h-48"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-orange-500 text-white p-4 rounded-md shadow-lg">
              <p className="text-xl font-bold">15,350+</p>
              <p className="text-sm">Clients Worldwide</p>
            </div>
          </div>
        </div>

        {/* Right side - Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800">
            TransMax Logistics <br />
            <span className="text-orange-500">Around the World</span>
          </h2>
          <p className="text-gray-600 mt-4">
            Transmax is the world’s driving worldwide coordination supplier —
            we uphold industry and exchange the worldwide trade of merchandise
            through land transport.
          </p>
          <p className="text-gray-600 mt-2">
            Our worth added administrations guarantee the progression of
            products proceeds consistently and supply chains stay lean and
            streamlined for progress.
          </p>
          <button className="mt-6 px-6 py-2 bg-gray-200 hover:bg-gray-200 text-blue-900 shadow text-sm font-medium">
            MORE ABOUT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
