import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "OG Sharama completely transformed our visual identity. The thumbnails alone increased our CTR by 40% in the first month.",
    author: "Sarah Jenkins",
    role: "Content Creator",
  },
  {
    quote: "The AI marketing strategies implemented were a game-changer. We scaled our content output without sacrificing quality.",
    author: "David Chen",
    role: "Startup Founder",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-secondary text-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter">
            CLIENT <span className="text-accent">FEEDBACK.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-primary/5 p-10 rounded-[2rem] border border-primary/10 relative"
            >
              <Quote className="absolute top-8 right-8 text-accent/20 w-16 h-16" />
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xl">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.author}</h4>
                  <p className="text-primary/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
