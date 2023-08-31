import React from 'react';
import NavBar from '../components/navigation/NavBar';
import Hero from '../components/hero/Hero';
import Features from '../components/features/Features';
import Extensions from '../components/extension/Extensions';
import FrequentlyQuestions from '../components/faqs/FrequentlyQuestions';

const LandingPage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <Features />
      <Extensions/>
      <FrequentlyQuestions/>
    </React.Fragment>
  );
};

export default LandingPage;
