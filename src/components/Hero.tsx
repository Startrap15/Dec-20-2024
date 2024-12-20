import React, { useState } from 'react';
import { Award, Users, TrendingUp, Medal } from 'lucide-react';
import ConsultationModal from './ConsultationModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="bg-[#4169E1] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="-ml-4 md:ml-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Professional Grant Writing &{' '}
                Federal Proposal Services
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100">
                Professional grant writing and government proposal services<br />
                backed by decades of experience and proven expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-[#4169E1] px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 flex items-center justify-center font-semibold transform hover:scale-105"
                >
                  Start Free Consultation
                  <span className="ml-2">→</span>
                </button>
                <button
                  onClick={() => scrollToSection('success-stories')}
                  className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold transform hover:scale-105"
                >
                  View Success Stories
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <Award className="h-10 w-10 text-[#ffd700] mb-3" />
                <h3 className="text-lg font-semibold mb-2">Proven Track Record</h3>
                <p className="text-gray-200 text-sm">Consistent success in securing funding</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <Users className="h-10 w-10 text-[#90EE90] mb-3" />
                <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
                <p className="text-gray-200 text-sm">Former grant reviewers & proposal writers</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <TrendingUp className="h-10 w-10 text-[#FF69B4] mb-3" />
                <h3 className="text-lg font-semibold mb-2">15+ Years</h3>
                <p className="text-gray-200 text-sm">Of industry expertise</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <Medal className="h-10 w-10 text-[#FFA500] mb-3" />
                <h3 className="text-lg font-semibold mb-2">500+ Clients</h3>
                <p className="text-gray-200 text-sm">Across various sectors</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-32 bg-gradient-to-b from-[#4169E1] to-white"></div>
      </div>

      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}