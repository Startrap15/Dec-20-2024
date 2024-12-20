import React from 'react';
import { CheckCircle } from 'lucide-react';

interface FeatureListProps {
  features: string[];
}

export default function FeatureList({ features }: FeatureListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow hover:shadow-md transition-all">
          <CheckCircle className="h-5 w-5 text-[#4169E1] mr-3 flex-shrink-0" />
          <span className="text-gray-700">{feature}</span>
        </div>
      ))}
    </div>
  );
}