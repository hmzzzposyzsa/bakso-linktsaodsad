import { motion } from 'framer-motion'
import Scene3D from './components/Scene3D'
import LinkButton from './components/LinkButton'
import { logoImg } from './assets/images'

const links = [
  {
    title: 'WEB SHOP',
    url: 'https://shop.arduyy.my.id',
    icon: '🌐',
    color: '#6e5494',
  },
  {
    title: 'YouTube',
    url: 'https://youtube.com/@arduyyproject',
    icon: '🎬',
    color: '#ff0000',
  },
  {
    title: 'Tiktok Utama',
    url: 'https://tiktok.com/@arduyyproject',
    icon: '📱',
    color: '#5865f2',
  },
  {
    title: 'Tiktok info',
    url: 'https://tiktok.com/@infoarduyy',
    icon: '📱',
    color: '#1da1f2',
  },
]

function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Outer ring glow */}
      <div className="absolute -inset-4 sm:-inset-5 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-cyan-500/20 blur-2xl animate-pulse" />

      {/* Avatar circle */}
      <motion.div
        className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0a1628 0%, #0d2147 50%, #0a1628 100%)',
          boxShadow: '0 0 60px rgba(26, 79, 212, 0.3), inset 0 0 30px rgba(26, 79, 212, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {/* Logo image */}
        <img
          src={logoImg}
          alt="Arduyyproject Logo"
          className="w-full h-full object-cover rounded-full"
        />

        {/* Inner ring */}
        <div
          className="absolute inset-1 rounded-full pointer-events-none"
          style={{
            border: '1px solid rgba(26, 79, 212, 0.3)',
          }}
        />

        {/* Rotating ring animation */}
        <motion.div
          className="absolute inset-[-2px] rounded-full pointer-events-none"
          style={{
            border: '2px solid transparent',
            borderTopColor: 'rgba(79, 143, 255, 0.5)',
            borderRightColor: 'rgba(139, 92, 246, 0.3)',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: '#020c24' }}>
      {/* 3D Background */}
      <Scene3D />

      {/* Radial gradient overlays */}
      <div className="fixed inset-0 z-[1] pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/[0.07] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/[0.05] rounded-full blur-[100px]" />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-cyan-600/[0.04] rounded-full blur-[80px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen px-4 sm:px-6 py-10 sm:py-16">
        {/* Logo */}
        <Logo />

        {/* Brand name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 sm:mt-6 text-2xl sm:text-4xl font-bold tracking-tight"
        >
          <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Arduyy
          </span>
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            project
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-2 sm:mt-3 text-[11px] sm:text-sm text-white/35 tracking-[0.2em] sm:tracking-widest uppercase"
        >
          Shop • Fm • Sawahan
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-7 sm:mt-8 w-36 sm:w-48 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />

        {/* Links */}
        <div className="mt-6 sm:mt-8 w-full max-w-md space-y-2.5 sm:space-y-3">
          {links.map((link, index) => (
            <LinkButton
              key={link.title}
              title={link.title}
              url={link.url}
              icon={link.icon}
              index={index}
              color={link.color}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
