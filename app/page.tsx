"use client";

import { useEffect, useState } from "react";
import { TrendingCoins } from "@/components/TrendingCoins";
import { BitcoinInfo } from "@/components/BitcoinInfo";
import { YouMayLike } from "@/components/YouMayLike";
import { TeamSection } from "@/components/TeamSection";
import { AboutBitcoin } from "@/components/AboutBitcoin";
import { Tokenomics } from "@/components/Tokenomics";
import { Sentiment } from "@/components/Sentiment";
import { Performance } from "@/components/Performance";
import { TradingViewChart } from "@/components/TradingViewChart";

export default function Home() {
  const [bitcoinData, setBitcoinData] = useState<any>(null);
  const [trendingCoins, setTrendingCoins] = useState<any[]>([]);

  useEffect(() => {
    const fetchBitcoinData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true"
        );
        const data = await response.json();
        setBitcoinData(data.bitcoin);
      } catch (error) {
        console.error("Error fetching Bitcoin data:", error);
      }
    };

    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const data = await response.json();
        setTrendingCoins(data.coins.slice(0, 3));
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchBitcoinData();
    fetchTrendingCoins();
  }, []);

  return (
    <main className="min-h-screen bg-[#EFF2F5] pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <BitcoinInfo data={bitcoinData} />
            <TradingViewChart />
            <div className="mt-6 bg-white rounded-lg p-6">
              <Performance data={bitcoinData} />
              <Sentiment />
              <AboutBitcoin />
              <Tokenomics />
              <TeamSection />
            </div>
          </div>
          <div className="lg:w-80">
            <div className="bg-white rounded-lg p-6 mb-6">
              <TrendingCoins coins={trendingCoins} />
            </div>
          </div>
        </div>
        <YouMayLike coins={trendingCoins} />
      </div>
    </main>
  );
}