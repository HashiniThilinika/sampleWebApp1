import React from 'react';
import SliderImage from '../assests/sliderImage.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const HomeSlider = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white">
            <div>
                <div className="flex flex-col justify-center items-left text-black px-4 text-left ml-24 w-3/5">
                    <p className="text-sm md:text-sm font-bold mb-4 mt-32"><div className="bg-color-yellow-400 w-1/10" />LOGISTIC</p>
                    <h1 className="text-4xl md:text-4xl max-w-4xl mb-6 font-roboto">Best Shipping</h1>
                    <h1 className="text-6xl md:text-6xl max-w-6xl mb-6 text-yellow-400 font-roboto">Partner</h1>
                    <p>Amet, tempus egestas facilisis volutpat viverra molestie lobortis posuere maecenas.
                    viverra molestie lobortis posuere maecenas.
                    </p>
                    <button className="bg-yellow-400 py-2 text-xs text-white hover:bg-yellow-700 mt-6 w-1/2">
                    DISCOVER MORE
                    </button>
                </div>
                {/* Navigation Arrows */}
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white cursor-pointer">
                    <ArrowBackIcon size={30} />
                </div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white cursor-pointer">
                    <ArrowForwardIcon size={30} />
                </div>
            </div>
            <div>
                <img src={SliderImage} alt="Shipping Yard" className="w-full h-[500px] object-cover" />
            </div>
        </div>
    )
}

export default HomeSlider;