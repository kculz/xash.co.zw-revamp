import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Smartphone, Wallet, CheckCircle, TrendingUp, Star, Building, Target, Users, Phone, Zap, Wifi, Globe, Quote } from 'lucide-react';
import econetLogo from '../assets/partners/econet.png';
import netoneLogo from '../assets/partners/netone.svg';
import telecelLogo from '../assets/partners/telecel.jpeg';
import zesaLogo from '../assets/partners/zetdc.png';
import rbzLogo from '../assets/partners/zb.jpg';
import innbucksLogo from '../assets/partners/inbucks.png';
import ImageWithSkeleton from '../components/ui/ImageWithSkeleton';
import { Helmet } from 'react-helmet';

const hero_pos = "https://images.unsplash.com/photo-1589156191108-c7ea6bfd1576?auto=format&fit=crop&w=1200&q=80";
const business_pos = "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80";

const Home = () => {
  const FEATURES = [
    {
      icon: Smartphone,
      title: 'Free POS Device',
      description: 'Qualifying retail shops receive a Xash POS device at zero cost. Start selling immediately.',
      color: '#1F6AE1'
    },
    {
      icon: Wallet,
      title: 'One Unified Balance',
      description: 'Manage airtime, bundles, and ZESA from a single float. No need for separate devices.',
      color: '#0B3C5D'
    },
    {
      icon: TrendingUp,
      title: 'Earn Daily Commission',
      description: 'Earn competitive commission on every transaction. Payouts processed weekly.',
      color: '#F5B700'
    }
  ];

  const STATS = [
    { value: '500+', label: 'Active Agents', color: '#1F6AE1' },
    { value: '$2K+', label: 'Monthly Volume', color: '#0B3C5D' },
    { value: '5K+', label: 'Daily Transactions', color: '#F5B700' },
    { value: '99.9%', label: 'System Uptime', color: '#1F6AE1' }
  ];

  const WHY_CHOOSE_XASH = [
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'Enterprise-grade encryption and security protocols protect every transaction',
      color: '#1F6AE1'
    },
    {
      icon: Smartphone,
      title: 'Real-time Processing',
      description: 'Instant transaction processing with immediate SMS confirmations',
      color: '#0B3C5D'
    },
    {
      icon: Users,
      title: 'Local Zimbabwe Support',
      description: 'Based in Mutare with dedicated technical support team ready to assist',
      color: '#F5B700'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Detailed reporting and analytics to monitor sales and earnings',
      color: '#1F6AE1'
    }
  ];

  const PARTNERS = [
    { name: 'Econet Wireless', type: 'Network Partner', logo: econetLogo },
    { name: 'NetOne', type: 'Network Partner', logo: netoneLogo },
    { name: 'Telecel', type: 'Network Partner', logo: telecelLogo },
    { name: 'ZETDC', type: 'Utility Partner', logo: zesaLogo },
    { name: 'Reserve Bank', type: 'Regulatory', logo: rbzLogo },
    { name: 'InnBucks', type: 'Payment Partner', logo: innbucksLogo },
  ];

  const TESTIMONIALS = [
    {
      name: 'Tinashe M.',
      role: 'Shop Owner',
      location: 'Mutare CBD',
      content: 'The Xash POS has transformed my business. I earn commission daily and my customers love the convenience. The support team is always available to help.',
      rating: 5,
      business: 'Quick Mart',
      avatar: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Sarah K.',
      role: 'Retailer',
      location: 'Harare',
      content: "Switching to Xash was the best decision for my shop. The unified balance for airtime, data, and ZESA makes management so much easier. Highly recommended!",
      rating: 5,
      business: 'City Corner Store',
      avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Blessing C.',
      role: 'Business Owner',
      location: 'Bulawayo',
      content: "As a small business owner, the additional income from commissions has been life-changing. The device is reliable and the team provides excellent training.",
      rating: 5,
      business: 'Family Groceries',
      avatar: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Takudzwa M.',
      role: 'Agent',
      location: 'Gweru',
      content: "I've been using Xash for 6 months and the earnings have been consistent. The weekly payouts are reliable and the system is very user-friendly.",
      rating: 4,
      business: 'Tech Hub Shop',
      avatar: 'https://images.unsplash.com/photo-1543269664-76b420f3000b?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Grace N.',
      role: 'Supermarket Owner',
      location: 'Masvingo',
      content: "My customers appreciate the one-stop-shop for all their digital needs. The free POS device and training made it easy to get started. Excellent service!",
      rating: 5,
      business: 'Metro Supermarket',
      avatar: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=150&q=80'
    }
  ];

  const PRODUCTS = [
    { 
      name: 'Airtime', 
      icon: Phone, 
      color: '#1F6AE1',
      description: 'Sell airtime for all major networks: Econet, NetOne, Telecel'
    },
    { 
      name: 'Data Bundles', 
      icon: Wifi, 
      color: '#0B3C5D',
      description: 'Econet data bundles for smartphones and devices'
    },
    { 
      name: 'ZETDC Tokens', 
      icon: Zap, 
      color: '#F5B700',
      description: 'Prepaid electricity tokens for ZESA customers'
    },
    { 
      name: 'Equal WiFi', 
      icon: Globe, 
      color: '#1F6AE1',
      description: 'High-speed WiFi connectivity solutions'
    }
  ];

  return (
    <div className="pt-20 bg-white">
      <Helmet>
        <title>Home - Xash</title>
        <meta 
          name="description" 
          content="Xash provides retail-focused POS solutions that empower shops to sell airtime, bundles, and ZESA tokens while earning commission on every transaction." 
        />  
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden bg-mesh">
        {/* Ambient Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-blue-500/10 rounded-full filter blur-3xl animate-blob" />
          <div className="absolute top-1/2 -left-24 w-[400px] h-[400px] bg-yellow-500/10 rounded-full filter blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-24 right-1/4 w-[600px] h-[600px] bg-orange-500/10 rounded-full filter blur-3xl opacity-60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
                className="inline-flex items-center px-4 py-2 rounded-full bg-[#F5F7FA] border border-[#1F6AE1]/20 text-[#1F6AE1] text-sm font-medium mb-6"
              >
                <span className="flex h-2 w-2 rounded-full bg-[#1F6AE1] mr-2"></span>
                Zimbabwe's Trusted Fintech Partner
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold font-sora leading-tight mb-6 text-[#1A1A1A] tracking-tight"
              >
                Unleash Your
                <br />
                <span className="bg-gradient-to-r from-[#1F6AE1] via-[#1F6AE1] to-[#0B3C5D] bg-clip-text text-transparent">
                  Retail Growth
                </span>
                <span className="text-sm font-bold block mt-2 text-[#F5B700] uppercase tracking-wider font-outfit">Digital Payments Made Simple</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 mb-8 leading-relaxed font-outfit max-w-2xl"
              >
                Xash empowers local shops with powerful POS tools, airtime vending, and utility connectivity—all inside one secure ecosystem built for maximum profit.
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
                    className="group bg-gradient-to-r from-[#1F6AE1] to-[#0B3C5D] text-white px-8 py-4 rounded-xl font-bold font-outfit transition-all flex items-center justify-center shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                  >
                    Get Started
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </motion.button>
                </Link>
                <Link to="/pos">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/50 backdrop-blur-md px-8 py-4 rounded-xl font-bold font-outfit border-2 border-[#1F6AE1]/30 text-[#0B3C5D] transition-all shadow-md hover:border-[#1F6AE1] hover:bg-white hover:text-[#1F6AE1] hover:shadow-lg hover:-translate-y-0.5"
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
                  <Building style={{ color: '#1F6AE1' }} className="mr-2" size={18} />
                  <span className="text-sm font-bold font-outfit text-[#1A1A1A]">Zimbabwe-Based</span>
                </div>
                <div className="flex items-center">
                  <Shield style={{ color: '#F5B700' }} className="mr-2" size={18} />
                  <span className="text-sm font-bold font-outfit text-[#1A1A1A]">Secure & Compliant</span>
                </div>
                <div className="flex items-center">
                  <Target style={{ color: '#0B3C5D' }} className="mr-2" size={18} />
                  <span className="text-sm font-bold font-outfit text-[#1A1A1A]">Retail-Focused</span>
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
              <ImageWithSkeleton 
                src={hero_pos}
                alt="African POS User" 
                className="rounded-3xl shadow-2xl w-full h-[600px] object-cover border-4 border-white/80"
              />
              <motion.div 
                animate={{ y: [0, -12, 0], rotate: [0, 1, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 max-w-xs border border-white/20"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-600">Today's Earnings</span>
                  <span style={{ color: '#F5B700' }} className="text-2xl font-bold">+$45.20</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <TrendingUp size={16} className="mr-1" style={{ color: '#F5B700' }} />
                  <span>18% increase from yesterday</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16" style={{ backgroundColor: '#0B3C5D' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-sora mb-4 text-white tracking-tight">Trusted by Retailers Across Zimbabwe</h2>
            <p className="text-[#F5F7FA] max-w-2xl mx-auto font-outfit text-lg opacity-90">
              Empowering small businesses with connected digital financial solutions built for growth.
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
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300 group">
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-white group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-[#F5F7FA] text-sm font-semibold font-outfit uppercase tracking-wider opacity-80">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Can Sell */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-sora text-[#1A1A1A] mb-4 tracking-tight">
              What You Can Sell
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-outfit">
              Explore our diverse product range maximizing your daily earning potential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl border border-gray-100/50 shadow-md hover:shadow-2xl hover:border-[#1F6AE1]/20 transition-all duration-500 overflow-hidden relative group"
              >
                <div 
                  style={{ backgroundColor: product.color }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg"
                >
                  <product.icon className="text-white transform group-hover:scale-110 transition-transform duration-500" size={32} />
                </div>
                <h4 className="font-bold text-[#1A1A1A] text-lg mb-2 text-center group-hover:text-[#1F6AE1] transition-colors">{product.name}</h4>
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
              <ImageWithSkeleton 
                src={business_pos} 
                alt="Shop Owner" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-[#1A1A1A]">Empowering Local Businesses</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Join thousands of shop owners across Zimbabwe who are earning extra income by providing 
                essential digital services to their communities.
              </p>
              <div className="space-y-4">
                {FEATURES.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle style={{ color: feature.color }} className="mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-bold text-[#1A1A1A]">{feature.title}</h4>
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
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-sora text-[#1A1A1A] mb-4 tracking-tight">
              Why Choose Xash?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-outfit">
              Engineered specifically to solve local commerce & connectivity challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_XASH.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-2xl border border-gray-100/50 shadow-md hover:shadow-2xl hover:border-[#1F6AE1]/20 transition-all duration-500 overflow-hidden relative group"
              >
                 <div 
                  style={{ backgroundColor: item.color }}
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg"
                >
                  <item.icon className="text-white transform group-hover:scale-110 transition-transform duration-500" size={28} />
                </div>
                <h3 className="text-lg font-bold font-sora mb-2 text-[#1A1A1A]">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-outfit">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section - Fixed logo sizes */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">
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
                <div className="w-full h-20 flex items-center justify-center mb-4">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                </div>
                <h4 className="font-bold text-[#1A1A1A] text-center">{partner.name}</h4>
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

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-sora text-[#1A1A1A] mb-4 tracking-tight">
              What Our Partners Say
            </h2>
            <p className="text-xl text-gray-600 font-outfit">
              Hear success stories from shop operators scaling with Xash.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl border border-gray-100/50 shadow-md hover:shadow-2xl hover:border-[#1F6AE1]/20 transition-all duration-500 overflow-hidden relative group"
              >
                <div className="mb-4">
                  <Quote className="text-[#0B3C5D] opacity-30 mb-3" size={24} />
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </div>
                
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-[#1F6AE1]/20" />
                    <div>
                      <h4 className="font-bold text-[#1A1A1A]">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}, {testimonial.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          fill={i < testimonial.rating ? "#F5B700" : "#E5E7EB"} 
                          color={i < testimonial.rating ? "#F5B700" : "#E5E7EB"}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">{testimonial.business}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional 2 testimonials in a different layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {TESTIMONIALS.slice(3, 5).map((testimonial, index) => (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 3) * 0.1 }}
                whileHover={{ y: -10, scale: 1.01 }}
                className="bg-gradient-to-r from-[#1F6AE1]/8 to-[#0B3C5D]/5 p-8 rounded-2xl border border-[#1F6AE1]/15 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start">
                  <div className="bg-white rounded-full p-3 mr-4 shadow-sm">
                    <Quote className="text-[#1F6AE1]" size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-[#1F6AE1]/20" />
                        <div>
                          <h4 className="font-bold text-[#1A1A1A]">{testimonial.name}</h4>
                          <p className="text-gray-500 text-sm">{testimonial.role} • {testimonial.business}</p>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            fill={i < testimonial.rating ? "#F5B700" : "#E5E7EB"} 
                            color={i < testimonial.rating ? "#F5B700" : "#E5E7EB"}
                            className="ml-0.5"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#0B3C5D' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-6">
            <Star className="text-white" size={32} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold font-sora mb-6 text-white tracking-tight">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-[#F5F7FA] mb-8 leading-relaxed font-outfit opacity-90">
            Join hundreds of retailers across Zimbabwe scaling with Xash. Secure your smart POS terminal today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://wa.me/263716409412?text=Hello%2C%20I%20would%20like%20to%20apply%20for%20a%20free%20PoS."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#0B3C5D] px-6 py-4 rounded-xl font-bold font-outfit shadow-2xl inline-flex items-center justify-center hover:bg-[#F5F7FA] hover:-translate-y-0.5 transition-all"
            >
              Apply for free PoS
            </motion.a>
            
          </div>
          <p className="text-[#F5F7FA] text-sm mt-6">
            Based in Mutare • Zimbabwe-Registered • Fully Compliant
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;