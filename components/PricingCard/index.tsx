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
        <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4">
                <div className="text-sm text-blue-500">{planName}</div>
                <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-3xl text-blue-400 font-extrabold">${monthlyPrice}</span>
                    <span className="text-sm text-gray-500">/ month</span>
                </div>
            </div>

            <ul className="mb-6 space-y-2">
                {benefits.map((b, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                        <Check className="h-4 w-4 text-grey-400" aria-hidden="true" />
                        <span>{b}</span>
                    </li>
                ))}
            </ul>

            <Link href={href} className="inline-block w-full text-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                Book Now
            </Link>
        </div>
    );
}

