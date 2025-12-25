import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND } from '../../utils/constants';
import { Facebook, Twitter, Instagram, Linkedin, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import LogoDark from '../../assets/logo.png';
import LogoLight from '../../assets/xash_logo.jpg';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B3C5D] dark:bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="relative w-20  rounded-xl flex items-center justify-center  group-hover:scale-110 transition-transform duration-200 overflow-hidden  p-1">
                 
                  {/* Dark mode logo */}
                  <img 
                    src={LogoDark} 
                    alt="XASH Solutions" 
                    className="w-full h-full"
                  />
                  
                </div>
            <p className="text-gray-300 dark:text-gray-400 mb-6 leading-relaxed">
              Buy, Sell & Earn — All on WhatsApp. A seamless payment service for prepaid airtime, data, electricity, and other services.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/XashPay/" className="w-10 h-10 bg-white/10 hover:bg-[#F5B700] rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/XashPay" className="w-10 h-10 bg-white/10 hover:bg-[#F5B700] rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/xashpay/" className="w-10 h-10 bg-white/10 hover:bg-[#F5B700] rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/xashpay" className="w-10 h-10 bg-white/10 hover:bg-[#F5B700] rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F5B700]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-300 dark:text-gray-400 hover:text-[#F5B700] transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-[#F5B700] rounded-full mr-2 group-hover:w-2 group-hover:h-2 transition-all"></span>
                  Services
                </Link>
              </li>
              
              <li>
                <Link to="/agents" className="text-gray-300 dark:text-gray-400 hover:text-[#F5B700] transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-[#F5B700] rounded-full mr-2 group-hover:w-2 group-hover:h-2 transition-all"></span>
                  Become an Agent
                </Link>
              </li>
             
              <li>
                <Link to="/contact" className="text-gray-300 dark:text-gray-400 hover:text-[#F5B700] transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 bg-[#F5B700] rounded-full mr-2 group-hover:w-2 group-hover:h-2 transition-all"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F5B700]">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-[#F5B700] mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 dark:text-gray-400">{BRAND.contacts.address}</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-[#F5B700] group-hover:scale-110 transition-transform" />
                <a href={`tel:${BRAND.contacts.phone}`} className="text-gray-300 dark:text-gray-400 hover:text-[#F5B700] transition-colors">
                  {BRAND.contacts.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <MessageCircle className="w-5 h-5 text-[#F5B700] group-hover:scale-110 transition-transform" />
                <a href={`https://wa.me/${BRAND.contacts.support.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 dark:text-gray-400 hover:text-[#F5B700] transition-colors">
                  WhatsApp: {BRAND.contacts.support}
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-[#F5B700] group-hover:scale-110 transition-transform" />
                <a href={`mailto:${BRAND.contacts.email}`} className="text-gray-300 dark:text-gray-400 hover:text-[#F5B700] transition-colors">
                  {BRAND.contacts.email}
                </a>
              </div>
            </div>
          </div>

          {/* Partners */}
<div>
  <h3 className="text-lg font-semibold mb-4 text-[#F5B700]">Our Partners</h3>
  <div className="grid grid-cols-2 gap-3">
    {BRAND.partners.slice(0, 6).map((partner) => (
      <a
        key={partner.name}
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white/10 dark:bg-gray-800/50 rounded-lg p-3 text-center hover:bg-[#F5B700] hover:text-[#0B3C5D] transition-all hover:scale-105 cursor-pointer group"
      >
        <span className="text-sm font-medium flex items-center justify-center gap-2">
          {partner.name}
          <svg 
            className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </span>
      </a>
    ))}
  </div>
</div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              &copy; {currentYear} {BRAND.fullName}. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 dark:text-gray-500 hover:text-[#F5B700] text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 dark:text-gray-500 hover:text-[#F5B700] text-sm transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/cookies-policy" className="text-gray-400 dark:text-gray-500 hover:text-[#F5B700] text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
  
};
export default Footer;