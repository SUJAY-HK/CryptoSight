"use client";

import { BarChart, TrendingUp, Activity } from "lucide-react";

export function Sentiment() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-6">Sentiment</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5" />
            Key Events
          </h3>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Lorem ipsum dolor sit amet consectetur</h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <BarChart className="w-5 h-5" />
            Analyst Estimates
          </h3>
          <div className="flex items-center gap-8">
            <div className="bg-green-50 w-32 h-32 rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-green-600">76%</span>
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-4">
                <span className="w-8 text-sm text-gray-500">Buy</span>
                <div className="flex-1 bg-green-500 h-2 rounded"></div>
                <span className="w-8 text-sm text-gray-500">76%</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-8 text-sm text-gray-500">Hold</span>
                <div className="flex-1 bg-gray-200 h-2 rounded w-[8%]"></div>
                <span className="w-8 text-sm text-gray-500">8%</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-8 text-sm text-gray-500">Sell</span>
                <div className="flex-1 bg-red-500 h-2 rounded w-[16%]"></div>
                <span className="w-8 text-sm text-gray-500">16%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}