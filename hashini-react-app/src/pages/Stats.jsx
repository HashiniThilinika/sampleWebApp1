import React from 'react';

const StatsSection = () => (
    <div className="flex justify-center items-center py-12 bg-white shadow-2xl rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {/* Stat: Delivered Packages */}
            <div className="relative flex flex-col items-center">
                {/* Shadow Number */}
                <p className="absolute text-6xl font-extrabold text-gray-400 opacity-20 -top-2">890</p>
                {/* Foreground Number */}
                <p className="relative text-4xl font-extrabold text-blue-700">890</p>
                <p className="text-lg font-medium text-gray-600">Delivered packages</p>
            </div>
            {/* Stat: Countries Covered */}
            <div className="relative flex flex-col items-center">
                <p className="absolute text-6xl font-extrabold text-gray-400 opacity-20 -top-2">137</p>
                <p className="relative text-4xl font-extrabold text-blue-700">137</p>
                <p className="text-lg font-medium text-gray-600">Countries covered</p>
            </div>
            {/* Stat: Tons of Goods */}
            <div className="relative flex flex-col items-center">
                <p className="absolute text-6xl font-extrabold text-gray-400 opacity-20 -top-2">740</p>
                <p className="relative text-4xl font-extrabold text-blue-700">740</p>
                <p className="text-lg font-medium text-gray-600">Tons of Goods</p>
            </div>
            {/* Stat: Satisfied Clients */}
            <div className="relative flex flex-col items-center">
                <p className="absolute text-6xl font-extrabold text-gray-400 opacity-20 -top-2">600</p>
                <p className="relative text-4xl font-extrabold text-blue-700">600</p>
                <p className="text-lg font-medium text-gray-600">Satisfied Clients</p>
            </div>
        </div>
    </div>

    //   <div className="flex justify-center items-center py-12 bg-white shadow-2xl rounded-xl">
    //     <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
    //       {/* Stat: Delivered Packages */}
    //       <div className="flex flex-col items-center">
    //         <p className="text-4xl font-extrabold text-blue-700">890</p>
    //         <p className="text-lg font-medium text-gray-600">Delivered packages</p>
    //       </div>
    //       {/* Stat: Countries Covered */}
    //       <div className="flex flex-col items-center">
    //         <p className="text-4xl font-extrabold text-blue-700">137</p>
    //         <p className="text-lg font-medium text-gray-600">Countries covered</p>
    //       </div>
    //       {/* Stat: Tons of Goods */}
    //       <div className="flex flex-col items-center">
    //         <p className="text-4xl font-extrabold text-blue-700">740</p>
    //         <p className="text-lg font-medium text-gray-600">Tons of Goods</p>
    //       </div>
    //       {/* Stat: Satisfied Clients */}
    //       <div className="flex flex-col items-center">
    //         <p className="text-4xl font-extrabold text-blue-700">600</p>
    //         <p className="text-lg font-medium text-gray-600">Satisfied Clients</p>
    //       </div>
    //     </div>
    //   </div>
);

export default StatsSection;
