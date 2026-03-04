import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/globals.css';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Common
import ScrollToTop from './components/common/ScrollToTop';

// Pages
import {
  Home, About, Services, Products, Projects, Training, Insights, Contact,
  AgriculturalConsulting, SeedsInputs, Irrigation, Greenhouse, SoilCrop, TrainingProjects,
  VegetableSeeds, CerealsPulses, FodderForage, Horticulture,
  ProjectDetail, ArticleDetail
} from './pages';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen font-body bg-base">
        {/* Navigation */}
        <Navbar />

        {/* Page Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* Services Routes */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/consulting" element={<AgriculturalConsulting />} />
            <Route path="/services/seeds-inputs" element={<SeedsInputs />} />
            <Route path="/services/irrigation" element={<Irrigation />} />
            <Route path="/services/greenhouse" element={<Greenhouse />} />
            <Route path="/services/soil-crop" element={<SoilCrop />} />
            <Route path="/services/training-projects" element={<TrainingProjects />} />

            {/* Products Routes */}
            <Route path="/products" element={<Products />} />
            <Route path="/products/vegetable-seeds" element={<VegetableSeeds />} />
            <Route path="/products/cereals-pulses" element={<CerealsPulses />} />
            <Route path="/products/fodder-forage" element={<FodderForage />} />
            <Route path="/products/horticulture" element={<Horticulture />} />

            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/training" element={<Training />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:id" element={<ArticleDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>


        {/* Footer */}
        <Footer />

        {/* Scroll to Top */}
        <ScrollToTop />
      </div>
    </Router>
  );
};

export default App;

