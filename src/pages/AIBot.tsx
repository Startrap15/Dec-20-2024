import React from 'react';
import { Bot, Lightbulb, ArrowRight, Zap, Bot as BotIcon, Brain, Cpu, CheckCircle, Sparkles } from 'lucide-react';

export default function AIBot() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient Background */}
      <div className="bg-gradient-to-br from-[#4169E1] via-[#4169E1]/90 to-[#2850c8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center mb-6 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Bot className="h-6 w-6 mr-2" />
              <Lightbulb className="h-5 w-5 text-yellow-400 fill-yellow-400 animate-pulse" />
              <span className="ml-2 text-sm font-semibold">NEW PRODUCT</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              AI Grant & Proposal Bot
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Transform your grant writing process with AI-powered precision and efficiency
            </p>
            <button className="bg-white text-[#4169E1] px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-200 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Buy Now - $499/month
            </button>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Three simple steps to transform your grant writing process</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-[#4169E1]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <BotIcon className="h-8 w-8 text-[#4169E1]" />
            </div>
            <h3 className="text-xl font-bold mb-4">Quick Questionnaire</h3>
            <p className="text-gray-600">Answer a few simple questions about your company and funding goals</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-[#4169E1]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Brain className="h-8 w-8 text-[#4169E1]" />
            </div>
            <h3 className="text-xl font-bold mb-4">Grant Information Input</h3>
            <p className="text-gray-600">Provide the bot with grant or contract questions and details</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-[#4169E1]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-[#4169E1]" />
            </div>
            <h3 className="text-xl font-bold mb-4">Automated Excellence</h3>
            <p className="text-gray-600">Let the bot craft a polished, professional proposal tailored to your needs</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-xl text-gray-600">Powerful tools to streamline your grant writing process</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Cpu className="h-8 w-8 text-[#4169E1] mb-4" />
              <h3 className="text-xl font-bold mb-4">Smart Automation Tools</h3>
              <p className="text-gray-600 mb-4">Enhance efficiency with AI-driven grant and proposal generation</p>
              <ul className="space-y-2">
                {['Advanced AI Processing', 'Intelligent Templates', 'Automated Formatting'].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Zap className="h-8 w-8 text-[#4169E1] mb-4" />
              <h3 className="text-xl font-bold mb-4">Rapid Proposal Generation</h3>
              <p className="text-gray-600 mb-4">Save time while maintaining quality and precision</p>
              <ul className="space-y-2">
                {['10x Faster Processing', 'Consistent Quality', 'Multiple Format Support'].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-[#4169E1] mb-2">90%+</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-[#4169E1] mb-2">500+</div>
              <div className="text-gray-600">Satisfied Clients</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-[#4169E1] mb-2">24/7</div>
              <div className="text-gray-600">AI Availability</div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-white p-12 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Grant Writing Process?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful organizations using our AI-powered solution to secure funding with confidence.
            </p>
            <button className="bg-[#4169E1] text-white px-8 py-4 rounded-xl hover:bg-[#2850c8] transition-all duration-200 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              Buy Now - $499/month
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}