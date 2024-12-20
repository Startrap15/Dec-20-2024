import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function ContactFooter() {
  return (
    <section id="contact" className="bg-[#4169E1] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Start Your Journey to Funding Success</h2>
          <p className="text-xl text-gray-100">
            Let's discuss how we can help you achieve your funding goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4169E1] focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4169E1] focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="organization" className="block text-gray-700 font-medium mb-2">
                  Organization Name
                </label>
                <input
                  type="text"
                  id="organization"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4169E1] focus:border-transparent"
                  placeholder="Your Organization"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4169E1] focus:border-transparent"
                  placeholder="Tell us about your funding needs..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#4169E1] text-white py-3 rounded-lg hover:bg-[#3154c4] transition-colors flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 mr-4" />
                  <span>info@grantcraftpro.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-4" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 mr-4" />
                  <span>123 Grant Street, Suite 100<br />New York, NY 10001</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="h-6 w-6 mr-4" />
                  <div>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p>Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}