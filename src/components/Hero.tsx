import React from 'react';
import { Icons } from './Icons';
import { NavigationSection } from '../types';

interface HeroProps {
  onNavigate: (section: NavigationSection) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Image/Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Cyber Security Technology" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/60"></div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-900/50 border border-brand-500/30 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
            <span className="text-sm font-medium tracking-wide text-brand-100">企業級資安解決方案專家</span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            守護數位資產 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-300">
              構築安全未來
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
            水慕資雲提供全方位的資安檢測、雲端架構規劃與軟體開發服務。我們運用先進技術，協助企業防禦潛在威脅，實現數位轉型的核心價值。
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavigate(NavigationSection.SERVICES)}
              className="px-8 py-4 rounded-lg bg-brand-600 text-white font-semibold text-lg hover:bg-brand-500 transition-all shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2"
            >
              探索我們的服務 <Icons.ArrowRight size={20} />
            </button>
            <button 
              onClick={() => onNavigate(NavigationSection.CONTACT)}
              className="px-8 py-4 rounded-lg bg-white/10 text-white font-semibold text-lg hover:bg-white/20 backdrop-blur-sm border border-white/10 transition-all flex items-center justify-center"
            >
              預約諮詢
            </button>
          </div>
        </div>

        {/* Floating Stats or Badges */}
        <div className="absolute bottom-12 right-6 hidden lg:flex gap-8 text-slate-400/80">
           <div className="flex items-center gap-3">
              <Icons.Shield size={32} className="text-brand-400" />
              <div>
                <div className="text-2xl font-bold text-white">ISO</div>
                <div className="text-xs uppercase tracking-wider">標準合規</div>
              </div>
           </div>
           <div className="flex items-center gap-3">
              <Icons.Lock size={32} className="text-brand-400" />
              <div>
                <div className="text-2xl font-bold text-white">OWASP</div>
                <div className="text-xs uppercase tracking-wider">安全檢測</div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;