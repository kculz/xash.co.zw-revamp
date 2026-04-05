import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { CheckCircle2, Box, Store, Users, ShoppingCart, BarChart3, Shield, Monitor as MonitorIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import posImage from '../assets/images/retail_store_pos.png';

const RetailPOS = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'

  const features = [
    {
      icon: Box,
      title: 'Inventory Management',
      description: 'Track stock levels in real-time, get low-stock alerts, and manage product variations effortlessly.'
    },
    {
      icon: Store,
      title: 'Multi-Branch Support',
      description: 'Run multiple store locations from a single dashboard. Transfer stock and manage staff across branches.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Reporting',
      description: 'Uncover insights with daily sales reports, profit margins, and performance analytics.'
    },
    {
      icon: Users,
      title: 'Employee Tracking',
      description: 'Manage staff permissions, track sales by employee, and monitor shift schedules.'
    }
  ];

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses just getting started',
      priceMonthly: 29.00,
      priceYearly: 290.00,
      limits: [
        { label: '3 users', icon: Users },
        { label: '1 branches', icon: Store },
        { label: '2.0 GB storage', icon: Shield }
      ],
      features: [
        'Email Support'
      ],
      color: '#1F6AE1'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'For growing businesses with multiple locations',
      priceMonthly: 79.00,
      priceYearly: 790.00,
      isPopular: true,
      limits: [
        { label: '10 users', icon: Users },
        { label: '3 branches', icon: Store },
        { label: '2.0 GB storage', icon: Shield }
      ],
      features: [
        'Coupons & Discounts',
        'Custom Tax Rates',
        'Multi-Branch Management',
        'Email Support',
        'Loyalty Program',
        'Priority Support',
        'Supplier Management'
      ],
      color: '#0B3C5D'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large businesses requiring unlimited access',
      priceMonthly: 199.00,
      priceYearly: 1990.00,
      limits: [
        { label: 'Unlimited users', icon: Users },
        { label: 'Unlimited branches', icon: Store },
        { label: 'Unlimited storage', icon: Shield }
      ],
      features: [
        'Coupons & Discounts',
        'API Access',
        'Custom Tax Rates',
        'Multi-Branch Management',
        'Email Support',
        'Bulk Import / Export',
        'Loyalty Program',
        'Purchase Orders',
        'Advanced Reports & Exports',
        'Priority Support',
        'Dedicated Account Manager',
        'Supplier Management'
      ],
      color: '#F5B700'
    }
  ];

  return (
    <div className="pt-20 bg-[#F5F7FA]">
      <Helmet>
        <title>Retail Store POS Software - Xash</title>
        <meta 
          name="description" 
          content="Manage your store's stock, branches, and sales intuitively with Xash Retail POS Software. Explore our Starter, Professional, and Enterprise subscription plans." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden bg-mesh-dark" style={{ backgroundColor: '#0B3C5D' }}>
        <div className="absolute inset-0 z-0 bg-[#0B3C5D] opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-white/10 border border-white/20 text-[#F5B700] text-sm font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
              Store Management Software
            </span>
            <h1 className="text-5xl md:text-7xl font-bold font-sora text-white mb-6 tracking-tight">
              Smarter Software for <br /> Your Retail Store
            </h1>
            <p className="text-xl text-[#F5F7FA]/90 max-w-2xl mx-auto font-outfit mb-10 leading-relaxed">
              Take complete control over your business with powerful tools to manage stock, analyze sales, track employees, and run multiple branches efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#pricing">
                <button className="bg-[#1F6AE1] hover:bg-[#1A5ED0] text-white px-8 py-4 rounded-xl font-bold font-outfit shadow-xl transition-all w-full sm:w-auto">
                  View Subscription Plans
                </button>
              </a>
              <Link to="/contact">
                <button className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold font-outfit transition-all w-full sm:w-auto">
                  Request a Demo
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Showcase Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src={posImage} 
                alt="African Shop Owner managing stock" 
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover border-4 border-gray-100"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-[#1A1A1A] font-sora">Built for the Modern Retailer</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed font-outfit">
                Whether you run a local grocery, a busy hardware store, or multiple clothing boutiques, our Retail POS is designed specifically to handle the fast-paced retail environment. Keep track of every item and never run out of popular stock.
              </p>
              <ul className="space-y-4 font-outfit mb-8">
                <li className="flex items-center text-gray-700 font-medium">
                  <CheckCircle2 className="text-[#1F6AE1] mr-3" size={24} />
                  Beautiful, easy-to-use touchscreen interface
                </li>
                <li className="flex items-center text-gray-700 font-medium">
                  <CheckCircle2 className="text-[#1F6AE1] mr-3" size={24} />
                  Works flawlessly with unified daily reporting
                </li>
                <li className="flex items-center text-gray-700 font-medium">
                  <CheckCircle2 className="text-[#1F6AE1] mr-3" size={24} />
                  Real-time stock synchronization across all your branches
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-sora text-[#1A1A1A] mb-4">Everything You Need to Scale</h2>
            <p className="text-xl text-gray-600 font-outfit max-w-2xl mx-auto">
              A comprehensive suite of tools built explicitly for the modern retail entrepreneur. 
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#F5F7FA] p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 border border-gray-200 group-hover:bg-[#1F6AE1] transition-colors">
                  <feature.icon className="text-[#0B3C5D] group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-bold font-sora text-[#1A1A1A] mb-3">{feature.title}</h3>
                <p className="text-gray-600 font-outfit text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-mesh relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-sora text-[#1A1A1A] mb-6 tracking-tight">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 font-outfit max-w-xl mx-auto mb-10">
              Choose the plan that fits your business needs. Upgrade, downgrade, or cancel at any time.
            </p>
            
            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-white p-1.5 rounded-xl border border-gray-200 shadow-sm">
              <button 
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold font-outfit transition-all ${billingCycle === 'monthly' ? 'bg-[#1F6AE1] text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
              >
                Monthly billing
              </button>
              <button 
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold font-outfit transition-all flex items-center ${billingCycle === 'yearly' ? 'bg-[#1F6AE1] text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
              >
                Yearly billing <span className="ml-2 bg-[#F5B700] text-amber-900 text-[10px] px-2 py-0.5 rounded-full">Save ~16%</span>
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-[#0B1525] rounded-3xl p-8 border ${plan.isPopular ? 'border-[#1F6AE1] shadow-2xl shadow-[#1F6AE1]/20 scale-105 z-10' : 'border-gray-800'} flex flex-col`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-8 transform -translate-y-1/2">
                    <span className="bg-[#1F6AE1] text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold font-sora text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm font-outfit mb-6 h-10">{plan.description}</p>
                
                <div className="mb-8">
                  <span className="text-5xl font-bold font-sora text-white">
                    ${billingCycle === 'monthly' ? plan.priceMonthly.toFixed(2) : plan.priceYearly.toFixed(2)}
                  </span>
                  <span className="text-gray-400 text-sm ml-2">
                    /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                  </span>
                  <div className="text-gray-500 text-xs mt-2">
                    {billingCycle === 'monthly' ? `or $${plan.priceYearly.toFixed(2)}/yr` : `billed $${plan.priceYearly.toFixed(2)} annually`}
                  </div>
                </div>
                
                <ul className="mb-8 space-y-4 border-b border-gray-800 pb-8">
                  {plan.limits.map((limit, i) => (
                    <li key={i} className="flex items-center text-gray-300 text-sm font-medium">
                      <limit.icon className="w-5 h-5 text-gray-500 mr-3" />
                      {limit.label}
                    </li>
                  ))}
                </ul>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-400 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-[#1F6AE1] mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact">
                  <button 
                    className={`w-full py-4 rounded-xl font-bold transition-all ${
                      plan.isPopular 
                        ? 'bg-[#1F6AE1] hover:bg-[#1A5ED0] text-white shadow-lg' 
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    Get Started
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware + Software Combo call out */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B3C5D] rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1F6AE1] rounded-full filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="md:w-2/3 relative z-10 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold font-sora text-white mb-4">Complete Your Setup</h2>
              <p className="text-[#F5F7FA]/80 text-lg font-outfit max-w-xl">
                Need reliable hardware? Pair your subscription with our dedicated Point of Sale terminal and start ring-up sales instantly.
              </p>
            </div>
            
            <div className="md:w-1/3 text-left md:text-right relative z-10 w-full sm:w-auto">
              <Link to="/contact">
                <button className="bg-[#F5B700] hover:bg-[#E0A800] text-amber-900 px-8 py-4 rounded-xl font-bold font-outfit shadow-lg transition-transform hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center">
                  <MonitorIcon className="w-5 h-5 mr-2" />
                  Order Hardware
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RetailPOS;
