import { motion } from 'framer-motion'
import React from 'react'

interface LinkButtonProps {
  title: string
  url: string
  icon: React.ReactNode
  index: number
  color?: string
}

export default function LinkButton({ title, url, icon, index, color = '#1a4fd4' }: LinkButtonProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.02,
        y: -3,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
      className="group relative block w-full"
    >
      {/* Glow effect behind */}
      <div
        className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
        style={{ background: `linear-gradient(135deg, ${color}66, ${color}22, transparent)` }}
      />

      {/* Main button */}
      <div className="relative flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3.5 sm:py-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl overflow-hidden transition-all duration-500 group-hover:border-white/[0.18] group-hover:bg-white/[0.07]">
        {/* Animated gradient line on left */}
        <div
          className="absolute left-0 top-0 h-full w-[3px] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-center rounded-r-full"
          style={{
            background: `linear-gradient(to bottom, transparent, ${color}, transparent)`,
          }}
        />

        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>

        {/* Icon */}
        <div
          className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
          style={{
            background: `linear-gradient(135deg, ${color}20, ${color}08)`,
            border: `1px solid ${color}30`,
            boxShadow: `0 0 0 0 ${color}00`,
          }}
        >
          <span className="text-lg sm:text-xl" style={{ color }}>{icon}</span>
        </div>

        {/* Title */}
        <div className="relative flex-1 min-w-0">
          <span className="block text-sm sm:text-base font-medium text-white/75 tracking-wide group-hover:text-white transition-colors duration-300 truncate">
            {title}
          </span>
        </div>

        {/* Arrow */}
        <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/[0.04] group-hover:bg-white/[0.1] transition-all duration-300 shrink-0">
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/25 group-hover:text-white/70 transition-all duration-300 group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.a>
  )
}
