"use client";
import { useState, useEffect } from 'react';
import PricingCard from '@/components/PricingCard';

export default function Home() {
  const words = [
    'Weddings',
    'Special Events',
    'Birthday',
    'Celebrations',
  ];
  const [idx, setIdx] = useState<number>(0);
  const placeholder = words[idx];

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % words.length), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center font-sans pt-20">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center gap-4 sm:items-start max-w-400">

        <section className="w-full rounded-[10px] overflow-hidden h-[60vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            <div className="flex flex-col justify-center items-start gap-4 p-6 md:p-8 bg-black/60 text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl max-w-100 font-bold">MAKING UNFORGETABLE LOOK EASY</h1>
              <div className="inline-block px-4 py-2 rounded-md text-2xl sm:text-3xl font-semibold" aria-live="polite">{placeholder}</div>
              <div className="mt-4">
                <button className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600"
                  style={{
                    boxShadow: '0px 0px 15px 20px rgba(0,0,50,100)'
                  }}
                >
                  Book Now
                </button>
              </div>
              <p className="text-sm text-gray-200 mt-2">Questions? Give us a call at 1234568902</p>
            </div>

            <div className="p-2">
              <img src="/food.jpg" alt="food" className="object-cover w-full h-full rounded-tl-[50px] rounded-br-[50px] rounded-bl-[10px] rounded-tr-[10px]" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
