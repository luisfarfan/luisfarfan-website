import { useEffect, useRef } from 'react';
import {
  prepareWithSegments,
  layoutNextLine,
  clearCache,
  type PreparedTextWithSegments,
  type LayoutCursor,
} from '@chenglou/pretext';

const WORDS =
  'CREATIVE • INNOVATIVE • DRIVEN • ARCHITECT • FULL-STACK • PRODUCT • DESIGN • ANIMATION • LOOPS • INTERACTIVE • WEBGL • CANVAS • TYPESCRIPT • ASTRO • REACT • DIGITAL • EXPERIENCE • SENIOR • ENGINEER • DEVELOPER • VISUAL • CODE • LOGIC • ART • SYSTEM • INTERFACE • 12YRS • EXPERIENCE'.split(
    ' ',
  );

/** Long pool so layout can wrap for many rows without re-preparing */
const TEXT_POOL = Array(120).fill(WORDS.join('  ')).join(' ');

const PAPER = '#f5f3ef';
const INK = '#0a0a0a';
const ACCENT = '#00c896';
const FONT_SIZE = 13;
const LINE_HEIGHT = 18;
const FONT_STR = `500 ${FONT_SIZE}px "DM Mono", monospace`;

function seekContentStart(
  prepared: PreparedTextWithSegments,
  hint: number,
): LayoutCursor {
  const n = prepared.segments.length;
  if (n === 0) return { segmentIndex: 0, graphemeIndex: 0 };
  for (let k = 0; k < n; k++) {
    const i = (hint + k) % n;
    const s = prepared.segments[i];
    if (s && /\S/.test(s)) return { segmentIndex: i, graphemeIndex: 0 };
  }
  return { segmentIndex: 0, graphemeIndex: 0 };
}

function getObstacle(t: number, W: number, H: number) {
  const cx = W / 2 + Math.sin(t * 0.4) * W * 0.15;
  const cy = H / 2 + Math.cos(t * 0.6) * H * 0.1;
  const r = Math.min(W, H) * 0.16 + Math.sin(t * 1.2) * 5;
  return { cx, cy, r: Math.max(0, r) };
}

export default function PretextHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const preparedRef = useRef<PreparedTextWithSegments | null>(null);
  const wordCursorRef = useRef(0);
  const lastRotateRef = useRef(0);

  useEffect(() => {
    try {
      preparedRef.current = prepareWithSegments(TEXT_POOL, FONT_STR);
    } catch {
      preparedRef.current = null;
    }
    return () => {
      preparedRef.current = null;
      clearCache();
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const container = canvas.parentElement;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let startTime = 0;

    const draw = (ts: number) => {
      if (!startTime) startTime = ts;
      const t = (ts - startTime) / 1000;
      const prepared = preparedRef.current;
      if (!prepared || prepared.segments.length === 0) {
        if (!reducedMotion) animRef.current = requestAnimationFrame(draw);
        return;
      }

      const W = container?.clientWidth || 500;
      const H = container?.clientHeight || 500;
      const dpr = window.devicePixelRatio || 1;
      const targetW = Math.floor(W * dpr);
      const targetH = Math.floor(H * dpr);

      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW;
        canvas.height = targetH;
        canvas.style.width = `${W}px`;
        canvas.style.height = `${H}px`;
      }

      if (ts - lastRotateRef.current > 2000) {
        lastRotateRef.current = ts;
        wordCursorRef.current =
          (wordCursorRef.current + 1) % Math.max(1, prepared.segments.length);
      }

      ctx.save();
      ctx.scale(dpr, dpr);

      ctx.fillStyle = PAPER;
      ctx.fillRect(0, 0, W, H);

      const obs = getObstacle(t, W, H);

      const grad = ctx.createRadialGradient(
        obs.cx,
        obs.cy,
        obs.r * 0.4,
        obs.cx,
        obs.cy,
        obs.r * 1.6,
      );
      grad.addColorStop(0, 'rgba(0,200,150,0.15)');
      grad.addColorStop(1, 'rgba(0,200,150,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(obs.cx, obs.cy, obs.r * 1.6, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(obs.cx, obs.cy, obs.r, 0, Math.PI * 2);
      ctx.fillStyle = INK;
      ctx.fill();

      ctx.fillStyle = ACCENT;
      ctx.font = '700 10px "DM Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('12 YRS', obs.cx, obs.cy - 8);
      ctx.fillText('SENIOR', obs.cx, obs.cy + 8);

      const orbitR = obs.r + 30;
      for (let i = 0; i < 6; i++) {
        const angle = t * 1.2 + (i * Math.PI * 2) / 6;
        const dx = obs.cx + Math.cos(angle) * orbitR;
        const dy = obs.cy + Math.sin(angle) * orbitR;
        ctx.beginPath();
        ctx.arc(dx, dy, i % 2 === 0 ? 3 : 2, 0, Math.PI * 2);
        ctx.fillStyle = i % 2 === 0 ? ACCENT : INK;
        ctx.fill();
      }

      ctx.font = FONT_STR;
      ctx.textBaseline = 'top';
      ctx.textAlign = 'left';

      const MARGIN = 30;
      let tokenIdx = 0;

      const startCursor = seekContentStart(prepared, wordCursorRef.current);
      let cursor: LayoutCursor = { ...startCursor };

      for (let curY = MARGIN; curY < H - MARGIN; curY += LINE_HEIGHT) {
        const distToCenter = Math.abs(curY + FONT_SIZE / 2 - obs.cy);
        let segments: [number, number][];

        if (distToCenter < obs.r + 10) {
          const h = distToCenter;
          const r = obs.r + 15;
          const chord = Math.sqrt(Math.max(0, r * r - h * h));
          segments = [
            [MARGIN, obs.cx - chord],
            [obs.cx + chord, W - MARGIN],
          ];
        } else {
          segments = [[MARGIN, W - MARGIN]];
        }

        for (const [sL, sR] of segments) {
          const maxW = sR - sL;
          if (maxW < 40) continue;

          let line = layoutNextLine(prepared, cursor, maxW);
          if (!line) {
            cursor = { segmentIndex: 0, graphemeIndex: 0 };
            line = layoutNextLine(prepared, cursor, maxW);
          }
          if (!line) continue;

          cursor = line.end;

          const tokens = line.text.trimEnd().split(/\s+/).filter(Boolean);
          let x = sL;
          ctx.font = FONT_STR;
          for (const token of tokens) {
            const chunk = `${token} `;
            const isAccent = tokenIdx % 9 === 0;
            ctx.fillStyle = isAccent ? ACCENT : 'rgba(10,10,10,0.3)';
            ctx.fillText(chunk, x, curY);
            x += ctx.measureText(chunk).width;
            tokenIdx++;
          }
        }
      }

      ctx.restore();

      if (!reducedMotion) {
        animRef.current = requestAnimationFrame(draw);
      }
    };

    animRef.current = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[500px]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block h-full w-full"
        aria-hidden="true"
      />
    </div>
  );
}
