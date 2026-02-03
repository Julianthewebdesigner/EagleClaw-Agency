import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import MacBookFrame from './MacBookFrame';
import ProjectOverlay from './ProjectOverlay';
import CursorGlow from './CursorGlow';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const isTouchDevice = 'ontouchstart' in window;
  const isOverlayVisible = isTouchDevice ? isTouched : isHovered;

  const macbookVariants = {
    hidden: { opacity: 0, y: 60, rotateX: 15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  const handleTouch = () => {
    if (isTouchDevice) {
      setIsTouched(!isTouched);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={macbookVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onMouseEnter={() => !isTouchDevice && setIsHovered(true)}
      onMouseLeave={() => !isTouchDevice && setIsHovered(false)}
      onClick={handleTouch}
      className="relative group cursor-pointer w-full"
      style={{
        transformStyle: isTouchDevice ? 'flat' : 'preserve-3d',
        perspective: isTouchDevice ? 'none' : '1000px',
      }}
    >
      {/* Cursor Glow - Desktop Only */}
      {!isTouchDevice && <CursorGlow targetRef={cardRef} />}

      {/* MacBook Container */}
      <motion.div
        animate={{
          scale: isHovered ? 1.02 : 1,
          y: isHovered ? -8 : 0,
        }}
        transition={{
          duration: 0.5,
          ease: 'easeOut',
        }}
        className="relative"
      >
        <MacBookFrame
          screenshot={project.screenshot}
          alt={project.title}
          isHovered={isHovered}
        />

        {/* Project Overlay */}
        <ProjectOverlay project={project} isVisible={isOverlayVisible} />

        {/* Tap Indicator - Mobile Only */}
        {isTouchDevice && !isTouched && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-4 right-4 z-30 bg-blue-600/80 backdrop-blur-sm px-3 py-2 rounded-full text-xs font-industrial font-bold uppercase tracking-wider"
          >
            Tap to view
          </motion.div>
        )}

        {/* Floating Particles - Desktop Only */}
        {!isTouchDevice && isHovered && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: 0, opacity: 0 }}
                animate={{
                  y: [-20, -100],
                  opacity: [0, 0.8, 0],
                  x: [0, Math.random() * 40 - 20],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: 'easeOut',
                }}
                className="absolute w-1 h-1 bg-blue-500 rounded-full"
                style={{
                  left: `${10 + i * 12}%`,
                  bottom: '20%',
                  boxShadow: '0 0 10px 2px rgba(59, 130, 246, 0.6)',
                }}
              />
            ))}
          </div>
        )}
      </motion.div>

      {/* Client Badge - Always Visible */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-6 text-center"
      >
        <p className="text-zinc-500 text-xs uppercase font-bold tracking-wider mb-1">Client</p>
        <p className="text-white font-industrial text-lg font-bold">{project.client}</p>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
