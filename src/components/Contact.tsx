import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Thumbnail Design',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, service, message } = formData;
    const text = `Hello OG Sharama!\n\nName: ${name}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`;
    const whatsappUrl = `https://wa.me/918219547473?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-primary text-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-6 leading-none">
              LET'S WORK <br />
              <span className="text-accent">TOGETHER.</span>
            </h2>
            <p className="text-xl text-secondary/70 mb-12 max-w-md">
              Ready to elevate your visual presence? Drop me a message and let's discuss your next big project.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-secondary text-primary flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-secondary/50 uppercase tracking-wider mb-1">Email Me</p>
                  <a href="mailto:arushk879@gmail.com" className="text-2xl font-bold hover:text-accent transition-colors">
                    arushk879@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-subtle/10"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-6 py-4 rounded-xl bg-primary/50 border border-subtle/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 rounded-xl bg-primary/50 border border-subtle/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-bold uppercase tracking-wider">Service Interested In</label>
                <select 
                  id="service" 
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl bg-primary/50 border border-subtle/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all appearance-none"
                >
                  <option>Thumbnail Design</option>
                  <option>AI Marketing</option>
                  <option>Graphic Design</option>
                  <option>Web Development</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 rounded-xl bg-primary/50 border border-subtle/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                ></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-accent text-secondary font-bold text-lg rounded-xl hover:bg-secondary hover:text-accent transition-colors flex items-center justify-center gap-2 group">
                Send via WhatsApp
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
