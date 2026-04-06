import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Thumbnail Design',
    description: 'Custom YouTube thumbnails engineered for high click-through rates. I combine color psychology, bold typography, and striking imagery to make your videos impossible to ignore.',
  },
  {
    id: '02',
    title: 'AI Marketing Solutions',
    description: 'Leveraging cutting-edge AI tools to automate your marketing workflows, scale content production, and implement data-driven growth strategies that actually work.',
  },
  {
    id: '03',
    title: 'Graphic Design',
    description: 'From cohesive brand identities to scroll-stopping social media posters and ad creatives. I design visual assets that communicate your brand\'s unique value proposition.',
  },
  {
    id: '04',
    title: 'Website Development',
    description: 'Building fast, responsive, and visually stunning websites. I focus on modern UI/UX principles to create digital experiences that convert visitors into clients.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-primary text-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter">
            WHAT I <span className="text-accent">DO.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 md:p-12 rounded-[2rem] bg-white border border-subtle/20 hover:border-accent transition-colors duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-4xl font-display font-black text-subtle/50 group-hover:text-accent transition-colors">
                  {service.id}
                </span>
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:bg-accent group-hover:text-secondary transition-colors -rotate-45 group-hover:rotate-0 duration-300">
                  <ArrowRight size={24} />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
              <p className="text-secondary/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
