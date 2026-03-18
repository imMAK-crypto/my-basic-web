import { useEffect } from 'react';

export const Cursor = () => {
  useEffect(() => {
    // State variables for animation loop
    let rafId: number;
    let mouseX = 0;
    let mouseY = 0;
    let circleX = 0;
    let circleY = 0;

    // Handle mouse move - instantly update dot via CSS variables
    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Dot: instant update via CSS variable
      document.documentElement.style.setProperty('--cx', mouseX + 'px');
      document.documentElement.style.setProperty('--cy', mouseY + 'px');
    };

    // Animation loop - lerp circle position
    const animate = () => {
      // Circle: lerp with factor 0.12 for subtle lag only
      circleX += (mouseX - circleX) * 0.12;
      circleY += (mouseY - circleY) * 0.12;
      document.documentElement.style.setProperty('--lx', circleX + 'px');
      document.documentElement.style.setProperty('--ly', circleY + 'px');
      rafId = requestAnimationFrame(animate);
    };

    // Add event listener with passive flag for performance
    window.addEventListener('mousemove', onMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Handle hover states for link/button expansion
  useEffect(() => {
    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.classList.contains('clickable')
      ) {
        document.documentElement.style.setProperty('--cursor-expanded', '1');
      } else if (target.tagName === 'IMG' || target.classList.contains('hover-image')) {
        document.documentElement.style.setProperty('--cursor-explore', '1');
      }
    };

    const handleMouseLeave = () => {
      document.documentElement.style.setProperty('--cursor-expanded', '0');
      document.documentElement.style.setProperty('--cursor-explore', '0');
    };

    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      {/* Cursor dot - instant position with CSS variables */}
      <div
        className="pointer-events-none fixed z-[99999] w-1.5 h-1.5 bg-tm-primary rounded-full"
        style={{
          left: 'var(--cx)',
          top: 'var(--cy)',
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
          mixBlendMode: 'difference',
        }}
      />

      {/* Cursor circle - lerped position with slight delay */}
      <div
        className="pointer-events-none fixed z-[99998] w-10 h-10 border-2 border-tm-primary rounded-full"
        style={{
          left: 'var(--lx)',
          top: 'var(--ly)',
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
          mixBlendMode: 'difference',
        }}
      />

      {/* Hide default cursor globally */}
      <style>{`
        * {
          cursor: none !important;
        }
        input, textarea, select {
          cursor: text !important;
        }

        @media (hover: none) {
          .pointer-events-none {
            display: none;
          }
        }
      `}</style>
    </>
  );
};
