import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogPreview() {
  const posts = [
    {
      id: 1,
      title: 'Top 10 Grant Writing Tips for 2024',
      description: 'Learn the latest strategies and best practices for successful grant applications.',
      date: 'March 15, 2024',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800'
    },
    {
      id: 2,
      title: 'Understanding Federal Grant Requirements',
      description: 'A comprehensive guide to navigating federal grant compliance.',
      date: 'March 10, 2024',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800'
    },
    {
      id: 3,
      title: 'Building Strong Grant Narratives',
      description: 'Expert tips for crafting compelling grant narratives that win funding.',
      date: 'March 5, 2024',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Latest Insights</h2>
          <p className="mt-4 text-xl text-gray-600">
            Expert advice and industry updates to help you succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]">
              <Link to={`/blog/${post.id}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#4169E1] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <div className="text-[#4169E1] font-semibold flex items-center hover:text-[#2850c8] transition-colors">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/blog"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#4169E1] text-[#4169E1] font-semibold rounded-lg hover:bg-[#4169E1] hover:text-white transition-all duration-200"
          >
            View All Posts
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}