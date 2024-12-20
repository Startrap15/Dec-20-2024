import React from 'react';
import { AlertCircle, Shield, Clock, FileCheck, Users, Database } from 'lucide-react';
import ChallengeCard from './ChallengeCard';

export default function ChallengesSection() {
  const challenges = [
    {
      icon: Shield,
      title: 'SAM Registration Compliance',
      description: 'Registering in the System for Award Management (SAM) can be time-consuming and requires meticulous attention to detail.',
      solution: 'Our experts ensure complete and compliant SAM registration to prevent proposal rejection.'
    },
    {
      icon: AlertCircle,
      title: 'Risk of False Claims',
      description: 'Submitting inaccurate information can lead to audits and severe penalties.',
      solution: 'We implement rigorous verification processes to ensure accuracy in all proposal details.'
    },
    {
      icon: Users,
      title: 'Small Business Subcontracting Plan',
      description: 'Prime contractors must submit detailed subcontracting plans and periodic reports.',
      solution: 'Our team develops comprehensive subcontracting plans that meet all agency requirements.'
    },
    {
      icon: FileCheck,
      title: 'Technical Skills',
      description: 'Federal proposals require advanced proficiency in various document preparation tools.',
      solution: 'Our experts handle all technical aspects of proposal preparation and formatting.'
    },
    {
      icon: Clock,
      title: 'Time Constraints',
      description: 'Drafting a federal proposal can take 8–10 hours or more.',
      solution: 'We manage the entire process, allowing you to focus on your core business.'
    },
    {
      icon: Database,
      title: 'Documentation Requirements',
      description: 'Complex documentation requirements for RFQs, RFPs, and RFIs.',
      solution: 'Our service handles all documentation needs with precision and expertise.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Overcoming Key Challenges</h2>
          <p className="mt-4 text-xl text-gray-600">
            Navigate complex proposal requirements with confidence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <ChallengeCard key={index} {...challenge} />
          ))}
        </div>
      </div>
    </section>
  );
}