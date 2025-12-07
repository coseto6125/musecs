import React from 'react';
import { Icons } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 bg-slate-900 border-t border-slate-800 text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        <div className="space-y-4 max-w-sm">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded bg-brand-600 flex items-center justify-center text-white">
                <Icons.Shield size={18} />
             </div>
             <span className="font-display font-bold text-xl text-white tracking-tight">水慕資雲</span>
          </div>
          <p className="text-sm leading-relaxed">
            守護數位資產，構築安全未來。我們致力於提供最頂尖的資安防護與數位轉型服務。
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Icons.Linkedin size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Icons.Twitter size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Icons.Github size={20} /></a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm">
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">聯絡資訊</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Icons.MapPin size={18} className="shrink-0 text-brand-500" />
                <span>臺北市中山區復興北路48號3樓</span>
              </li>
              <li className="flex items-center gap-3">
                <Icons.Mail size={18} className="shrink-0 text-brand-500" />
                <a href="mailto:muse.secure@gmail.com" className="hover:text-brand-400">muse.secure@gmail.com</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">快速連結</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-brand-400 transition-colors">服務總覽</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">關於我們</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">隱私權政策</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">服務條款</a></li>
            </ul>
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-600">
        © 2025 水慕資雲有限公司 (Musecs Solutions) 版權所有
      </div>
    </footer>
  );
};

export default Footer;