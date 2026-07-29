import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SceneBackground from './components/SceneBackground';
import AmbientOverlays from './components/AmbientOverlays';
import LogoBadge from './components/LogoBadge';
import TabBar from './components/TabBar';
import LinkCard from './components/LinkCard';
import { categories } from './data/categories';

export default function App() {
  const [activeId, setActiveId] = useState(categories[0].id);
  const activeCategory = categories.find((c) => c.id === activeId);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#020c24] text-white">
      <SceneBackground />
      <AmbientOverlays activeColor={activeCategory.color} />

      <main className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-5 py-16 sm:px-6">
        <div className="flex w-full max-w-md flex-col items-center">
          <LogoBadge />

          {/* Brand name */}
          <h1 className="mt-6 flex gap-2 text-2xl font-bold tracking-tight sm:text-4xl">
            <motion.span
              initial={{ filter: 'blur(10px)', opacity: 0 }}
              animate={{ filter: 'blur(0px)', opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="bg-gradient-to-b from-white to-blue-100 bg-clip-text text-transparent"
            >
              Arduyy
            </motion.span>
            <motion.span
              key={activeCategory.id}
              initial={{ filter: 'blur(10px)', opacity: 0 }}
              animate={{ filter: 'blur(0px)', opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-clip-text text-transparent transition-all duration-600"
              style={{
                backgroundImage: `linear-gradient(90deg, ${activeCategory.gradientFrom}, ${activeCategory.gradientTo}, #a855f7)`,
              }}
            >
              project
            </motion.span>
          </h1>

          {/* Tagline */}
          <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/25 sm:text-xs">
            Builder &middot; Creator &middot; Developer
          </p>

          {/* Divider */}
          <motion.div
            className="mt-6 h-px w-40 origin-center sm:w-56"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: `linear-gradient(90deg, transparent, ${activeCategory.color}80, transparent)`,
              transition: 'background 0.5s ease',
            }}
          />

          {/* Tab bar */}
          <nav className="mt-8 w-full">
            <TabBar categories={categories} activeId={activeId} onChange={setActiveId} />
          </nav>

          {/* Link cards */}
          <div className="mt-8 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-3"
              >
                {activeCategory.links.map((link, i) => (
                  <LinkCard key={link.id} link={link} index={i} categoryColor={activeCategory.color} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}
