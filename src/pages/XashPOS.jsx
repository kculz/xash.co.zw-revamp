import { motion } from 'framer-motion';
import { ArrowRight, Shield, AlertCircle, CheckCircle2, DollarSign, Package, Smartphone, Zap, Wifi, Phone, CreditCard, FileText, Users } from 'lucide-react';
import pos from '../assets/images/pos.jpg';
import community_pos from '../assets/images/community-pos.jpg';
import local_pos from '../assets/images/local-pos.jpg';

const XashPOS = () => {
  const COMMISSION_DATA = [
    { product: 'Econet USD Airtime', rate: '9.00%', color: '#7C3AED' },
    { product: 'Econet USD Data', rate: '9.00%', color: '#7C3AED' },
    { product: 'Netone USD Airtime', rate: '7.50%', color: '#2563EB' },
    { product: 'Telecel USD Airtime', rate: '7.00%', color: '#10B981' },
    { product: 'ZESA USD', rate: '1.20%', color: '#F59E0B' },
    { product: 'Equal WiFi', rate: '12.00%', color: '#6366F1' },
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
      description: 'Prepaid electricity tokens for ZETDC customers'
    },
    { 
      name: 'Equal WiFi', 
      icon: Smartphone, 
      color: '#6366F1',
      description: 'High-speed WiFi connectivity solutions'
    }
  ];

  const HOW_IT_WORKS = [
    {
      step: 1,
      title: 'Apply for Device',
      description: 'Qualifying retail shops apply for a free Xash POS device with no upfront costs',
      color: '#7C3AED'
    },
    {
      step: 2,
      title: 'Load Your Float',
      description: 'Use your own capital to load your wallet via bank transfer or agent',
      color: '#2563EB'
    },
    {
      step: 3,
      title: 'Sell & Earn Commission',
      description: 'Sell airtime, bundles, and ZESA. Earn commission on every sale automatically',
      color: '#10B981'
    }
  ];

  const deviceLiability = [
    { issue: 'Loss or Theft', fee: '$200.00', description: 'Replacement fee for lost or stolen device' },
    { issue: 'Damage (Negligence)', fee: '$100.00', description: 'Repair or replacement for damage due to misuse' },
    { issue: 'Normal Wear & Tear', fee: 'No Charge', description: 'Excluded from damage fees' },
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
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-6">
                <div style={{ backgroundColor: '#7C3AED' }} className="text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Retail Solution
                </div>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900">
                <span style={{ color: '#7C3AED' }}>Xash POS</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl leading-relaxed mb-8">
                A retail-focused POS solution that empowers shops to sell digital products and earn commission on every transaction.
                Free device, one unified balance, and Zimbabwe-based support.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Package, title: 'Free Device', desc: 'No upfront costs', color: '#7C3AED' },
                  { icon: DollarSign, title: 'Earn Daily', desc: 'Commission on sales', color: '#10B981' },
                  { icon: Shield, title: 'Secure', desc: 'Bank-grade security', color: '#2563EB' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="bg-gray-50 p-4 rounded-xl text-center"
                  >
                    <div 
                      style={{ backgroundColor: item.color }}
                      className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3"
                    >
                      <item.icon className="text-white" size={24} />
                    </div>
                    <h3 className="font-bold text-sm mb-1 text-gray-900">{item.title}</h3>
                    <p className="text-xs text-gray-600">{item.desc}</p>
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
              <img 
                src={pos} 
                alt="POS Device in Use" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">How Xash POS Works</h2>
            <p className="text-xl text-gray-600">Simple process to start earning</p>
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
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-start bg-white p-6 rounded-xl shadow-lg"
                  >
                    <div 
                      style={{ backgroundColor: step.color }}
                      className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4"
                    >
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
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
              <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Commission Structure</h3>
                    <p className="text-gray-600 text-sm">Earn competitive rates on every sale</p>
                  </div>
                  <div 
                    style={{ backgroundColor: '#10B981' }}
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                  >
                    <DollarSign className="text-white" size={24} />
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  {COMMISSION_DATA.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-purple-200 hover:bg-white transition-all"
                    >
                      <div className="flex items-center">
                        <div 
                          style={{ backgroundColor: item.color }}
                          className="w-2 h-2 rounded-full mr-3"
                        ></div>
                        <span className="font-medium text-gray-800">{item.product}</span>
                      </div>
                      <span 
                        style={{ color: item.color }}
                        className="font-bold text-lg"
                      >
                        {item.rate}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-start text-xs text-gray-500">
                    <CheckCircle2 className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
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
            <h2 className="text-4xl font-bold mb-4 text-gray-900">What You Can Sell</h2>
            <p className="text-xl text-gray-600">Diverse product range for maximum earning potential</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {PRODUCTS.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div 
                  style={{ backgroundColor: product.color }}
                  className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4"
                >
                  <product.icon className="text-white" size={32} />
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">{product.name}</h4>
                <p className="text-gray-600 text-sm">{product.description}</p>
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
            <img 
              src={community_pos} 
              alt="Shop Transaction" 
              className="rounded-2xl shadow-2xl w-full h-auto order-2 lg:order-1"
            />
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Serve Your Community</h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Provide essential services to your customers while earning competitive commission on every transaction.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 style={{ color: '#10B981' }} className="mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Instant processing and confirmation</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 style={{ color: '#10B981' }} className="mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">No separate devices or balances needed</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 style={{ color: '#10B981' }} className="mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">24/7 local support team</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Device & Requirements */}
      <section className="py-20 bg-gray-50">
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
                    style={{ backgroundColor: '#7C3AED' }}
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                  >
                    <Smartphone size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold ml-4 text-gray-900">Free POS Device</h3>
                </div>
                <div className="space-y-4 mb-6">
                  <p className="text-gray-600 leading-relaxed">
                    Xash provides qualifying retail shops with a POS device at zero cost. The device connects to our secure platform 
                    and allows you to vend all products from one interface.
                  </p>
                  
                  <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                    <h4 className="font-bold text-yellow-900 mb-4">Device Liability Fees</h4>
                    <div className="space-y-3">
                      {deviceLiability.map((item, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <div>
                            <span className="font-medium text-gray-800">{item.issue}</span>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                          <span className={`font-bold ${
                            item.fee === 'No Charge' ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {item.fee}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3">Qualification Requirements</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {requirements.map((req, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle2 className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
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
              <div style={{ backgroundColor: '#7C3AED' }} className="p-8 rounded-xl text-white shadow-lg">
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
              <img 
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
                    style={{ backgroundColor: '#2563EB' }}
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                  >
                    <Users size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold ml-4 text-gray-900">Local Zimbabwe Support</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Based in Mutare with a dedicated technical support team ready to assist you. We understand the local market 
                  and provide support in local languages.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Technical Support</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Phone & email support</li>
                      <li>• On-site assistance</li>
                      <li>• Device troubleshooting</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Business Support</h4>
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
      <section className="py-20" style={{ backgroundColor: '#7C3AED' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Apply for Your Free POS Device
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Join hundreds of successful retail agents across Zimbabwe. Start earning commission on digital sales today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-700 px-10 py-4 rounded-lg font-bold transition-all inline-flex items-center text-lg shadow-xl justify-center"
            >
              <a href="/contact">
              Apply for Free POS
              </a>
              <ArrowRight className="ml-2" size={24} />
            </motion.button>
            
          </div>
          <p className="text-purple-200 text-sm mt-8">
            Based in Mutare • Free device for qualifying shops • Weekly commission payouts
          </p>
        </div>
      </section>
    </div>
  );
};

export default XashPOS;