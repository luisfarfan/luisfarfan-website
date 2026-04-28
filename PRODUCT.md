## Design Context

### Users

- **Who**: Hiring managers, technical founders, and peers evaluating engineering depth (full stack, DevOps, AI).
- **Context**: Quick scan on desktop or mobile—often from LinkedIn, GitHub, or a résumé link.
- **Job to be done**: Confirm seniority, stack breadth, and AI credibility in under 2 minutes; find a way to contact or download CV.

### Brand Personality

- **Three words**: Confident, technical, editorial.
- **Tone**: Direct and evidence-led (years shipped, stack, projects), not playful startup fluff.
- **Emotional goals**: Trust (“this person ships”), clarity (“I know what they do”), and a hint of craft (“they care about the interface”).

### Aesthetic Direction

- **Visual tone**: High-contrast editorial / brutalist-leaning portfolio: Syne headlines, DM Mono for labels and data, paper background, sharp accent (teal `#00c896`), minimal chrome.
- **Theme**: Light-first (`--paper` base, `--ink` text); respects `prefers-color-scheme` only if you add it later—default stays light for daytime hiring context.
- **References**: Strong typographic hierarchy, asymmetric hero (text + canvas), monospace “spec sheet” cues.
- **Anti-references**: Generic “AI slop” gradients-on-dark, purple/cyan glow clichés, card grids with identical icon+title patterns, gradient text, thick side-stripe “callout” borders.

### Design Principles

1. **SEO and semantics first**: Real headings and copy in HTML; canvas and motion are progressive enhancement, not the only source of meaning.
2. **One hero moment**: The hero canvas is the signature motion; elsewhere keep motion restrained and purposeful.
3. **Performance is part of the brand**: Prefer static HTML from Astro, defer heavy islands (`client:visible`), respect `prefers-reduced-motion`.
4. **Clarity over decoration**: Every animation should explain state, hierarchy, or delight once—not compete with readability.
5. **Accessible by default**: Keyboard-navigable links, visible focus, sufficient contrast, `aria-hidden` on purely decorative visuals.

### Technical constraints

- **Stack**: Astro 4 (static), React islands, Tailwind, `@chenglou/pretext` for fast text measurement/layout around custom canvas regions.
- **Locales**: Spanish default at `/`, English at `/en/` (Astro built-in i18n routing); keep both copies aligned when changing facts (email, links, years).
- **Motion**: Transform/opacity where possible; honor reduced motion; avoid animating layout properties for INP/CLS.
