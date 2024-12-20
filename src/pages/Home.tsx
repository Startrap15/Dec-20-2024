import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import ExpertTeam from '../components/ExpertTeam';
import SuccessStories from '../components/SuccessStories';
import BlogPreview from '../components/BlogPreview';
import ConsultationForm from '../components/ConsultationForm';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.state]);

  return (
    <>
      <Hero />
      <Services />
      <About />
      <ExpertTeam />
      <SuccessStories />
      <BlogPreview />
      <ConsultationForm />
    </>
  );
}