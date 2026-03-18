import { useState } from 'react';

export const Marquee = () => {
  const [isPaused, setIsPaused] = useState(false);

  const text =
    'TOP MALL · S.M. STREET · KOZHIKODE · ABAYAS · GOWNS · PARTY WEAR · SHAWLS · TOPS · NEW ARRIVALS · ';

  return (
    <section className="bg-tm-primary text-tm-bg py-6 overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }

        @keyframes marquee-reverse {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0%); }
        }

        .marquee-track {
          animation: marquee 40s linear infinite;
          ${isPaused ? 'animation-play-state: paused;' : ''}
        }

        .marquee-track-reverse {
          animation: marquee-reverse 40s linear infinite;
          ${isPaused ? 'animation-play-state: paused;' : ''}
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        .marquee-track-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* First row - scrolling left */}
      <div
        className="marquee-track flex whitespace-nowrap gap-8 text-xl md:text-2xl font-display font-700 tracking-wide mb-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {[...Array(3)].map((_, i) => (
          <span key={i}>
            {text}
            <span className="mx-4">◆</span>
          </span>
        ))}
      </div>

      {/* Second row - scrolling right */}
      <div
        className="marquee-track-reverse flex whitespace-nowrap gap-8 text-xl md:text-2xl font-display font-700 tracking-wide"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {[...Array(3)].map((_, i) => (
          <span key={i}>
            <span className="mx-4">◆</span>
            {text}
          </span>
        ))}
      </div>
    </section>
  );
};
