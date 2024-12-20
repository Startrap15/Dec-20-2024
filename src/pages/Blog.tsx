import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'Top 10 Grant Writing Tips for 2024',
    description: 'Learn the latest strategies and best practices for successful grant applications.',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800',
    content: `
      <p>In today's competitive funding landscape, mastering the art of grant writing is more crucial than ever. Here are our top 10 tips for crafting winning grant proposals in 2024:</p>
      <ol>
        <li>Start Early and Plan Thoroughly</li>
        <li>Research Your Funder Extensively</li>
        <li>Tell a Compelling Story</li>
        <li>Focus on Clear Objectives</li>
        <li>Provide Detailed Budgets</li>
        <li>Demonstrate Impact</li>
        <li>Follow Guidelines Precisely</li>
        <li>Use Data to Support Claims</li>
        <li>Review and Edit Carefully</li>
        <li>Submit Before Deadlines</li>
      </ol>
    `
  },
  {
    id: 2,
    title: 'Understanding Federal Grant Requirements',
    description: 'A comprehensive guide to navigating federal grant compliance.',
    date: 'March 10, 2024',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800',
    content: `
      <p>Federal grants come with specific requirements that must be met to ensure compliance and maximize your chances of success. This guide covers:</p>
      <ul>
        <li>Registration Requirements</li>
        <li>Eligibility Criteria</li>
        <li>Application Components</li>
        <li>Budget Guidelines</li>
        <li>Reporting Requirements</li>
      </ul>
    `
  },
  {
    id: 3,
    title: 'Building Strong Grant Narratives',
    description: 'Expert tips for crafting compelling grant narratives that win funding.',
    date: 'March 5, 2024',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800',
    content: `
      <p>A strong narrative is the backbone of any successful grant application. Learn how to:</p>
      <ul>
        <li>Structure Your Story</li>
        <li>Present Your Need</li>
        <li>Describe Your Solution</li>
        <li>Demonstrate Impact</li>
        <li>Connect with Reviewers</li>
      </ul>
    `
  }
];

function BlogPost() {
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-[#4169E1] hover:text-[#2850c8]">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-[400px] object-cover rounded-xl mb-8"
      />
      <div className="flex items-center text-gray-500 text-sm mb-4">
        <Calendar className="h-4 w-4 mr-2" />
        {post.date}
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <div className="mt-12 pt-8 border-t">
        <Link 
          to="/blog"
          className="text-[#4169E1] font-semibold flex items-center hover:text-[#2850c8] transition-colors"
        >
          ← Back to Blog
        </Link>
      </div>
    </article>
  );
}

export default function Blog() {
  const { id } = useParams();

  if (id) {
    return <BlogPost />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Latest Insights & Updates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link 
            key={post.id}
            to={`/blog/${post.id}`}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
          >
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
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#4169E1] transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <div className="text-[#4169E1] font-semibold flex items-center hover:text-[#2850c8] transition-colors">
                Read More
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}