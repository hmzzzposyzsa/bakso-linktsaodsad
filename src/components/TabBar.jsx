import { motion } from 'framer-motion';

export default function TabBar({ categories, activeId, onChange }) {
  return (
    <div className="relative flex items-center justify-center gap-8 sm:gap-12">
      {/* static underline track */}
      <div className="absolute -bottom-2 left-0 right-0 h-px bg-white/[0.06]" />

      {categories.map((cat) => {
        const isActive = cat.id === activeId;
        return (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            className="relative pb-2"
          >
            {isActive && (
              <motion.div
                layoutId="tabGlow"
                className="pointer-events-none absolute -inset-x-4 -top-3 h-8"
                style={{
                  background: `radial-gradient(ellipse at center, ${cat.color}14 0%, transparent 70%)`,
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}

            <motion.span
              whileTap={{ scale: 0.95 }}
              className={`relative block text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-400 sm:text-sm ${
                isActive ? 'text-white' : 'text-white/25 hover:text-white/50'
              }`}
            >
              {cat.label}
            </motion.span>

            {isActive && (
              <motion.div
                layoutId="tabUnderline"
                className="absolute -bottom-2 left-0 right-0 h-[2px] rounded-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${cat.color}, transparent)`,
                  boxShadow: `0 0 8px ${cat.color}80, 0 0 20px ${cat.color}40`,
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
