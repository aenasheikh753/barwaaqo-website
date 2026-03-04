import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import ConsultationForm from '../features/consultation-form';

/* ─── Floating particles data ──────────────────────────────────── */
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: 6 + (i * 7) % 20,
  left: (i * 19 + 5) % 100,
  delay: (i * 0.4) % 6,
  duration: 8 + (i * 1.3) % 8,
  opacity: 0.08 + (i % 5) * 0.04,
}));

/* ─── Animated counter hook ─────────────────────────────────────── */
function useCountUp(target: number, duration: number = 1800, start: boolean = false): number {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf: number;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return value;
}

/* ─── Stat card ─────────────────────────────────────────────────── */
function StatCard({ value, label, prefix = '', suffix = '', triggered }: { value: number; label: string; prefix?: string; suffix?: string; triggered: boolean }) {
  const count = useCountUp(value, 1600, triggered);
  return (
    <div className="text-center">
      <p className="text-3xl sm:text-4xl font-bold text-accent">
        {prefix}{count}{suffix}
      </p>
      <p className="text-text-light text-xs sm:text-sm mt-1 uppercase tracking-widest opacity-80">
        {label}
      </p>
    </div>
  );
}

const LeafIcon = ({ size, className }: { size: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 7-8 7" />
  </svg>
);
function ContactCard({ icon, title, lines, delayClass }: { icon: ReactNode; title: string; lines: string[]; delayClass: string }) {
  return (
    <div className={`group flex gap-4 items-start p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:bg-white/10 cursor-default animate-in fade-in slide-in-from-bottom-4 ${delayClass}`}>
      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-accent text-sm sm:text-base mb-1">{title}</h4>
        {lines.map((l: string, i: number) => (
          <p key={i} className="text-text-light text-xs sm:text-sm break-words leading-relaxed opacity-90">{l}</p>
        ))}
      </div>
    </div>
  );
}

const Contact = () => {
  const statsRef = useRef(null);
  const [statsTriggered, setStatsTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsTriggered(true); },
      { threshold: 0.4 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-gray-50 overflow-hidden">
      
      {/* Ambient background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl bg-accent" />
        <div className="absolute top-1/2 -right-48 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl bg-primary" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full opacity-15 blur-3xl bg-accent" />
      </div>

      {/* Floating particles (Still using some inline for dynamic positioning) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {PARTICLES.map((p) => (
          <span
            key={p.id}
            className="absolute text-green-700 animate-pulse"
            style={{
              left: `${p.left}%`,
              bottom: '-10%',
              opacity: p.opacity,
              animation: `bounce ${p.duration}s infinite`
            }}
          >
            <LeafIcon size={p.size} className="" />
          </span>
        ))}
      </div>

      {/* Top Gradient Rule */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page heading */}
        <div className="text-center mb-12 md:mb-16 animate-in fade-in slide-in-from-top-6 duration-700 fill-mode-both">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase mb-4 px-4 py-1.5 rounded-full border border-accent/30 text-accent bg-accent/10">
            Talk to Us
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-primary tracking-tight">
            Contact&nbsp;
            <span className="relative inline-block">
              <span className="relative z-10">Us</span>
              <span className="absolute bottom-1 left-0 w-full h-3 rounded-sm opacity-30 bg-accent -z-10" />
            </span>
          </h1>
          <p className="text-text-light mt-4 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            We'd love to hear from you. Reach out to our offices or request a free consultation below.
          </p>
        </div>

        {/* Stats bar */}
        <div
          ref={statsRef}
          className="grid grid-cols-3 gap-4 sm:gap-8 bg-primary rounded-2xl px-6 py-6 sm:py-8 mb-10 shadow-xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both"
        >
          <StatCard value={12} suffix="+" label="Years Active" triggered={statsTriggered} />
          <StatCard value={2} label="Country Offices" triggered={statsTriggered} />
          <StatCard value={500} suffix="+" label="Farmers Served" triggered={statsTriggered} />
        </div>

          
          {/* Left — contact info */}
          <div className="lg:col-span-2 bg-primary rounded-2xl md:rounded-3xl shadow-lg flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-both mb-6">
            <div className="relative h-40 sm:h-52 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=900&q=80&auto=format&fit=crop"
                alt="Agricultural landscape"
                className="w-full h-full object-cover brightness-[0.55] saturate-[1.1]"
              />
              <div className="absolute inset-0 flex items-end p-5">
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-widest font-medium">Barwaaqo Agri</p>
                  <p className="text-white text-lg font-semibold leading-snug mt-0.5">Growing prosperity<br />across East Africa</p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col">
              <h3 className="text-lg sm:text-xl font-semibold mb-5 text-accent">Get in Touch</h3>
              <div className="space-y-2 flex-1">
                <ContactCard delayClass="delay-0" title="Mogadishu Office" lines={['Main Business District', 'Mogadishu, Somalia']} icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" /></svg>} />
                <ContactCard delayClass="delay-75" title="Nairobi Office" lines={['Westlands', 'Nairobi, Kenya']} icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" /></svg>} />
                <ContactCard delayClass="delay-150" title="Email & Phone" lines={['info@barwaaqoagri.com', '+252 61XXXXXXX']} icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" /></svg>} />
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 flex gap-3">
                {['LinkedIn', 'X', 'WhatsApp'].map((s) => (
                  <button key={s} className="flex-1 text-xs font-medium py-2 rounded-xl border border-white/20 text-text-light hover:border-accent hover:text-accent transition-all duration-200">
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3 bg-primary p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-lg border border-white/5 flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-primary bg-accent">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} className="w-4 h-4">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-accent leading-none">Free Consultation</h3>
                <p className="text-text-light text-xs mt-0.5 opacity-70">Typically responds within 24 hours</p>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                <span className="text-text-light text-xs">Online</span>
              </div>
            </div>
            <div className="flex-1">
              <ConsultationForm />
            </div>
          </div>

        {/* Bottom map teaser */}
        <div className="mt-8 rounded-2xl overflow-hidden relative shadow-lg h-[180px] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-[450ms] fill-mode-both">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1400&q=70&auto=format&fit=crop"
            alt="Map"
            className="w-full h-full object-cover brightness-[0.45] saturate-[0.8]"
          />
          <div className="absolute inset-0 flex items-center justify-center gap-12">
            <div className="flex flex-col items-center gap-1">
              <div className="w-3 h-3 rounded-full shadow-lg animate-bounce bg-accent" style={{ animationDuration: '1.4s' }} />
              <span className="text-white text-xs font-medium">Mogadishu</span>
            </div>
            <div className="hidden sm:flex gap-1 items-center">
              {Array.from({length: 8}).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/30" />
              ))}
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-3 h-3 rounded-full shadow-lg animate-bounce bg-accent" style={{ animationDuration: '1.4s', animationDelay: '0.4s' }} />
              <span className="text-white text-xs font-medium">Nairobi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;