import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="text-3xl font-bold text-[#4169E1] mb-2">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}