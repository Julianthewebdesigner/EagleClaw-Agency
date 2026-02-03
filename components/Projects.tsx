import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { Project } from '../types';

const ShootingStar: React.FC<{ index: number }> = ({ index }) => {
  const randomTop = useMemo(() => Math.random() * 50, []);
  const randomLeft = useMemo(() => Math.random() * 100, []);
  const randomDelay = useMemo(() => Math.random() * 10, []);
  const randomDuration = useMemo(() => 1.5 + Math.random() * 2, []);

  return (
    <motion.div
      initial={{ x: '-100%', y: '-100%', opacity: 0 }}
      animate={{
        x: ['0%', '400%'],
        y: ['0%', '400%'],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        delay: randomDelay,
        ease: 'linear',
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

const Projects: React.FC = () => {
  const { scrollYProgress } = useScroll();
  // Disable parallax on touch devices for better iOS Safari performance
  const isTouchDevice = typeof window !== 'undefined' && 'ontouchstart' in window;
  const y = useTransform(scrollYProgress, [0, 1], isTouchDevice ? [0, 0] : [0, -50]);

  const projects: Project[] = [
    {
      id: '1',
      title: "Alberto's Landscaping Website",
      client: "Alberto's Landscaping",
      description: "A high-converting lead generation website for Seattle's premier landscaping service. Built to dominate local search and convert visitors into qualified leads.",
      results: [
        '300% increase in quote requests',
        "Ranked #1 for 'Seattle landscaping' in 6 months",
        '42% conversion rate on contact form',
      ],
      screenshot: '/images/albertoslandscaping.png',
      category: 'Landscape Design',
      year: '2024',
    },
    {
      id: '2',
      title: 'GTO Landscape Contractor Site',
      client: 'GTO Landscape',
      description: 'Professional contractor website showcasing premium hardscaping projects with a focus on high-ticket commercial clients.',
      results: [
        '2.3s average page load time',
        '85% mobile traffic retention',
        "Featured in 'Best Contractor Sites 2024'",
      ],
      screenshot: '/images/gtolandscape.png',
      category: 'Commercial Contracting',
      year: '2024',
    },
    {
      id: '3',
      title: 'Royal Quality Construction Hub',
      client: 'Royal Quality',
      description: 'Authority-building website for a multi-service construction company. Integrated appointment booking and automated lead nurturing.',
      results: [
        '5-star average client feedback',
        '60% reduction in phone tag',
        '$2.3M in tracked project value',
      ],
      screenshot: '/images/royalquality.png',
      category: 'Construction Services',
      year: '2024',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="projects"
      className="relative py-32 overflow-hidden bg-black scroll-mt-24"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Radial Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(30,58,138,0.15)_0%,_rgba(0,0,0,1)_100%)]"></div>

        {/* Shooting Stars */}
        {[...Array(12)].map((_, i) => (
          <ShootingStar key={i} index={i} />
        ))}

        {/* 3D Perspective Grid - Desktop Only, flat on mobile for Safari compatibility */}
        <div
          className="absolute inset-0 opacity-5 hidden md:block"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
          }}
        />

        {/* Simple grid for mobile/Safari */}
        <div
          className="absolute inset-0 opacity-5 md:hidden"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Carbon Fiber Texture */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url('https://www.transparenttextures.com/patterns/carbon-fibre.png')`,
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ y }}
        className="max-w-[1400px] mx-auto px-6 relative z-10"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-industrial mb-6 rounded uppercase tracking-[0.2em] backdrop-blur-sm">
            <Briefcase size={14} />
            Premium Portfolio
          </div>
          <h2 className="text-5xl lg:text-7xl font-industrial font-black uppercase leading-tight mb-6">
            Projects That <span className="text-blue-500">Dominate</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Every website we build is engineered for high-ticket lead generation. See the results for yourself.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 lg:gap-12 w-full max-w-full"
          style={{ overflow: 'hidden' }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
