import React, { useState } from 'react';
import SectionHeader from '../../components/common/SectionHeader';

interface FormData {
  name: string;
  organization: string;
  location: string;
  farmSize: string;
  serviceNeeded: string;
  phone: string;
}

const SERVICES_OPTIONS = [
  'Agricultural Consulting',
  'Certified Seeds & Inputs',
  'Irrigation Planning',
  'Greenhouse Advisory',
  'Soil & Crop Programs',
  'Training & Projects',
  'Other',
];

const ConsultationForm: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    name: '',
    organization: '',
    location: '',
    farmSize: '',
    serviceNeeded: '',
    phone: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section className="bg-primary px-6 relative py-10 overflow-hidden">

      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-cta/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="flex flex-col gap-6 sm:gap-8 text-center lg:text-left">

            <SectionHeader
              tag="Free Consultation"
              title="Start Your"
              titleHighlight="Farm Journey"
              align="left"
              light
              subtitle="Tell us about your farm and goals. Our agronomists will review your request and reach out within 24 hours."
            />

            <div className="flex flex-col gap-4">
              {[
                {
                  icon: '⚡',
                  title: 'Fast Response',
                  desc: 'Our team responds within 24 hours of your inquiry.',
                },
                {
                  icon: '🌍',
                  title: 'East Africa Coverage',
                  desc: 'We serve farms across Somalia, Kenya, Ethiopia and beyond.',
                },
                {
                  icon: '🔒',
                  title: 'Confidential',
                  desc: 'Your information is safe and never shared with third parties.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 items-start justify-center lg:justify-start"
                >
                  <div className="w-10 h-10 rounded-xl bg-cta/20 flex items-center justify-center text-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-0.5 text-sm sm:text-base">
                      {item.title}
                    </p>
                    <p className="text-white/70 text-xs sm:text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl w-full">

            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-5 py-8 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-cta/10 flex items-center justify-center text-3xl sm:text-4xl">
                  ✅
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">
                    Request Submitted!
                  </h3>
                  <p className="text-neutral-body text-sm">
                    Thank you {form.name}. Our team will contact you within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline text-sm px-6 py-3"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-6">
                  Request Free Consultation
                </h3>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Full Name *"
                      value={form.name}
                      onChange={handleChange}
                      className="input-field"
                    />
                    <input
                      name="organization"
                      type="text"
                      placeholder="Farm / NGO / Company"
                      value={form.organization}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      name="location"
                      type="text"
                      required
                      placeholder="City / Region *"
                      value={form.location}
                      onChange={handleChange}
                      className="input-field"
                    />
                    <input
                      name="farmSize"
                      type="text"
                      placeholder="5 acres / 2 hectares"
                      value={form.farmSize}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>

                  {/* Service */}
                  <select
                    name="serviceNeeded"
                    required
                    value={form.serviceNeeded}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="">Select Service *</option>
                    {SERVICES_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>

                  {/* Phone */}
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp *"
                    value={form.phone}
                    onChange={handleChange}
                    className="input-field"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full mt-2"
                  >
                    {loading ? 'Submitting...' : 'Get Free Consultation →'}
                  </button>

                  <p className="text-xs text-neutral-light text-center mt-1">
                    By submitting, you agree to be contacted by our team via phone or WhatsApp.
                  </p>

                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
