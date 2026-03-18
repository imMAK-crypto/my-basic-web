import { motion } from 'framer-motion';
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';

interface CollectionCard {
  id: number;
  name: string;
  description: string;
  bgGradient: string;
  isNew?: boolean;
  span?: string;
}

export const Collections = () => {
  const collections: CollectionCard[] = [
    {
      id: 1,
      name: 'Abayas',
      description: 'Elegant abayas for every occasion',
      bgGradient: 'from-purple-900 to-purple-700',
      span: 'lg:row-span-2',
    },
    {
      id: 2,
      name: 'Party Wear',
      description: 'Stunning party collection',
      bgGradient: 'from-rose-900 to-rose-700',
      span: 'lg:col-span-2',
    },
    {
      id: 3,
      name: 'Gowns',
      description: 'Premium gown selection',
      bgGradient: 'from-emerald-900 to-emerald-700',
      span: '',
    },
    {
      id: 4,
      name: 'Tops & Shawls',
      description: 'Versatile tops and accessories',
      bgGradient: 'from-amber-900 to-amber-700',
      span: 'lg:col-span-2',
    },
    {
      id: 5,
      name: 'New Arrivals',
      description: 'Latest fashion trends',
      bgGradient: 'from-pink-900 to-pink-700',
      isNew: true,
      span: 'lg:col-span-2 lg:row-span-2',
    },
  ];

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1,
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
    <section id="collections" className="py-20 md:py-32 px-4 md:px-12 bg-tm-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="font-display text-5xl md:text-7xl font-900 mb-4">Our Collections</h2>
          <motion.div
            className="h-1 bg-tm-primary"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            style={{ originX: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
        </motion.div>

        {/* Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {collections.map((collection) => (
            <motion.div
              key={collection.id}
              variants={itemVariants}
              className={`relative group overflow-hidden rounded-lg h-64 md:h-80 lg:h-96 cursor-pointer ${collection.span}`}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${collection.bgGradient} transition-transform duration-500 group-hover:scale-110`}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              >
                {collection.isNew && (
                  <div className="absolute top-4 right-4 bg-tm-accent text-tm-bg px-4 py-2 rounded-full text-sm font-bold">
                    NEW
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 text-tm-bg">
                <h3 className="font-display text-3xl md:text-4xl font-900 mb-2">{collection.name}</h3>
                <p className="text-sm opacity-90 mb-4">{collection.description}</p>

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-tm-bg/90 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                >
                  <p className="text-tm-primary font-500">Explore via Instagram</p>
                  <FaArrowRight className="text-tm-primary text-2xl" />
                </motion.div>
              </div>
            </motion.div>
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
            href="https://wa.me/918219445522?text=Hi%20Top%20Mall!%20I'm%20interested%20in%20ordering.%20Please%20share%20available%20collections."
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-tm-primary text-tm-bg font-600 rounded-sm hover:bg-tm-accent transition-all transform hover:scale-105 flex items-center gap-3 text-lg"
          >
            <FaWhatsapp /> Order via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};
