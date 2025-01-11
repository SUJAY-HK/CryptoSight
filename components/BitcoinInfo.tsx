"use client";

import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

interface BitcoinInfoProps {
  data: {
    usd: number;
    usd_24h_change: number;
    inr: number;
  } | null;
}

export function BitcoinInfo({ data }: BitcoinInfoProps) {
  if (!data) return null;

  const isPositiveChange = data.usd_24h_change > 0;

  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <div className="flex items-center gap-2 text-2xl font-semibold">
        <span>Bitcoin</span>
        <span className="text-gray-500">BTC</span>
      </div>
      <div className="mt-4">
        <div className="text-3xl font-bold">${data.usd.toLocaleString()}</div>
        <div className="mt-2 flex items-center gap-4">
          <div
            className={`flex items-center gap-1 px-2 py-1 rounded ${
              isPositiveChange ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {isPositiveChange ? (
              <ArrowUpIcon className="w-4 h-4" />
            ) : (
              <ArrowDownIcon className="w-4 h-4" />
            )}
            <span>{Math.abs(data.usd_24h_change).toFixed(2)}%</span>
          </div>
          <span className="text-gray-500">(24H)</span>
        </div>
        <div className="mt-2 text-gray-600">
          ₹{data.inr.toLocaleString()}
        </div>
      </div>
    </div>
  );
}