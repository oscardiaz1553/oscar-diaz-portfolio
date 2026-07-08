import { useRef, useEffect } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { MousePointer2, Sparkles, PenTool } from 'lucide-react';

interface HeroArtifactProps {
  /**
   * Scroll progress (0→1) driving the scene. Must be passed when the artifact
   * lives inside a sticky/pinned container — its own scroll tracking would
   * freeze there. Falls back to tracking itself when omitted.
   */
  progress?: MotionValue<number>;
}

/**
 * Abstract, interactive "design artifact" for the hero.
 * - Reacts to page scroll: the orbs grow, the stacked artboards fan open and
 *   the whole composition rotates as the hero scene plays out.
 * - Reacts to the pointer: layers shift at different depths (parallax).
 * - Never fully still: rings and cards keep a gentle idle motion.
 */
export default function HeroArtifact({ progress }: HeroArtifactProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Fallback scroll tracking for standalone usage.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const own = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const p = progress ?? own;

  const orbScale = useTransform(p, [0, 1], [1, 1.4]);
  const orbRotate = useTransform(p, [0, 1], [0, 80]);
  const orbBlueScale = useTransform(p, [0, 1], [1, 1.7]);
  const orbBlueShift = useTransform(p, [0, 1], [0, 70]);
  const groupRotate = useTransform(p, [0, 1], [0, -22]);
  const fan = useTransform(p, [0, 1], [0, 1]); // 0 stacked → 1 fanned
  const dotShift = useTransform(p, [0, 1], [0, -140]);
  const dotShift2 = useTransform(p, [0, 1], [0, 110]);

  // Pointer parallax.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 60, damping: 18 });
  const sy = useSpring(py, { stiffness: 60, damping: 18 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      px.set(e.clientX / window.innerWidth - 0.5);
      py.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [px, py]);

  const move = (depth: number) => ({
    x: useTransform(sx, (v) => v * depth),
    y: useTransform(sy, (v) => v * depth),
  });

  const orbMove = move(-40);
  const ringMove = move(30);
  const cardMove = move(18);
  const dotMoveA = move(60);
  const dotMoveB = move(-50);

  // Fanned card transforms.
  const card1Rot = useTransform(fan, [0, 1], [-10, -34]);
  const card1X = useTransform(fan, [0, 1], [0, -85]);
  const card2Rot = useTransform(fan, [0, 1], [4, 30]);
  const card2X = useTransform(fan, [0, 1], [0, 90]);
  const card3Rot = useTransform(fan, [0, 1], [-2, 3]);
  const card3Y = useTransform(fan, [0, 1], [0, 24]);

  return (
    <div
      ref={ref}
      className="relative w-full aspect-square max-w-[560px] mx-auto select-none"
    >
      {/* Navy companion orb — peeks from behind, grows faster for depth */}
      <motion.div
        className="absolute inset-[16%] rounded-full"
        style={{
          scale: orbBlueScale,
          x: orbBlueShift,
          y: orbBlueShift,
          background: '#1c3fb8',
          boxShadow: '0 40px 120px -20px rgba(28,63,184,0.45)',
        }}
        aria-hidden
      />

      {/* Flat cobalt orb */}
      <motion.div
        className="absolute inset-[8%] rounded-full"
        style={{
          scale: orbScale,
          rotate: orbRotate,
          x: orbMove.x,
          y: orbMove.y,
          background: '#2d5be3',
          boxShadow: '0 40px 120px -20px rgba(45,91,227,0.45)',
        }}
        aria-hidden
      />

      {/* Dashed rotating ring */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ x: ringMove.x, y: ringMove.y }}
        aria-hidden
      >
        <motion.svg
          viewBox="0 0 200 200"
          className="w-[112%] h-[112%]"
          animate={{ rotate: 360 }}
          transition={{ duration: 46, repeat: Infinity, ease: 'linear' }}
        >
          <circle
            cx="100"
            cy="100"
            r="94"
            fill="none"
            stroke="rgba(14,14,12,0.28)"
            strokeWidth="1.2"
            strokeDasharray="2 10"
            strokeLinecap="round"
          />
        </motion.svg>
      </motion.div>

      {/* Fanning artboards */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ rotate: groupRotate, x: cardMove.x, y: cardMove.y }}
      >
        {/* Back card */}
        <motion.div
          className="absolute w-[52%] h-[62%] rounded-3xl bg-white border border-black/10 shadow-xl"
          style={{ rotate: card1Rot, x: card1X }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="p-4">
            <div className="h-2.5 w-1/2 rounded-full bg-black/10" />
            <div className="mt-3 h-2 w-3/4 rounded-full bg-black/5" />
            <div className="mt-2 h-2 w-2/3 rounded-full bg-black/5" />
            <div className="mt-4 h-16 rounded-xl bg-[#2d5be3]/10" />
          </div>
        </motion.div>

        {/* Right card */}
        <motion.div
          className="absolute w-[50%] h-[58%] rounded-3xl bg-white border border-black/10 shadow-xl"
          style={{ rotate: card2Rot, x: card2X }}
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        >
          <div className="p-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-lg bg-[#2d5be3]" />
              <div className="h-2.5 w-1/2 rounded-full bg-black/10" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="h-10 rounded-lg bg-black/5" />
              <div className="h-10 rounded-lg bg-[#2d5be3]/15" />
              <div className="h-10 rounded-lg bg-[#2d5be3]/30" />
            </div>
            <div className="mt-3 h-2 w-3/4 rounded-full bg-black/5" />
          </div>
        </motion.div>

        {/* Front card */}
        <motion.div
          className="absolute w-[46%] h-[54%] rounded-3xl bg-white border border-black/10 shadow-2xl overflow-hidden"
          style={{ rotate: card3Rot, y: card3Y }}
        >
          <div className="h-8 bg-[#2d5be3] flex items-center px-3 gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/70" />
            <span className="h-2 w-2 rounded-full bg-white/40" />
            <span className="h-2 w-2 rounded-full bg-white/40" />
          </div>
          <div className="p-4">
            <div className="h-2.5 w-2/3 rounded-full bg-black/10" />
            <div className="mt-3 h-2 w-full rounded-full bg-black/5" />
            <div className="mt-2 h-2 w-4/5 rounded-full bg-black/5" />
            <motion.div
              className="mt-4 h-9 w-28 rounded-full bg-[#0e0e0c]"
              animate={{ opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Floating accent chips */}
      <motion.div
        className="absolute -left-2 top-[16%] h-12 w-12 rounded-2xl bg-white border border-black/10 shadow-lg flex items-center justify-center"
        style={{ y: dotShift, x: dotMoveA.x, rotate: -8 }}
        aria-hidden
      >
        <PenTool className="h-5 w-5 text-[#2d5be3]" />
      </motion.div>

      <motion.div
        className="absolute right-0 top-[8%] h-11 w-11 rounded-full bg-[#2d5be3] shadow-lg shadow-[#2d5be3]/30 flex items-center justify-center"
        style={{ y: dotShift2, x: dotMoveB.x }}
        aria-hidden
      >
        <Sparkles className="h-5 w-5 text-white" />
      </motion.div>

      <motion.div
        className="absolute right-[14%] bottom-[6%] h-12 w-12 rounded-2xl bg-[#0e0e0c] shadow-lg flex items-center justify-center"
        style={{ y: dotShift, x: dotMoveA.x, rotate: 10 }}
        aria-hidden
      >
        <MousePointer2 className="h-5 w-5 text-white" />
      </motion.div>

      {/* Small orbiting dot */}
      <motion.span
        className="absolute left-[10%] bottom-[20%] h-3 w-3 rounded-full bg-[#2d5be3]"
        style={{ y: dotShift2 }}
        animate={{ scale: [1, 1.6, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />
    </div>
  );
}
