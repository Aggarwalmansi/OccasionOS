'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
const caterers = [
  {
    id: 1,
    name: 'Shree Balaji Caterers',
    location: 'Indore',
    cuisine: 'North Indian',
    pricePerPlate: 350,
    rating: 4.6,
    image: '/caterer1.png',
  },
  {
    id: 2,
    name: 'Didi’s Rasoi',
    location: 'Delhi',
    cuisine: 'Home-style Veg',
    pricePerPlate: 250,
    rating: 4.9,
    image: '/caterer2.png',
  },
  {
    id: 3,
    name: 'Royal Feasts',
    location: 'Lucknow',
    cuisine: 'Multi-cuisine',
    pricePerPlate: 600,
    rating: 4.4,
    image: '/caterer3.png',
  },
];

const CatererPage = () => {
  const occasion = useSearchParams().get('occasion');
  const router = useRouter();

  const handleBooking = (id: number) => {
    router.push(`/booking/confirm?caterer=${id}&occasion=${occasion}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-lime-50 py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 text-orange-700">
      Explore Caterers for <span className="text-amber-500 font-bold">{occasion}</span>
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {caterers.map((caterer) => (
          <div
            key={caterer.id}
            className="bg-white rounded-3xl shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300 overflow-hidden"
          >
            <Image
              src={caterer.image}
              alt={caterer.name}
              width={500}
              height={200}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{caterer.name}</h2>
              <p className="text-sm text-gray-500">📍 {caterer.location}</p>
              <p className="text-sm text-gray-500">🍛 {caterer.cuisine}</p>
              <p className="text-sm text-gray-500">💰 ₹{caterer.pricePerPlate} per plate</p>
              <p className="text-sm text-yellow-600 font-medium mt-1">⭐ {caterer.rating} rating</p>

              <button
                onClick={() => handleBooking(caterer.id)}
                className="mt-5 w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-2.5 rounded-xl font-semibold hover:from-orange-600 hover:to-yellow-500 shadow-md transition-all"
              >
                Book This Caterer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatererPage;

