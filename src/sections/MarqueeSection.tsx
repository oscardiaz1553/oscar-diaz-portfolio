import { useEffect, useRef, useState } from 'react';
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

function MarqueeRow({
  tiles,
  offset,
  direction,
}: {
  tiles: Tile[];
  offset: number;
  direction: 'right' | 'left';
}) {
  // Triple the tiles for a seamless loop.
  const all = [...tiles, ...tiles, ...tiles];
  const shift = offset - 200;
  const translateX = direction === 'right' ? shift : -shift;

  return (
    <div
      className="flex gap-3"
      style={{
        transform: `translateX(${translateX}px)`,
        willChange: 'transform',
      }}
    >
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
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const node = sectionRef.current;
      if (!node) return;
      const sectionTop = node.offsetTop;
      const next = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(next);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 flex flex-col gap-3 overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      <MarqueeRow tiles={ROW_ONE} offset={offset} direction="right" />
      <MarqueeRow tiles={ROW_TWO} offset={offset} direction="left" />
    </section>
  );
}
