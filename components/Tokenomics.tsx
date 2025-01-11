"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register the components
ChartJS.register(ArcElement, Tooltip, Legend);

export function Tokenomics() {
  const data = {
    labels: ["Crowdsale Investors", "Foundation Reserve"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["#4299E1", "#ED8936"], // Blue for Crowdsale, Orange for Foundation
        hoverBackgroundColor: ["#2B6CB0", "#DD6B20"],
      },
    ],
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-6">Tokenomics</h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold mb-4">Initial Distribution</h3>
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <span>Crowdsale Investors (80%)</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 rounded-full bg-orange-500"></div>
              <span>Foundation Reserve (20%)</span>
            </div>
          </div>
          <div className="mt-6" style={{ width: "200px", height: "200px" }}>
            <Doughnut data={data} />
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Supply Details</h3>
          <div className="space-y-2 text-gray-600">
            <p>Maximum Supply: 21,000,000 BTC</p>
            <p>Current Supply: ~19,000,000 BTC</p>
            <p>Remaining Supply: ~2,000,000 BTC</p>
          </div>
        </div>
      </div>
    </div>
  );
}
