import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Book, Menu, X, ChevronDown } from 'lucide-react';
import { Menu as HeadlessMenu } from '@headlessui/react';
import ConsultationModal from './ConsultationModal';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const services = [
    { name: 'Grant Writing', href: '/grant-writing' },
    { name: 'Federal Proposal (Gov Con)', href: '/federal-proposal' },
    { name: 'AI Grant & Proposal Bot', href: '/ai-bot', isNew: true },
    { name: 'Registrations', href: '/registrations' }
  ];

  return (
    <>
      <header className="fixed top-0 w-full bg-white z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link 
              to="/" 
              onClick={handleHomeClick}
              className="flex items-center group transform transition-transform duration-200 hover:scale-105"
            >
              <Book className="h-8 w-8 text-[#4169E1] transition-colors group-hover:text-[#2850c8]" />
              <span className="ml-2 text-xl font-bold text-gray-900 group-hover:text-[#4169E1] transition-colors">
                GrantCraft Pro
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/"
                onClick={handleHomeClick}
                className="nav-link"
              >
                Home
              </Link>

              <HeadlessMenu as="div" className="relative">
                {({ open }) => (
                  <>
                    <HeadlessMenu.Button className="nav-link flex items-center">
                      Services
                      <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${open ? 'rotate-180' : ''}`} />
                    </HeadlessMenu.Button>
                    <HeadlessMenu.Items className="absolute left-0 mt-2 w-64 origin-top-left bg-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-2">
                        {services.map((service) => (
                          <HeadlessMenu.Item key={service.href}>
                            {({ active }) => (
                              <Link
                                to={service.href}
                                className={`
                                  ${active ? 'bg-[#4169E1]/5 text-[#4169E1]' : 'text-gray-700'}
                                  group flex items-center px-4 py-3 text-sm relative
                                `}
                              >
                                {service.name}
                                {service.isNew && (
                                  <span className="ml-2 bg-[#4169E1] text-white text-xs px-2 py-0.5 rounded-full">
                                    NEW
                                  </span>
                                )}
                              </Link>
                            )}
                          </HeadlessMenu.Item>
                        ))}
                      </div>
                    </HeadlessMenu.Items>
                  </>
                )}
              </HeadlessMenu>

              <button 
                onClick={() => scrollToSection('about')} 
                className="nav-link"
              >
                About
              </button>
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary"
              >
                Free Consultation
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden rounded-lg p-2 hover:bg-gray-100 transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden transition-all duration-200 ease-in-out ${
              isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
              <Link
                to="/"
                onClick={(e) => {
                  handleHomeClick(e);
                  setIsOpen(false);
                }}
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-[#4169E1] hover:bg-gray-50 transition-colors"
              >
                Home
              </Link>

              {/* Mobile Services Menu */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-medium text-gray-600">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    className="block px-3 py-2 rounded-md text-gray-700 hover:text-[#4169E1] hover:bg-gray-50 transition-colors pl-6"
                  >
                    <div className="flex items-center">
                      {service.name}
                      {service.isNew && (
                        <span className="ml-2 bg-[#4169E1] text-white text-xs px-2 py-0.5 rounded-full">
                          NEW
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>

              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:text-[#4169E1] hover:bg-gray-50 transition-colors"
              >
                About
              </button>
              <Link
                to="/blog"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-[#4169E1] hover:bg-gray-50 transition-colors"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-[#4169E1] hover:bg-gray-50 transition-colors"
              >
                Contact
              </Link>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsModalOpen(true);
                }}
                className="block w-full text-center px-3 py-2 rounded-md bg-[#4169E1] text-white hover:bg-[#2850c8] transition-colors"
              >
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </header>

      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}