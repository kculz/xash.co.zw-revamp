import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, AlertCircle, CheckCircle2, DollarSign, Package, Smartphone, Zap, Wifi, Phone, CreditCard, FileText, Users } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { COMMISSION_DATA, PRODUCTS, HOW_IT_WORKS, PARTNERS } from '../../data/constants';

const XashPOS = () => {
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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                Retail Solution
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900">
              <span className="text-purple-600">Xash POS</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A retail-focused POS solution that empowers shops to sell digital products and earn commission on every transaction.
              Free device, one unified balance, and Zimbabwe-based support.
            </p>
          </AnimatedSection>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              { icon: Package, title: 'Free Device', desc: 'No upfront costs for qualifying shops', color: 'bg-purple-600' },
              { icon: DollarSign, title: 'Earn Daily', desc: 'Commission on every transaction', color: 'bg-green-600' },
              { icon: Shield, title: 'Secure & Compliant', desc: 'Bank-grade security, fully regulated', color: 'bg-blue-600' }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all"
                >
                  <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-4`}>
                    <item.icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-1 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection direction="left">
              <h2 className="text-4xl font-bold mb-8 text-gray-900">How Xash POS Works</h2>
              <div className="space-y-6">
                {HOW_IT_WORKS.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-start"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 ${step.color} rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4`}>
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
                className="mt-8 p-6 bg-purple-50 rounded-xl border border-purple-200"
              >
                <div className="flex items-start">
                  <AlertCircle className="text-purple-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-purple-900 font-medium leading-relaxed">
                      <strong>Important:</strong> The POS device remains property of Xash. Shops use their own float to transact and earn commission on every sale.
                    </p>
                    <p className="text-xs text-purple-700 mt-2">
                      Device must be returned upon termination of agreement. Liability fees apply for loss or damage.
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Commission Structure */}
            <AnimatedSection direction="right">
              <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Commission Structure</h3>
                    <p className="text-gray-600 text-sm">Earn competitive rates on every sale</p>
                  </div>
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
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
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-purple-200 hover:bg-white transition-colors"
                    >
                      <div className="flex items-center">
                        <div className={`w-2 h-2 ${item.color} rounded-full mr-3`}></div>
                        <span className="font-medium text-gray-800">{item.product}</span>
                      </div>
                      <span className={`font-bold text-lg ${item.color}`}>
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
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What You Can Sell */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">What You Can Sell</h2>
            <p className="text-xl text-gray-600">Diverse product range for maximum earning potential</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((product, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative bg-white p-8 rounded-xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all text-center"
                >
                  <div className={`w-16 h-16 ${product.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <product.icon className="text-white" size={32} />
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">{product.name}</h4>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Partners */}
          <AnimatedSection className="mt-16">
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Official Network Partners</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {PARTNERS.filter(p => p.type.includes('Partner')).map((partner, index) => (
                  <div key={index} className="flex items-center p-4 border border-gray-200 rounded-lg">
                    <div className={`text-2xl font-bold ${partner.logoColor} mr-3`}>
                      {partner.name.split(' ')[0].charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{partner.name}</div>
                      <div className="text-sm text-gray-600">{partner.type}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Device & Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Device Info */}
            <AnimatedSection>
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
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
                  <div className="grid grid-cols-2 gap-2">
                    {requirements.map((req, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle2 className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-700">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* One Balance System */}
            <AnimatedSection delay={0.2}>
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-8 rounded-xl text-white">
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
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Local Support */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
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
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <FileText size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold ml-4 text-gray-900">Merchant Agreement</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  All Xash POS agents operate under a formal merchant agreement that outlines terms, commissions, 
                  and responsibilities.
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-600 pl-4">
                    <h4 className="font-bold text-gray-900">Key Agreement Points</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      • Device remains Xash property<br/>
                      • 7-day termination notice<br/>
                      • Compliance with utility provider rules<br/>
                      • AML/KYC obligations
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Note:</strong> Full merchant agreement provided upon successful application.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Apply for Your Free POS Device
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Join hundreds of successful retail agents across Zimbabwe. Start earning commission on digital sales today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-700 px-10 py-4 rounded-lg font-bold hover:bg-purple-50 transition-colors inline-flex items-center text-lg"
                >
                  Apply for Free POS
                  <ArrowRight className="ml-2" size={24} />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors text-lg"
                >
                  Download Agreement
                </motion.button>
              </Link>
            </div>
            <p className="text-purple-200 text-sm mt-8">
              Based in Mutare • Free device for qualifying shops • Weekly commission payouts
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default XashPOS;