import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CursorGlowProps {
  targetRef: React.RefObject<HTMLDivElement>;
}

const CursorGlow: React.FC<CursorGlowProps> = ({ targetRef }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!targetRef.current) return;

      const rect = targetRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distance = Math.sqrt(
        Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
      );

      // Calculate opacity based on distance (0-400px range)
      const maxDistance = 400;
      const calculatedOpacity = Math.max(0, 1 - distance / maxDistance);

      setPosition({ x: e.clientX, y: e.clientY });
      setOpacity(calculatedOpacity);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [targetRef]);

  return (
    <motion.div
      className="fixed pointer-events-none z-10 hidden lg:block"
      style={{
        left: position.x,
        top: position.y,
        opacity,
      }}
      animate={{
        opacity,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <div
        className="w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
    </motion.div>
  );
};

export default CursorGlow;
