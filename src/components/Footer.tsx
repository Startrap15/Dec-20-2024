import React from 'react';
import { Mail, Phone, Clock, Linkedin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();

  const scrollToTop = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      window.location.href = '/#about';
    } else {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold mb-4">GrantCraft Pro</h3>
            <p className="text-sm leading-relaxed">
              Professional grant writing and government proposal services backed by decades of experience and proven expertise.
            </p>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block hover:text-[#4169E1] transition-colors"
              aria-label="Visit our LinkedIn page"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  onClick={scrollToTop}
                  className="hover:text-[#4169E1] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <a 
                  href="#about"
                  onClick={scrollToAbout}
                  className="hover:text-[#4169E1] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#4169E1] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#4169E1] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <a 
                href="mailto:grantcraftpro@gmail.com" 
                className="flex items-center hover:text-[#4169E1] transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                grantcraftpro@gmail.com
              </a>
              <a 
                href="tel:+13233321553" 
                className="flex items-center hover:text-[#4169E1] transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                323-332-1553
              </a>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                9 AM to 6 PM (Pacific Time)
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm">© 2025 GrantCraft Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}