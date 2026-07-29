import { motion } from 'framer-motion';

export default function LogoBadge() {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        className="relative h-24 w-24 sm:h-28 sm:w-28"
        initial={{ scale: 0.3, rotate: -180, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Ambient pulsing glow */}
        <div className="absolute inset-0 -m-6 animate-pulse rounded-full bg-blue-500/25 blur-3xl" />
        {/* Static secondary glow */}
        <div
          className="absolute inset-0 -m-3 rounded-full blur-2xl"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.35), transparent 70%)' }}
        />

        {/* Outer counter-rotating ring */}
        <div
          className="absolute inset-[-10px] rounded-full border border-transparent"
          style={{
            borderTopColor: '#a855f7',
            borderLeftColor: '#0066ff',
            animation: 'spinReverse 12s linear infinite',
          }}
        />
        {/* Inner rotating ring */}
        <div
          className="absolute inset-[-4px] rounded-full border-2 border-transparent"
          style={{
            borderTopColor: '#3b82f6',
            borderRightColor: '#a855f7',
            borderBottomColor: '#22d3ee',
            animation: 'spinForward 6s linear infinite',
          }}
        />

        {/* Avatar */}
        <div className="absolute inset-0 overflow-hidden rounded-full border border-white/10 bg-[#020c24] shadow-[0_0_40px_rgba(0,102,255,0.25)]">
          <img src="/logo.png" alt="Arduyyproject logo" className="h-full w-full object-cover" draggable={false} />
        </div>
      </motion.div>
    </div>
  );
}
