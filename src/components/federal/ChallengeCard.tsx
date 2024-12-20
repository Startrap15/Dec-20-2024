import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ChallengeCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  solution: string;
}

export default function ChallengeCard({ icon: Icon, title, description, solution }: ChallengeCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center mb-6">
        <div className="bg-[#4169E1]/10 p-3 rounded-lg">
          <Icon className="h-6 w-6 text-[#4169E1]" />
        </div>
        <h3 className="text-xl font-bold ml-4">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="bg-green-50 p-4 rounded-lg">
        <p className="text-green-700 font-medium">
          <span className="font-bold">Solution:</span> {solution}
        </p>
      </div>
    </div>
  );
}