import { motion } from 'motion/react';
import { MonitorPlay, TrendingUp, PenTool, Code2 } from 'lucide-react';

const skills = [
  {
    icon: <MonitorPlay size={24} />,
    title: 'YouTube Thumbnail Design',
    description: 'High CTR, eye-catching visuals designed to stop the scroll and drive clicks.',
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'AI Marketing',
    description: 'Automation, content scaling, and data-driven growth strategies.',
  },
  {
    icon: <PenTool size={24} />,
    title: 'Graphic Design',
    description: 'Bold branding, striking posters, and high-conversion ad creatives.',
  },
  {
    icon: <Code2 size={24} />,
    title: 'Web Development',
    description: 'Modern UI, responsive design, and performance-optimized experiences.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary text-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-8">
              THE <span className="text-accent">MIND</span> BEHIND THE PIXELS.
            </h2>
            <p className="text-lg text-primary/70 mb-6 leading-relaxed">
              I am a multidisciplinary creative focused on visual storytelling and digital growth. My work bridges the gap between striking aesthetics and measurable performance.
            </p>
            <p className="text-lg text-primary/70 mb-10 leading-relaxed">
              Whether it's designing a thumbnail that demands attention, building a seamless web experience, or scaling content with AI, I create assets that convert.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-16 h-[2px] bg-accent"></div>
              <span className="font-display font-bold text-xl tracking-widest uppercase">OG Sharama</span>
            </div>
          </motion.div>

          {/* Right Content - Skills Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary/5 border border-primary/10 p-8 rounded-3xl hover:bg-primary/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                <p className="text-sm text-primary/60 leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
