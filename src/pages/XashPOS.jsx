import { motion } from 'framer-motion';
import { ArrowRight, Shield, AlertCircle, CheckCircle2, DollarSign, Package, Smartphone, Zap, Wifi, Phone, CreditCard, FileText, Users } from 'lucide-react';
import ImageWithSkeleton from '../components/ui/ImageWithSkeleton';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const pos = "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=1200&q=80";
const community_pos = "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80";
const local_pos = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80";

const XashPOS = () => {
  const COMMISSION_DATA = [
    { product: 'Econet USD Airtime', rate: '9.00%', color: '#1F6AE1' },
    { product: 'Econet USD Data', rate: '9.00%', color: '#1F6AE1' },
    { product: 'Netone USD Airtime', rate: '7.50%', color: '#0B3C5D' },
    { product: 'Telecel USD Airtime', rate: '7.00%', color: '#F5B700' },
    { product: 'ZESA USD', rate: '1.20%', color: '#F5B700' },
    { product: 'Equal WiFi', rate: '12.00%', color: '#1F6AE1' },
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
      name: 'ZESA Tokens', 
      icon: Zap, 
      color: '#F5B700',
      description: 'Prepaid electricity tokens for ZETDC customers'
    },
    { 
      name: 'Equal WiFi', 
      icon: Smartphone, 
      color: '#1F6AE1',
      description: 'High-speed WiFi connectivity solutions'
    }
  ];

  const HOW_IT_WORKS = [
    {
      step: 1,
      title: 'Apply for Device',
      description: 'Qualifying retail shops apply for a free Xash POS device with no upfront costs',
      color: '#1F6AE1'
    },
    {
      step: 2,
      title: 'Load Your Float',
      description: 'Use your own capital to load your wallet via bank transfer or agent',
      color: '#0B3C5D'
    },
    {
      step: 3,
      title: 'Sell & Earn Commission',
      description: 'Sell airtime, bundles, and ZESA. Earn commission on every sale automatically',
      color: '#F5B700'
    }
  ];

  const requirements = [
    'Registered retail shop in Zimbabwe',
    'Valid business registration documents',
    'Valid ID for business owner',
    'Physical shop address verification',
    'Bank account for commission payouts',
    'AML/KYC compliance verification',
  ];

  return (
    <div className="pt-20 bg-white">
      <Helmet>
        <title>Xash POS - Xash</title>
        <meta 
          name="description" 
          content="Discover Xash POS, a retail-focused solution offering free devices, unified balances, and Zimbabwe-based support for selling digital products and earning commissions." 
        />
      </Helmet>
      {/* Hero Section */}
      <section className="py-24 bg-mesh relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-blue-500/10 rounded-full filter blur-3xl animate-blob" />
          <div className="absolute top-1/2 -left-24 w-[400px] h-[400px] bg-secondary-blue/10 rounded-full filter blur-3xl animate-pulse-slow" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-6">
                <div style={{ backgroundColor: '#1F6AE1' }} className="text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Retail Solution
                </div>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold font-sora mb-6 text-[#1A1A1A] tracking-tight">
                The Smartest <span style={{ color: '#1F6AE1' }}>POS</span> for Your Shop
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl leading-relaxed mb-8 font-outfit">
                Empower your business with hardware designed for scale. Sell digital services, bundle airtime, and track profits seamlessly from one unified secure portal.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Package, title: 'Free Device', desc: 'No upfront costs', color: '#1F6AE1' },
                  { icon: DollarSign, title: 'Earn Daily', desc: 'Commission on sales', color: '#F5B700' },
                  { icon: Shield, title: 'Secure', desc: 'Bank-grade security', color: '#0B3C5D' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="glass-card hover:glass-panel p-5 rounded-2xl text-center transition-all duration-300 group"
                  >
                    <div 
                      className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-lg`}
                      style={{ backgroundColor: item.color }}
                    >
                      <item.icon className="text-white" size={24} />
                    </div>
                    <h3 className="font-bold font-sora text-sm mb-1 text-xash-dark-text">{item.title}</h3>
                    <p className="text-xs font-outfit text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <ImageWithSkeleton 
                src={pos} 
                alt="African shop owner using POS" 
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover border-4 border-white/80"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-sora mb-4 text-[#1A1A1A] tracking-tight">How Xash POS Works</h2>
            <p className="text-xl text-gray-600 font-outfit">Simple process to start earning daily commissions.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {HOW_IT_WORKS.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                    className="flex items-start bg-white p-6 rounded-2xl border border-gray-100/50 shadow-md hover:shadow-2xl hover:border-[#1F6AE1]/20 transition-all duration-500 group"
                  >
                    <div 
                      style={{ backgroundColor: step.color }}
                      className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4"
                    >
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-sora mb-2 text-[#1A1A1A]">{step.title}</h3>
                      <p className="text-gray-600 font-outfit leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-8 p-6 bg-yellow-50 rounded-xl border border-yellow-200"
              >
                <div className="flex items-start">
                  <AlertCircle className="text-yellow-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-yellow-900 font-medium leading-relaxed">
                      <strong>Important:</strong> The POS device remains property of Xash. Shops use their own float to transact and earn commission on every sale.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Commission Structure */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass-panel p-8 rounded-3xl">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold font-sora text-xash-dark-text tracking-tight">Commission Structure</h3>
                    <p className="text-gray-600 text-sm font-outfit">Earn competitive rates on every sale</p>
                  </div>
                  <div 
                    className="w-14 h-14 rounded-2xl bg-xash-accent-gold shadow-lg flex items-center justify-center"
                  >
                    <DollarSign className="text-white" size={28} />
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  {COMMISSION_DATA.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-white/50 border border-white/40 rounded-2xl shadow-sm hover:shadow-md hover:bg-white transition-all duration-300 group"
                    >
                      <div className="flex items-center">
                        <div 
                          className="w-2.5 h-2.5 rounded-full mr-3 shadow-inner"
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className="font-semibold font-outfit text-sm text-xash-dark-text">{item.product}</span>
                      </div>
                      <span 
                        className="font-bold text-lg"
                        style={{ color: item.color }}
                      >
                        {item.rate}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <div className="pt-6 border-t border-gray-200/50">
                  <div className="flex items-start text-xs text-gray-500">
                    <CheckCircle2 className="text-xash-accent-gold mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Commissions paid weekly to your Xash wallet. Rates subject to utility provider changes.</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Can Sell */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-sora mb-4 text-[#1A1A1A] tracking-tight">What You Can Sell</h2>
            <p className="text-xl text-gray-600 font-outfit">Diverse product range for maximum earning potential</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {PRODUCTS.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl border border-gray-100/50 shadow-md hover:shadow-2xl hover:border-[#1F6AE1]/20 transition-all duration-500 overflow-hidden relative group text-center"
              >
                <div 
                  style={{ backgroundColor: product.color }}
                  className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4"
                >
                  <product.icon className="text-white" size={32} />
                </div>
                <h4 className="font-bold font-sora text-[#1A1A1A] text-lg mb-2">{product.name}</h4>
                <p className="text-gray-600 text-sm font-outfit">{product.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <ImageWithSkeleton 
              src={community_pos} 
              alt="African retail shop" 
              className="rounded-3xl shadow-2xl w-full h-[400px] object-cover order-2 lg:order-1 border-4 border-white/50"
            />
            <div className="order-1 lg:order-2">
              <h3 className="text-4xl font-bold font-sora mb-6 text-xash-dark-text tracking-tight">Serve Your Community</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed font-outfit">
                Provide essential services to your customers while earning competitive commission on every transaction. Empower your local neighborhood with connectivity.
              </p>
              <div className="space-y-4">
                {[
                  "Instant processing and confirmation",
                  "No separate devices or balances needed",
                  "24/7 dedicated local support team"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-white/40 shadow-sm">
                    <CheckCircle2 className="text-xash-accent-gold mr-3 flex-shrink-0" size={24} />
                    <span className="text-xash-dark-text font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Device & Requirements */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Device Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg">
                <div className="flex items-center mb-6">
                  <div 
                    style={{ backgroundColor: '#1F6AE1' }}
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                  >
                    <Smartphone size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold ml-4 text-[#1A1A1A]">Free POS Device</h3>
                </div>
                <div className="space-y-4 mb-6">
                  <p className="text-gray-600 leading-relaxed">
                    Xash provides qualifying retail shops with a POS device at zero cost. The device connects to our secure platform 
                    and allows you to vend all products from one interface.
                  </p>
                </div>
                
                <div className="bg-[#F5F7FA] p-4 rounded-lg">
                  <h4 className="font-bold text-[#1A1A1A] mb-3">Qualification Requirements</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {requirements.map((req, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle2 className="text-[#F5B700] mr-2 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-700">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* One Balance System */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              delay={0.2}
            >
              <div style={{ backgroundColor: '#0B3C5D' }} className="p-8 rounded-xl text-white shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                    <CreditCard size={24} />
                  </div>
                  <h3 className="text-2xl font-bold ml-4">One Unified Balance</h3>
                </div>
                <div className="space-y-6">
                  <p className="leading-relaxed">
                    Manage all your transactions from a single prepaid wallet. No need for separate floats for different products.
                  </p>
                  
                  <div className="bg-white/10 backdrop-blur p-6 rounded-lg border border-white/20">
                    <h4 className="font-bold mb-4">Wallet Management</h4>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2" size={16} />
                        Prepaid wallet balance for all transactions
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2" size={16} />
                        Instant top-up via bank transfer or agent
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2" size={16} />
                        Separate commission account for earnings
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2" size={16} />
                        Weekly commission payouts
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2" size={16} />
                        Transaction declined if insufficient balance
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>Note:</strong> No interest paid on wallet funds. Funds are held solely for transaction facilitation.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ImageWithSkeleton 
                src={local_pos}
                alt="Customer Support" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg">
                <div className="flex items-center mb-6">
                  <div 
                    style={{ backgroundColor: '#0B3C5D' }}
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                  >
                    <Users size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold ml-4 text-[#1A1A1A]">Local Zimbabwe Support</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Based in Mutare with a dedicated technical support team ready to assist you. We understand the local market 
                  and provide support in local languages.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#F5F7FA] p-4 rounded-lg">
                    <h4 className="font-bold text-[#1A1A1A] mb-2">Technical Support</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Phone & email support</li>
                      <li>• On-site assistance</li>
                      <li>• Device troubleshooting</li>
                    </ul>
                  </div>
                  <div className="bg-[#F5F7FA] p-4 rounded-lg">
                    <h4 className="font-bold text-[#1A1A1A] mb-2">Business Support</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Setup guidance</li>
                      <li>• AML/KYC compliance</li>
                      <li>• Performance reports</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-mesh-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-mesh-dark pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl sm:text-6xl font-bold mb-8 text-white tracking-tight">
            Scale Your Shop <br />
            <span className="text-xash-accent-gold">With Xash POS</span>
          </h2>
          <p className="text-xl text-[#F5F7FA]/90 mb-12 leading-relaxed max-w-2xl mx-auto">
            Join hundreds of successful retail agents across Zimbabwe. Start earning high-margin commission on digital sales today with no overhead costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="https://wa.me/263716409412?text=Hello%2C%20I%20would%20like%20to%20apply%20for%20a%20free%20PoS."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-xash-primary-blue px-10 py-5 rounded-2xl font-bold shadow-2xl inline-flex items-center justify-center hover:bg-xash-light-bg transition-all"
            >
              Get Your Free POS Now
            </motion.a>
          </div>
          <div className="mt-12 flex items-center justify-center space-x-6 text-sm text-white/60">
            <span className="flex items-center"><CheckCircle2 className="mr-2 text-xash-accent-gold" size={16} /> Based in Mutare</span>
            <span className="flex items-center"><CheckCircle2 className="mr-2 text-xash-accent-gold" size={16} /> Free for qualifying shops</span>
            <span className="flex items-center"><CheckCircle2 className="mr-2 text-xash-accent-gold" size={16} /> Weekly payouts</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default XashPOS;