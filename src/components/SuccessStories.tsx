import React from 'react';
import { Star } from 'lucide-react';

export default function SuccessStories() {
  const stories = [
    {
      name: 'Sarah Johnson',
      title: 'Executive Director',
      organization: 'Education First Foundation',
      content: "The team's expertise in educational grants was invaluable. They helped us secure a $2M grant for our STEM program.",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300'
    },
    {
      name: 'Michael Chen',
      title: 'Research Director',
      organization: 'Tech Innovations Lab',
      content: "Their attention to detail and understanding of government RFPs helped us win a major federal contract.",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300'
    },
    {
      name: 'Lisa Rodriguez',
      title: 'Program Manager',
      organization: 'Community Health Initiative',
      content: "Outstanding support throughout the entire grant writing process. They truly understand nonprofit needs.",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300'
    }
  ];

  return (
    <section id="success-stories" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Client Success Stories</h2>
          <p className="mt-4 text-xl text-gray-600">
            See how we've helped organizations secure funding and achieve their goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(story.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{story.content}"</p>
              <div className="flex items-center">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{story.name}</h4>
                  <p className="text-[#4169E1]">{story.title}</p>
                  <p className="text-gray-600 text-sm">{story.organization}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}