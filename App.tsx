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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-zinc-800' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 flex items-center justify-center font-industrial text-2xl font-black italic">E</div>
          <span className="font-industrial text-xl font-bold tracking-tighter uppercase">EagleClaw <span className="text-blue-500">Design</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-industrial text-sm font-semibold tracking-wider">
          <button onClick={() => handleNavClick('about')} className="hover:text-blue-400 transition-colors">About</button>
          <button onClick={() => handleNavClick('services')} className="hover:text-blue-400 transition-colors">Services</button>
          <button onClick={() => handleNavClick('process')} className="hover:text-blue-400 transition-colors">Process</button>
          <GlowButton variant="secondary" className="py-2 px-6 text-xs" onClick={() => handleNavClick('contact')}>206-418-8749</GlowButton>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-zinc-900 border-b border-zinc-800 p-6 flex flex-col gap-6 md:hidden"
          >
            <button onClick={() => handleNavClick('about')} className="text-left text-white hover:text-blue-400">About</button>
            <button onClick={() => handleNavClick('services')} className="text-left text-white hover:text-blue-400">Services</button>
            <button onClick={() => handleNavClick('process')} className="text-left text-white hover:text-blue-400">Process</button>
            <a href="tel:2064188749" className="text-blue-400 font-industrial font-bold">206-418-8749</a>
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
        
        {[...Array(8)].map((_, i) => (
          <ShootingStar key={i} index={i} />
        ))}

        {/* Mount Rainier Silhouette */}
        <div 
          className="absolute bottom-0 left-0 w-full h-[65%] z-10 opacity-60 pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1542459742-19bc8923f95b?q=80&w=2574&auto=format&fit=crop')`,
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
          <div className="inline-block px-4 py-1.5 bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-industrial mb-10 rounded uppercase tracking-[0.2em] backdrop-blur-sm">
            Seattle's Hardest Working Agency
          </div>
          <h1 className="text-6xl lg:text-[8rem] font-industrial font-black leading-[0.85] mb-8 uppercase tracking-tighter text-glow">
            Built for the <br />
            <span className="text-blue-500">Service Industry.</span>
          </h1>
          <p className="text-xl text-zinc-300 mb-14 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            You spend your days building the real world. We spend ours making sure you have the leads and authority to stay booked year-round. No corporate fluff—just high-impact digital tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <GlowButton className="text-lg px-10 py-5" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              BOOK A STRATEGY CALL <ArrowRight size={22} />
            </GlowButton>
            <GlowButton variant="secondary" className="text-lg px-10 py-5" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              LEARN OUR STORY
            </GlowButton>
          </div>
        </motion.div>
        
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-px h-64 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-px h-64 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
      </div>
    </section>
  );
};

const PainPoint = () => {
  return (
    <section className="py-24 bg-zinc-950 border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-industrial font-black mb-8 leading-tight uppercase text-left text-glow">
              “If you think good <span className="text-blue-500">design</span> is expensive, wait until you see the <span className="text-blue-500">costs</span> of a bad one.”
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-zinc-400 space-y-6 text-left"
          >
            <p className="text-xl italic border-l-4 border-blue-600 pl-6 py-2">
              A bad website is a leaky bucket for your leads.
            </p>
            <p>
              When a high-ticket client searches for a local hardscaper, they judge your capability by your digital finish. If your site looks unprofessional, they'll assume your work is too. You aren't just losing clicks—you're losing five and six-figure contracts.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div>
                <p className="text-3xl font-industrial font-bold text-white uppercase tracking-tighter">75%</p>
                <p className="text-[10px] uppercase text-zinc-500 font-bold">Judge Trust Via Web</p>
              </div>
              <div>
                <p className="text-3xl font-industrial font-bold text-white uppercase tracking-tighter">24/7</p>
                <p className="text-[10px] uppercase text-zinc-500 font-bold">Automated Leads</p>
              </div>
              <div>
                <p className="text-3xl font-industrial font-bold text-white uppercase tracking-tighter">PNW</p>
                <p className="text-[10px] uppercase text-zinc-500 font-bold">Local Authority</p>
              </div>
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
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-sm font-industrial text-blue-500 font-bold mb-4 tracking-[0.3em] uppercase">The Truth Behind The Boots</h2>
          <h3 className="text-5xl lg:text-7xl font-industrial font-black mb-8 leading-none uppercase">Julian Aguilar</h3>
          
          <div className="space-y-8 text-zinc-400 text-lg leading-relaxed">
            <p className="text-white font-semibold text-2xl">
              I'm not just a developer. I'm a former contractor who got tired of seeing great crews lose jobs to bad digital presence.
            </p>
            <p>
              I spent <span className="text-white font-bold italic">3+ years in the landscaping trenches</span> here in the Pacific Northwest—walking job sites, writing estimates, and understanding the "contractor's headache." I know what it's like to chase down homeowners and deal with bad leads.
            </p>
            <p>
              As a <span className="text-white font-bold">Certified Full Stack Developer</span>, I realized most agencies understand code, but they don't understand how a drainage problem ruins a job or why a hardscape quote needs to be precise. 
            </p>
            <div className="grid sm:grid-cols-2 gap-6 pt-8">
              <div className="p-8 bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300 text-left">
                <div className="w-12 h-12 bg-blue-600/10 flex items-center justify-center rounded mb-4">
                  <ShieldCheck className="text-blue-500" />
                </div>
                <h4 className="font-industrial font-bold text-white mb-2">Technical Authority</h4>
                <p className="text-sm">Certified engineering focused on speed and high-tier SEO performance.</p>
              </div>
              <div className="p-8 bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300 text-left">
                <div className="w-12 h-12 bg-blue-600/10 flex items-center justify-center rounded mb-4">
                  <Code className="text-blue-500" />
                </div>
                <h4 className="font-industrial font-bold text-white mb-2">Field Expertise</h4>
                <p className="text-sm">I speak your language. I know your costs. I know your customers.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
            <GlowButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>WORK WITH ME <ArrowRight size={18} /></GlowButton>
            <div className="hidden sm:block h-px w-32 bg-zinc-800"></div>
            <p className="font-industrial text-zinc-600 tracking-widest text-xs">A Seattle Local Dedicated To Your Growth</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services: Service[] = [
    { id: '1', title: 'High-Converting Web Design', description: 'Mobile-first builds that look premium and function as your 24/7 top salesman.', icon: 'Globe' },
    { id: '2', title: 'Automation & AI Chatbots', description: 'Capture leads while you sleep. Automated follow-ups so you never lose a quote.', icon: 'Zap' },
    { id: '3', title: 'Paid Ads Management', description: 'Strategic Google & Facebook ads targeting the high-ticket jobs you actually want.', icon: 'BarChart' },
    { id: '4', title: 'Local SEO Domination', description: 'Be the first contractor people see when they search in Seattle and beyond.', icon: 'Search' }
  ];

  return (
    <section id="services" className="py-24 bg-[#080808] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <h2 className="text-sm font-industrial text-blue-500 font-bold mb-2 tracking-widest uppercase">Expertise</h2>
            <h3 className="text-5xl font-industrial font-black uppercase">Built for Growth.</h3>
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
              className="group relative bg-zinc-900/50 border border-zinc-800 p-8 hover:border-blue-500/50 transition-all duration-500 overflow-hidden text-left"
            >
              <div className="mb-8 p-4 bg-zinc-800 w-fit rounded group-hover:bg-blue-600 transition-colors duration-500">
                {service.icon === 'Globe' && <Globe className="text-blue-500 group-hover:text-white" />}
                {service.icon === 'Zap' && <Zap className="text-blue-500 group-hover:text-white" />}
                {service.icon === 'BarChart' && <BarChart className="text-blue-500 group-hover:text-white" />}
                {service.icon === 'Search' && <Search className="text-blue-500 group-hover:text-white" />}
              </div>
              <h4 className="text-xl font-industrial font-bold mb-4">{service.title}</h4>
              <p className="text-zinc-500 group-hover:text-zinc-300 transition-colors">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps: ProcessStep[] = [
    { id: 1, title: 'DISCOVERY & STRATEGY', description: 'We identify your high-ticket service areas and map out a lead-capture strategy.' },
    { id: 2, title: 'DESIGN & STRUCTURE', description: 'Industrial-strength UI meets psychological triggers to move visitors toward a quote.' },
    { id: 3, title: 'BUILD & OPTIMIZATION', description: 'Lightning-fast development with technical SEO baked into every single line of code.' },
    { id: 4, title: 'LAUNCH & GROWTH', description: 'We deploy, track conversions, and start scaling your leads with automation.' },
  ];

  return (
    <section id="process" className="py-24 border-y border-zinc-900 bg-black scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-industrial text-blue-500 font-bold mb-2 tracking-widest uppercase">The Workflow</h2>
          <h3 className="text-4xl font-industrial font-black uppercase">Engineered Execution.</h3>
        </div>

        <div className="space-y-4">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row items-center gap-8 p-8 bg-zinc-900/30 border border-zinc-800 hover:border-blue-500/40 transition-all cursor-default text-left"
            >
              <div className="text-5xl font-industrial font-black text-zinc-800 group-hover:text-blue-600 transition-colors duration-500 shrink-0">
                0{step.id}
              </div>
              <div className="flex-grow text-center md:text-left">
                <h4 className="text-2xl font-industrial font-bold mb-2">{step.title}</h4>
                <p className="text-zinc-500 group-hover:text-zinc-300 transition-colors">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs: FAQItem[] = [
    { question: "How long does a website take to build?", answer: "A standard lead-generation site for a contractor usually takes 3-5 weeks from strategy to launch." },
    { question: "Do I own my website and content?", answer: "100%. Unlike some agencies that hold you hostage, you own everything we build once the final payment is made." },
    { question: "Can you help me with a logo and branding too?", answer: "Absolutely. We provide full visual identity packages to ensure your truck wraps and website match your premium status." },
    { question: "Will my site work on jobsite tablets and phones?", answer: "Yes. Every site we build is mobile-responsive and tested on a variety of devices to ensure perfect performance." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-industrial mb-6 rounded">
              <Zap size={14} /> COMMON QUESTIONS
            </div>
            <h2 className="text-4xl font-industrial font-black mb-8">BUILD A CUSTOMER-CENTRIC <br />MARKETING STRATEGY</h2>
            <p className="text-zinc-400 mb-8 max-w-md">
              We've answered the most common ones below. If you're still unsure or need help with something specific, our support team is ready 24/7.
            </p>
            <GlowButton variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>GET IN TOUCH</GlowButton>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-zinc-800 rounded-lg overflow-hidden transition-all duration-300">
                <button 
                  className={`w-full flex justify-between items-center p-6 text-left transition-colors ${openIndex === idx ? 'bg-zinc-900 text-white' : 'bg-transparent text-zinc-400 hover:text-white'}`}
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <span className="font-industrial font-bold text-lg">{faq.question}</span>
                  <div className={`transition-transform duration-300 ${openIndex === idx ? 'rotate-45' : ''}`}>
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
                      <div className="p-6 pt-0 bg-zinc-900 text-zinc-400 border-t border-zinc-800">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-zinc-950 border-t border-zinc-900 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="text-left"
          >
            <h2 className="text-5xl font-industrial font-black mb-8 uppercase">Let's dominate <br />your market.</h2>
            <p className="text-xl text-zinc-400 mb-12">
              Fill out the form below or skip the wait and call us directly. Let's build a lead machine that actually works.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.location.href = 'tel:2064188749'}>
                <div className="w-14 h-14 bg-zinc-900 rounded flex items-center justify-center border border-zinc-800 group-hover:border-blue-500 group-hover:bg-blue-600 transition-all duration-300">
                  <Phone className="text-blue-500 group-hover:text-white" size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase text-zinc-500 font-bold">Seattle Local</p>
                  <p className="text-2xl font-industrial font-bold tracking-tight">206-418-8749</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.location.href = 'mailto:webprismx@gmail.com'}>
                <div className="w-14 h-14 bg-zinc-900 rounded flex items-center justify-center border border-zinc-800 group-hover:border-blue-500 group-hover:bg-blue-600 transition-all duration-300">
                  <Mail className="text-blue-500 group-hover:text-white" size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase text-zinc-500 font-bold">Direct Email</p>
                  <p className="text-2xl font-industrial font-bold tracking-tight uppercase">webprismx@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-zinc-900 p-10 rounded-2xl border border-zinc-800 shadow-2xl relative text-left"
          >
             <form className="space-y-6" action="mailto:webprismx@gmail.com" method="post" encType="text/plain">
               <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                   <label className="text-xs uppercase text-zinc-500 font-bold">Your Name</label>
                   <input required type="text" name="name" className="w-full bg-black border border-zinc-800 p-4 rounded outline-none focus:border-blue-500 transition-all text-white" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-xs uppercase text-zinc-500 font-bold">Business Name</label>
                   <input required type="text" name="business" className="w-full bg-black border border-zinc-800 p-4 rounded outline-none focus:border-blue-500 transition-all text-white" />
                 </div>
               </div>
               <div className="space-y-2">
                 <label className="text-xs uppercase text-zinc-500 font-bold">Email Address</label>
                 <input required type="email" name="email" className="w-full bg-black border border-zinc-800 p-4 rounded outline-none focus:border-blue-500 transition-all text-white" />
               </div>
               <div className="space-y-2">
                 <label className="text-xs uppercase text-zinc-500 font-bold">Message / Project Goal</label>
                 <textarea required name="message" rows={4} className="w-full bg-black border border-zinc-800 p-4 rounded outline-none focus:border-blue-500 transition-all text-white resize-none"></textarea>
               </div>
               <GlowButton className="w-full py-5">SEND PROJECT INQUIRY <ArrowRight size={20} /></GlowButton>
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
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-zinc-600 text-[10px] uppercase font-bold tracking-[0.2em]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-zinc-800 flex items-center justify-center italic">E</div>
          <p>© 2025 EagleClaw Design Agency | Seattle, Washington</p>
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-blue-500 transition-colors">Privacy</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Terms</a>
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
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;