import React from 'react';
import { FileText, CheckCircle } from 'lucide-react';

export default function GrantWriting() {
  const features = [
    'Custom Grant Writing Services',
    'Expert Application Support',
    'Grant Compliance Reviews',
    'Submission Management',
    'Progress Reporting',
    'Budget Development'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4169E1]/5 to-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#4169E1]/10 rounded-xl mb-6">
            <FileText className="h-8 w-8 text-[#4169E1]" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Grant Writing Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your ideas into winning proposals with our expert grant writing services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center bg-white p-6 rounded-xl shadow-lg">
              <CheckCircle className="h-6 w-6 text-[#4169E1] mr-4 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}