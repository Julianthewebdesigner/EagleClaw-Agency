import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award } from 'lucide-react';
import { Project } from '../types';

interface ProjectOverlayProps {
  project: Project;
  isVisible: boolean;
}

const ProjectOverlay: React.FC<ProjectOverlayProps> = ({ project, isVisible }) => {
  const overlayVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    exit: {
      y: '100%',
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.08,
        duration: 0.5,
      },
    }),
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-black/80 backdrop-blur-sm rounded-lg overflow-hidden z-20 flex flex-col justify-end p-6 md:p-8"
        >
          <div className="space-y-4">
            <motion.div
              custom={0}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-2 text-blue-400 text-xs font-industrial tracking-widest"
            >
              <Award size={14} />
              <span>{project.category} • {project.year}</span>
            </motion.div>

            <motion.h3
              custom={1}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="text-2xl md:text-3xl font-industrial font-black uppercase leading-tight"
            >
              {project.title}
            </motion.h3>

            <motion.p
              custom={2}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="text-zinc-400 text-sm md:text-base leading-relaxed"
            >
              {project.description}
            </motion.p>

            <motion.div
              custom={3}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="space-y-2 pt-2"
            >
              <p className="text-xs uppercase text-zinc-500 font-bold tracking-wider">Key Results</p>
              <ul className="space-y-1.5">
                {project.results.map((result, idx) => (
                  <motion.li
                    key={idx}
                    custom={4 + idx}
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex items-start gap-2 text-sm text-zinc-300"
                  >
                    <span className="text-blue-500 mt-1 shrink-0">→</span>
                    <span>{result}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectOverlay;
