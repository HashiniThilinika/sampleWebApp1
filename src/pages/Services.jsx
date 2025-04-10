import ImageOne from '../assests/image1.jpg'
import ImageTwo from '../assests/image2.jpg'
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Services = () => (
    <div className='bg-white'>
        <p className="text-lg font-bold text-lime-500">Real Solution, Real Fast!</p>
        <h1 className="text-3xl mt-2 font-roboto">Best Global Logistics Solutions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-3">
            <div className="flex flex-col items-center text-center w-1/2 ml-40">
                <img src={ImageOne} alt="Air Freight Services" className="w-full" />
                <h2 className="text-xl font-bold mt-4">Air Freight Services</h2>
                <p className="mt-2 text-gray-600">At our Auto Service garage, we are fully appreciate how difficult occur it is for people to find.</p>
                <button className="mt-4 py-2 px-4">
                    <ArrowForwardIcon sx={{ backgroundColor: "black", color: 'white', borderRadius: '50%', fontSize: '15px' }} /> Read More
                </button>
            </div>
            <div className="flex flex-col items-center text-center w-1/2 ml-40">
                <img src={ImageTwo} alt="Drone Services" className="w-full" />
                <h2 className="text-xl font-bold mt-4">Drone Services</h2>
                <p className="mt-2 text-gray-600">These are unique and often they differ from one industry to the other. Our logistics expertise.</p>
                <button className="mt-4 py-2 px-4">
                    <ArrowForwardIcon sx={{ backgroundColor: "black", color: 'white', borderRadius: '50%', fontSize: '15px' }} /> Read More
                </button>
            </div>
        </div>
    </div>
);

export default Services;
