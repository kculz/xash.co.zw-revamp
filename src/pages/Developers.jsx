import { motion } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  Shield, 
  Zap, 
  Lock, 
  Database,
  Cloud,
  CheckCircle,
  Copy,
  Key,
  Eye,
  EyeOff,
  ArrowRight,
  Smartphone,
  FileText,
  Layers
} from 'lucide-react';
import { useState } from 'react';

const Developers = () => {
  const [apiKey, setApiKey] = useState('xash_live_sk_**********');
  const [showKey, setShowKey] = useState(false);
  const [copiedEndpoint, setCopiedEndpoint] = useState(null);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedEndpoint(index);
    setTimeout(() => setCopiedEndpoint(null), 2000);
  };

  const endpoints = [
    {
      method: 'POST',
      endpoint: '/v1/tokens/airtime',
      description: 'Purchase airtime for any network',
      color: '#7C3AED',
      sample: {
        network: 'econet',
        phone: '26377XXXXXXX',
        amount: 5.00
      }
    },
    {
      method: 'POST',
      endpoint: '/v1/tokens/electricity',
      description: 'Purchase ZESA electricity tokens',
      color: '#F59E0B',
      sample: {
        meter: '123456789012',
        amount: 20.00
      }
    },
    {
      method: 'POST',
      endpoint: '/v1/tokens/bundles',
      description: 'Purchase data bundles',
      color: '#2563EB',
      sample: {
        network: 'econet',
        phone: '26377XXXXXXX',
        bundle: 'daily_500mb'
      }
    },
    {
      method: 'GET',
      endpoint: '/v1/balance',
      description: 'Check account balance',
      color: '#10B981',
      sample: {}
    }
  ];

  const features = [
    {
      icon: Lock,
      title: 'Secure API',
      description: 'Bank-grade encryption for all API transactions with OAuth 2.0',
      color: '#7C3AED'
    },
    {
      icon: Zap,
      title: 'Real-time Delivery',
      description: 'Instant delivery of tokens and PINs with webhook notifications',
      color: '#2563EB'
    },
    {
      icon: Layers,
      title: 'Scalable Infrastructure',
      description: 'Built to handle high transaction volumes with 99.9% uptime',
      color: '#10B981'
    },
    {
      icon: FileText,
      title: 'Comprehensive Docs',
      description: 'Detailed API documentation with code samples and SDKs',
      color: '#F59E0B'
    },
    {
      icon: Code2,
      title: 'Easy Integration',
      description: 'Simple REST API with support for multiple programming languages',
      color: '#6366F1'
    },
    {
      icon: Database,
      title: 'Developer Support',
      description: 'Dedicated technical support for integration assistance',
      color: '#7C3AED'
    }
  ];

  const codeExample = `npm install xash-sdk

import Xash from 'xash-sdk';

const xash = new Xash({
  apiKey: 'your_api_key_here',
  environment: 'sandbox'
});

// Purchase airtime
const response = await xash.airtime.purchase({
  network: 'econet',
  phone: '26377XXXXXXX',
  amount: 5.00
});`;

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-semibold mb-6">
                <Code2 className="w-4 h-4 mr-2" />
                Developer API
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900">
                Build with <span style={{ color: '#7C3AED' }}>XASH API</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Powerful, secure API for integrating digital product sales into your applications. 
                Start building in minutes with our comprehensive REST API.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle style={{ color: '#10B981' }} className="mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">RESTful API with JSON responses</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle style={{ color: '#10B981' }} className="mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Comprehensive documentation and code samples</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle style={{ color: '#10B981' }} className="mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">SDK support for multiple languages</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle style={{ color: '#10B981' }} className="mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Webhook support for real-time updates</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center mb-6">
                  <Terminal className="text-green-400 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-white">Quick Start</h3>
                </div>
                <pre className="text-sm text-gray-300 overflow-x-auto">
                  <code>{codeExample}</code>
                </pre>
                <button className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors mt-4">
                  View full documentation →
                </button>
              </div>
            </motion.div>
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
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop" 
                alt="Developer Working" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Built for Developers</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Our API is designed with developers in mind. Clean, intuitive endpoints with 
                comprehensive documentation make integration straightforward and fast.
              </p>
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                  <h4 className="font-bold text-gray-900 mb-2">Free Sandbox Environment</h4>
                  <p className="text-gray-600 text-sm">Test your integration risk-free with unlimited API calls</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-gray-900 mb-2">Detailed Error Messages</h4>
                  <p className="text-gray-600 text-sm">Clear error codes and messages for easy debugging</p>
                </div>
                <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                  <h4 className="font-bold text-gray-900 mb-2">Rate Limiting</h4>
                  <p className="text-gray-600 text-sm">Generous rate limits with clear headers for tracking</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* API Key Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Get Started
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Get Your API Key</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Start building in minutes with a free sandbox account
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Key className="text-gray-700 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-900">Your API Key</h3>
                </div>
                <button
                  onClick={() => copyToClipboard(apiKey)}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center"
                >
                  <Copy size={16} className="mr-1" /> Copy
                </button>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between">
                  <code className="text-gray-800 font-mono">
                    {showKey ? apiKey : 'xash_live_sk_••••••••••••••'}
                  </code>
                  <button
                    onClick={() => setShowKey(!showKey)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    {showKey ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <div className="flex items-start">
                  <Shield className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <p className="text-sm text-blue-800">
                    <strong>Important:</strong> Never share your API key publicly. Use environment variables in production.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              API Reference
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">API Endpoints</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Simple, consistent endpoints for all your integration needs
            </p>
          </div>

          <div className="space-y-6 max-w-6xl mx-auto">
            {endpoints.map((endpoint, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span 
                        style={{ 
                          backgroundColor: endpoint.method === 'GET' ? '#10B981' : endpoint.color,
                          color: 'white'
                        }}
                        className="px-3 py-1 rounded-full text-sm font-medium mr-3"
                      >
                        {endpoint.method}
                      </span>
                      <code className="text-lg font-mono text-gray-800">{endpoint.endpoint}</code>
                    </div>
                    <p className="text-gray-600">{endpoint.description}</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(endpoint.endpoint, index)}
                    className="ml-4 text-gray-400 hover:text-gray-600"
                  >
                    {copiedEndpoint === index ? (
                      <CheckCircle size={20} style={{ color: '#10B981' }} />
                    ) : (
                      <Copy size={20} />
                    )}
                  </button>
                </div>
                <div className="bg-gray-900 rounded-xl p-4">
                  <div className="text-sm text-gray-400 mb-2">Request body:</div>
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{JSON.stringify(endpoint.sample, null, 2)}</code>
                  </pre>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              Features
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">API Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Everything you need to build robust integrations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all"
              >
                <div 
                  style={{ backgroundColor: feature.color }}
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg"
                >
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Developer Resources</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Access comprehensive documentation, code samples, SDKs, and tutorials 
                to help you integrate XASH API quickly and efficiently.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FileText style={{ color: '#7C3AED' }} className="mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-gray-900">API Documentation</h4>
                    <p className="text-gray-600 text-sm">Complete reference with examples</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Code2 style={{ color: '#2563EB' }} className="mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-gray-900">Code Samples</h4>
                    <p className="text-gray-600 text-sm">Ready-to-use code in multiple languages</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Terminal style={{ color: '#10B981' }} className="mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-gray-900">SDKs & Libraries</h4>
                    <p className="text-gray-600 text-sm">Official SDKs for popular frameworks</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=600&fit=crop" 
                alt="Developer Resources" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#7C3AED' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-6">
            <Terminal size={32} className="text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Start Building Today
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Get free sandbox access with full documentation and dedicated developer support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-700 px-10 py-4 rounded-lg font-bold shadow-xl inline-flex items-center justify-center"
            >
              Get API Key
              <ArrowRight className="ml-2" size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold inline-flex items-center justify-center"
            >
              View Documentation
            </motion.button>
          </div>
          <p className="text-purple-200 text-sm mt-6">
            Free sandbox • Full API access • 24/7 developer support
          </p>
        </div>
      </section>
    </div>
  );
};

export default Developers;