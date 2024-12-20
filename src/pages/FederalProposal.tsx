import React, { useState } from 'react';
import { Building2, FileText, Award, Users, TrendingUp, Shield, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ConsultationModal from '../components/ConsultationModal';
import ChallengesSection from '../components/federal/ChallengesSection';
import BenefitsSection from '../components/federal/BenefitsSection';

export default function FederalProposal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const stats = [
    { value: '2,000+', label: 'Federal Proposals Written' },
    { value: '100+', label: 'Proposal Projects Annually' },
    { value: '30+', label: 'Government Agencies' }
  ];

  const process = [
    {
      title: 'Production',
      description: 'Our skilled team handles every aspect of your proposal, from technical narratives to pricing strategies.'
    },
    {
      title: 'Management',
      description: 'We facilitate collaboration through structured meetings and comprehensive reviews.'
    },
    {
      title: 'Delivery',
      description: 'We deliver finalized proposals in the exact formats required, ensuring compliance.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Blue Background */}
      <div className="bg-[#4169E1] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">
              Federal Proposal Writing & Consulting
            </h1>
            <p className="text-xl mb-8">
              Your trusted partner for winning government contracts. We streamline the process while providing expert guidance to maximize your proposal's success.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="bg-white text-[#4169E1] px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold"
              >
                Contact Us
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="h-32 bg-gradient-to-b from-[#4169E1] to-white"></div>
      </div>

      {/* Rest of the component remains exactly the same */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-[#4169E1] mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Streamlined Process</h2>
            <p className="mt-4 text-xl text-gray-600">
              Save time and increase your chances of winning with our proven approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-[#4169E1]/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#4169E1]">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold ml-4">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges Section */}
        <ChallengesSection />

        {/* Benefits Section */}
        <BenefitsSection />

        {/* Call to Action */}
        <div className="text-center py-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Win More Government Contracts?
          </h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#4169E1] text-white px-8 py-4 rounded-lg hover:bg-[#2850c8] transition-all duration-200 font-semibold"
          >
            Get Started Today
          </button>
        </div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}