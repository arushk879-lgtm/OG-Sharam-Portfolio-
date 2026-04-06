import { motion } from 'motion/react';

const stats = [
  { value: '250K+', label: 'Reach Generated' },
  { value: '800K+', label: 'Total Engagement' },
  { value: '50+', label: 'Happy Clients' },
  { value: '100%', label: 'Success Rate' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-accent text-secondary relative overflow-hidden">
      {/* Decorative text background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none overflow-hidden">
        <span className="text-[20vw] font-display font-black whitespace-nowrap">IMPACT</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-secondary/20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col items-center text-center ${index === 0 ? 'pl-0' : ''}`}
            >
              <h3 className="text-4xl md:text-6xl font-display font-black mb-2">{stat.value}</h3>
              <p className="text-sm md:text-base font-bold uppercase tracking-wider opacity-80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
