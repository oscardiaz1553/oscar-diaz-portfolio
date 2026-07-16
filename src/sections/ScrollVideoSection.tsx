import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';

/*
  Secuencia de fotogramas de Out_video.mp4 (public/out-seq/). Scrubbing tipo
  Apple: el scroll elige el fotograma y un canvas lo pinta. Con imágenes
  precargadas el cuadro exacto sale al instante (un <video> con seek salta).
*/
const FRAME_COUNT = 119;
const frameSrc = (i: number) =>
  `${import.meta.env.BASE_URL}out-seq/f_${String(i + 1).padStart(4, '0')}.webp`;

export default function ScrollVideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const images: (HTMLImageElement | null)[] = Array(FRAME_COUNT).fill(null);
    let raf = 0;
    let target = 0;
    let current = 0;
    let lastDrawn = -1;
    let disposed = false;

    const load = (i: number) =>
      new Promise<void>((resolve) => {
        if (images[i]) return resolve();
        const img = new Image();
        img.onload = () => {
          images[i] = img;
          resolve();
        };
        img.onerror = () => resolve();
        img.src = frameSrc(i);
      });

    (async () => {
      const coarse: number[] = [];
      const rest: number[] = [];
      for (let i = 0; i < FRAME_COUNT; i++) {
        (i % 8 === 0 ? coarse : rest).push(i);
      }
      await Promise.all(coarse.map(load));
      if (disposed) return;
      lastDrawn = -1;
      const BATCH = 12;
      for (let s = 0; s < rest.length; s += BATCH) {
        if (disposed) return;
        await Promise.all(rest.slice(s, s + BATCH).map(load));
      }
      lastDrawn = -1;
    })();

    const draw = (index: number) => {
      let img = images[index];
      if (!img) {
        for (let d = 1; d < FRAME_COUNT && !img; d++) {
          img = images[index - d] ?? images[index + d] ?? null;
        }
      }
      if (!img) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const cw = canvas.clientWidth * dpr;
      const ch = canvas.clientHeight * dpr;
      if (canvas.width !== cw || canvas.height !== ch) {
        canvas.width = cw;
        canvas.height = ch;
      }
      const scale = Math.max(cw / img.width, ch / img.height);
      const dw = img.width * scale;
      const dh = img.height * scale;
      ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
    };

    const unsubscribe = scrollYProgress.on('change', (p) => {
      target = Math.min(FRAME_COUNT - 1, Math.max(0, p * (FRAME_COUNT - 1)));
    });

    const tick = () => {
      current += (target - current) * 0.22;
      if (Math.abs(target - current) < 0.05) current = target;
      const index = Math.round(current);
      if (index !== lastDrawn) {
        draw(index);
        lastDrawn = index;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onResize = () => {
      lastDrawn = -1;
    };
    window.addEventListener('resize', onResize);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      unsubscribe();
      window.removeEventListener('resize', onResize);
    };
  }, [scrollYProgress]);

  return (
    <section
      ref={sectionRef}
      aria-label="Oscar Díaz — Never the usual"
      className="relative h-[300vh] bg-klein-deep"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          aria-hidden
        />
      </div>
    </section>
  );
}
