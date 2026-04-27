import React, { useEffect, useRef } from 'react';
import { prepare, layout } from '@chenglou/pretext';

// ── Constants from the example ───────────────────────────────────────────────
const SPRING = 0.055; // spring return force toward origin
const DAMPING = 0.84; // velocity damping per frame
const HOVER_RADIUS = 150; // px — mouse push radius
const HOVER_FORCE = 10; // push strength under cursor
const CLICK_FORCE = 25; // explosion force on click
const GRID = 2; // px between sampled particles (stabilized for performance)
const IDLE_AMP = 0.35; // idle oscillation amplitude (px)
const IDLE_SPD = 0.00095; // idle oscillation speed

// Micro-characters to randomly assign to each particle
const MICRO_CHARS = ['·', '·', '·', '·', '·', '.', '·', '·', '-', '+', '·', '·'];

// Site colors will be fetched dynamically from CSS variables
let ACCENT = '#00c896';
let INK = '#0a0a0a';

interface Particle {
  x: number;
  y: number;
  ox: number; // origin x — where the particle "lives"
  oy: number; // origin y
  vx: number;
  vy: number;
  char: string;
  phase: number;
  color: string;
  alpha: number;
}

export type HeroHeadlinePretextProps = {
  name: string;
};

export default function HeroHeadlinePretext({ name }: HeroHeadlinePretextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999, over: false });
  const tickRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  // ── Measure text height using Pretext ──────────────────────────────────────
  const measureTextHeight = (text: string, font: string, lineHeight: number, maxWidth: number) => {
    try {
      const prepared = prepare(text, font);
      const result = layout(prepared, maxWidth, lineHeight);
      return result.height;
    } catch (e) {
      console.warn('[HeroHeadlinePretext] Pretext measurement failed:', e);
      // Fallback
      return 180; 
    }
  };

  // ── Auto-scale font to fit canvas width ─────────────────────────────────────
  const scaledFont = (text: string, maxWidth: number) => {
    const tmp = document.createElement('canvas').getContext('2d');
    if (!tmp) return { font: '900 32px Syne, sans-serif', size: 32 };
    let size = 180;

    while (size > 32) {
      const font = `900 ${size}px Syne, Arial Black, sans-serif`;
      tmp.font = font;
      if (tmp.measureText(text).width <= maxWidth * 0.9) {
        return { font, size };
      }
      size -= 4;
    }

    return { font: '900 32px Syne, sans-serif', size: 32 };
  };

  // ── Build particle field ────────────────────────────────────────────────────
  const build = (rawText: string) => {
    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);

    const text = rawText.trim().toUpperCase() || 'HELLO';
    const canvas = canvasRef.current;
    if (!canvas) return;

    const W = Math.min(window.innerWidth - 40, 1100);
    const { font, size } = scaledFont(text, W);
    const lineHeight = Math.round(size * 1.25);

    // Pretext tells us the exact canvas height needed
    const textH = measureTextHeight(text, font, lineHeight, W);

    canvas.width = W;
    canvas.height = Math.max(textH + 60, lineHeight + 60);

    // Draw text to offscreen canvas for pixel sampling
    // Using simple canvas if OffscreenCanvas is unavailable
    const off = document.createElement('canvas');
    off.width = W;
    off.height = canvas.height;
    const offCtx = off.getContext('2d', { willReadFrequently: true });
    if (!offCtx) return;

    offCtx.font = font;
    offCtx.textAlign = 'center';
    offCtx.textBaseline = 'middle';
    offCtx.fillStyle = '#fff';
    offCtx.fillText(text, W / 2, canvas.height / 2);

    // Get current theme colors from CSS variables
    const style = getComputedStyle(document.documentElement);
    ACCENT = style.getPropertyValue('--accent').trim() || '#00c896';
    INK = style.getPropertyValue('--ink').trim() || '#0a0a0a';

    const img = offCtx.getImageData(0, 0, W, canvas.height);
    const px = img.data;

    const newParticles: Particle[] = [];

    for (let y = 0; y < canvas.height; y += GRID) {
      for (let x = 0; x < W; x += GRID) {
        const idx = (y * W + x) * 4;
        if (px[idx + 3]! > 110) {
          // color logic: blend between ink and accent based on x position
          const t = x / W;
          const isAccent = Math.random() > 0.6; // Randomly assign accent color
          const color = isAccent ? ACCENT : INK;

          newParticles.push({
            x,
            y,
            ox: x,
            oy: y,
            vx: 0,
            vy: 0,
            char: MICRO_CHARS[Math.floor(Math.random() * MICRO_CHARS.length)]!,
            phase: Math.random() * Math.PI * 2,
            color,
            alpha: 0.95 + Math.random() * 0.05, // nearly full opacity
          });
        }
      }
    }

    particlesRef.current = newParticles;
    tickRef.current = 0;
    rafIdRef.current = requestAnimationFrame(loop);
  };

  // ── Render loop ─────────────────────────────────────────────────────────────
  const loop = () => {
    tickRef.current++;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.font = '10px "DM Mono", monospace'; // larger and bolder micro-characters
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const particles = particlesRef.current;
    const mouse = mouseRef.current;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i]!;

      // Spring return
      p.vx += (p.ox - p.x) * SPRING;
      p.vy += (p.oy - p.y) * SPRING;

      // Mouse push
      if (mouse.over) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < HOVER_RADIUS && dist > 0.5) {
          const f = (1 - dist / HOVER_RADIUS) * HOVER_FORCE;
          p.vx += (dx / dist) * f;
          p.vy += (dy / dist) * f;
        }
      }

      // Damping & integrate
      p.vx *= DAMPING;
      p.vy *= DAMPING;
      p.x += p.vx;
      p.y += p.vy;

      // Idle float
      const distHome = Math.hypot(p.x - p.ox, p.y - p.oy);
      if (distHome < 1.5 && !mouse.over) {
        const s = IDLE_SPD * tickRef.current;
        p.x = p.ox + Math.sin(s + p.phase) * IDLE_AMP;
        p.y = p.oy + Math.cos(s * 1.2 + p.phase) * IDLE_AMP;
      }

      // Draw
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.fillText(p.char, p.x, p.y);
    }

    ctx.globalAlpha = 1;
    rafIdRef.current = requestAnimationFrame(loop);
  };

  useEffect(() => {
    build(name);

    const handleResize = () => build(name);
    const handleThemeChange = () => build(name);

    window.addEventListener('resize', handleResize);
    window.addEventListener('theme-changed', handleThemeChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('theme-changed', handleThemeChange);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [name]);

  const handlePointerMove = (e: React.PointerEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const r = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - r.left,
      y: e.clientY - r.top,
      over: true,
    };
  };

  const handlePointerLeave = () => {
    mouseRef.current.over = false;
  };

  const handleClick = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const particles = particlesRef.current;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i]!;
      const dx = p.x - cx;
      const dy = p.y - cy;
      const dist = Math.hypot(dx, dy) || 1;
      const f = CLICK_FORCE * (0.5 + Math.random() * 1.5);
      p.vx += (dx / dist) * f;
      p.vy += (dy / dist) * f;
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center py-4 min-h-[14rem]">
      <canvas
        ref={canvasRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onClick={handleClick}
        className="block max-w-full cursor-crosshair touch-none"
        aria-label={`Interactive particle text: ${name}`}
      />
    </div>
  );
}
