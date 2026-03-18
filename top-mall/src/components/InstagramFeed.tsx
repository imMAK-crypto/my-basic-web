import { motion } from 'framer-motion';
import { FaCamera, FaInstagram } from 'react-icons/fa';

export const InstagramFeed = () => {
  const placeholderImages = [
    { id: 1, title: 'Elegant Abayas', color: 'from-purple-600 to-pink-600' },
    { id: 2, title: 'Party Gowns', color: 'from-rose-600 to-amber-600' },
    { id: 3, title: 'Trending Tops', color: 'from-emerald-600 to-blue-600' },
    { id: 4, title: 'Shawl Collection', color: 'from-amber-600 to-orange-600' },
    { id: 5, title: 'New Arrivals', color: 'from-pink-600 to-red-600' },
    { id: 6, title: 'Seasonal Best', color: 'from-blue-600 to-purple-600' },
  ];

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1,
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
    <section className="py-20 md:py-32 px-4 md:px-12 bg-tm-bg">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-7xl font-900 mb-2">Follow Our Journey</h2>
          <a
            href="https://www.instagram.com/top_mall_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-tm-accent hover:text-tm-primary transition-colors text-lg"
          >
            @top_mall_
          </a>
        </motion.div>

        {/* Instagram Grid - NOTE: Replace placeholders with actual Instagram embed API or images */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {placeholderImages.map((item) => (
            <motion.a
              key={item.id}
              href="https://www.instagram.com/top_mall_/"
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group relative overflow-hidden aspect-square rounded-lg bg-gradient-to-br hover:shadow-2xl transition-all"
            >
              {/* Gradient placeholder */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />

              {/* Camera icon */}
              <div className="absolute inset-0 flex items-center justify-center text-white text-4xl opacity-60 group-hover:opacity-80 transition-opacity">
                <FaCamera />
              </div>

              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 bg-tm-bg/90 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ y: 20 }}
                whileHover={{ y: 0 }}
              >
                <p className="text-tm-accent font-500 text-center">{item.title}</p>
                <p className="text-tm-text text-sm flex items-center gap-2">
                  View on Instagram
                  <FaInstagram />
                </p>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex justify-center"
        >
          <a
            href="https://www.instagram.com/top_mall_/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-4 bg-tm-primary text-tm-bg font-600 rounded-sm text-lg flex items-center gap-3 hover:bg-tm-accent transition-all transform hover:scale-105"
          >
            <FaInstagram /> Follow @top_mall_ on Instagram
          </a>
        </motion.div>

        {/* Note for developers */}
        <p className="text-tm-muted text-sm text-center mt-8 italic">
          💡 Tip: Replace gradient placeholders with actual Instagram embed or images via Instagram API
        </p>
      </div>
    </section>
  );
};
