"use client";

import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";
import Image from "next/image";

interface YouMayLikeProps {
  coins: any[];
}

export function YouMayLike({ coins }: YouMayLikeProps) {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-6">You May Also Like</h2>
      <div className="overflow-x-auto">
        <div className="flex gap-4 min-w-max pb-4">
          {coins.map((coin) => (
            <div
              key={coin.item.id}
              className="bg-white rounded-lg p-4 w-64"
            >
              <div className="flex items-center gap-2 mb-2">
                <Image
                  src={coin.item.thumb}
                  alt={coin.item.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span>{coin.item.symbol.toUpperCase()}</span>
                <div
                  className={`flex items-center gap-1 px-2 py-1 rounded text-sm ${
                    coin.item.data.price_change_percentage_24h.usd > 0
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {coin.item.data.price_change_percentage_24h.usd > 0 ? (
                    <ArrowUpIcon className="w-3 h-3" />
                  ) : (
                    <ArrowDownIcon className="w-3 h-3" />
                  )}
                  <span>
                    {Math.abs(
                      coin.item.data.price_change_percentage_24h.usd
                    ).toFixed(2)}
                    %
                  </span>
                </div>
              </div>
              <div className="text-lg font-semibold">
                {coin.item.data.price}
              </div>
              <Image
                src={coin.item.data.sparkline}
                alt={`${coin.item.name} price graph`}
                width={200}
                height={60}
                className="mt-2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}