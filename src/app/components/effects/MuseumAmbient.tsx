import { motion } from 'motion/react';
import { useMemo } from 'react';

export function MuseumAmbient() {
  // Golden dust particles floating in gallery light
  const particles = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1.5,
      duration: Math.random() * 8 + 7,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.45 + 0.15,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden no-print">
      {/* Ambient Gallery Top Spotlight Cones */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.09),transparent_70%)] blur-2xl" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(184,134,11,0.07),transparent_70%)] blur-3xl" />

      {/* Floating Golden Dust Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -35, 0],
            x: [0, (p.id % 2 === 0 ? 15 : -15), 0],
            opacity: [p.opacity * 0.4, p.opacity, p.opacity * 0.4],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
