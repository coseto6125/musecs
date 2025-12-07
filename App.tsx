import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Projects'; // Repurposed Projects as Services
import About from './components/About';
import Footer from './components/Footer';
import { NavigationSection } from './types';
import { Icons } from './components/Icons';

function App() {
  const [activeSection, setActiveSection] = useState<NavigationSection>(NavigationSection.HOME);

  const handleNavigation = (section: NavigationSection) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (activeSection) {
      case NavigationSection.HOME:
        return (
          <>
            <Hero onNavigate={handleNavigation} />
            <Services />
            <About />
          </>
        );
      case NavigationSection.SERVICES:
        return <Services />;
      case NavigationSection.ABOUT:
        return <About />;
      case NavigationSection.CONTACT:
        return (
            <div className="min-h-screen pt-24 pb-12 px-6 bg-slate-50 flex justify-center items-center">
                 <div className="w-full max-w-3xl bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100">
                    <div className="text-center mb-8">
                       <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">聯絡我們</h2>
                       <p className="text-slate-500">
                         無論是資安檢測需求，還是雲端架構諮詢，我們都樂意為您服務。
                       </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                       <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50">
                          <Icons.MapPin className="text-brand-600 mt-1" />
                          <div>
                            <h4 className="font-bold text-slate-900">公司地址</h4>
                            <p className="text-sm text-slate-600 mt-1">臺北市中山區復興北路48號3樓</p>
                          </div>
                       </div>
                       <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50">
                          <Icons.Mail className="text-brand-600 mt-1" />
                          <div>
                            <h4 className="font-bold text-slate-900">電子郵件</h4>
                            <p className="text-sm text-slate-600 mt-1">muse.secure@gmail.com</p>
                          </div>
                       </div>
                    </div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">姓名</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" placeholder="您的姓名" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">公司名稱</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" placeholder="貴公司名稱" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">電子信箱</label>
                            <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" placeholder="name@company.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">需求類別</label>
                            <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all bg-white">
                                <option>資安檢測服務</option>
                                <option>雲端架構規劃</option>
                                <option>軟體開發專案</option>
                                <option>其他合作諮詢</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">諮詢內容</label>
                            <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" placeholder="請簡述您的需求..."></textarea>
                        </div>
                        <button className="w-full py-4 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/20">
                            發送訊息
                        </button>
                    </form>
                 </div>
            </div>
        );
      default:
        return <Hero onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-200 selection:text-brand-900">
      <Navbar activeSection={activeSection} onNavigate={handleNavigation} />
      
      <main className="fade-in">
        {renderContent()}
      </main>

      {activeSection !== NavigationSection.CONTACT && <Footer />}
    </div>
  );
}

export default App;