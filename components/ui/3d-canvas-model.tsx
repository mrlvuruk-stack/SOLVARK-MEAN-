'use client';

import React, { useRef, useEffect } from 'react';

interface ThreeDCanvasModelProps {
  className?: string;
}

export function ThreeDCanvasModel({ className = '' }: ThreeDCanvasModelProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 300);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // 3D Cube Nodes & Vertices Matrix
    let angleX = 0.005;
    let angleY = 0.008;

    // Cube 3D Vertices (-1 to 1)
    const vertices = [
      { x: -1, y: -1, z: -1 },
      { x: 1, y: -1, z: -1 },
      { x: 1, y: 1, z: -1 },
      { x: -1, y: 1, z: -1 },
      { x: -1, y: -1, z: 1 },
      { x: 1, y: -1, z: 1 },
      { x: 1, y: 1, z: 1 },
      { x: -1, y: 1, z: 1 },
    ];

    // Inner Core 3D Vertices
    const innerVertices = vertices.map((v) => ({ x: v.x * 0.5, y: v.y * 0.5, z: v.z * 0.5 }));

    const edges = [
      [0, 1], [1, 2], [2, 3], [3, 0], // Back face
      [4, 5], [5, 6], [6, 7], [7, 4], // Front face
      [0, 4], [1, 5], [2, 6], [3, 7], // Connecting edges
    ];

    let currentRotationX = 0;
    let currentRotationY = 0;

    // Mouse tilt tracking
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left - width / 2) * 0.0005;
      mouseY = (e.clientY - rect.top - height / 2) * 0.0005;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      currentRotationX += angleX + mouseY;
      currentRotationY += angleY + mouseX;

      const cx = width / 2;
      const cy = height / 2;

      // Rotate vertex in 3D
      const project = (vertex: { x: number; y: number; z: number }) => {
        let rad = currentRotationY;
        let x1 = vertex.x * Math.cos(rad) - vertex.z * Math.sin(rad);
        let z1 = vertex.z * Math.cos(rad) + vertex.x * Math.sin(rad);

        rad = currentRotationX;
        let y1 = vertex.y * Math.cos(rad) - z1 * Math.sin(rad);
        let z2 = z1 * Math.cos(rad) + vertex.y * Math.sin(rad);

        const fov = 400;
        const distance = 4;
        const factor = fov / (distance + z2);
        return {
          x: cx + x1 * factor,
          y: cy + y1 * factor,
          z: z2,
        };
      };

      const projectedOuter = vertices.map(project);
      const projectedInner = innerVertices.map(project);

      // Draw 3D outer edges with Electric Blue & Pink gradients
      edges.forEach(([i, j], edgeIdx) => {
        const p1 = projectedOuter[i];
        const p2 = projectedOuter[j];
        const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
        if (edgeIdx % 2 === 0) {
          grad.addColorStop(0, '#0052FF');
          grad.addColorStop(1, '#FF2A85');
        } else {
          grad.addColorStop(0, '#FF2A85');
          grad.addColorStop(1, '#0052FF');
        }

        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      });

      // Draw 3D inner core edges with Electric Blue opacity
      ctx.strokeStyle = 'rgba(0, 82, 255, 0.4)';
      ctx.lineWidth = 1;
      edges.forEach(([i, j]) => {
        const p1 = projectedInner[i];
        const p2 = projectedInner[j];
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      });

      // Draw 3D Node Vertices with alternating Blue & Pink
      projectedOuter.forEach((p, idx) => {
        ctx.fillStyle = idx % 2 === 0 ? '#FF2A85' : '#0052FF';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4.5, 0, Math.PI * 2);
        ctx.fill();
      });

      projectedInner.forEach((p) => {
        ctx.fillStyle = '#0052FF';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={`relative w-full h-full min-h-[300px] flex items-center justify-center ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      <div className="absolute bottom-2 left-4 text-[9px] font-mono text-gradient-blue-pink uppercase tracking-widest pointer-events-none font-bold">
        INTERACTIVE 3D BLUE & PINK MATRIX // DRAG TO ROTATE
      </div>
    </div>
  );
}
