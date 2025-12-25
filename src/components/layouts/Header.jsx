import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useTheme from '../../hooks/useTheme';
import { Menu, X, MessageCircle, Sun, Moon } from 'lucide-react';
import { BRAND } from '../../utils/constants';
import LogoDark from '../../assets/logo.png';
import LogoLight from '../../assets/xash_logo.jpg';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/agents', label: 'Become an Agent' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-[#0B3C5D]/95 backdrop-blur-sm shadow-lg border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
<div className="flex items-center">
  <Link to="/" className="flex items-center ">
    {/* Logo Image Container */}
    <div className="relative w-20  rounded-xl flex items-center justify-center  group-hover:scale-110 transition-transform duration-200 overflow-hidden  p-1">
      {/* Light mode logo */}
      <img 
        src={LogoLight}
        alt="XASH Solutions" 
        className="w-full h-full  dark:hidden"
      />
      {/* Dark mode logo */}
      <img 
        src={LogoDark} 
        alt="XASH Solutions" 
        className="w-full h-full  hidden dark:block"
      />
      
    </div>
   
  </Link>
</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#1F6AE1] text-white shadow-lg'
                      : 'text-[#1A1A1A] dark:text-gray-200 hover:bg-[#F5F7FA] dark:hover:bg-gray-800'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${BRAND.contacts.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat on WhatsApp
            </a>

            {/* Register as Agent Button */}
            <Link
              to="/agents"
              className="bg-[#F5B700] hover:bg-yellow-600 text-[#1A1A1A] px-5 py-2.5 rounded-xl font-medium transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Register as Agent
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-[#F5F7FA] dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all shadow-md hover:shadow-lg"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-[#F5B700]" />
              ) : (
                <Moon className="w-5 h-5 text-[#0B3C5D]" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-[#F5F7FA] dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-[#F5B700]" />
              ) : (
                <Moon className="w-5 h-5 text-[#0B3C5D]" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[#1A1A1A] dark:text-gray-200 hover:bg-[#F5F7FA] dark:hover:bg-gray-800 rounded-xl transition-all"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 py-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-[#1F6AE1] text-white shadow-lg'
                        : 'text-[#1A1A1A] dark:text-gray-200 hover:bg-[#F5F7FA] dark:hover:bg-gray-800'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-4 space-y-2">
                <a
                  href={`https://wa.me/${BRAND.contacts.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-medium transition-all shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </a>
                <Link
                  to="/agents"
                  className="block text-center bg-[#F5B700] hover:bg-yellow-600 text-[#1A1A1A] px-4 py-3 rounded-xl font-medium transition-all shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register as Agent
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;