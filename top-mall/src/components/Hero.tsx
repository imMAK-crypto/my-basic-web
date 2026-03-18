import React, { Suspense, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Stars } from '@react-three/drei';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import * as THREE from 'three';

// 3D Background Scene
const BackgroundScene = () => {
  const meshRef = React.useRef<THREE.Group>(null);

  useEffect(() => {
    const animate = () => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.0003;
        meshRef.current.rotation.y += 0.0005;
      }
      requestAnimationFrame(animate);
    };
    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <>
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0.5} fade />
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#c8956c" />
      <pointLight position={[-10, -10, 10]} intensity={0.8} color="#f5ddd5" />

      <group ref={meshRef}>
        <Sphere args={[2, 64, 64]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#c8956c"
            metalness={0.8}
            roughness={0.2}
            emissive="#e8c9a0"
            emissiveIntensity={0.2}
          />
        </Sphere>
      </group>
    </>
  );
};

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7 },
    },
  };

  const subtext = ['Tops', 'Abayas', 'Gowns', 'Shawls', 'Party Wear'];

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <BackgroundScene />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
          </Suspense>
        </Canvas>
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-tm-bg/40 via-transparent to-tm-bg/60 -z-9" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-5xl"
      >
        {/* Label */}
        <motion.p variants={itemVariants} className="font-accent text-tm-accent text-lg italic mb-4">
          Kozhikode's Finest Women's Fashion
        </motion.p>

        {/* Main heading */}
        <motion.h1 variants={itemVariants} className="font-display text-6xl md:text-8xl font-900 mb-4 leading-tight">
          <span className="block mb-2">Dress Like</span>
          <span className="text-gradient">Royalty</span>
        </motion.h1>

        {/* Subtext with separators */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 text-sm md:text-base text-tm-text">
          {subtext.map((item, index) => (
            <span key={item}>
              {item}
              {index < subtext.length - 1 && <span className="mx-2 text-tm-primary">|</span>}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://wa.me/918219445522?text=Hi%20Top%20Mall!%20I'm%20interested%20in%20ordering.%20Please%20share%20available%20collections."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-tm-primary text-tm-bg font-500 rounded-sm hover:bg-tm-accent transition-all transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <FaWhatsapp /> Shop on WhatsApp
          </a>
          <a
            href="https://www.instagram.com/top_mall_/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-tm-primary text-tm-primary font-500 rounded-sm hover:bg-tm-primary hover:text-tm-bg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <FaInstagram /> View Instagram
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-2 mt-16"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-6 h-10 text-tm-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m0 0l-7-7m7 7l7-7" />
          </svg>
          <span className="text-tm-muted text-sm">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
};
