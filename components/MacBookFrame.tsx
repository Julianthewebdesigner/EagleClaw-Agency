import React from 'react';

interface MacBookFrameProps {
  screenshot: string;
  alt: string;
  isHovered?: boolean;
}

const MacBookFrame: React.FC<MacBookFrameProps> = ({ screenshot, alt, isHovered = false }) => {
  return (
    <div className="relative w-full max-w-full" style={{ aspectRatio: '16/10' }}>
      {/* Responsive wrapper with aspect ratio */}
      <div className="relative w-full h-full">
        {/* MacBook SVG Container */}
        <svg
          viewBox="0 0 1600 1000"
          className="block w-full h-full transition-all duration-500"
          preserveAspectRatio="xMidYMid meet"
          style={{
            maxWidth: '100%',
            height: 'auto',
            filter: isHovered
              ? 'drop-shadow(0 20px 60px rgba(0,0,0,0.6)) drop-shadow(0 0 40px rgba(59,130,246,0.15))'
              : 'drop-shadow(0 50px 100px rgba(0,0,0,0.5)) drop-shadow(0 10px 25px rgba(0,0,0,0.8)) drop-shadow(0 0 40px rgba(59,130,246,0.15))',
          }}
        >
        {/* Definitions */}
        <defs>
          <linearGradient id={`keyboard-gradient-${isHovered ? 'hover' : 'normal'}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={isHovered ? '#1e3a8a' : '#18181b'} />
            <stop offset="100%" stopColor={isHovered ? '#1e40af' : '#27272a'} />
          </linearGradient>
          <linearGradient id="screen-glass" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
            <stop offset="40%" stopColor="rgba(255,255,255,0.02)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.1)" />
          </linearGradient>
          <clipPath id="screen-clip">
            <rect x="128" y="58" width="1344" height="834" rx="8" />
          </clipPath>
          <filter id={`brightness-filter-${isHovered ? 'hover' : 'normal'}`}>
            <feColorMatrix
              type="matrix"
              values={isHovered
                ? "1.15 0 0 0 0  0 1.15 0 0 0  0 0 1.15 0 0  0 0 0 1 0"
                : "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
              }
            />
            <feColorMatrix
              type="saturate"
              values={isHovered ? "1.1" : "1"}
            />
          </filter>
        </defs>

        {/* Screen Bezel */}
        <rect
          x="120"
          y="50"
          width="1360"
          height="850"
          rx="12"
          fill="#18181b"
          stroke="#18181b"
          strokeWidth="8"
        />

        {/* Screen Content Area */}
        <image
          href={screenshot}
          x="128"
          y="58"
          width="1344"
          height="834"
          preserveAspectRatio="xMidYMin slice"
          clipPath="url(#screen-clip)"
          filter={`url(#brightness-filter-${isHovered ? 'hover' : 'normal'})`}
          className="transition-all duration-400"
        />

        {/* Screen Glass Effect */}
        <rect
          x="128"
          y="58"
          width="1344"
          height="834"
          rx="8"
          fill="url(#screen-glass)"
          style={{ pointerEvents: 'none' }}
        />

        {/* Notch */}
        <rect
          x="700"
          y="58"
          width="200"
          height="24"
          rx="12"
          fill="#000000"
        />

        {/* Screen Inner Glow */}
        <rect
          x="128"
          y="58"
          width="1344"
          height="834"
          rx="8"
          fill="none"
          stroke="rgba(59,130,246,0.05)"
          strokeWidth="2"
          style={{
            filter: 'inset 0 0 30px rgba(59,130,246,0.05)',
          }}
        />

        {/* Keyboard Deck */}
        <rect
          x="0"
          y="900"
          width="1600"
          height="100"
          rx="8"
          fill={`url(#keyboard-gradient-${isHovered ? 'hover' : 'normal'})`}
          className="transition-all duration-500"
        />

        {/* Keyboard Deck Shadow */}
        <rect
          x="0"
          y="900"
          width="1600"
          height="100"
          rx="8"
          fill="rgba(0,0,0,0.3)"
        />
      </svg>
      </div>

      {/* Reflection Pool - Desktop Only */}
      {/* Reflection Pool - Desktop Only, disabled on Safari for performance */}
      <div className="hidden xl:block absolute top-full left-0 w-full max-w-full h-32 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full opacity-15 blur-[8px]"
          style={{
            transform: 'scaleY(-1) translateY(20px)',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 100%)',
            willChange: 'auto',
          }}
        >
          <svg viewBox="0 0 1600 1000" className="block w-full h-auto" preserveAspectRatio="xMidYMid meet">
            <defs>
              <clipPath id="screen-clip-reflection">
                <rect x="128" y="58" width="1344" height="834" rx="8" />
              </clipPath>
            </defs>
            <rect x="120" y="50" width="1360" height="850" rx="12" fill="#18181b" />
            <image
              href={screenshot}
              x="128"
              y="58"
              width="1344"
              height="834"
              preserveAspectRatio="xMidYMin slice"
              clipPath="url(#screen-clip-reflection)"
            />
          </svg>
        </div>
      </div>

      {/* Scan Line Effect - Desktop Only */}
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none rounded-lg">
        <div
          className="absolute left-0 w-full h-[40%] bg-gradient-to-b from-blue-500/[0.03] to-transparent"
          style={{
            animation: 'scan 8s ease-in-out infinite',
            willChange: 'auto',
          }}
        />
      </div>
    </div>
  );
};

export default MacBookFrame;
