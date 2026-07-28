'use client';

import * as React from 'react';

export function HeroCanvas() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="w-full h-[400px] rounded-2xl glass-surface flex items-center justify-center p-8 text-center border border-indigo-500/30">
        <div className="space-y-4">
          <div className="w-16 h-16 rounded-full bg-indigo-600/20 text-indigo-400 mx-auto flex items-center justify-center font-bold text-2xl animate-pulse">
            S
          </div>
          <p className="text-xs text-zinc-400 font-mono">
            [High-Performance WebGL Scene Optimizing for Desktop Viewport]
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[480px] rounded-2xl glass-surface border border-indigo-500/30 overflow-hidden relative group">
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 via-purple-900/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 space-y-4">
        <div className="w-24 h-24 rounded-3xl bg-indigo-600/30 border border-indigo-500/50 flex items-center justify-center text-indigo-300 font-bold text-4xl shadow-2xl glass-glow group-hover:scale-110 transition-transform duration-500">
          S
        </div>
        <h3 className="text-xl font-bold text-white">Interactive 3D WebGL Canvas</h3>
        <p className="text-xs text-zinc-400 max-w-sm">
          React Three Fiber rendering Draco-compressed 3D elements with dynamic cursor-tracked lighting.
        </p>
      </div>
    </div>
  );
}
