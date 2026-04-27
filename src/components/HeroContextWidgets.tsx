import React, { useState, useEffect } from 'react';

interface Props {
  availability: string;
  archTitle: string;
  archItems: string[];
  aiTitle: string;
  focus: string;
}

export default function HeroContextWidgets({ availability, archTitle, archItems, aiTitle, focus }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
      {/* Availability Widget */}
      <div className="group relative overflow-hidden rounded-[0.125rem] border border-[var(--bento-border)] bg-[var(--bento-bg)] p-4 transition-all duration-300 hover:border-accent/30">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
          </span>
          <span className="font-mono text-[0.625rem] font-bold tracking-[0.12em] text-accent uppercase">
            STATUS: {availability}
          </span>
        </div>
      </div>

      {/* Architecture Foundations Widget */}
      <div className="group relative overflow-hidden rounded-[0.125rem] border border-[var(--bento-border)] bg-[var(--bento-bg)] p-4 transition-all duration-300 hover:border-accent/30">
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[0.625rem] tracking-[0.12em] text-muted uppercase">
            {archTitle}
          </span>
          <div className="flex flex-wrap gap-2">
            {archItems.map((item, i) => (
              <span key={i} className="font-mono text-[0.7rem] bg-ink/[0.03] dark:bg-ink/[0.08] px-2 py-1 rounded-[0.125rem] text-ink/70 border border-ink/5">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* AI Specialization Widget */}
      <div className="group relative overflow-hidden rounded-[0.125rem] border border-[var(--marker)]/20 bg-accent/5 p-4 transition-all duration-300 hover:border-accent/40 shadow-[inset_0_0_20px_rgba(0,200,150,0.03)]">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[0.625rem] tracking-[0.12em] text-accent font-bold uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
            {aiTitle}
          </span>
          <span className="font-mono text-[0.75rem] font-medium text-ink leading-relaxed">
            {focus}
          </span>
        </div>
      </div>
    </div>
  );
}
