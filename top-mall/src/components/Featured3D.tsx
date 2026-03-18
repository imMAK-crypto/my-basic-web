import { Suspense, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, TorusKnot, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Featured3DScene = () => {
  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} color="#c8956c" />
      <pointLight position={[-5, 5, 5]} intensity={0.7} color="#f5ddd5" />

      <TorusKnot scale={1.5} args={[10, 3, 100, 16]}>
        <meshStandardMaterial
          color="#c8956c"
          metalness={1}
          roughness={0}
          emissive="#e8c9a0"
          emissiveIntensity={0.3}
        />
      </TorusKnot>

      <group>
        {/* Floating geometric shapes */}
        {[...Array(5)].map((_, i) => (
          <mesh key={i} position={[Math.sin(i) * 5, Math.cos(i) * 5, i - 2]} scale={0.5}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? '#c8956c' : '#e8c9a0'}
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
        ))}
      </group>

      <OrbitControls autoRotate autoRotateSpeed={1} enableZoom={false} />
    </>
  );
};

export const Featured3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const textElements = textRef.current.querySelectorAll('.scroll-item');

    textElements.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0.3, y: 20 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: `top+=${index * 150}px bottom`,
            end: `top+=${(index + 1) * 150}px bottom`,
            scrub: 1,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-32 px-4 md:px-12 bg-tm-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-5xl md:text-6xl font-900 mb-6">
              Crafted for Every Woman
            </h2>

            <p className="scroll-item text-lg text-tm-text mb-4 leading-relaxed">
              At Top Mall, we believe that true fashion is about confidence and self-expression. Our collections are carefully curated to offer you the latest trends at unbeatable prices.
            </p>

            <p className="scroll-item text-lg text-tm-text mb-8 leading-relaxed">
              From the streets of S.M. to your wardrobe, every piece is selected with love and quality in mind.
            </p>

            <div className="scroll-item space-y-3">
              <h4 className="font-display text-2xl font-700 mb-4">Why We're Different</h4>
              {[
                '✓ Budget Friendly',
                '✓ Latest Trends',
                '✓ Fast WhatsApp Orders',
                '✓ Walk-in Welcome',
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-tm-text scroll-item"
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <span className="text-tm-primary font-bold">{item.substring(0, 1)}</span>
                  <span>{item.substring(2)}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: 3D Canvas */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-64 sm:h-96 lg:h-[500px] rounded-lg overflow-hidden bg-gradient-to-br from-tm-primary/10 to-tm-accent/10"
          >
            <Canvas 
              camera={{ position: [0, 0, 30] }}
              style={{ touchAction: 'none' }}
            >
              <Suspense fallback={null}>
                <Featured3DScene />
              </Suspense>
            </Canvas>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
