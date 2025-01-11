"use client";

export function AboutBitcoin() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-6">About Bitcoin</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">What is Bitcoin?</h3>
          <p className="text-gray-600">
            Bitcoin is the first decentralized cryptocurrency. Launched in 2009 by an unknown person or group known as Satoshi Nakamoto, it introduced the concept of peer-to-peer digital currency that operates without the need for intermediaries like banks or governments.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">The Revolution of Digital Currency</h3>
          <p className="text-gray-600">
            Bitcoin operates on a technology called blockchain, which is a distributed ledger that records all transactions across a network of computers. This ensures transparency, security, and immutability of transactions while maintaining user privacy through cryptography.
          </p>
        </div>
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-gray-600">
            The total supply of Bitcoin is capped at 21 million coins, making it a deflationary asset. This scarcity, combined with its decentralized nature and growing adoption, has led to its recognition as a potential store of value and "digital gold."
          </p>
        </div>
      </div>
    </div>
  );
}