import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'Information We Collect',
      content: `We collect information you provide directly to us, such as when you create an account, use our services, or contact us. This may include:
      • Personal identification information (name, email, phone number)
      • Business information for agents and partners
      • Transaction history and usage data
      • Device and connection information`
    },
    {
      title: 'How We Use Your Information',
      content: `We use the collected information to:
      • Provide, maintain, and improve our services
      • Process transactions and send confirmations
      • Send technical notices, updates, and security alerts
      • Respond to your comments and questions
      • Monitor and analyze trends, usage, and activities
      • Detect, investigate, and prevent fraudulent transactions`
    },
    {
      title: 'Information Sharing',
      content: `We do not sell your personal information. We may share information only:
      • With your consent
      • To comply with legal obligations
      • To protect the rights and property of Xash
      • With service providers who assist our operations
      • For business transfers (in case of merger or acquisition)`
    },
    {
      title: 'Data Security',
      content: `We implement appropriate technical and organizational security measures to protect your personal information. This includes encryption, access controls, regular security assessments, and employee training on data protection.`
    },
    {
      title: 'Your Rights',
      content: `Depending on your location, you may have rights including:
      • Access to your personal information
      • Correction of inaccurate data
      • Deletion of your data
      • Restriction of processing
      • Data portability
      • Objection to processing
      To exercise these rights, contact our Data Protection Officer.`
    },
    {
      title: 'Data Retention',
      content: `We retain personal information for as long as necessary to fulfill the purposes for which it was collected, including for legal, accounting, or reporting requirements. Transaction records are kept for 7 years as required by financial regulations.`
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-2xl mb-6">
              <Shield className="text-blue-600" size={32} />
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: January 1, 2026
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="lead mb-8">
                This Privacy Policy describes how Xash Solutions (Pvt) Ltd collects, uses, and discloses your personal information when you use our services.
              </p>

              {sections.map((section, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                  <div className="whitespace-pre-line">{section.content}</div>
                </div>
              ))}

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 mt-12">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Contact Information</h3>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Data Protection Officer:</strong> privacy@xash.network</p>
                  <p><strong>Physical Address:</strong> 63 Embassy Building, Aerodrome Rd, Mutare, Zimbabwe</p>
                  <p><strong>Phone:</strong> +263 123 456 789</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;