import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { CASE_STUDIES } from '../data/caseStudies';

interface Tile {
  src?: string;
  label: string;
}

// Build a pool of project thumbnails to scroll. Real URLs drop in via `thumb`.
const TILES: Tile[] = CASE_STUDIES.map((c) => ({
  src: c.thumb,
  label: c.cardTitle,
}));

const ROW_ONE = [...TILES, ...TILES].slice(0, Math.ceil(TILES.length * 1.5));
const ROW_TWO = [...TILES, ...TILES].slice(Math.floor(TILES.length * 0.5));

function MarqueeRow({ tiles, x }: { tiles: Tile[]; x: MotionValue<number> }) {
  // Triple the tiles for a seamless loop.
  const all = [...tiles, ...tiles, ...tiles];

  return (
    <motion.div className="flex gap-3" style={{ x, willChange: 'transform' }}>
      {all.map((tile, i) => (
        <ImagePlaceholder
          key={i}
          src={tile.src}
          label={tile.label}
          alt={tile.label}
          rounded="rounded-2xl"
          className="flex-shrink-0"
          style={{ width: '420px', height: '270px' }}
        />
      ))}
    </motion.div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Drive the drift from scroll via a MotionValue (composited, no React
  // re-render on scroll — the previous setState-per-scroll approach janked
  // on mobile).
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const range = reduce ? [0, 0] : [-260, 260];
  const x1 = useTransform(scrollYProgress, [0, 1], range);
  const x2 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [260, -260]);

  return (
    <section
      ref={sectionRef}
      className="pt-10 sm:pt-14 md:pt-16 pb-14 flex flex-col gap-3 overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      <MarqueeRow tiles={ROW_ONE} x={x1} />
      <MarqueeRow tiles={ROW_TWO} x={x2} />
    </section>
  );
}
