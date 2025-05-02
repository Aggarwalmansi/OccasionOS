'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const occasionOptions = [
  'Wedding',
  'Birthday',
  'Housewarming',
  'Corporate Event',
  'Puja',
  'Anniversary',
  'Retirement Party',
];

export default function OccasionPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  const handleNext = () => {
    if (selected) {
      router.push(`/booking/caterer?occasion=${encodeURIComponent(selected)}`);
    } else {
      alert('Please select an occasion!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-yellow-50 via-orange-50 to-lime-50 flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-4xl font-bold text-orange-700 mb-10 text-center">
        Select Your Occasion
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-3xl w-full">
        {occasionOptions.map((occasion) => (
          <button
            key={occasion}
            onClick={() => setSelected(occasion)}
            className={`p-4 rounded-2xl shadow-lg font-medium transition-all duration-200 text-sm sm:text-base ${
              selected === occasion
                ? 'bg-gradient-to-r from-orange-500 to-yellow-400 text-white'
                : 'bg-white hover:bg-yellow-100 text-gray-800'
            }`}
          >
            {occasion}
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        className="mt-10 px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-yellow-500 shadow-md transition-all"
      >
        Next ➜
      </button>
    </div>
  );
}
