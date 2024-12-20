import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Building2, Bot, Lightbulb } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: FileText,
      title: 'Grant Applications',
      description: 'Transform your ideas into winning proposals with our expert grant writing services. Our team ensures compliance, clarity, and compelling narratives that resonate with funders.',
      features: [
        'Custom Grant Writing',
        'Expert Application Support',
        'Compliance Management',
        'Success-Focused Strategy'
      ],
      link: '/grant-writing'
    },
    {
      icon: Building2,
      title: 'Federal Proposal Writing & Consulting',
      description: 'Navigate complex government procurement with confidence. Our specialists craft compelling proposals that meet strict federal, state, and local requirements.',
      features: [
        'Expert Proposal Writing',
        'Multi-Level Contract Support',
        'Compliance Assurance',
        'Strategic Bid Development'
      ],
      link: '/federal-proposal'
    },
    {
      icon: Bot,
      title: 'AI Grant & Proposal Bot',
      description: 'Accelerate your grant writing process with our cutting-edge AI technology. Get polished proposals in less time while maintaining quality and accuracy.',
      features: [
        'Smart Automation Tools',
        'Rapid Proposal Generation',
        'Quality Assurance',
        'Streamlined Workflow'
      ],
      extraIcon: (
        <div className="absolute -top-2 -right-2 flex items-center">
          <Lightbulb className="h-5 w-5 text-yellow-400 fill-yellow-400 animate-pulse" />
          <span className="ml-1 bg-[#4169E1] text-white text-xs px-2 py-0.5 rounded-full font-semibold">
            NEW
          </span>
        </div>
      ),
      isNew: true,
      link: '/ai-bot'
    }
  ];

  return (
    <section id="services" className="py-16 -mt-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Empowering Your Success Through Expert Grant & Contract Solutions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive solutions tailored to your funding needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index}
              to={service.link}
              className="group bg-white p-8 rounded-xl shadow-lg border-2 border-[#4169E1]/60 
                        transition-all duration-300 ease-out hover:-translate-y-4
                        hover:shadow-[0_20px_40px_-15px_rgba(65,105,225,0.3)]
                        transform perspective-1000 relative"
              title={service.isNew ? "Explore our latest AI-driven solution!" : ""}
            >
              <div className="flex items-center justify-center mb-6 relative">
                <div className="bg-[#4169E1]/10 p-3 rounded-lg transition-transform duration-300 group-hover:scale-110">
                  <service.icon className="h-8 w-8 text-[#4169E1]" />
                </div>
                {service.extraIcon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center transition-transform duration-300 group-hover:scale-105">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 text-center flex-grow">
                {service.description}
              </p>
              
              <div className="space-y-3">
                {service.features.map((feature, i) => (
                  <div 
                    key={i} 
                    className="flex items-center justify-center transition-transform duration-300 group-hover:translate-y-0.5"
                  >
                    <div className="w-1.5 h-1.5 bg-[#4169E1] rounded-full mr-2 transition-all duration-300 group-hover:scale-125"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div 
                className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/50 via-transparent to-transparent opacity-0 
                          group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}