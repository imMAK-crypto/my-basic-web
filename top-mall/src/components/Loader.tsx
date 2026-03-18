import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader = ({ onComplete }: LoaderProps) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 600);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.6 },
    },
  };

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const text = 'TOP MALL';

  return (
    <motion.div
      variants={containerVariants}
      initial="visible"
      animate={isExiting ? 'exit' : 'visible'}
      className="fixed inset-0 bg-tm-bg z-[10000] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-tm-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-tm-accent rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-12">
        {/* Animated text */}
        <motion.div
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="flex gap-2 justify-center"
        >
          {text.split('').map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="font-display text-6xl md:text-8xl font-900 text-tm-primary"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Progress bar */}
        <motion.div className="w-64 h-1 bg-tm-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-tm-primary to-tm-accent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.4, ease: 'easeInOut' }}
            style={{ originX: 0 }}
          />
        </motion.div>

        {/* Dress silhouette SVG with stroke animation */}
        <motion.svg
          width="80"
          height="120"
          viewBox="0 0 80 120"
          fill="none"
          className="mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.path
            d="M40 10 Q50 20 50 35 L50 80 Q50 90 45 100 L35 100 Q30 90 30 80 L30 35 Q30 20 40 10 Z"
            stroke="#c8956c"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
          />
        </motion.svg>

        {/* Tagline */}
        <motion.p
          variants={letterVariants}
          className="font-accent text-tm-accent text-lg italic"
        >
          Where Every Woman Shines
        </motion.p>
      </div>
    </motion.div>
  );
};
