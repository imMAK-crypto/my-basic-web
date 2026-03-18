import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-tm-bg to-black pt-20 pb-8 px-4 md:px-12 border-t border-tm-primary/20">
      <div className="max-w-7xl mx-auto">
        {/* Logo section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-6xl md:text-8xl font-900 text-tm-primary/50 mb-4">
            TOP MALL
          </h2>
          <p className="text-tm-accent italic font-accent">Where Every Woman Shines</p>
        </motion.div>

        {/* Content grid */}
        <motion.div
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          {/* About */}
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
          >
            <h4 className="font-display text-lg font-700 mb-4">About</h4>
            <p className="text-tm-muted text-sm leading-relaxed">
              Kozhikode's one-stop destination for budget fashion that doesn't compromise on style or quality.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
          >
            <h4 className="font-display text-lg font-700 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-tm-muted">
              <li>
                <a href="#collections" className="hover:text-tm-primary transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-tm-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-tm-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
          >
            <h4 className="font-display text-lg font-700 mb-4">Connect</h4>
            <div className="flex gap-6 text-tm-text">
              <a
                href="https://www.instagram.com/top_mall_/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-tm-primary transition-colors text-xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/918219445522"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-tm-primary transition-colors text-xl"
              >
                <FaWhatsapp />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-tm-primary to-transparent mb-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center text-tm-muted text-xs md:text-sm"
        >
          <p>© 2025 Top Mall · S.M. Street, Kozhikode · Made with love in Kerala</p>
          <p className="mt-2">Follow us on Instagram @top_mall_ for latest collections</p>
        </motion.div>
      </div>
    </footer>
  );
};
