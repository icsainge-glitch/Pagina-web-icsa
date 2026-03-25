export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="48" height="32" viewBox="0 0 128 80" xmlns="http://www.w3.org/2000/svg" className="shadow-sm border border-border/20 rounded-sm">
        {/* Outer Border */}
        <rect x="0" y="0" width="128" height="80" fill="#ffffff" />
        <rect x="2" y="2" width="124" height="76" fill="none" stroke="#2E8B57" strokeWidth="2" />
        
        {/* Left half teal */}
        <rect x="4" y="4" width="60" height="72" fill="#2E8B57" />
        {/* Right half white */}
        <rect x="64" y="4" width="60" height="72" fill="#ffffff" />
        
        {/* Text */}
        <text x="64" y="56" fontFamily="'Times New Roman', Times, serif" fontWeight="bold" fontSize="44" textAnchor="middle" letterSpacing="1">
          <tspan fill="#ffffff">IC</tspan><tspan fill="#2E8B57">SA</tspan>
        </text>
      </svg>
      <div className="flex flex-col">
        <span className="text-[11px] text-foreground font-bold uppercase tracking-widest leading-none mb-0.5">Ingeniería</span>
        <span className="text-[9px] text-muted-foreground font-semibold uppercase tracking-wider leading-none">en Comunicaciones S.A.</span>
      </div>
    </div>
  );
}
