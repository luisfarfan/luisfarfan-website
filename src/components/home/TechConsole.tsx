import React, { useState, useMemo } from 'react';
import type { StackColumn, TechItem } from '../../i18n/home';

interface Props {
  columns: StackColumn[];
}

const TechConsole: React.FC<Props> = ({ columns }) => {
  // Default to the first item of the first column (e.g., React/Next.js or IA)
  const defaultItem = useMemo(() => columns[0]?.items[0] || null, [columns]);
  const [selectedItem, setSelectedItem] = useState<TechItem | null>(defaultItem);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSelect = (item: TechItem) => {
    if (selectedItem?.name === item.name) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedItem(item);
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-ink/10 border border-ink/10 overflow-hidden">
      
      {/* Left Selection Column (4/12) */}
      <div className="lg:col-span-4 bg-paper/50 backdrop-blur-sm divide-y divide-ink/5">
        {columns.map((col, ci) => (
          <div key={ci} className="p-6">
            <h3 className={`font-mono text-[0.625rem] tracking-[0.2em] uppercase mb-4 ${
              col.color === 'highlight' ? 'text-accent' : 'text-muted'
            }`}>
              {col.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {col.items.map((item, ii) => {
                const isActive = selectedItem?.name === item.name;
                return (
                  <button
                    key={ii}
                    onClick={() => handleSelect(item)}
                    className={`group px-3 py-1.5 font-mono text-[0.75rem] transition-all duration-300 border cursor-none flex items-center gap-2 ${
                      isActive 
                        ? 'bg-accent border-accent text-ink' 
                        : 'bg-transparent border-ink/10 text-ink/60 hover:border-ink/30 hover:text-ink'
                    }`}
                    data-hover
                  >
                    {!isActive && (
                      <span className={`w-1 h-1 rounded-full ${
                        col.color === 'highlight' ? 'bg-accent2' : 'bg-accent'
                      }`} />
                    )}
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Right Reading Card (8/12) */}
      <div className="lg:col-span-8 bg-paper p-8 sm:p-12 lg:p-16 flex flex-col justify-center min-h-[400px] relative">
        {/* Background Ambient Glow */}
        <div className="absolute inset-0 pointer-events-none opacity-10"
             style={{ background: 'radial-gradient(circle at 70% 30%, var(--accent) 0%, transparent 50%)' }} />

        <div className={`transition-all duration-300 transform ${
          isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
        }`}>
          {selectedItem ? (
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="font-mono text-[0.625rem] tracking-[0.2em] uppercase text-accent">
                  Senior Architect Insight
                </span>
              </div>

              <h2 className="font-display text-[2.5rem] sm:text-[3.5rem] font-bold text-ink mb-8 tracking-tighter leading-none">
                {selectedItem.name}
              </h2>

              <div className="max-w-[32rem]">
                <p className="font-display text-[1.125rem] sm:text-[1.25rem] text-ink/80 leading-relaxed italic border-l-2 border-accent/20 pl-8">
                  "{selectedItem.experience}"
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-ink/5 flex items-center gap-4">
                <div className="w-8 h-[1px] bg-accent/30" />
                <span className="font-mono text-[0.625rem] text-muted tracking-widest uppercase">
                  Proven expertise · 12Y Mastery
                </span>
              </div>
            </div>
          ) : (
            <div className="text-center text-muted font-mono text-sm tracking-widest uppercase opacity-50">
              // Select a technology to view details
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechConsole;
