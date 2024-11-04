import React, { useState, useEffect } from 'react';
import { IoChevronBackOutline } from "react-icons/io5";
import Loading from '../Loding';  

import tennisImage from '../../assets/image/tennis.jpg';
import footballImage from '../../assets/image/football.jpg';
import basketballImage from '../../assets/image/basketball.jpg';
import yogaImage from '../../assets/image/yoga.jpg';
import cricketImage from '../../assets/image/cricket.jpg';
import boxingImage from '../../assets/image/Boxing.jpg';
import hockeyImage from '../../assets/image/hockey.jpg';
import skatingImage from '../../assets/image/skating.jpg';

const games = [
  { id: 1, name: "Tennis", image: tennisImage },
  { id: 2, name: "Basketball", image: basketballImage },
  { id: 3, name: "Football", image: footballImage },
  { id: 4, name: "Yoga", image: yogaImage },
  { id: 5, name: "Cricket", image: cricketImage },
  { id: 6, name: "Boxing", image: boxingImage },
  { id: 7, name: "Hockey", image: hockeyImage },
  { id: 8, name: "Skating", image: skatingImage }
];

const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imagePromises = games.map((game) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = game.image;
        img.onload = resolve;
      });
    });

    Promise.all(imagePromises).then(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="section py-6 w-full">
      <div className="container mx-auto px-4">
        <h4 className="text-xl font-semibold text-gray-800 flex items-center">
          <IoChevronBackOutline className="mr-2 text-blue-700" />
          Popular Sports
        </h4>
      </div>

      <div className="sports w-full mt-8">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {games.map((game) => (
            <div 
              key={game.id} 
              className="relative border-4 border-white rounded-lg shadow-md overflow-hidden h-52 group"
            >
             
              <img 
                src={game.image} 
                alt={game.name} 
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110" 
                loading="lazy" 
              />

             
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300 flex flex-col justify-end items-center p-4">
                <button className="bg-white text-black px-4 py-2 rounded-md shadow-md text-sm font-semibold hover:bg-blue-600 transition mb-1">
                  {game.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
