import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary text-primary py-12 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <a href="#home" className="text-2xl font-display font-black tracking-tighter text-primary block mb-2">
            OG<span className="text-accent">.</span>SHARAMA
          </a>
          <p className="text-primary/50 text-sm">
            © {new Date().getFullYear()} OG Sharama. All rights reserved.
          </p>
        </div>

        <button 
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-accent hover:text-secondary transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>

      </div>
    </footer>
  );
}
