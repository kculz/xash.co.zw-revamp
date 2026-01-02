import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Terminal, Shield, Zap, Database, 
  Cloud, Lock, Smartphone, ArrowRight, 
  CheckCircle, Copy, Key, Eye, EyeOff 
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { API_FEATURES } from '../../data/constants';

const Developers = () => {
  const [apiKey, setApiKey] = useState('xash_live_sk_**********');
  const [showKey, setShowKey] = useState(false);

  const endpoints = [
    {
      method: 'POST',
      endpoint: '/v1/tokens/airtime',
      description: 'Purchase airtime for any network',
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
      sample: {
        meter: '123456789012',
        amount: 20.00
      }
    },
    {
      method: 'POST',
      endpoint: '/v1/tokens/bundles',
      description: 'Purchase data bundles',
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
      sample: {}
    }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-2xl mb-6">
              <Code2 className="text-blue-600" size={32} />
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900">
              Developer API
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful, secure API for integrating digital product sales into your applications
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection direction="left">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Build with Xash</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Integrate airtime, electricity, and data bundle sales directly into your applications 
                with our comprehensive REST API. Designed for reliability and ease of use.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">RESTful API with JSON responses</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Comprehensive documentation</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt=1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">SDK support for multiple languages</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt=1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Webhook support for real-time updates</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-gray-900 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Terminal className="text-green-400 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-white">Quick Start</h3>
                </div>
                <pre className="text-sm text-gray-300 overflow-x-auto mb-6">
                  <code>{`npm install xash-sdk

import Xash from 'xash-sdk';

const xash = new Xash({
  apiKey: 'your_api_key_here',
  environment: 'sandbox' // or 'production'
});

// Purchase airtime
const response = await xash.airtime.purchase({
  network: 'econet',
  phone: '26377XXXXXXX',
  amount: 5.00
});`}</code>
                </pre>
                <button className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors">
                  View full documentation →
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* API Key Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Get Your API Key</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Start building in minutes with a free sandbox account
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Key className="text-gray-700 mr-3" size={24} />
                    <h3 className="text-xl font-bold text-gray-900">Your API Key</h3>
                  </div>
                  <button
                    onClick={() => copyToClipboard(apiKey)}
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <Copy size={16} className="inline mr-1" /> Copy
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
                    <Shield className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <p className="text-sm text-blue-800">
                      <strong>Important:</strong> Never share your API key publicly. Use environment variables in production.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">API Endpoints</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple, consistent endpoints for all your integration needs
            </p>
          </AnimatedSection>

          <div className="space-y-6 max-w-6xl mx-auto">
            {endpoints.map((endpoint, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-blue-200 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium mr-3 ${
                          endpoint.method === 'GET' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-lg font-mono text-gray-800">{endpoint.endpoint}</code>
                      </div>
                      <p className="text-gray-600">{endpoint.description}</p>
                    </div>
                  </div>
                  <div className="bg-gray-900 rounded-xl p-4">
                    <div className="text-sm text-gray-400 mb-2">Request body:</div>
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>{JSON.stringify(endpoint.sample, null, 2)}</code>
                    </pre>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">API Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to build robust integrations
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {API_FEATURES.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-2xl border border-gray-200">
                  <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                    <feature.icon className="text-blue-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-6">
              <Terminal size={32} />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Start Building Today
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Get free sandbox access with full documentation and dedicated developer support.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold border border-white hover:bg-blue-50 transition-colors inline-flex items-center text-lg"
            >
              Get API Key
              <ArrowRight className="ml-2" size={24} />
            </motion.button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Developers;