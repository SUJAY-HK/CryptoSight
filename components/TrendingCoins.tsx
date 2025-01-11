"use client";

import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";
import Image from "next/image";

interface TrendingCoinsProps {
  coins: any[];
}

export function TrendingCoins({ coins }: TrendingCoinsProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Trending Coins (24h)</h2>
      <div className="space-y-4">
        {coins.map((coin) => (
          <div key={coin.item.id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={coin.item.thumb}
                alt={coin.item.name}
                width={24}
                height={24}
                className="rounded-full"
              />
              <span>{coin.item.name}</span>
            </div>
            <div
              className={`flex items-center gap-1 px-2 py-1 rounded ${
                coin.item.data.price_change_percentage_24h.usd > 0
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {coin.item.data.price_change_percentage_24h.usd > 0 ? (
                <ArrowUpIcon className="w-4 h-4" />
              ) : (
                <ArrowDownIcon className="w-4 h-4" />
              )}
              <span>
                {Math.abs(
                  coin.item.data.price_change_percentage_24h.usd
                ).toFixed(2)}
                %
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}