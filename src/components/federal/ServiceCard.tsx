import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
}

export default function ServiceCard({ icon: Icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center mb-6">
        <div className="bg-[#4169E1]/10 p-4 rounded-xl">
          <Icon className="h-8 w-8 text-[#4169E1]" />
        </div>
        <h3 className="text-xl font-bold ml-4">{title}</h3>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      {features && (
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <div className="w-2 h-2 bg-[#4169E1] rounded-full mr-3"></div>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}