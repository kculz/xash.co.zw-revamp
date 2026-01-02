import { motion } from 'framer-motion';
import { Shield, UserCheck, Flag, AlertTriangle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const AMLPolicy = () => {
  const requirements = [
    {
      icon: UserCheck,
      title: 'Customer Identification',
      items: [
        'Valid government-issued ID',
        'Proof of address',
        'Business registration documents',
        'Tax identification number'
      ]
    },
    {
      icon: Flag,
      title: 'Risk Assessment',
      items: [
        'Customer risk profiling',
        'Transaction pattern monitoring',
        'Enhanced due diligence for high-risk',
        'Ongoing customer review'
      ]
    },
    {
      icon: Shield,
      title: 'Reporting Obligations',
      items: [
        'Suspicious activity reports',
        'Large transaction reporting',
        'Record keeping (7 years)',
        'Regulatory compliance'
      ]
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-2xl mb-6">
              <Shield className="text-red-600" size={32} />
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900">
              AML/KYC Policy
            </h1>
            <p className="text-xl text-gray-600">
              Anti-Money Laundering & Know Your Customer
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none text-gray-600">
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Statement</h2>
                <p>
                  Xash Solutions is committed to preventing money laundering and terrorist financing. We comply with all applicable regulations including the Bank Use Promotion Act, Money Laundering and Proceeds of Crime Act, and international standards.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {requirements.map((req, index) => (
                    <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                      <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                        <req.icon className="text-red-600" size={28} />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900">{req.title}</h3>
                      <ul className="space-y-2">
                        {req.items.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Prohibited Activities</h2>
                <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                  <div className="flex items-start mb-4">
                    <AlertTriangle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <h3 className="text-lg font-bold text-red-900">Strictly Prohibited</h3>
                  </div>
                  <ul className="space-y-2 text-red-800">
                    <li>• Transactions involving illegal activities</li>
                    <li>• Attempts to avoid reporting requirements</li>
                    <li>• Use of false or stolen identities</li>
                    <li>• Structuring transactions to avoid thresholds</li>
                    <li>• Transactions with sanctioned entities or countries</li>
                  </ul>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Transaction Limits</h2>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 font-semibold text-gray-900">Customer Type</th>
                          <th className="text-left py-3 font-semibold text-gray-900">Daily Limit</th>
                          <th className="text-left py-3 font-semibold text-gray-900">Monthly Limit</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-200">
                          <td className="py-3 text-gray-700">Basic Verification</td>
                          <td className="py-3 text-gray-700">$500</td>
                          <td className="py-3 text-gray-700">$5,000</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-3 text-gray-700">Enhanced Verification</td>
                          <td className="py-3 text-gray-700">$2,000</td>
                          <td className="py-3 text-gray-700">$20,000</td>
                        </tr>
                        <tr>
                          <td className="py-3 text-gray-700">Business Accounts</td>
                          <td className="py-3 text-gray-700">$5,000</td>
                          <td className="py-3 text-gray-700">$50,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Compliance Officer</h3>
                <p className="mb-4">
                  For AML/KYC inquiries or to report suspicious activity:
                </p>
                <div className="space-y-2">
                  <p><strong>Compliance Officer:</strong> compliance@xash.network</p>
                  <p><strong>Hotline:</strong> +263 123 456 789 (ext. 2)</p>
                  <p><strong>Reports are confidential and protected by law.</strong></p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default AMLPolicy;