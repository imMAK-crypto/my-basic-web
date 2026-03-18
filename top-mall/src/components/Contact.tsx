import { motion } from 'framer-motion';
import { FaWhatsapp, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';

export const Contact = () => {
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7 },
    },
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-4 md:px-12 bg-tm-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-7xl font-900 mb-2">
            Visit Us or Order Online
          </h2>
          <p className="text-tm-muted">Choose what works best for you</p>
        </motion.div>

        {/* Contact cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {/* WhatsApp Card */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-lg p-8 text-center hover:scale-105 transition-transform duration-300 group"
          >
            <div className="text-6xl text-green-500 mb-6 flex justify-center">
              <FaWhatsapp />
            </div>
            <h3 className="font-display text-2xl font-700 mb-2">WhatsApp Orders</h3>
            <p className="text-tm-text mb-4 text-lg font-bold">+91 82194 45522</p>
            <p className="text-tm-muted mb-6 text-sm">
              Tap to start ordering or DM for queries
            </p>
            <a
              href="https://wa.me/918219445522?text=Hi%20Top%20Mall!%20I'm%20interested%20in%20ordering.%20Please%20share%20available%20collections."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-green-600 text-white font-600 rounded-sm hover:bg-green-700 transition-colors"
            >
              Start WhatsApp Chat
            </a>
          </motion.div>

          {/* Location Card */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-lg p-8 text-center hover:scale-105 transition-transform duration-300 group"
          >
            <div className="text-6xl text-tm-primary mb-6 flex justify-center">
              <FaMapMarkerAlt />
            </div>
            <h3 className="font-display text-2xl font-700 mb-2">Find Us</h3>
            <p className="text-tm-text mb-2 font-semibold">Address Mall, S.M. Street</p>
            <p className="text-tm-muted text-sm mb-6">
              Palayam, Kozhikode – 673001<br />
              Kerala, India
            </p>
            <a
              href="https://maps.google.com/maps?q=Address+Mall,+S.M.+Street,+Palayam,+Kozhikode"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-tm-primary text-tm-bg font-600 rounded-sm hover:bg-tm-accent transition-colors"
            >
              Get Directions
            </a>
          </motion.div>

          {/* Instagram Card */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-lg p-8 text-center hover:scale-105 transition-transform duration-300 group"
          >
            <div className="text-6xl text-pink-500 mb-6 flex justify-center">
              <FaInstagram />
            </div>
            <h3 className="font-display text-2xl font-700 mb-2">Follow Us</h3>
            <p className="text-tm-text mb-4 font-semibold">@top_mall_</p>
            <p className="text-tm-muted text-sm mb-6">
              DM for orders, queries & new collections
            </p>
            <a
              href="https://www.instagram.com/top_mall_/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-tm-primary text-tm-bg font-600 rounded-sm hover:bg-tm-accent transition-colors"
            >
              Open Instagram
            </a>
          </motion.div>
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="glass rounded-lg p-8 text-center"
        >
          <p className="text-tm-text text-lg mb-4">
            <strong>✨ Quick Response Guaranteed</strong>
          </p>
          <p className="text-tm-muted">
            Orders via WhatsApp & Instagram only | Fast processing | Quality assurance |<br />
            Walk-ins welcome during business hours
          </p>
        </motion.div>
      </div>
    </section>
  );
};
