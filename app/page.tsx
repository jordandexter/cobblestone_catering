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
    <div className="flex min-h-screen justify-center font-sans pt-20">
      <button className="bg-accent-yellow hover:bg-accent-yellow-hover text-gray-700 font-bold px-5 py-2 rounded-md h-10 w-50 absolute bottom-4 translate-y-1/2 z-999"
        style={{
        }}
      >
        Book Now
      </button>

      <main className="flex w-full flex-col gap-4 max-w-400">
        <section className="relative w-full rounded-[10px] h-[60vh] min-h-[calc(100vh-6rem)]"
          style={{
            backgroundImage: "url('food.jpg')"
          }}>
          <div className='absolute inset-0 pointer-event-none bg-black/10 z-10' />
          <div className="relative flex justify-start items-end h-full z-20 sticky">
            <div className="flex flex-col justify-center items-start gap-4 p-6 md:p-8 text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#e9dab0] max-w-100 font-bold">MAKE UNFORGETABLE LOOK EASY.</h1>
              <div className="mt-4">
                <button className="bg-accent-yellow hover:bg-accent-yellow-hover text-gray-700 font-bold px-5 py-2 rounded-md"
                  style={{
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
