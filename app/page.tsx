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
    <div className="flex min-h-screen items-center justify-center font-sans bg-gray-100">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center gap-4 sm:items-start max-w-400 py-4">
        <div className="flex w-full rounded-[15px] p-2 gap-5 justify-center">
          <button className="text-gray-300 hover:text-white hover:cursor-pointer">Home</button>
          <button className="text-gray-300 hover:text-white hover:cursor-pointer">Services</button>
          <button className="text-gray-300 hover:text-white hover:cursor-pointer">Pricing</button>
          <button className="text-gray-300 hover:text-white hover:cursor-pointer">Contact</button>
        </div>
        <section
          className="relative flex w-full items-center justify-center rounded-[25px] overflow-hidden h-[60vh]"
          style={{ backgroundImage: "url('/food.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center text-white px-4 flex justify-center flex-col items-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">CobbleStone Catering</h1>
            <div className=" bg-blue-500 w-130 py-2 flex justify-center rounded-[10px] text-4xl sm:text-5xl font-semibold mb-4 inline-block" aria-live="polite">{placeholder}</div>
            <button className="bg-blue-400 text-white px-6 py-2 rounded-md shadow hover:bg-blue-500">Book Now</button>
            <p className="text-sm text-gray-200 mt-3">Questions? Give us a call at 1234568902</p>
          </div>
        </section>
        <div className="mt-8 grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
          <PricingCard
            monthlyPrice={29}
            planName="0-5 guests"
            benefits={['Up to 50 guests', 'Standard menu', 'Basic decorations']}
            href="#"
          />
          <PricingCard
            monthlyPrice={59}
            planName="6-15 guests"
            benefits={['Up to 200 guests', 'Premium menu', 'Custom decorations', 'Event planning']}
            href="#"
          />
        </div>
      </main>
    </div>
  );
}
