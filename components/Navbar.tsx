import React, { useState, useEffect } from 'react';
import { NavigationSection } from '../types';
import { Icons } from './Icons';

interface NavbarProps {
  activeSection: NavigationSection;
  onNavigate: (section: NavigationSection) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: NavigationSection.HOME, label: '首頁' },
    { id: NavigationSection.SERVICES, label: '資安服務' },
    { id: NavigationSection.ABOUT, label: '關於我們' },
  ];

  const handleNavClick = (id: NavigationSection) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-nav py-3 shadow-md' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => handleNavClick(NavigationSection.HOME)}
          className="cursor-pointer flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-700 to-brand-500 flex items-center justify-center text-white shadow-lg">
            <Icons.Shield size={24} />
          </div>
          <div className="flex flex-col">
            <span className={`font-display font-bold text-xl tracking-tight leading-none ${
               isScrolled || activeSection !== NavigationSection.HOME ? 'text-slate-900' : 'text-slate-900 md:text-white'
            }`}>
              水慕資雲
            </span>
            <span className={`text-xs font-medium tracking-wider uppercase ${
               isScrolled || activeSection !== NavigationSection.HOME ? 'text-slate-500' : 'text-slate-500 md:text-blue-100'
            }`}>
              Musecs Solutions
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.id 
                  ? 'text-brand-600 font-bold' 
                  : (isScrolled || activeSection !== NavigationSection.HOME ? 'text-slate-600 hover:text-brand-600' : 'text-white/90 hover:text-white')
              }`}
            >
              {item.label}
            </button>
          ))}

          <button 
            onClick={() => handleNavClick(NavigationSection.CONTACT)}
            className="px-5 py-2.5 rounded-lg bg-brand-600 text-white hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/30 text-sm font-medium flex items-center gap-2"
          >
            <Icons.Mail size={16} />
            聯絡我們
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden ${isScrolled || activeSection !== NavigationSection.HOME ? 'text-slate-900' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <Icons.X size={24} /> : <Icons.Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } pt-24 px-6 shadow-2xl`}>
        <div className="flex flex-col gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-xl font-display font-medium text-left border-b border-slate-100 pb-4 ${
                activeSection === item.id ? 'text-brand-600' : 'text-slate-900'
              }`}
            >
              {item.label}
            </button>
          ))}
           <button
              onClick={() => handleNavClick(NavigationSection.CONTACT)}
              className="text-xl font-display font-medium text-left text-brand-600 border-b border-slate-100 pb-4"
            >
              聯絡我們
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;