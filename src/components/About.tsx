import React from 'react';
import { Award, Users, Target, Clock } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Industry-leading expertise in Grant Writing and Federal Proposal Writing & Consulting'
    },
    {
      icon: Users,
      title: 'Client Focus',
      description: 'Personalized approach to meet your unique funding needs'
    },
    {
      icon: Target,
      title: 'Success Rate',
      description: '90%+ success rate in securing grants for our clients'
    },
    {
      icon: Clock,
      title: 'Experience',
      description: '15+ years of proven track record in the industry'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">About GrantCraft Pro</h2>
          <p className="mt-4 text-xl text-gray-600">
            Your trusted partner in securing funding and achieving your goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#4169E1]/10 rounded-full mb-6">
                <feature.icon className="h-8 w-8 text-[#4169E1]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}