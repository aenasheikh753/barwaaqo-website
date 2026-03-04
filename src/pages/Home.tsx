import React from 'react';
import Hero from '../features/hero';
import TrustBar from '../features/trust-bar';
import ServicesOverview from '../features/services';
import AboutSection from '../features/about';
import ProductsPreview from '../features/products';
import HowWeWork from '../features/how-we-work';
import FeaturedProject from '../features/featured-project';
import Testimonials from '../features/testimonials';
import ConsultationForm from '../features/consultation-form';

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
