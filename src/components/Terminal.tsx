// src/components/Terminal.tsx
import { useEffect, useRef, useState } from 'react';

const LINES = [
  { prompt: true, cmd: 'whoami', delay: 400 },
  { out: '→ Senior Full Stack Developer & AI Engineer', accent: false, delay: 600 },
  { prompt: true, cmd: 'cat experience.json', delay: 1000 },
  { out: '{ years: 12, stacks: "all", IA: true }', accent: true, delay: 1200 },
  { prompt: true, cmd: 'ls ai-projects/', delay: 1800 },
  { out: 'agent/  rag-pipeline/  chat-platform/', accent: true, delay: 2000 },
  { prompt: true, cmd: 'ls skills/', delay: 2600 },
  { out: 'backend/  frontend/  devops/  serverless/  IA/', accent: true, delay: 2800 },
  { prompt: true, cmd: 'git log --oneline -3', delay: 3400 },
  { out: 'a3f1b9c feat: RAG pipeline con pgvector', accent: false, delay: 3600 },
  { out: 'c8e2d10 feat: AI agent con MCP tools', accent: false, delay: 3750 },
  { out: 'f2a9881 deploy: K8s prod cluster zero-downtime', accent: false, delay: 3900 },
  { prompt: true, cmd: 'npm run build --env=production', delay: 4400 },
  { out: '✓ Compiled in 0.8s. Ready to ship. 🚀', accent: true, delay: 4800 },
  { cursor: true, delay: 5000 },
];

export default function Terminal() {
  const [visible, setVisible] = useState<number[]>([]);

  useEffect(() => {
    LINES.forEach((line, i) => {
      setTimeout(() => {
        setVisible((v) => [...v, i]);
      }, line.delay);
    });
  }, []);

  return (
    <div
      className="rounded-md overflow-hidden h-full"
      style={{ background: '#111', minHeight: '320px' }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3" style={{ background: '#1a1a1a', borderBottom: '1px solid #222' }}>
        <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
        <span className="font-mono text-[11px] ml-3" style={{ color: '#444' }}>terminal — zsh</span>
      </div>

      {/* Lines */}
      <div className="p-5 space-y-0">
        {LINES.map((line, i) => {
          if (!visible.includes(i)) return null;

          if ('cursor' in line) {
            return (
              <div key={i} className="font-mono text-[12px] leading-7" style={{ color: '#aaa' }}>
                <span style={{ color: '#00c896' }}>~ </span>
                <span
                  className="inline-block w-2 h-[14px] align-middle"
                  style={{
                    background: '#00c896',
                    animation: 'blink 1s step-end infinite',
                  }}
                />
              </div>
            );
          }

          if ('prompt' in line && line.prompt) {
            return (
              <div key={i} className={`font-mono text-[12px] leading-7 ${i > 0 ? 'mt-2' : ''}`} style={{ color: '#aaa' }}>
                <span style={{ color: '#00c896' }}>~ </span>
                <span style={{ color: '#fff' }}>{line.cmd}</span>
              </div>
            );
          }

          return (
            <div key={i} className="font-mono text-[12px] leading-7" style={{ color: line.accent ? '#00c896' : '#555' }}>
              {line.out}
            </div>
          );
        })}
      </div>
    </div>
  );
}
