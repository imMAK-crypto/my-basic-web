import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.a
      href="https://wa.me/918219445522?text=Hi%20Top%20Mall!%20I'm%20interested%20in%20ordering.%20Please%20share%20available%20collections."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: 100, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed bottom-6 right-6 z-[999] group"
      whileHover={{ scale: 1.1 }}
    >
      {/* Pulse ring animation */}
      <motion.div
        className="absolute inset-0 w-16 h-16 bg-green-500 rounded-full opacity-0"
        animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Main button */}
      <div className="relative w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 transition-all duration-300">
        <FaWhatsapp size={28} />

        {/* Hover text */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute right-full mr-4 whitespace-nowrap bg-tm-primary text-tm-bg px-4 py-2 rounded-sm text-sm font-600 pointer-events-none"
        >
          Order Now
        </motion.div>
      </div>
    </motion.a>
  );
};
