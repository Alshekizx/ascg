import { useEffect, useRef, useState } from 'react';

export default function AnimatedStatistic({ value, label }: { value: string; label: string }) {
  const target = Number.parseInt(value, 10);
  const suffix = value.replace(/^\d+/, '');
  const [count, setCount] = useState(0);
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = element.current;
    if (!node) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let observer: IntersectionObserver | undefined;
    const finish = () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      setCount(target);
    };
    const onMotionChange = () => { if (motion.matches) finish(); };

    if (motion.matches || !('IntersectionObserver' in window)) {
      finish();
      return;
    }

    observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer?.disconnect();
      let started: number | undefined;
      const tick = (time: number) => {
        started ??= time;
        const progress = Math.min((time - started) / 1800, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(target * eased));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    observer.observe(node);
    motion.addEventListener('change', onMotionChange);

    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      motion.removeEventListener('change', onMotionChange);
    };
  }, [target]);

  return (
    <div ref={element}>
      <p className="text-3xl font-bold tabular-nums" style={{ fontFamily: 'var(--font-display)', color: '#B8963E' }}>
        <span aria-hidden="true">{count}{suffix}</span>
        <span className="sr-only">{value}</span>
      </p>
      <p className="text-sm text-gray-500 mt-0.5">{label}</p>
    </div>
  );
}
