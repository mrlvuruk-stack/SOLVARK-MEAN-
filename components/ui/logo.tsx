import React from 'react';

interface SolvarkLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export function SolvarkLogo({ className = '', size = 'md', variant = 'light' }: SolvarkLogoProps) {
  const isDark = variant === 'dark';

  // Size configurations
  const dimensions = {
    sm: { height: 24, fontSize: 'text-lg', vWidth: 16, vHeight: 16 },
    md: { height: 32, fontSize: 'text-2xl', vWidth: 22, vHeight: 22 },
    lg: { height: 44, fontSize: 'text-4xl', vWidth: 30, vHeight: 30 },
  }[size];

  const arkTextColor = isDark ? 'text-white' : 'text-[#0B0B0D]';

  return (
    <div className={`inline-flex items-center gap-0.5 select-none font-heading font-extrabold tracking-tight ${className}`}>
      {/* 'Sol' in Electric Blue */}
      <span className={`${dimensions.fontSize} font-extrabold leading-none tracking-tighter text-[#0052FF]`}>
        Sol
      </span>

      {/* Official Solvark 'v' Chevron Mark in Electric Pink */}
      <svg
        width={dimensions.vWidth}
        height={dimensions.vHeight}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="inline-block transform translate-y-[1px] mx-[1px]"
      >
        <path
          d="M 4,8 C 12,24 20,38 20,38 C 20,38 28,24 36,8 C 30,18 20,24 20,24 C 20,24 10,18 4,8 Z"
          fill="#FF2A85"
        />
      </svg>

      {/* 'ark' in Primary Text Color */}
      <span className={`${dimensions.fontSize} font-extrabold leading-none tracking-tighter ${arkTextColor}`}>
        ark
      </span>
    </div>
  );
}
