
import React from 'react';

interface GlowButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

const GlowButton: React.FC<GlowButtonProps> = ({ 
  children, 
  className = "", 
  variant = 'primary',
  onClick 
}) => {
  const baseStyles = "relative px-8 py-4 font-industrial font-bold transition-all duration-300 transform hover:-translate-y-1 active:scale-95 overflow-hidden group";
  
  const variantStyles = variant === 'primary' 
    ? "bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
    : "border-2 border-zinc-700 text-zinc-300 hover:border-blue-500 hover:text-white";

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} onClick={onClick}>
      {/* Light sweep effect */}
      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-sweep"></div>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default GlowButton;
