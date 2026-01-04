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
      color: '#7C3AED',
      endpoints: [
        {
          method: 'POST',
          endpoint: '/api/v1/auth/register',
          description: 'Register a new user account',
          color: '#7C3AED',
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
          color: '#7C3AED',
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
          color: '#10B981',
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
          color: '#F59E0B',
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
          color: '#2563EB',
          sample: {}
        }
      ]
    },
    {
      title: 'Airtime',
      icon: Smartphone,
      color: '#10B981',
      endpoints: [
        {
          method: 'GET',
          endpoint: '/api/v1/airtime/carriers',
          description: 'Get supported carriers',
          color: '#10B981',
          sample: {}
        },
        {
          method: 'POST',
          endpoint: '/api/v1/airtime/direct',
          description: 'Purchase direct airtime',
          color: '#10B981',
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
          color: '#10B981',
          sample: {}
        },
        {
          method: 'POST',
          endpoint: '/api/v1/airtime/direct/voucher/{carrier}',
          description: 'Purchase voucher airtime',
          color: '#10B981',
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
      color: '#2563EB',
      endpoints: [
        {
          method: 'GET',
          endpoint: '/api/v1/bundles',
          description: 'Get available bundles',
          color: '#2563EB',
          sample: {
            "currency": "USD",
            "network": "Carrier1"
          }
        },
        {
          method: 'POST',
          endpoint: '/api/v1/bundles/buy/{bundle}',
          description: 'Purchase direct bundle',
          color: '#2563EB',
          sample: {
            "mobile_phone": "263775123456"
          }
        },
        {
          method: 'POST',
          endpoint: '/api/v1/bundles/voucher/buy/{bundle}',
          description: 'Purchase bundle vouchers',
          color: '#2563EB',
          sample: {
            "quantity": 2
          }
        }
      ]
    },
    {
      title: 'WiFi Vouchers',
      icon: Wifi,
      color: '#F59E0B',
      endpoints: [
        {
          method: 'GET',
          endpoint: '/api/v1/wifi/vouchers',
          description: 'Get available WiFi bundles',
          color: '#F59E0B',
          sample: {}
        },
        {
          method: 'POST',
          endpoint: '/api/v1/wifi/vouchers/buy',
          description: 'Purchase WiFi vouchers',
          color: '#F59E0B',
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
      color: '#EC4899',
      endpoints: [
        {
          method: 'POST',
          endpoint: '/api/v1/electricity/check-account',
          description: 'Verify ZESA account',
          color: '#EC4899',
          sample: {
            "meter_number": "12345678",
            "currency": "ZIG"
          }
        },
        {
          method: 'POST',
          endpoint: '/api/v1/electricity/buy-tokens',
          description: 'Purchase ZESA tokens',
          color: '#EC4899',
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
      color: '#7C3AED'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Instant delivery of airtime, bundles, and electricity tokens with immediate webhook notifications.',
      color: '#10B981'
    },
    {
      icon: Layers,
      title: 'Comprehensive API',
      description: 'Full suite of vending services: airtime, data bundles, WiFi vouchers, and electricity tokens.',
      color: '#2563EB'
    },
    {
      icon: FileText,
      title: 'Detailed Documentation',
      description: 'Complete API reference with examples for all endpoints, available at docs.xash.co.zw.',
      color: '#F59E0B'
    },
    {
      icon: Code2,
      title: 'RESTful Design',
      description: 'Clean REST API with JSON responses. Support for multiple programming languages and frameworks.',
      color: '#6366F1'
    },
    {
      icon: Database,
      title: 'Wallet & Commission System',
      description: 'Built-in wallet management with automatic commission calculation and profit tracking.',
      color: '#EC4899'
    }
  ];

  const baseURLs = [
    {
      environment: 'Live Server',
      url: 'https://staging.xash.co.zw/api/v1',
      color: '#10B981'
    },
    {
      environment: 'Development Server',
      url: 'https://dev.xash.co.zw/api/v1',
      color: '#F59E0B'
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
                Xash Vend API
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900">
                Build with <span style={{ color: '#7C3AED' }}>Xash Vend API</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Powerful, secure API for integrating diverse vending services into your applications. 
                Seamlessly handle mobile airtime, data bundles, WiFi vouchers, and electricity tokens.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle style={{ color: '#10B981' }} className="mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">RESTful API with JSON responses and Bearer token authentication</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle style={{ color: '#10B981' }} className="mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Comprehensive documentation at docs.xash.co.zw with code samples</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle style={{ color: '#10B981' }} className="mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Wallet management with automatic commission calculation</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle style={{ color: '#10B981' }} className="mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Webhook support for real-time transaction updates</span>
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
                  <h3 className="text-xl font-bold text-white">Quick Start Example</h3>
                </div>
                <pre className="text-sm text-gray-300 overflow-x-auto">
                  <code>{codeExample}</code>
                </pre>
                <a 
                  href="https://docs.xash.co.zw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors mt-4 inline-flex items-center"
                >
                  View full documentation at docs.xash.co.zw →
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
            <h3 className="text-2xl font-bold text-gray-900 mb-2">API Base URLs</h3>
            <p className="text-gray-600">Use these endpoints for your API calls</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {baseURLs.map((base, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
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
                      <CheckCircle size={20} style={{ color: '#10B981' }} />
                    ) : (
                      <Copy size={20} />
                    )}
                  </button>
                </div>
                <code className="text-gray-800 font-mono text-sm break-all">{base.url}</code>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints by Category */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              API Reference
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">API Endpoints</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
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
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-8">
                  <div 
                    style={{ backgroundColor: category.color }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                  >
                    <category.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">Endpoints for {category.title.toLowerCase()} services</p>
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
                      className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <span 
                              style={{ 
                                backgroundColor: endpoint.method === 'GET' ? '#10B981' : 
                                              endpoint.method === 'POST' ? '#2563EB' : 
                                              endpoint.method === 'PUT' ? '#F59E0B' : 
                                              endpoint.method === 'DELETE' ? '#EF4444' : endpoint.color,
                                color: 'white'
                              }}
                              className="px-3 py-1 rounded-full text-sm font-medium mr-3"
                            >
                              {endpoint.method}
                            </span>
                            <code className="text-lg font-mono text-gray-800 break-all">{endpoint.endpoint}</code>
                          </div>
                          <p className="text-gray-600">{endpoint.description}</p>
                        </div>
                        <button
                          onClick={() => copyToClipboard(endpoint.endpoint, `${categoryIndex}-${endpointIndex}`)}
                          className="ml-4 text-gray-400 hover:text-gray-600 flex-shrink-0"
                        >
                          {copiedEndpoint === `${categoryIndex}-${endpointIndex}` ? (
                            <CheckCircle size={20} style={{ color: '#10B981' }} />
                          ) : (
                            <Copy size={20} />
                          )}
                        </button>
                      </div>
                      {Object.keys(endpoint.sample).length > 0 && (
                        <div className="bg-gray-900 rounded-xl p-4">
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
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              Authentication
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Authentication Setup</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Securely authenticate your API requests with Bearer tokens
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Key className="text-gray-700 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-gray-900">Bearer Token Authentication</h3>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Authentication Header</h4>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <code className="text-gray-800 font-mono">
                      Authorization: Bearer {'{access_token}'}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Get Access Token</h4>
                  <div className="bg-gray-900 rounded-xl p-4">
                    <pre className="text-sm text-gray-300 overflow-x-auto">
                      <code>{`POST /api/v1/auth/login
{
  "user_number": 123456,
  "password": "your_password"
}`}</code>
                    </pre>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <div className="flex items-start">
                    <Shield className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="text-sm text-blue-800 font-medium mb-1">Important Security Notes:</p>
                      <ul className="text-sm text-blue-800 list-disc list-inside space-y-1">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Features
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose Xash Vend API</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
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

      {/* Documentation CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-6">
              <Terminal size={32} className="text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Ready to Integrate?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed max-w-2xl mx-auto">
              Access complete documentation, code samples, and dedicated developer support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://docs.xash.co.zw"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-700 px-10 py-4 rounded-lg font-bold shadow-xl inline-flex items-center justify-center"
              >
                View Full Documentation
                <ArrowRight className="ml-2" size={24} />
              </motion.a>
            </div>
            <p className="text-purple-200 text-sm mt-6">
              Free sandbox access • Comprehensive documentation • 24/7 developer support
            </p>
          </div>
        </div>
      </section>

      {/* Error Handling */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Error Handling</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Consistent error responses across all endpoints
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-2xl p-8">
              <div className="text-green-400 font-mono text-sm">
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