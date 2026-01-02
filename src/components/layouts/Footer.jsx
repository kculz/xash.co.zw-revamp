import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import { LEGAL_PAGES, COMPANY_INFO } from '../../../data/constants';

const Footer = () => {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/pos', label: 'Xash POS' },
    { path: '/developers', label: 'Developers' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">X</span>
              </div>
              <span className="ml-3 text-2xl font-bold">xash</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {COMPANY_INFO.name}. Modern fintech solutions for retail across Zimbabwe. 
              Secure, reliable, and commission-driven.
            </p>
            <div className="flex items-center text-sm text-gray-400">
              <Building className="mr-2" size={16} />
              <span>{COMPANY_INFO.registration}</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-purple-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal & Compliance */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6 text-white">
              Legal & Compliance
            </h3>
            <ul className="space-y-3">
              {LEGAL_PAGES.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-purple-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6 text-white">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start text-sm text-gray-400">
                <MapPin className="mr-3 mt-0.5 flex-shrink-0 text-purple-400" size={18} />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center text-sm">
                <Mail className="mr-3 flex-shrink-0 text-purple-400" size={18} />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-400 hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center text-sm">
                <Mail className="mr-3 flex-shrink-0 text-purple-400" size={18} />
                <a href={`mailto:${COMPANY_INFO.supportEmail}`} className="text-gray-400 hover:text-white transition-colors">
                  {COMPANY_INFO.supportEmail}
                </a>
              </li>
              <li className="flex items-center text-sm">
                <Phone className="mr-3 flex-shrink-0 text-purple-400" size={18} />
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-gray-400 hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm"
        >
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
            <span className="block md:inline md:ml-2 mt-1 md:mt-0">
              Last updated: {COMPANY_INFO.lastUpdated}
            </span>
          </p>
          <div className="flex items-center space-x-2 text-xs text-gray-600 bg-gray-800 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Xash provides payment facilitation in partnership with licensed institutions. Not a bank.</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;