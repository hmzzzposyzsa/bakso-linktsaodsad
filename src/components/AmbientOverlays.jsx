export default function AmbientOverlays({ activeColor }) {
  return (
    <>
      {/* Floating gradient mesh blobs */}
      <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
        <div
          className="absolute left-[8%] top-[12%] h-[38vmax] w-[38vmax] rounded-full blur-[70px] transition-colors duration-800 ease-out"
          style={{
            background: `radial-gradient(circle, ${activeColor}33 0%, transparent 70%)`,
            animation: 'meshFloat1 12s ease-in-out infinite',
          }}
        />
        <div
          className="absolute right-[6%] top-[38%] h-[32vmax] w-[32vmax] rounded-full blur-[70px]"
          style={{
            background: 'radial-gradient(circle, #8b5cf62e 0%, transparent 70%)',
            animation: 'meshFloat2 15s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-[4%] left-[28%] h-[30vmax] w-[30vmax] rounded-full blur-[70px]"
          style={{
            background: 'radial-gradient(circle, #0066ff26 0%, transparent 70%)',
            animation: 'meshFloat3 18s ease-in-out infinite',
          }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Film grain */}
      <div className="pointer-events-none fixed inset-0 z-[2] opacity-[0.03]" style={{ animation: 'grainShift 0.5s steps(10) infinite' }}>
        <svg width="100%" height="100%">
          <filter id="grainFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grainFilter)" />
        </svg>
      </div>
    </>
  );
}
