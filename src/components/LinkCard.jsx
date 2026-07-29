import { motion } from 'framer-motion';
import { ArrowIcon } from '../icons/Icons';

export default function LinkCard({ link, index, categoryColor }) {
  const Icon = link.icon;
  const color = link.accent || categoryColor;

  return (
    <motion.a
      href={link.href}
      target={link.href.startsWith('#') ? undefined : '_blank'}
      rel={link.href.startsWith('#') ? undefined : 'noreferrer'}
      initial={{ opacity: 0, x: -40, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 40, scale: 0.8 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.025, y: -4 }}
      whileTap={{ scale: 0.97 }}
      className="group relative block overflow-hidden rounded-2xl"
    >
      {/* Radial glow behind, appears on hover */}
      <div
        className="pointer-events-none absolute -inset-6 opacity-0 blur-xl transition-opacity duration-600 group-hover:opacity-100"
        style={{ background: `radial-gradient(ellipse, ${color}30, transparent 70%)` }}
      />

      {/* Conic-gradient animated border on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-400 group-hover:opacity-100"
        style={{
          padding: 1,
          background: `conic-gradient(from 0deg, ${color}60, transparent 25%, transparent 75%, ${color}60)`,
          animation: 'borderSpin 4s linear infinite',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      <div className="relative flex items-center rounded-2xl border border-white/[0.06] bg-[#020c24]/80 backdrop-blur-2xl transition-colors duration-400 group-hover:border-white/[0.04]">
        {/* left accent line */}
        <div
          className="h-full w-[3px] shrink-0 self-stretch"
          style={{ background: `linear-gradient(to bottom, transparent, ${color}, transparent)` }}
        />

        {/* shimmer sweep */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
          <div
            className="absolute inset-y-0 w-1/2 -translate-x-[200%] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-transform duration-[1200ms] ease-out group-hover:translate-x-[200%]"
          />
        </div>

        <div className="flex flex-1 items-center gap-3 px-4 py-3.5 sm:gap-4 sm:px-5 sm:py-4">
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border sm:h-10 sm:w-10"
            style={{
              background: `linear-gradient(135deg, ${color}15, ${color}05)`,
              borderColor: `${color}20`,
            }}
          >
            <Icon size={17} color={color} />
          </div>

          <span className="flex-1 text-sm font-medium text-white/50 transition-colors duration-400 group-hover:text-white sm:text-base">
            {link.title}
          </span>

          <span className="text-white/15 transition-all duration-400 group-hover:translate-x-[2px] group-hover:text-white/60">
            <ArrowIcon size={15} color="currentColor" />
          </span>
        </div>
      </div>
    </motion.a>
  );
}
