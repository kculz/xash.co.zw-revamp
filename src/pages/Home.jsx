import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Smartphone, Wallet, CheckCircle, TrendingUp, Star, Building, Target, Users, Phone, Zap, Wifi, Globe } from 'lucide-react';

const Home = () => {
  const FEATURES = [
    {
      icon: Smartphone,
      title: 'Free POS Device',
      description: 'Qualifying retail shops receive a Xash POS device at zero cost. Start selling immediately.',
      color: '#7C3AED'
    },
    {
      icon: Wallet,
      title: 'One Unified Balance',
      description: 'Manage airtime, bundles, and ZESA from a single float. No need for separate devices.',
      color: '#2563EB'
    },
    {
      icon: TrendingUp,
      title: 'Earn Daily Commission',
      description: 'Earn competitive commission on every transaction. Payouts processed weekly.',
      color: '#10B981'
    }
  ];

  const STATS = [
    { value: '500+', label: 'Active Agents', color: '#7C3AED' },
    { value: '$2M+', label: 'Monthly Volume', color: '#2563EB' },
    { value: '50K+', label: 'Daily Transactions', color: '#10B981' },
    { value: '99.9%', label: 'System Uptime', color: '#F59E0B' }
  ];

  const WHY_CHOOSE_XASH = [
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'Enterprise-grade encryption and security protocols protect every transaction',
      color: '#7C3AED'
    },
    {
      icon: Smartphone,
      title: 'Real-time Processing',
      description: 'Instant transaction processing with immediate SMS confirmations',
      color: '#2563EB'
    },
    {
      icon: Users,
      title: 'Local Zimbabwe Support',
      description: 'Based in Mutare with dedicated technical support team ready to assist',
      color: '#10B981'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Detailed reporting and analytics to monitor sales and earnings',
      color: '#F59E0B'
    }
  ];

  const PARTNERS = [
    { name: 'Econet Wireless', type: 'Network Partner', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop' },
    { name: 'NetOne', type: 'Network Partner', logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=100&fit=crop' },
    { name: 'Telecel', type: 'Network Partner', logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=100&fit=crop' },
    { name: 'ZESA', type: 'Utility Partner', logo: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=200&h=100&fit=crop' },
    { name: 'Reserve Bank', type: 'Regulatory', logo: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=200&h=100&fit=crop' },
    { name: 'InnBucks', type: 'Payment Partner', logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=100&fit=crop' },
  ];

  const PRODUCTS = [
    { 
      name: 'Airtime', 
      icon: Phone, 
      color: '#7C3AED',
      description: 'Sell airtime for all major networks: Econet, NetOne, Telecel'
    },
    { 
      name: 'Data Bundles', 
      icon: Wifi, 
      color: '#2563EB',
      description: 'Econet data bundles for smartphones and devices'
    },
    { 
      name: 'ZESA Tokens', 
      icon: Zap, 
      color: '#F59E0B',
      description: 'Prepaid electricity tokens for ZESA customers'
    },
    { 
      name: 'Equal WiFi', 
      icon: Globe, 
      color: '#6366F1',
      description: 'High-speed WiFi connectivity solutions'
    }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-sm font-medium mb-6"
              >
                <span className="flex h-2 w-2 rounded-full bg-purple-600 mr-2"></span>
                Zimbabwe's Trusted Fintech Partner
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-gray-900"
              >
                Digital Payments
                <br />
                <span style={{ color: '#7C3AED' }}>
                  Made Simple
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                Xash provides retail-focused POS solutions that empower shops to sell airtime, 
                bundles, and ZESA tokens while earning commission on every transaction.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 mb-10"
              >
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ backgroundColor: '#7C3AED' }}
                    className="group text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center shadow-lg"
                  >
                    Get Started
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </motion.button>
                </Link>
                <Link to="/pos">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ borderColor: '#7C3AED', color: '#7C3AED' }}
                    className="bg-white px-8 py-4 rounded-lg font-semibold border-2 transition-all shadow-lg"
                  >
                    Explore Xash POS
                  </motion.button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
              >
                <div className="flex items-center">
                  <Building style={{ color: '#7C3AED' }} className="mr-2" size={18} />
                  <span className="text-sm font-medium text-gray-700">Zimbabwe-Based</span>
                </div>
                <div className="flex items-center">
                  <Shield className="text-green-600 mr-2" size={18} />
                  <span className="text-sm font-medium text-gray-700">Secure & Compliant</span>
                </div>
                <div className="flex items-center">
                  <Target className="text-blue-600 mr-2" size={18} />
                  <span className="text-sm font-medium text-gray-700">Retail-Focused</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop" 
                alt="POS System" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-600">Today's Earnings</span>
                  <span style={{ color: '#10B981' }} className="text-2xl font-bold">+$45.20</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <TrendingUp size={16} className="mr-1" style={{ color: '#10B981' }} />
                  <span>18% increase from yesterday</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16" style={{ backgroundColor: '#7C3AED' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Trusted by Retailers Across Zimbabwe</h2>
            <p className="text-purple-100 max-w-2xl mx-auto">
              Empowering small businesses with digital financial solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                    {stat.value}
                  </div>
                  <div className="text-purple-100 text-sm font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Can Sell */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              What You Can Sell
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Diverse product range for maximum earning potential
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div 
                  style={{ backgroundColor: product.color }}
                  className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4"
                >
                  <product.icon className="text-white" size={32} />
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-2 text-center">{product.name}</h4>
                <p className="text-gray-600 text-sm text-center">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=800&h=600&fit=crop" 
                alt="Shop Owner" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Empowering Local Businesses</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Join thousands of shop owners across Zimbabwe who are earning extra income by providing 
                essential digital services to their communities.
              </p>
              <div className="space-y-4">
                {FEATURES.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle style={{ color: feature.color }} className="mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-bold text-gray-900">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Xash */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Xash?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built specifically for the Zimbabwean market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_XASH.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div 
                  style={{ backgroundColor: item.color }}
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                >
                  <item.icon className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted Partners
            </h2>
            <p className="text-xl text-gray-600">
              Working with leading network operators and utility providers
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="flex animate-scroll">
            {[...PARTNERS, ...PARTNERS].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-6 bg-white rounded-xl shadow-lg p-6 w-64"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="w-full h-24 object-cover rounded-lg mb-4"
                />
                <h4 className="font-bold text-gray-900 text-center">{partner.name}</h4>
                <p className="text-gray-500 text-sm text-center">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#7C3AED' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-6">
            <Star className="text-white" size={32} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Join hundreds of retailers across Zimbabwe earning with Xash. Get your free POS device today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center shadow-xl"
              >
                Apply for Free POS
                <ArrowRight className="ml-2" size={20} />
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Request a Demo
              </motion.button>
            </Link>
          </div>
          <p className="text-purple-200 text-sm mt-6">
            Based in Mutare • Zimbabwe-Registered • Fully Compliant
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;