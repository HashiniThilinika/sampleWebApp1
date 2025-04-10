import React from 'react';
import ImageOne from '../assests/image1.jpg';

const Card = ({ image, date, title, admin, comments, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-3/4 ml-32 flex flex-row">
      <div className="relative">
        <img className="w-full" src={image} alt="Card visual" />
        <div className="absolute top-3 left-3 bg-yellow-600 text-white px-2 py-1 rounded text-xs">
          {date}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-blue-900 text-lg text-left">{title}</h3>
        <div className="text-gray-500 text-sm flex items-left gap-2 my-2">
          <span>{admin}</span>
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8h2a2 2 0 012 2v9a2 2 0 01-2 2H7a2 2 0 01-2-2v-9a2 2 0 012-2h2M12 3v11m-4-4h8"
              />
            </svg>
            {comments}
          </span>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

const News = () => {
  const cardsData = [
    {
      image: ImageOne,
      date: '26 MAY',
      title: 'CURABITUR LOREM UISM QUIS',
      admin: 'Admin',
      comments: 15,
      description: 'Pellentesque habitant morbi tristique senectus...',
    },
    {
      image: ImageOne,
      date: '27 MAY',
      title: 'VESTIBULUM MATTIS NISI',
      admin: 'Editor',
      comments: 10,
      description: 'Donec nec justo eget felis facilisis fermentum...',
    },
    {
      image: ImageOne,
      date: '28 MAY',
      title: 'LOREM IPSUM DOLOR',
      admin: 'Guest',
      comments: 5,
      description: 'Aliquam lorem ante, dapibus in, viverra quis...',
    },
    {
      image: ImageOne,
      date: '29 MAY',
      title: 'NULLA CONSEQUAT MASSA',
      admin: 'Admin',
      comments: 8,
      description: 'Quisque rutrum. Aenean imperdiet. Etiam ultricies...',
    },
  ];

  return (
    <div className="p-4 mt-2 mb-2 bg-white">
      <p className="text-lg font-bold text-blue-900">LATEST NEWS</p>
      <h1 className="text-xs mb-6 text-gray-400">INTEGER CONGUE ELIT</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default News;
