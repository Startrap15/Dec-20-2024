import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ProcessStep({ number, title, description, icon: Icon }: ProcessStepProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative mb-6">
        <div className="bg-[#4169E1]/10 w-16 h-16 rounded-xl flex items-center justify-center">
          <Icon className="h-8 w-8 text-[#4169E1]" />
        </div>
        <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#4169E1] rounded-full flex items-center justify-center text-white font-bold">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}