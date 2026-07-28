'use client';

import * as React from 'react';

export function BackgroundMesh() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = React.useState<{ x: number; y: number }>({
    x: -1000,
    y: -1000,
  });
  const [isHovered, setIsHovered] = React.useState(false);

  // Track mouse position for dynamic background spotlight effect
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isHovered) setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovered]);

  // Particle constellation canvas animation
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Color palette matching Solvark Brand tokens: Electric Blue, Brand Magenta/Pink, Neon Cyan
    const colors = [
      'rgba(0, 82, 255, 0.45)',    // Electric Blue
      'rgba(255, 42, 133, 0.45)',  // Brand Pink
      'rgba(0, 210, 255, 0.35)',   // Cyber Cyan
      'rgba(147, 51, 234, 0.35)',  // Deep Purple
    ];

    const particlesCount = Math.min(Math.floor(width / 22), 65);
    const particles = Array.from({ length: particlesCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.5 + 0.3,
    }));

    let currentMouseX = width / 2;
    let currentMouseY = height / 2;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smoothly update cursor pos for particle reaction
      currentMouseX += (mousePos.x - currentMouseX) * 0.05;
      currentMouseY += (mousePos.y - currentMouseY) * 0.05;

      // Draw particle constellation connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const lineAlpha = (1 - distance / 110) * 0.18;
            ctx.strokeStyle = `rgba(0, 82, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // Draw individual floating particles with soft neon glow
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Bounce/Wrap screen boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Subtle attraction force to mouse cursor
        if (isHovered) {
          const mdx = currentMouseX - p.x;
          const mdy = currentMouseY - p.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < 160) {
            p.x += (mdx / mDist) * 0.3;
            p.y += (mdy / mDist) * 0.3;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [mousePos, isHovered]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 1. Dynamic Cursor Light Spotlight */}
      {isHovered && (
        <div
          className="absolute w-[600px] h-[600px] rounded-full transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2 opacity-60"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            background:
              'radial-gradient(circle, rgba(0, 82, 255, 0.12) 0%, rgba(255, 42, 133, 0.08) 40%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      )}

      {/* 2. Vibrant Floating Animated Ambient Orbs */}
      {/* Top-Left Vibrant Magenta/Pink Glow */}
      <div className="absolute top-[-12%] left-[-8%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-br from-[#FF2A85]/20 via-[#B80357]/15 to-transparent blur-[130px] animate-float-slow" />

      {/* Top-Right Electric Blue Glow */}
      <div className="absolute top-[5%] right-[-10%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full bg-gradient-to-bl from-[#0052FF]/20 via-[#003ECC]/15 to-transparent blur-[140px] animate-float-reverse" />

      {/* Center Cyber Cyan Soft Light Accent */}
      <div className="absolute top-[42%] left-[25%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-r from-cyan-400/12 via-blue-500/10 to-transparent blur-[150px] animate-pulse-glow" />

      {/* Bottom-Right Deep Purple / Indigo Glow */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-tl from-purple-600/18 via-pink-500/12 to-transparent blur-[160px] animate-float-slow" />

      {/* Bottom-Left Electric Blue Accent */}
      <div className="absolute bottom-[-8%] left-[-5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-tr from-[#0052FF]/15 via-blue-400/10 to-transparent blur-[130px] animate-float-reverse" />

      {/* 3. Tech Blueprint Dot Matrix & Grid Pattern Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(#0052FF1a_1px,transparent_1px)] [background-size:32px_32px] opacity-60" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0052FF0a_1px,transparent_1px),linear-gradient(to_bottom,#0052FF0a_1px,transparent_1px)] [background-size:64px_64px] opacity-40" />

      {/* Radial vignette mask so background grid gently fades towards screen edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(255,255,255,0.7)_100%)]" />

      {/* 4. Interactive Constellation Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-80" />
    </div>
  );
}
