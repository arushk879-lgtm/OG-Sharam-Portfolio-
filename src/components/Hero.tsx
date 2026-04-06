import { motion } from 'motion/react';
import { ArrowRight, ArrowDownRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] bg-subtle/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-start z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/5 border border-secondary/10 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-secondary">Available for new projects</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl font-display font-black leading-[0.9] tracking-tighter text-secondary mb-6"
          >
            VISUAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-600">
              CREATIVITY.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-secondary/70 max-w-md mb-10 leading-relaxed"
          >
            I craft high-conversion digital experiences through bold design, strategic marketing, and modern development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#portfolio"
              className="group flex items-center gap-2 px-8 py-4 bg-secondary text-text-light rounded-full font-medium hover:bg-accent hover:text-secondary transition-all duration-300"
            >
              View Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-8 py-4 bg-transparent border border-secondary/20 text-secondary rounded-full font-medium hover:border-secondary transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right Content - Image Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 lg:ml-auto w-full max-w-md"
        >
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-secondary p-2 shadow-2xl">
            <div className="absolute inset-0 bg-accent/20 z-10 mix-blend-overlay" />
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
              alt="Creative Abstract"
              className="w-full h-full object-cover rounded-[1.5rem] grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-6 -left-6 md:-left-12 bg-primary p-6 rounded-2xl shadow-xl border border-subtle/20 z-20 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-secondary">
                <ArrowDownRight size={24} />
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-secondary">250K+</p>
                <p className="text-sm font-medium text-secondary/60 uppercase tracking-wider">Reach Generated</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
