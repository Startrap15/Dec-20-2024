import React from 'react';
import { Award, Clock, TrendingUp, CheckSquare, Shield, Workflow } from 'lucide-react';
import ServiceCard from './ServiceCard';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Award,
      title: 'Expert Guidance',
      description: 'Professional support to compile and submit all required documents accurately.',
      features: ['Document Preparation', 'Submission Support', 'Expert Review']
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Streamline the process with experts handling time-consuming tasks.',
      features: ['Efficient Process', 'Quick Turnaround', 'Deadline Management']
    },
    {
      icon: TrendingUp,
      title: 'Increased Win Rate',
      description: 'Enhance your success with tailored advice for federal requirements.',
      features: ['Strategic Approach', 'Best Practices', 'Proven Methods']
    },
    {
      icon: CheckSquare,
      title: 'Submission Support',
      description: 'Navigate the submission process with confidence and precision.',
      features: ['Quality Control', 'Format Verification', 'Final Review']
    },
    {
      icon: Shield,
      title: 'Guaranteed Compliance',
      description: 'Ensure your SAM registration and all documentation meet requirements.',
      features: ['SAM Compliance', 'Documentation Review', 'Risk Mitigation']
    },
    {
      icon: Workflow,
      title: 'End-to-End Support',
      description: 'From initial RFP analysis to final submission, we manage every step of the process, ensuring a seamless and stress-free experience for our clients.',
      features: ['RFP Analysis', 'Process Management', 'Final Submission']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">How We Help</h2>
          <p className="mt-4 text-xl text-gray-600">
            Professional services to ensure your proposal success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <ServiceCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}