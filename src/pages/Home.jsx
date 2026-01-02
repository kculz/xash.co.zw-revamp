import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Smartphone, Wallet, CheckCircle, TrendingUp, Star, Building, Target, Users as UsersIcon } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { FEATURES, STATS, WHY_CHOOSE_XASH, PARTNERS } from '../../data/constants';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50">
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
                className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-sm font-medium mb-6"
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
                <span className="text-purple-600">
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
                    className="group bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center"
                  >
                    Get Started
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </motion.button>
                </Link>
                <Link to="/pos">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-colors"
                  >
                    Explore Xash POS
                  </motion.button>
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
              >
                <div className="flex items-center">
                  <Building className="text-purple-600 mr-2" size={18} />
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

            {/* Hero Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                      <Wallet className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-lg">Xash POS Transaction</p>
                      <p className="text-xs text-gray-500">Successfully Completed</p>
                    </div>
                  </div>
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, type: "spring" }}
                    className="text-green-600 font-bold text-xl"
                  >
                    +$0.90
                  </motion.span>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Product</span>
                    <span className="font-semibold text-gray-800">Econet Airtime</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Amount</span>
                    <span className="font-semibold text-gray-800">$10.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Commission</span>
                    <span className="font-semibold text-purple-600">
                      $0.90 (9.0%)
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-xs text-gray-400 font-mono">Ref: #XSH-7823</span>
                      <p className="text-xs text-gray-500 mt-1">63 Embassy Building, Mutare</p>
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 px-3 py-1.5 rounded-full font-semibold">
                      PAID
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Retailers Across Zimbabwe</h2>
            <p className="text-purple-200 max-w-2xl mx-auto">
              Empowering small businesses with digital financial solutions
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-purple-100 text-sm font-medium">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Retail Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to run a successful digital vending business
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-gradient-to-r from-purple-50 to-white rounded-2xl border border-purple-100 p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center">
                      <Smartphone className="text-white" size={32} />
                    </div>
                    <h3 className="text-3xl font-bold ml-4 text-gray-900">Xash POS</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    A retail-focused POS solution that allows shops to sell airtime, bundles, and ZESA tokens 
                    while earning commission on every transaction. One unified balance system for all products.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">Free POS device for qualifying shops</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-green-500 mr-3 mt=1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">Earn daily commission on transactions</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-green-500 mr-3 mt=1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">Zimbabwe-based support team</span>
                    </div>
                  </div>
                  <Link to="/pos">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-8 bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center"
                    >
                      Learn About Xash POS
                      <ArrowRight className="ml-2" size={20} />
                    </motion.button>
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {FEATURES.map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                      <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                        <feature.icon className="text-white" size={24} />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Trusted Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Working with leading network operators and utility providers
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {PARTNERS.map((partner, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 transition-colors text-center">
                  <div className="h-12 flex items-center justify-center mb-4">
                    <div className={`text-2xl font-bold ${partner.logoColor}`}>
                      {partner.name.split(' ')[0].charAt(0)}
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm">{partner.name}</h4>
                  <p className="text-gray-500 text-xs mt-1">{partner.type}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Xash */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Xash?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built specifically for the Zimbabwean market
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_XASH.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all"
                >
                  <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                    <item.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-6">
              <Star className="text-yellow-300" size={32} />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
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
                  className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center"
                >
                  Apply for Free POS
                  <ArrowRight className="ml-2" size={20} />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Request a Demo
                </motion.button>
              </Link>
            </div>
            <p className="text-purple-200 text-sm mt-6">
              Based in Mutare • Zimbabwe-Registered • Fully Compliant
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;