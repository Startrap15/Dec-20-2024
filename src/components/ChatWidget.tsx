import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-lg w-80 overflow-hidden">
          <div className="bg-[#4169E1] p-4 flex justify-between items-center">
            <h3 className="text-white font-medium">Chat with us</h3>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white hover:text-gray-200"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-4">
            <div className="mb-4">
              <p className="text-gray-700 mb-3">👋 Hi! How can we help?</p>
              <button className="w-full text-left p-2 rounded bg-gray-100 hover:bg-gray-200 mb-2 text-gray-700">
                I have a question about grants
              </button>
              <button className="w-full text-left p-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700">
                Schedule a consultation
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#4169E1] text-white p-4 rounded-full shadow-lg hover:bg-[#3154c4] transition-colors"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}