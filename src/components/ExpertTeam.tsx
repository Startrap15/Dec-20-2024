import React from 'react';

export default function ExpertTeam() {
  const team = [
    {
      name: 'Dr. Emily Carter',
      title: 'Founder & CEO',
      description: '15+ years in grant writing with expertise in federal funding',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300'
    },
    {
      name: 'James Wilson',
      title: 'Senior Grant Strategist',
      description: 'Former federal grant reviewer with 10+ years experience',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300'
    },
    {
      name: 'Maria Rodriguez',
      title: 'Nonprofit Specialist',
      description: 'Specialized in foundation and corporate grants',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300'
    }
  ];

  return (
    <section id="expert-team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Our Expert Team</h2>
          <p className="mt-4 text-xl text-gray-600">
            Meet the professionals dedicated to your funding success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-[#4169E1] font-medium mb-4">{member.title}</p>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}