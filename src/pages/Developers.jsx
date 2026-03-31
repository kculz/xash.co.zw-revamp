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
  Layers,
  User,
  Wifi,
  Bolt
} from 'lucide-react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

const Developers = () => {
  const [apiKey, setApiKey] = useState('xv_sk_live_**********');
  const [showKey, setShowKey] = useState(false);
  const [copiedEndpoint, setCopiedEndpoint] = useState(null);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedEndpoint(index);
    setTimeout(() => setCopiedEndpoint(null), 2000);
  };

  const apiCategories = [
    {
      title: 'Authentication',
      icon: Key,
      color: '#1F6AE1',
      endpoints: [
        {
          method: 'POST',
          endpoint: '/api/v1/auth/register',
          description: 'Register a new user account',
          color: '#1F6AE1',
          sample: {
            "first_name": "John",
            "last_name": "Doe",
            "dob": "2000-01-01",
            "phone": "263775123456",
            "email": "john@example.com",
            "id_number": "71-123456X55"
          }
        },
        {
          method: 'POST',
          endpoint: '/api/v1/auth/set-password',
          description: 'Set password after registration',
          color: '#1F6AE1',
          sample: {
            "user_number": 123456,
            "password": "SecurePass123!",
            "password_confirmation": "SecurePass123!"
          }
        },
        {
          method: 'POST',
          endpoint: '/api/v1/auth/login',
          description: 'Authenticate and obtain access token',
          color: '#F5B700',
          sample: {
            "user_number": 123456,
            "password": "SecurePass123!"
          }
        },
        {
          method: 'POST',
          endpoint: '/api/v1/auth/logout',
          description: 'Logout and invalidate token',
          color: '#EF4444',
          sample: {}
        },
        {
          method: 'POST',
          endpoint: '/api/v1/auth/create-business',
          description: 'Create business profile',
          color: '#F5B700',
          sample: {
            "business_name": "Xash Technologies",
            "business_category": "IT",
            "address_line_1": "123 Main St",
            "city": "Mutare",
            "business_address_line_1": "456 Business Ave",
            "business_city": "Mutare"
          }
        },
        {
          method: 'GET',
          endpoint: '/api/v1/profile',
          description: 'Fetch user profile information',
          color: '#0B3C5D',
          sample: {}
        }
      ]
    },
    {
      title: 'Airtime',
      icon: Smartphone,
      color: '#F5B700',
      endpoints: [
        {
          method: 'GET',
          endpoint: '/api/v1/airtime/carriers',
          description: 'Get supported carriers',
          color: '#F5B700',
          sample: {}
        },
        {
          method: 'POST',
          endpoint: '/api/v1/airtime/direct',
          description: 'Purchase direct airtime',
          color: '#F5B700',
          sample: {
            "mobile_phone": "263775123456",
            "amount": 10,
            "currency": "USD"
          }
        },
        {
          method: 'GET',
          endpoint: '/api/v1/airtime/direct/{carrier}/values',
          description: 'Get voucher values for carrier',
          color: '#F5B700',
          sample: {}
        },
        {
          method: 'POST',
          endpoint: '/api/v1/airtime/direct/voucher/{carrier}',
          description: 'Purchase voucher airtime',
          color: '#F5B700',
          sample: {
            "amount": 10,
            "currency": "USD",
            "quantity": 2
          }
        }
      ]
    },
    {
      title: 'Bundles',
      icon: Layers,
      color: '#0B3C5D',
      endpoints: [
        {
          method: 'GET',
          endpoint: '/api/v1/bundles',
          description: 'Get available bundles',
          color: '#0B3C5D',
          sample: {
            "currency": "USD",
            "network": "Carrier1"
          }
        },
        {
          method: 'POST',
          endpoint: '/api/v1/bundles/buy/{bundle}',
          description: 'Purchase direct bundle',
          color: '#0B3C5D',
          sample: {
            "mobile_phone": "263775123456"
          }
        },
        {
          method: 'POST',
          endpoint: '/api/v1/bundles/voucher/buy/{bundle}',
          description: 'Purchase bundle vouchers',
          color: '#0B3C5D',
          sample: {
            "quantity": 2
          }
        }
      ]
    },
    {
      title: 'WiFi Vouchers',
      icon: Wifi,
      color: '#F5B700',
      endpoints: [
        {
          method: 'GET',
          endpoint: '/api/v1/wifi/vouchers',
          description: 'Get available WiFi bundles',
          color: '#F5B700',
          sample: {}
        },
        {
          method: 'POST',
          endpoint: '/api/v1/wifi/vouchers/buy',
          description: 'Purchase WiFi vouchers',
          color: '#F5B700',
          sample: {
            "amount": "10.00",
            "currency": "USD",
            "quantity": "2",
            "duration": 24,
            "data_limit": "1GB",
            "duration_in": "hours"
          }
        }
      ]
    },
    {
      title: 'Electricity',
      icon: Bolt,
      color: '#1F6AE1',
      endpoints: [
        {
          method: 'POST',
          endpoint: '/api/v1/electricity/check-account',
          description: 'Verify ZESA account',
          color: '#1F6AE1',
          sample: {
            "meter_number": "12345678",
            "currency": "ZIG"
          }
        },
        {
          method: 'POST',
          endpoint: '/api/v1/electricity/buy-tokens',
          description: 'Purchase ZESA tokens',
          color: '#1F6AE1',
          sample: {
            "meter_number": "12345678",
            "amount": 10,
            "currency": "ZIG"
          }
        }
      ]
    }
  ];

  const features = [
    {
      icon: Lock,
      title: 'Secure Authentication',
      description: 'Token-based authentication with Bearer tokens. All endpoints secured with HTTPS and OAuth 2.0 principles.',
      color: '#1F6AE1'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Instant delivery of airtime, bundles, and electricity tokens with immediate webhook notifications.',
      color: '#F5B700'
    },
    {
      icon: Layers,
      title: 'Comprehensive API',
      description: 'Full suite of vending services: airtime, data bundles, WiFi vouchers, and electricity tokens.',
      color: '#0B3C5D'
    },
    {
      icon: FileText,
      title: 'Detailed Documentation',
      description: 'Complete API reference with examples for all endpoints, available at docs.xash.co.zw.',
      color: '#F5B700'
    },
    {
      icon: Code2,
      title: 'RESTful Design',
      description: 'Clean REST API with JSON responses. Support for multiple programming languages and frameworks.',
      color: '#1F6AE1'
    },
    {
      icon: Database,
      title: 'Wallet & Commission System',
      description: 'Built-in wallet management with automatic commission calculation and profit tracking.',
      color: '#1F6AE1'
    }
  ];

  const baseURLs = [
    {
      environment: 'Live Server',
      url: 'https://staging.xash.co.zw/api/v1',
      color: '#F5B700'
    },
    {
      environment: 'Development Server',
      url: 'https://dev.xash.co.zw/api/v1',
      color: '#1F6AE1'
    }
  ];

  const codeExample = `// Example: Purchase Airtime
fetch('https://staging.xash.co.zw/api/v1/airtime/direct', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
  },
  body: JSON.stringify({
    mobile_phone: '263775123456',
    amount: 10,
    currency: 'USD'
  })
})
.then(response => response.json())
.then(data => {
  console.log('Transaction successful:', data);
});`;

  return (
    <div className="pt-20 bg-white">
      <Helmet>
        <title>Developers - Xash</title>
        <meta 
          name="description" 
          content="Explore Xash Vend API for seamless integration of airtime, data bundles, WiFi vouchers, and electricity tokens into your applications." 
        />  
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-24 bg-mesh-dark overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-32 w-[600px] h-[600px] bg-xash-primary-blue/20 rounded-full filter blur-3xl animate-blob" />
          <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] bg-xash-accent-gold/10 rounded-full filter blur-3xl animate-pulse-slow" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xash-accent-gold text-sm font-bold mb-6">
                <Code2 className="w-4 h-4 mr-2" />
                Xash Vend API
              </span>
              <h1 className="text-5xl sm:text-7xl font-bold font-sora mb-6 text-white tracking-tight">
                Build with <span className="bg-gradient-to-r from-xash-primary-blue to-xash-accent-gold bg-clip-text text-transparent">Xash Vend API</span>
              </h1>
              <p className="text-xl text-white/70 font-outfit mb-10 leading-relaxed">
                Powerful, secure API for integrating diverse vending services into your applications. 
                Seamlessly handle mobile airtime, data bundles, WiFi vouchers, and electricity tokens.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-xash-accent-gold mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-white/80 font-outfit">RESTful API with JSON responses and Bearer token authentication</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-xash-accent-gold mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-white/80 font-outfit">Comprehensive documentation at docs.xash.co.zw with code samples</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-xash-accent-gold mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-white/80 font-outfit">Wallet management with automatic commission calculation</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-xash-accent-gold mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-white/80 font-outfit">Webhook support for real-time transaction updates</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-xash-primary-blue/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/10">
                <div className="flex items-center mb-6">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <Terminal className="text-xash-accent-gold mr-2" size={18} />
                  <h3 className="text-sm font-bold text-white/80 font-outfit">Quick Start Example</h3>
                </div>
                <pre className="text-sm text-green-300 overflow-x-auto font-mono leading-relaxed">
                  <code>{codeExample}</code>
                </pre>
                <a 
                  href="https://docs.xash.co.zw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xash-accent-gold text-sm font-medium hover:text-white transition-colors mt-5 inline-flex items-center font-outfit"
                >
                  View full documentation at docs.xash.co.zw
                  <ArrowRight className="ml-2" size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Base URLs Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">API Base URLs</h3>
            <p className="text-gray-600">Use these endpoints for your API calls</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {baseURLs.map((base, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#F5F7FA] rounded-xl p-6 border border-gray-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span 
                    style={{ backgroundColor: base.color }}
                    className="px-3 py-1 rounded-full text-white text-sm font-medium"
                  >
                    {base.environment}
                  </span>
                  <button
                    onClick={() => copyToClipboard(base.url, `base-${index}`)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    {copiedEndpoint === `base-${index}` ? (
                      <CheckCircle size={20} style={{ color: '#F5B700' }} />
                    ) : (
                      <Copy size={20} />
                    )}
                  </button>
                </div>
                <code className="text-[#1A1A1A] font-mono text-sm break-all">{base.url}</code>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints by Category */}
      <section className="py-24 bg-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-xash-primary-blue/20 text-xash-primary-blue text-sm font-bold mb-6">
              API Reference
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-sora mb-4 text-xash-dark-text">API Endpoints</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-outfit">
              Complete suite of endpoints for all vending services
            </p>
          </div>

          <div className="space-y-12">
            {apiCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="glass-panel rounded-3xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-8">
                  <div 
                    style={{ backgroundColor: category.color }}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mr-4 shadow-lg"
                  >
                    <category.icon className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-sora text-xash-dark-text">{category.title}</h3>
                    <p className="text-gray-500 font-outfit">Endpoints for {category.title.toLowerCase()} services</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {category.endpoints.map((endpoint, endpointIndex) => (
                    <motion.div
                      key={endpointIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: endpointIndex * 0.05 }}
                      className="bg-[#F5F7FA] rounded-xl p-6 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <span 
                              style={{ 
                                backgroundColor: endpoint.method === 'GET' ? '#F5B700' : 
                                              endpoint.method === 'POST' ? '#1F6AE1' : 
                                              endpoint.method === 'PUT' ? '#F5B700' : 
                                              endpoint.method === 'DELETE' ? '#EF4444' : endpoint.color,
                                color: 'white'
                              }}
                              className="px-3 py-1 rounded-full text-sm font-medium mr-3"
                            >
                              {endpoint.method}
                            </span>
                            <code className="text-lg font-mono text-[#1A1A1A] break-all">{endpoint.endpoint}</code>
                          </div>
                          <p className="text-gray-600">{endpoint.description}</p>
                        </div>
                        <button
                          onClick={() => copyToClipboard(endpoint.endpoint, `${categoryIndex}-${endpointIndex}`)}
                          className="ml-4 text-gray-400 hover:text-gray-600 flex-shrink-0"
                        >
                          {copiedEndpoint === `${categoryIndex}-${endpointIndex}` ? (
                            <CheckCircle size={20} style={{ color: '#F5B700' }} />
                          ) : (
                            <Copy size={20} />
                          )}
                        </button>
                      </div>
                      {Object.keys(endpoint.sample).length > 0 && (
                        <div className="bg-[#0B3C5D] rounded-xl p-4">
                          <div className="text-sm text-gray-400 mb-2">Request body:</div>
                          <pre className="text-sm text-gray-300 overflow-x-auto">
                            <code>{JSON.stringify(endpoint.sample, null, 2)}</code>
                          </pre>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Key Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#F5F7FA] text-[#F5B700] rounded-full text-sm font-semibold mb-4 border border-[#F5B700]/20">
              Authentication
            </span>
            <h2 className="text-4xl font-bold mb-4 text-[#1A1A1A]">Authentication Setup</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Securely authenticate your API requests with Bearer tokens
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Key className="text-gray-700 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-[#1A1A1A]">Bearer Token Authentication</h3>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-[#1A1A1A] mb-2">Authentication Header</h4>
                  <div className="bg-[#F5F7FA] rounded-xl p-4">
                    <code className="text-[#1A1A1A] font-mono">
                      Authorization: Bearer {'{access_token}'}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-[#1A1A1A] mb-2">Get Access Token</h4>
                  <div className="bg-[#0B3C5D] rounded-xl p-4">
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>{`POST /api/v1/auth/login
{
  "user_number": 123456,
  "password": "your_password"
}`}</code>
                    </pre>
                  </div>
                </div>

                <div className="bg-[#F5F7FA] rounded-xl p-4 border border-[#1F6AE1]/20">
                  <div className="flex items-start">
                    <Shield className="text-[#1F6AE1] mr-3 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="text-sm text-[#1A1A1A] font-medium mb-1">Important Security Notes:</p>
                      <ul className="text-sm text-[#1A1A1A] list-disc list-inside space-y-1">
                        <li>Tokens expire after 1 hour - implement token refresh logic</li>
                        <li>Never expose tokens in client-side code</li>
                        <li>Use environment variables in production</li>
                        <li>All API calls must use HTTPS</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-xash-primary-blue/20 text-xash-primary-blue text-sm font-bold mb-6">
              Features
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-sora mb-4 text-xash-dark-text">Why Choose Xash Vend API</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-outfit">
              Everything you need for seamless vending service integration
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
                whileHover={{ y: -8 }}
                className="glass-panel p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 group"
              >
                <div 
                  style={{ backgroundColor: feature.color }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500"
                >
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 font-sora text-xash-dark-text">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed font-outfit">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation CTA */}
      <section className="py-24 bg-mesh-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl mb-8 border border-white/20">
              <Terminal size={36} className="text-xash-accent-gold" />
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold font-sora mb-8 text-white tracking-tight">
              Ready to Integrate?
            </h2>
            <p className="text-xl text-white/80 font-outfit mb-12 leading-relaxed max-w-2xl mx-auto">
              Access complete documentation, code samples, and dedicated developer support.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://docs.xash.co.zw"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-xash-accent-gold text-xash-primary-blue px-10 py-5 rounded-2xl font-bold shadow-2xl inline-flex items-center justify-center hover:bg-white transition-all"
              >
                View Full Documentation
                <ArrowRight className="ml-2" size={22} />
              </motion.a>
            </div>
            <p className="text-white/50 text-sm mt-8 font-outfit">
              Free sandbox access • Comprehensive documentation • 24/7 developer support
            </p>
          </div>
        </div>
      </section>

      {/* Error Handling */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#1A1A1A]">Error Handling</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Consistent error responses across all endpoints
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#0B3C5D] rounded-2xl p-8">
              <div className="text-[#F5B700] font-mono text-sm">
                <div className="mb-4">
                  <span className="text-gray-400">// Error response format</span>
                </div>
                <pre className="overflow-x-auto">
                  <code>{`{
  "success": false,
  "message": "Error message",
  "errors": {
    "field1": [
      "Error detail 1",
      "Error detail 2"
    ],
    "field2": [
      "Error detail"
    ]
  }
}`}</code>
                </pre>
                
                <div className="mt-8 grid md:grid-cols-3 gap-4">
                  <div className="bg-red-900/30 rounded-lg p-4">
                    <div className="text-red-400 font-bold">401</div>
                    <div className="text-gray-300 text-sm">Unauthorized</div>
                  </div>
                  <div className="bg-yellow-900/30 rounded-lg p-4">
                    <div className="text-yellow-400 font-bold">422</div>
                    <div className="text-gray-300 text-sm">Validation Failed</div>
                  </div>
                  <div className="bg-red-900/30 rounded-lg p-4">
                    <div className="text-red-400 font-bold">400</div>
                    <div className="text-gray-300 text-sm">Bad Request</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Developers;