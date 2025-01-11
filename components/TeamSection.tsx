"use client";

import Image from "next/image";

export function TeamSection() {
  const team = [
    {
      name: "John Smith",
      role: "CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      description: "John has 10+ years of experience in crypto and blockchain technology. Previously, he led major projects at top tech companies and holds multiple patents in blockchain technology.",
    },
    {
      name: "Sarah Wilson",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      description: "Sarah brings 8+ years of expertise in blockchain architecture and cryptocurrency development. She has led the technical development of several successful blockchain platforms.",
    },
    {
      name: "Michael Chen",
      role: "Head of Research",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      description: "Michael has extensive experience in cryptocurrency market analysis and blockchain research. His insights have been featured in major financial publications.",
    },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-6">Team</h2>
      <div className="space-y-6">
        {team.map((member) => (
          <div key={member.name} className="bg-blue-50 rounded-lg p-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="text-center sm:text-left">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-lg mb-2"
                />
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
              <p className="text-gray-600 flex-1">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}