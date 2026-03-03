import React from 'react';
import ConsultationForm from '../components/sections/ConsultationForm';

const Contact: React.FC = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Contact Us
          </h1>
          <p className="text-text-light mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            We'd love to hear from you. Reach out to our offices or request a free consultation below.
          </p>
        </div>

        {/* Responsive Grid */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch"> */}

          {/* Left Side - Contact Info */}
          <div className="bg-primary p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-md border border-gray-100 mb-5">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 md:mb-8 text-accent">
              Get in Touch
            </h3>

            <div className="space-y-6 md:space-y-8">

              <div>
                <h4 className="font-semibold text-accent mb-1">
                  Mogadishu Office
                </h4>
                <p className="text-text-light text-sm sm:text-base">
                  Main Business District, Mogadishu, Somalia
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-accent mb-1">
                  Nairobi Office
                </h4>
                <p className="text-text-light text-sm sm:text-base">
                  Westlands, Nairobi, Kenya
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-accent mb-1">
                  Email & Phone
                </h4>
                <p className="text-text-light text-sm sm:text-base break-words">
                  info@barwaaqoagri.com
                </p>
                <p className="text-text-light text-sm sm:text-base">
                  +252 61XXXXXXX
                </p>
              </div>

            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-primary p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-lg border border-gray-100">
            <ConsultationForm />
          </div>

        </div>
      {/* </div> */}
    </section>
  );
};

export default Contact;