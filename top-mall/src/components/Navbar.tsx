import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Glass effect on scroll
      if (currentScrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { label: 'Collections', href: '#collections' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-[999] py-5 px-6 md:px-12 ${
          isScrolled ? 'glass' : 'bg-transparent'
        } transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="font-display text-2xl md:text-3xl font-900 text-tm-primary tracking-wider"
            whileHover={{ scale: 1.05 }}
          >
            ✦ TOP MALL ✦
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative font-body text-tm-text text-sm font-500 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-tm-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex gap-4">
            <a
              href="https://www.instagram.com/top_mall_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tm-text hover:text-tm-primary transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://wa.me/918219445522"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tm-text hover:text-tm-primary transition-colors"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-tm-primary text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 bg-tm-bg z-[99] md:hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        style={{ top: '60px' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="font-display text-3xl text-tm-primary"
              initial={{ y: 20, opacity: 0 }}
              animate={isOpen ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </motion.a>
          ))}

          {/* Mobile socials */}
          <div className="flex gap-6 mt-8">
            <a
              href="https://www.instagram.com/top_mall_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tm-primary text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/918219445522"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tm-primary text-2xl"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};
