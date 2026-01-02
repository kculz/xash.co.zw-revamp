import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cookie, Settings, Shield } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const CookiePolicy = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  const cookieTypes = [
    {
      name: 'Essential Cookies',
      purpose: 'Required for basic site functionality',
      examples: ['Authentication', 'Security', 'Session management'],
      necessary: true
    },
    {
      name: 'Performance Cookies',
      purpose: 'Help us understand how visitors use our site',
      examples: ['Page analytics', 'Error tracking', 'Performance monitoring'],
      necessary: false
    },
    {
      name: 'Functional Cookies',
      purpose: 'Remember your preferences and settings',
      examples: ['Language settings', 'Region selection', 'Display preferences'],
      necessary: false
    },
    {
      name: 'Marketing Cookies',
      purpose: 'Used to deliver relevant advertisements',
      examples: ['Retargeting', 'Conversion tracking', 'Audience insights'],
      necessary: false
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-2xl mb-6">
              <Cookie className="text-orange-600" size={32} />
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600">
              How we use cookies and similar technologies
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none text-gray-600">
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
                <p>
                  Cookies are small text files stored on your device when you visit websites. They help websites remember information about your visit, which can make it easier to visit the site again and make the site more useful to you.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
                <div className="space-y-6">
                  {cookieTypes.map((type, index) => (
                    <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{type.name}</h3>
                          <p className="text-gray-700 mb-3">{type.purpose}</p>
                          <div className="space-y-1">
                            {type.examples.map((example, idx) => (
                              <div key={idx} className="flex items-center text-sm text-gray-600">
                                <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                                {example}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                          type.necessary 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {type.necessary ? 'Required' : 'Optional'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Management</h2>
                <div className="bg-gray-900 rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <Settings className="text-white mr-3" size={24} />
                    <h3 className="text-xl font-bold text-white">Your Cookie Preferences</h3>
                  </div>
                  
                  {cookiesAccepted ? (
                    <div className="text-center py-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="text-green-600" size={32} />
                      </div>
                      <p className="text-gray-300 mb-4">Your preferences have been saved</p>
                      <button
                        onClick={() => setCookiesAccepted(false)}
                        className="text-blue-400 hover:text-blue-300 text-sm"
                      >
                        Change preferences
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <label className="text-white">Essential Cookies</label>
                          <div className="px-3 py-1 bg-gray-700 rounded text-sm">Always Active</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <label className="text-white">Performance Cookies</label>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                        <div className="flex items-center justify-between">
                          <label className="text-white">Functional Cookies</label>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                        <div className="flex items-center justify-between">
                          <label className="text-white">Marketing Cookies</label>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      </div>
                      <button
                        onClick={() => setCookiesAccepted(true)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition-colors"
                      >
                        Save Preferences
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Browser Controls</h2>
                <p className="mb-4">
                  Most web browsers allow you to control cookies through their settings. Here's how to manage cookies in popular browsers:
                </p>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <ul className="space-y-3">
                    <li>
                      <strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data
                    </li>
                    <li>
                      <strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies and Site Data
                    </li>
                    <li>
                      <strong>Safari:</strong> Preferences → Privacy → Cookies and website data
                    </li>
                    <li>
                      <strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Cookies and data stored
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Updates to This Policy</h3>
                <p className="mb-4">
                  We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
                <p>
                  <strong>Last updated:</strong> January 1, 2026
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;