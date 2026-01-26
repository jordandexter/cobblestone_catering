"use client";
import { Coffee } from "lucide-react";

export default function Header() {
    return (
        <header className="fixed top-4 left-0 right-0 z-50 pointer-events-none ">
            <div className="mx-auto w-full max-w-400 px-4 flex items-center justify-between">
                <div className="pointer-events-auto flex items-center gap-3">
                    <div className="bg-accent-yellow backdrop-blur rounded-md p-2 shadow">
                        <Coffee size={28} className="text-slate-800" />
                    </div>
                </div>

                <div className="pointer-events-auto flex items-center gap-3">
                    <div className="bg-white/90 backdrop-blur rounded-full px-3 py-1 shadow-md flex gap-2 items-center">
                        <button className="text-slate-700 hover:text-slate-900 px-3 py-1 rounded-md">Home</button>
                        <button className="text-slate-700 hover:text-slate-900 px-3 py-1 rounded-md">Services</button>
                        <button className="text-slate-700 hover:text-slate-900 px-3 py-1 rounded-md">Pricing</button>
                        <button className="text-slate-700 hover:text-slate-900 px-3 py-1 rounded-md">Contact</button>
                    </div>

                    <button
                        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md shadow-[0_8px_24px_rgba(147,197,253,0.35)] hover:bg-blue-600 pointer-events-auto"
                        style={{ boxShadow: '0 8px 24px rgba(147,197,253,0.35)' }}
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </header>
    );
}
