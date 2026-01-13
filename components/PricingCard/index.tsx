"use client";
import Link from "next/link";
import { Check } from "lucide-react";

interface PricingCardProps {
    monthlyPrice: number | string;
    planName: string;
    benefits: string[];
    href: string;
}

export default function PricingCard({ monthlyPrice, planName, benefits, href }: PricingCardProps) {
    return (
        <div className="w-full max-w-sm rounded-lg border border-white/10 bg-black p-6 text-white">
            <div className="mb-4">
                <div className="text-sm text-white">{planName}</div>
                <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-3xl text-white font-extrabold">${monthlyPrice}</span>
                    <span className="text-sm text-gray-300">/ month</span>
                </div>
            </div>

            <ul className="mb-6 space-y-2">
                {benefits.map((b, i) => (
                    <li key={i} className="text-sm text-gray-200 flex items-center gap-2">
                        <Check className="h-4 w-4 text-white" aria-hidden="true" />
                        <span>{b}</span>
                    </li>
                ))}
            </ul>

            <Link href={href} className="inline-block w-full text-center border border-white px-4 py-2 rounded-md text-white hover:bg-white/5">
                Book Now
            </Link>
        </div>
    );
}

