import React from 'react';
import { Icons } from './Icons';

const About: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 translate-x-32 z-0"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        <div className="relative">
          <div className="absolute -inset-4 bg-brand-100 rounded-2xl -rotate-2"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1769&q=80" 
              alt="Musecs Team" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <div className="text-4xl font-bold mb-1">2025</div>
              <div className="text-sm font-light opacity-90">持續引領資安技術創新</div>
            </div>
          </div>
        </div>

        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold tracking-wider uppercase mb-6">
            關於水慕資雲
          </div>
          <h2 className="font-display text-4xl font-bold mb-6 text-slate-900 leading-tight">
            以技術為本 <br /> 
            <span className="text-brand-600">專注於您的數位安全</span>
          </h2>
          
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-8">
            <p>
              水慕資雲有限公司 (Musecs Solutions) 是一群由資深資安專家與全端工程師組成的專業團隊。我們深知在萬物聯網的時代，安全性不應只是附加選項，而是企業生存的基石。
            </p>
            <p>
              從底層的滲透測試到上層的雲端架構部署，我們致力於提供符合國際標準 (ISO 27001, NIST) 的解決方案，協助客戶在追求數位創新的同時，建立堅不可摧的安全防線。
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-3 mb-2">
                <Icons.Activity className="text-brand-600" size={24} />
                <h3 className="font-bold text-slate-900">專業分析</h3>
              </div>
              <p className="text-sm text-slate-500">深入的威脅建模與風險評估</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-3 mb-2">
                <Icons.Layers className="text-brand-600" size={24} />
                <h3 className="font-bold text-slate-900">客製開發</h3>
              </div>
              <p className="text-sm text-slate-500">量身打造的企業級系統架構</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;