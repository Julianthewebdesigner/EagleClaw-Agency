import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Menu, 
  X, 
  Globe, 
  Zap, 
  BarChart, 
  Search,
  CheckCircle,
  Award,
  ShieldCheck,
  Code
} from 'lucide-react';
import GlowButton from './components/GlowButton';
import Projects from './components/Projects';
import { Service, ProcessStep, FAQItem } from './types';

// Components
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-zinc-800 shadow-[0_10px_40px_rgba(0,0,0,0.5)]' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center font-industrial text-2xl font-black italic shadow-[0_0_20px_rgba(59,130,246,0.5)]">E</div>
          <span className="font-industrial text-xl font-bold tracking-tighter uppercase">EagleClaw <span className="text-blue-500">Design</span></span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8 font-industrial text-sm font-semibold tracking-wider">
          <button onClick={() => handleNavClick('about')} className="hover:text-blue-400 transition-colors relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button onClick={() => handleNavClick('services')} className="hover:text-blue-400 transition-colors relative group">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button onClick={() => handleNavClick('projects')} className="hover:text-blue-400 transition-colors relative group">
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button onClick={() => handleNavClick('process')} className="hover:text-blue-400 transition-colors relative group">
            Process
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </button>
          <GlowButton variant="secondary" className="py-2 px-6 text-xs" onClick={() => handleNavClick('contact')}>206-418-8749</GlowButton>
        </div>

        <button
          className="md:hidden text-white hover:text-blue-400 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-zinc-900/95 backdrop-blur-md border-b border-zinc-800 p-6 flex flex-col gap-6 md:hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
          >
            <button onClick={() => handleNavClick('about')} className="text-left text-white hover:text-blue-400 transition-colors font-industrial text-lg">About</button>
            <button onClick={() => handleNavClick('services')} className="text-left text-white hover:text-blue-400 transition-colors font-industrial text-lg">Services</button>
            <button onClick={() => handleNavClick('projects')} className="text-left text-white hover:text-blue-400 transition-colors font-industrial text-lg">Projects</button>
            <button onClick={() => handleNavClick('process')} className="text-left text-white hover:text-blue-400 transition-colors font-industrial text-lg">Process</button>
            <div className="h-px bg-zinc-800 my-2"></div>
            <a href="tel:2064188749" className="text-blue-400 font-industrial font-bold text-xl hover:text-blue-300 transition-colors">206-418-8749</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ShootingStar: React.FC<{ index: number }> = ({ index }) => {
  const randomTop = useMemo(() => Math.random() * 50, []);
  const randomLeft = useMemo(() => Math.random() * 100, []);
  const randomDelay = useMemo(() => Math.random() * 10, []);
  const randomDuration = useMemo(() => 1.5 + Math.random() * 2, []);

  return (
    <motion.div
      initial={{ x: "-100%", y: "-100%", opacity: 0 }}
      animate={{
        x: ["0%", "400%"],
        y: ["0%", "400%"],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        delay: randomDelay,
        ease: "linear",
      }}
      style={{
        position: 'absolute',
        top: `${randomTop}%`,
        left: `${randomLeft}%`,
        width: '2px',
        height: '2px',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px 2px rgba(59, 130, 246, 0.8)',
        borderRadius: '50%',
        zIndex: 1,
      }}
    >
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-16 h-[1px] bg-gradient-to-r from-blue-500 to-transparent -translate-x-full"></div>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(15,23,42,1)_0%,_rgba(5,5,5,1)_100%)]"></div>

        {/* Premium gradient overlays */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

        {[...Array(8)].map((_, i) => (
          <ShootingStar key={i} index={i} />
        ))}

        {/* Hero Image */}
        <div
          className="absolute bottom-0 left-0 w-full h-[65%] z-10 opacity-60 pointer-events-none"
          style={{
            backgroundImage: `url('/images/hero.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 85%',
            maskImage: 'linear-gradient(to top, black 30%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, black 30%, transparent 100%)',
            filter: 'brightness(0.3) contrast(1.2) grayscale(1)',
          }}
        ></div>

        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-20" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/carbon-fibre.png')` }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-30 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            className="inline-block px-4 py-1.5 bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-industrial mb-10 rounded uppercase tracking-[0.2em] backdrop-blur-sm shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59,130,246,0.5)' }}
            transition={{ duration: 0.2 }}
          >
            Seattle's Hardest Working Agency
          </motion.div>
          <h1 className="text-6xl lg:text-[8rem] font-industrial font-black leading-[0.85] mb-8 uppercase tracking-tighter text-glow">
            Built for the <br />
            <span className="text-blue-500 relative">
              Service Industry.
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
            </span>
          </h1>
          <p className="text-xl text-zinc-300 mb-14 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            You spend your days building the real world. We spend ours making sure you have the leads and authority to stay booked year-round. No corporate fluff—just high-impact digital tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <GlowButton className="text-lg px-10 py-5" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              BOOK A STRATEGY CALL <ArrowRight size={22} />
            </GlowButton>
            <GlowButton variant="secondary" className="text-lg px-10 py-5" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              VIEW OUR WORK
            </GlowButton>
          </div>

          {/* Premium Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-20 flex flex-wrap justify-center gap-12 items-center text-zinc-600"
          >
            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-500" size={20} />
              <span className="text-xs font-industrial font-bold tracking-wider uppercase">100% Custom Code</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="text-blue-500" size={20} />
              <span className="text-xs font-industrial font-bold tracking-wider uppercase">Seattle Based</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-blue-500" size={20} />
              <span className="text-xs font-industrial font-bold tracking-wider uppercase">Certified Developer</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-px h-64 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-px h-64 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
      </div>
    </section>
  );
};

const PainPoint = () => {
  return (
    <section className="py-24 bg-zinc-950 border-y border-zinc-900 relative overflow-hidden">
      {/* Premium background accent */}
      <div className="absolute top-1/2 left-0 w-1 h-32 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-30"></div>
      <div className="absolute top-1/2 right-0 w-1 h-32 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-8 -left-4 text-8xl font-industrial font-black text-blue-500/5">"</div>
            <h2 className="text-4xl lg:text-5xl font-industrial font-black mb-8 leading-tight uppercase text-left text-glow relative z-10">
              "If you think good <span className="text-blue-500">design</span> is expensive, wait until you see the <span className="text-blue-500">costs</span> of a bad one."
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-zinc-400 space-y-6 text-left"
          >
            <p className="text-xl italic border-l-4 border-blue-600 pl-6 py-2 bg-gradient-to-r from-blue-900/10 to-transparent">
              A bad website is a leaky bucket for your leads.
            </p>
            <p>
              When a high-ticket client in <span className="text-white font-semibold">Seattle, Bellevue, or Tacoma</span> searches for a local contractor, they judge your capability by your digital finish. If your site looks unprofessional, they'll assume your work is too. You aren't just losing clicks—you're losing five and six-figure contracts across the <span className="text-white font-semibold">Pacific Northwest</span>.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-zinc-900/50 p-4 border border-zinc-800 hover:border-blue-500/30 transition-all"
              >
                <p className="text-3xl font-industrial font-bold text-white uppercase tracking-tighter">75%</p>
                <p className="text-[10px] uppercase text-zinc-500 font-bold">Judge Trust Via Web</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-zinc-900/50 p-4 border border-zinc-800 hover:border-blue-500/30 transition-all"
              >
                <p className="text-3xl font-industrial font-bold text-white uppercase tracking-tighter">24/7</p>
                <p className="text-[10px] uppercase text-zinc-500 font-bold">Automated Leads</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-zinc-900/50 p-4 border border-zinc-800 hover:border-blue-500/30 transition-all"
              >
                <p className="text-3xl font-industrial font-bold text-white uppercase tracking-tighter">PNW</p>
                <p className="text-[10px] uppercase text-zinc-500 font-bold">Local Authority</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Founder = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-black scroll-mt-24">
      <div className="absolute top-0 left-0 text-[12rem] font-industrial font-black text-white/5 leading-none select-none translate-y-[-20%] pointer-events-none uppercase">AUTHENTIC</div>

      {/* Premium background gradient */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px]"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <motion.img
            src="/images/Canva%20PFP.jpg"
            alt="Julian Aguilar - Founder of EagleClaw Design Agency in Seattle"
            className="w-48 h-48 md:w-56 md:h-56 rounded-md border-2 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.6)] mx-auto md:mx-0 mb-8 object-cover"
            whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(59,130,246,0.8)' }}
            transition={{ duration: 0.3 }}
          />
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm font-industrial text-blue-500 font-bold mb-4 tracking-[0.3em] uppercase"
          >
            The Truth Behind The Boots
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-7xl font-industrial font-black mb-8 leading-none uppercase text-glow"
          >
            Julian Aguilar
          </motion.h3>

          <div className="space-y-8 text-zinc-400 text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-white font-semibold text-2xl"
            >
              I'm not just a developer. I'm a former contractor who got tired of seeing great crews in <span className="text-blue-400">Seattle and the Pacific Northwest</span> lose jobs to bad digital presence.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              I spent <span className="text-white font-bold italic">3+ years in the landscaping trenches</span> here in the Pacific Northwest—walking job sites from <span className="text-white font-semibold">Seattle to Tacoma</span>, writing estimates, and understanding the "contractor's headache." I know what it's like to chase down homeowners and deal with bad leads.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              As a <span className="text-white font-bold">Certified Full Stack Developer</span>, I realized most agencies understand code, but they don't understand how a drainage problem ruins a job or why a hardscape quote needs to be precise.
            </motion.p>
            <div className="grid sm:grid-cols-2 gap-6 pt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: '0 10px 40px rgba(59,130,246,0.2)' }}
                className="p-8 bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300 text-left"
              >
                <div className="w-12 h-12 bg-blue-600/10 flex items-center justify-center rounded mb-4">
                  <ShieldCheck className="text-blue-500" />
                </div>
                <h4 className="font-industrial font-bold text-white mb-2">Technical Authority</h4>
                <p className="text-sm">Certified engineering focused on speed and high-tier SEO performance.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: '0 10px 40px rgba(59,130,246,0.2)' }}
                className="p-8 bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300 text-left"
              >
                <div className="w-12 h-12 bg-blue-600/10 flex items-center justify-center rounded mb-4">
                  <Code className="text-blue-500" />
                </div>
                <h4 className="font-industrial font-bold text-white mb-2">Field Expertise</h4>
                <p className="text-sm">I speak your language. I know your costs. I know your customers.</p>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            viewport={{ once: true }}
            className="mt-16 flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start"
          >
            <GlowButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>WORK WITH ME <ArrowRight size={18} /></GlowButton>
            <div className="hidden sm:block h-px w-32 bg-gradient-to-r from-zinc-800 to-transparent"></div>
            <p className="font-industrial text-zinc-600 tracking-widest text-xs">A Seattle Local Dedicated To Your Growth</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services: Service[] = [
    { id: '1', title: 'High-Converting Web Design', description: 'Mobile-first builds that look premium and function as your 24/7 top salesman. Custom coded for maximum performance.', icon: 'Globe' },
    { id: '2', title: 'Automation & AI Chatbots', description: 'Capture leads while you sleep. Automated follow-ups so you never lose a quote from Seattle to Spokane.', icon: 'Zap' },
    { id: '3', title: 'Paid Ads Management', description: 'Strategic Google & Facebook ads targeting high-ticket jobs in Seattle, Bellevue, Tacoma, and across Washington State.', icon: 'BarChart' },
    { id: '4', title: 'Local SEO Domination', description: 'Be the first contractor people see when they search. Dominate local rankings across the Pacific Northwest.', icon: 'Search' }
  ];

  return (
    <section id="services" className="py-24 bg-[#080808] scroll-mt-24 relative overflow-hidden">
      {/* Premium background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.05)_0%,_transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm font-industrial text-blue-500 font-bold mb-2 tracking-widest uppercase"
            >
              Expertise
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-5xl font-industrial font-black uppercase"
            >
              Built for Growth.
            </motion.h3>
          </div>
          <GlowButton variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>GET STARTED <ArrowRight size={16}/></GlowButton>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-zinc-900/50 border border-zinc-800 p-8 hover:border-blue-500/50 hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)] transition-all duration-500 overflow-hidden text-left"
            >
              {/* Premium shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="mb-8 p-4 bg-zinc-800 w-fit rounded group-hover:bg-blue-600 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-500 relative z-10">
                {service.icon === 'Globe' && <Globe className="text-blue-500 group-hover:text-white transition-colors" />}
                {service.icon === 'Zap' && <Zap className="text-blue-500 group-hover:text-white transition-colors" />}
                {service.icon === 'BarChart' && <BarChart className="text-blue-500 group-hover:text-white transition-colors" />}
                {service.icon === 'Search' && <Search className="text-blue-500 group-hover:text-white transition-colors" />}
              </div>
              <h4 className="text-xl font-industrial font-bold mb-4 relative z-10">{service.title}</h4>
              <p className="text-zinc-500 group-hover:text-zinc-300 transition-colors relative z-10">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps: ProcessStep[] = [
    { id: 1, title: 'DISCOVERY & STRATEGY', description: 'We identify your high-ticket service areas across Seattle and the Pacific Northwest, then map out a data-driven lead-capture strategy.' },
    { id: 2, title: 'DESIGN & STRUCTURE', description: 'Industrial-strength UI meets psychological triggers to move visitors toward a quote. Every element designed for conversion.' },
    { id: 3, title: 'BUILD & OPTIMIZATION', description: 'Lightning-fast custom development with technical SEO, local optimization, and performance metrics baked into every single line of code.' },
    { id: 4, title: 'LAUNCH & GROWTH', description: 'We deploy, track conversions, and start scaling your leads with automation. Dominate local search results from day one.' },
  ];

  return (
    <section id="process" className="py-24 border-y border-zinc-900 bg-black scroll-mt-24 relative overflow-hidden">
      {/* Premium background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.03)_0%,_transparent_70%)]"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-industrial text-blue-500 font-bold mb-2 tracking-widest uppercase">The Workflow</h2>
          <h3 className="text-4xl font-industrial font-black uppercase text-glow">Engineered Execution.</h3>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-6 opacity-50"></div>
        </motion.div>

        <div className="space-y-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ x: 10 }}
              className="group flex flex-col md:flex-row items-center gap-8 p-8 bg-zinc-900/30 border border-zinc-800 hover:border-blue-500/40 hover:bg-zinc-900/50 hover:shadow-[0_10px_40px_rgba(59,130,246,0.1)] transition-all cursor-default text-left relative overflow-hidden"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/5 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="text-5xl md:text-6xl font-industrial font-black text-zinc-800 group-hover:text-blue-600 transition-colors duration-500 shrink-0 relative z-10">
                0{step.id}
              </div>
              <div className="flex-grow text-center md:text-left relative z-10">
                <h4 className="text-2xl font-industrial font-bold mb-2 group-hover:text-blue-400 transition-colors">{step.title}</h4>
                <p className="text-zinc-500 group-hover:text-zinc-300 transition-colors leading-relaxed">{step.description}</p>
              </div>

              {/* Progress indicator */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-600 text-sm font-industrial tracking-widest uppercase mb-6">Ready To Get Started?</p>
          <GlowButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            BOOK YOUR STRATEGY CALL <ArrowRight size={18} />
          </GlowButton>
        </motion.div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs: FAQItem[] = [
    { question: "How long does a website take to build?", answer: "A standard lead-generation site for a contractor usually takes 3-5 weeks from strategy to launch. We serve businesses across Seattle, Bellevue, Tacoma, and the Pacific Northwest with rapid turnaround times." },
    { question: "Do I own my website and content?", answer: "100%. Unlike some agencies that hold you hostage, you own everything we build once the final payment is made. Full source code, design files, and content rights transfer to you." },
    { question: "Can you help me with a logo and branding too?", answer: "Absolutely. We provide full visual identity packages to ensure your truck wraps, business cards, and website match your premium status in the Seattle market." },
    { question: "Will my site work on jobsite tablets and phones?", answer: "Yes. Every site we build is mobile-responsive and tested on a variety of devices to ensure perfect performance. Over 70% of contractor searches happen on mobile devices in the Pacific Northwest." },
    { question: "Do you only work with Seattle-area businesses?", answer: "While we're based in Seattle and specialize in Pacific Northwest businesses, we work with contractors and service businesses nationwide. Our local expertise gives us unique insight into the PNW market." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Premium background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-industrial mb-6 rounded shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              <Zap size={14} /> COMMON QUESTIONS
            </div>
            <h2 className="text-4xl font-industrial font-black mb-8 text-glow">BUILD A CUSTOMER-CENTRIC <br />MARKETING STRATEGY</h2>
            <p className="text-zinc-400 mb-8 max-w-md leading-relaxed">
              We've answered the most common ones below. If you're still unsure or need help with something specific, our support team is ready to help your <span className="text-white font-semibold">Seattle-area business</span> succeed.
            </p>
            <GlowButton variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>GET IN TOUCH</GlowButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="border border-zinc-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-blue-500/30"
              >
                <button
                  className={`w-full flex justify-between items-center p-6 text-left transition-colors ${openIndex === idx ? 'bg-zinc-900 text-white' : 'bg-transparent text-zinc-400 hover:text-white hover:bg-zinc-900/50'}`}
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <span className="font-industrial font-bold text-lg pr-4">{faq.question}</span>
                  <div className={`transition-transform duration-300 shrink-0 ${openIndex === idx ? 'rotate-45' : ''}`}>
                    <X size={20} />
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 bg-zinc-900 text-zinc-400 border-t border-zinc-800 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    const form = e.currentTarget;
    const formData = {
      from_name: (form.elements.namedItem('from_name') as HTMLInputElement).value,
      business_name: (form.elements.namedItem('business_name') as HTMLInputElement).value,
      from_email: (form.elements.namedItem('from_email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    // Initialize EmailJS with your public key
    (window as any).emailjs.init('IsLO_A2AshRujXIvJ');

    // Send the email using emailjs.send
    (window as any).emailjs.send(
      'service_4juhdxr',
      'template_c5zd6yv',
      formData
    )
    .then(() => {
      setFormStatus('success');
      form.reset();
      setTimeout(() => setFormStatus('idle'), 5000);
    })
    .catch((error: any) => {
      console.error('EmailJS error:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    });
  };

  return (
    <section id="contact" className="py-32 bg-zinc-950 border-t border-zinc-900 scroll-mt-24 relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="text-left"
          >
            <div className="inline-block px-3 py-1 bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-industrial mb-6 rounded uppercase tracking-[0.2em] backdrop-blur-sm">
              Get In Touch
            </div>
            <h2 className="text-5xl font-industrial font-black mb-8 uppercase text-glow">Let's dominate <br />your market.</h2>
            <p className="text-xl text-zinc-400 mb-6">
              Fill out the form below or skip the wait and call us directly. Let's build a lead machine that actually works for your business.
            </p>
            <p className="text-sm text-zinc-500 mb-12 italic border-l-2 border-blue-600/50 pl-4">
              Serving contractors and service businesses across <span className="text-white font-semibold">Seattle, Bellevue, Tacoma, Everett, Renton, Kent, and the greater Puget Sound region</span>.
            </p>

            <div className="space-y-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-6 group cursor-pointer bg-zinc-900/30 p-6 border border-zinc-800 rounded-lg hover:border-blue-500/50 transition-all duration-300"
                onClick={() => window.location.href = 'tel:2064188749'}
              >
                <div className="w-14 h-14 bg-zinc-900 rounded flex items-center justify-center border border-zinc-800 group-hover:border-blue-500 group-hover:bg-blue-600 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 shrink-0">
                  <Phone className="text-blue-500 group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase text-zinc-500 font-bold">Seattle Local Line</p>
                  <p className="text-2xl font-industrial font-bold tracking-tight text-white">206-418-8749</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-6 group cursor-pointer bg-zinc-900/30 p-6 border border-zinc-800 rounded-lg hover:border-blue-500/50 transition-all duration-300"
                onClick={() => window.location.href = 'mailto:webprismx@gmail.com'}
              >
                <div className="w-14 h-14 bg-zinc-900 rounded flex items-center justify-center border border-zinc-800 group-hover:border-blue-500 group-hover:bg-blue-600 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 shrink-0">
                  <Mail className="text-blue-500 group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase text-zinc-500 font-bold">Direct Email</p>
                  <p className="text-xl font-industrial font-bold tracking-tight uppercase text-white break-all">webprismx@gmail.com</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-6 group bg-zinc-900/30 p-6 border border-zinc-800 rounded-lg hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-zinc-900 rounded flex items-center justify-center border border-zinc-800 group-hover:border-blue-500 transition-all duration-300 shrink-0">
                  <MapPin className="text-blue-500 group-hover:text-blue-400 transition-colors" size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase text-zinc-500 font-bold">Service Area</p>
                  <p className="text-lg font-industrial font-bold tracking-tight text-white">Seattle Metro & Pacific NW</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-zinc-900 p-10 rounded-2xl border border-zinc-800 shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:border-blue-500/30 hover:shadow-[0_20px_80px_rgba(59,130,246,0.2)] transition-all duration-500 relative text-left"
          >
            {/* Premium glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

             <form id="contact-form" className="space-y-6 relative z-10" onSubmit={handleSubmit}>
               <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                   <label className="text-xs uppercase text-zinc-500 font-bold">Your Name</label>
                   <input required type="text" name="from_name" className="w-full bg-black border border-zinc-800 p-4 rounded outline-none focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all text-white" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-xs uppercase text-zinc-500 font-bold">Business Name</label>
                   <input required type="text" name="business_name" className="w-full bg-black border border-zinc-800 p-4 rounded outline-none focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all text-white" />
                 </div>
               </div>
               <div className="space-y-2">
                 <label className="text-xs uppercase text-zinc-500 font-bold">Email Address</label>
                 <input required type="email" name="from_email" className="w-full bg-black border border-zinc-800 p-4 rounded outline-none focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all text-white" />
               </div>
               <div className="space-y-2">
                 <label className="text-xs uppercase text-zinc-500 font-bold">Message / Project Goal</label>
                 <textarea required name="message" rows={4} className="w-full bg-black border border-zinc-800 p-4 rounded outline-none focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all text-white resize-none"></textarea>
               </div>

               {formStatus === 'success' && (
                 <div className="p-4 bg-green-900/30 border border-green-500/50 rounded text-green-400 text-center font-industrial">
                   Message sent successfully! We'll be in touch soon.
                 </div>
               )}

               {formStatus === 'error' && (
                 <div className="p-4 bg-red-900/30 border border-red-500/50 rounded text-red-400 text-center font-industrial">
                   Failed to send message. Please try again or call us directly.
                 </div>
               )}

               <GlowButton
                 type="submit"
                 className="w-full py-5"
                 disabled={formStatus === 'sending'}
               >
                 {formStatus === 'sending' ? 'SENDING...' : 'SEND PROJECT INQUIRY'} <ArrowRight size={20} />
               </GlowButton>
             </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-zinc-600 text-[10px] uppercase font-bold tracking-[0.2em] mb-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-zinc-800 flex items-center justify-center italic">E</div>
            <p>© 2025 EagleClaw Design Agency | Seattle, Washington</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-blue-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Terms</a>
          </div>
        </div>
        <div className="text-center border-t border-zinc-900 pt-8">
          <p className="text-zinc-700 text-xs font-industrial font-bold tracking-[0.25em]">
            EAGLECLAW DESIGN BY <span className="text-blue-600 hover:text-blue-500 transition-colors">WEBPRISMX</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-blue-600/30">
      <Navbar />
      <main>
        <Hero />
        <PainPoint />
        <Founder />
        <Services />
        <Projects />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;