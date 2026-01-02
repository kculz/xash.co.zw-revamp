import { motion } from 'framer-motion';
import { Lock, Database, EyeOff, Server } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const DataProtection = () => {
  const principles = [
    {
      icon: Lock,
      title: 'Lawful Processing',
      description: 'We process personal data only with valid legal basis and transparency.'
    },
    {
      icon: Database,
      title: 'Purpose Limitation',
      description: 'Data collected for specific, explicit, and legitimate purposes only.'
    },
    {
      icon: EyeOff,
      title: 'Data Minimization',
      description: 'Only collect data necessary for the intended purpose.'
    },
    {
      icon: Server,
      title: 'Storage Limitation',
      description: 'Retain personal data only as long as necessary.'
    }
  ];

  const securityMeasures = [
    'End-to-end encryption for all transactions',
    'Regular security audits and penetration testing',
    'Employee training on data protection',
    'Access controls and authentication',
    'Secure data backup and recovery',
    'Incident response procedures'
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-2xl mb-6">
              <Lock className="text-green-600" size={32} />
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900">
              Data Protection
            </h1>
            <p className="text-xl text-gray-600">
              Protecting your personal information
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none text-gray-600">
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
                <p>
                  Xash Solutions is committed to protecting your personal data in compliance with the Data Protection Act and international standards. We implement technical and organizational measures to ensure data security and privacy.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Protection Principles</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {principles.map((principle, index) => (
                    <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                      <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                        <principle.icon className="text-green-600" size={28} />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">{principle.title}</h3>
                      <p>{principle.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Security Measures</h2>
                <div className="bg-gray-900 rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-6 text-white">Technical Safeguards</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {securityMeasures.map((measure, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300">{measure}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Breach Response</h2>
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                  <h3 className="text-lg font-bold mb-4 text-blue-900">Our Protocol</h3>
                  <div className="space-y-4">
                    <p className="text-blue-800">In the event of a data breach, we will:</p>
                    <ol className="list-decimal pl-5 space-y-2 text-blue-800">
                      <li>Contain and assess the breach immediately</li>
                      <li>Notify affected individuals within 72 hours</li>
                      <li>Report to relevant authorities as required by law</li>
                      <li>Implement corrective measures to prevent recurrence</li>
                      <li>Provide support to affected individuals</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Data Protection Officer</h3>
                <div className="space-y-2">
                  <p><strong>Email:</strong> dpo@xash.network</p>
                  <p><strong>Phone:</strong> +263 123 456 789 (ext. 3)</p>
                  <p><strong>Address:</strong> 63 Embassy Building, Aerodrome Rd, Mutare</p>
                  <p className="text-sm text-gray-600 mt-4">
                    You have the right to lodge a complaint with the Data Protection Authority if you believe your rights have been violated.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default DataProtection;