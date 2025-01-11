"use client";

interface PerformanceProps {
  data: {
    usd: number;
    usd_24h_change: number;
  } | null;
}

export function Performance({ data }: PerformanceProps) {
  if (!data) return null;

  const todayLow = data.usd - (data.usd * 0.05);
  const todayHigh = data.usd + (data.usd * 0.05);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-6">Performance</h2>
      <div className="space-y-6">
        <div>
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Today's Low</span>
            <span>Today's High</span>
          </div>
          <div className="relative h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded">
            <div 
              className="absolute top-full mt-1 transform -translate-x-1/2"
              style={{ left: `${((data.usd - todayLow) / (todayHigh - todayLow)) * 100}%` }}
            >
              <div className="flex flex-col items-center">
                <svg className="w-4 h-4 text-gray-700" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 2L4 12h16L12 2z" />
                </svg>
                <span className="text-sm font-medium">${data.usd.toLocaleString()}</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span>${todayLow.toLocaleString()}</span>
            <span>${todayHigh.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}