import React from 'react';
import Hero from '../components/sections/Hero';
import TrustBar from '../components/sections/TrustBar';
import ServicesOverview from '../components/sections/Services';
import AboutSection from '../components/sections/About';
import ProductsPreview from '../components/sections/Products';
import HowWeWork from '../components/sections/HowWeWork';
import FeaturedProject from '../components/sections/FeaturedProject';
import Testimonials from '../components/sections/Testimonials';
import ConsultationForm from '../components/sections/ConsultationForm';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <AboutSection />
      <ProductsPreview />
      <HowWeWork />
      <FeaturedProject />
      <Testimonials />
      <ConsultationForm />
    </>
  );
};

export default Home;
