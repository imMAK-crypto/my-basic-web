import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-4 md:px-12 bg-tm-bg relative overflow-hidden">
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 400 400\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" /%3E%3C/filter%3E%3Crect width=\"400\" height=\"400\" fill=\"%23fff\" filter=\"url(%23noiseFilter)\" /%3E%3C/svg%3E')",
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Pull quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-accent text-3xl md:text-5xl italic text-tm-accent mb-4">
            "Fashion is not about price —<br />it's about feeling beautiful."
          </h2>
          <div className="h-1 w-32 bg-tm-primary mx-auto" />
        </motion.div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left column - Text */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-tm-text mb-6 leading-relaxed">
              Top Mall is Kozhikode's destination for authentic, affordable women's fashion. Founded with a passion for making luxury accessible, we curate the finest collections of abayas, gowns, party wear, and more — all at budget-friendly prices.
            </p>

            <p className="text-lg text-tm-text mb-8 leading-relaxed">
              Located in the heart of S.M. Street, we blend Kerala's rich fashion heritage with contemporary trends. Whether you're shopping for your daily essentials or special occasions, every piece tells a story of quality and style.
            </p>

            <div className="space-y-4 mb-8">
              <p className="text-tm-muted">
                <strong className="text-tm-text">Why Choose Top Mall?</strong>
              </p>
              <ul className="space-y-2 text-tm-text">
                <li className="flex items-center gap-3">
                  <span className="text-tm-primary">✓</span> Budget Friendly Prices
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-tm-primary">✓</span> Latest Fashion Trends
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-tm-primary">✓</span> Fast WhatsApp Orders
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-tm-primary">✓</span> Walk-in Welcome
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right column - Decorative element & Location */}
          <div className="space-y-8">
            {/* Animated circles */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative h-80 mx-auto"
            >
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border-2 border-tm-primary rounded-full"
                  style={{
                    width: `${80 - i * 20}%`,
                    height: `${80 - i * 20}%`,
                    left: `${i * 10}%`,
                    top: `${i * 10}%`,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20 + i * 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              ))}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-tm-primary text-center font-accent italic text-xl">
                  Where Every Woman Shines
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Location Card */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="glass rounded-lg p-8 max-w-2xl mx-auto"
        >
          <div className="flex items-start gap-6">
            <div className="text-tm-primary text-4xl mt-2">
              <FaMapMarkerAlt />
            </div>
            <div className="flex-1">
              <h4 className="font-display text-2xl font-700 mb-3">Visit Us</h4>
              <p className="text-tm-text mb-2">
                Address Mall, S.M. Street<br />
                Palayam, Kozhikode – 673001<br />
                Kerala, India
              </p>
              <p className="text-tm-muted text-sm mb-4">Hours: Check Instagram for timings</p>
              <a
                href="https://maps.google.com/maps?q=Address+Mall,+S.M.+Street,+Palayam,+Kozhikode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-tm-primary hover:text-tm-accent transition-colors font-500"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
