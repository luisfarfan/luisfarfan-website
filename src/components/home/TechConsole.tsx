import React from 'react';
import type { StackColumn } from '../../i18n/home';

interface Props {
  columns: StackColumn[];
}

const TechConsole: React.FC<Props> = ({ columns }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40 border border-border/40 overflow-hidden rounded-[2px] transition-colors duration-300">
      {columns.map((col, ci) => (
        <div key={ci} className="bg-paper p-8 sm:p-10 flex flex-col h-full transition-colors duration-300">
          <div className="flex items-center gap-3 mb-8">
            <span className={`w-2 h-2 rounded-full ${
              col.color === 'highlight' ? 'bg-accent animate-pulse' : 'bg-muted/20'
            }`} />
            <h3 className={`font-mono text-[0.75rem] font-bold tracking-[0.2em] uppercase ${
              col.color === 'highlight' ? 'text-accent' : 'text-muted'
            }`}>
              {col.title}
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-2.5">
            {col.items.map((item, ii) => (
              <div
                key={ii}
                className="group relative"
              >
                <div className="px-3.5 py-2 font-mono text-[0.75rem] font-semibold border border-border/60 text-ink/70 bg-paper/30 transition-all duration-200 group-hover:border-accent group-hover:text-accent flex items-center gap-2 cursor-none" data-hover>
                  {item.name === 'Angular' ? 'Angular ❤️' : item.name}
                </div>
                
                {/* Tooltip for experience on hover */}
                <div className="absolute bottom-full left-0 mb-3 w-56 p-4 bg-ink text-paper text-[0.6875rem] font-mono leading-relaxed opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none rounded-[2px] shadow-2xl border border-white/10 translate-y-1 group-hover:translate-y-0">
                  <div className="text-accent mb-2 flex items-center gap-2 uppercase tracking-[0.2em] text-[0.55rem] font-bold">
                    <span className="w-1 h-1 rounded-full bg-accent"></span>
                    Professional Exp
                  </div>
                  <p className="text-paper/80 italic">
                    {item.experience}
                  </p>
                  <div className="absolute top-full left-6 border-[6px] border-transparent border-t-ink"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechConsole;
