import { motion } from 'framer-motion';
import { FileText, AlertCircle, Scale } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const TermsOfService = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: `By accessing or using Xash services, you agree to be bound by these Terms of Service. If you disagree with any part, you may not access our services.`
    },
    {
      title: 'Service Description',
      content: `Xash provides digital payment and vending services including but not limited to:
      • Airtime and data bundle sales
      • Electricity token vending
      • POS device provision and support
      • API services for developers
      Services may be modified or discontinued at our discretion.`
    },
    {
      title: 'Account Registration',
      content: `To use certain features, you must register for an account. You agree to:
      • Provide accurate and complete information
      • Maintain security of your account credentials
      • Notify us immediately of unauthorized access
      • Be responsible for all activities under your account
      We reserve the right to refuse service or terminate accounts.`
    },
    {
      title: 'Agent Responsibilities',
      content: `Agents using Xash POS devices agree to:
      • Use the device for authorized transactions only
      • Maintain sufficient float for operations
      • Comply with all applicable laws and regulations
      • Protect the device from loss or damage
      • Return the device upon termination of agreement
      • Pay applicable fees for lost or damaged devices`
    },
    {
      title: 'Fees and Commissions',
      content: `Commission rates are specified in separate agreements and may be updated with notice. Xash deducts commissions from transactions before settlement. All fees are in USD unless otherwise specified.`
    },
    {
      title: 'Intellectual Property',
      content: `All content, trademarks, and data on our platform are owned by Xash or licensed to us. You may not copy, modify, or distribute any content without permission.`
    },
    {
      title: 'Limitation of Liability',
      content: `Xash is not liable for:
      • Indirect, incidental, or consequential damages
      • Loss of profits or revenue
      • Business interruption
      • Data loss
      • Any damages beyond the fees paid for services in the last 6 months`
    },
    {
      title: 'Termination',
      content: `We may terminate or suspend access immediately for:
      • Violation of terms
      • Fraudulent activity
      • Legal requirements
      • Non-payment of fees
      Upon termination, you must cease using services and return any equipment.`
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-2xl mb-6">
              <Scale className="text-blue-600" size={32} />
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600">
              Effective: January 1, 2026
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200 mb-8">
              <div className="flex items-start">
                <AlertCircle className="text-yellow-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-yellow-800">
                  <strong>Important:</strong> These terms constitute a legally binding agreement. By using our services, you agree to these terms.
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              {sections.map((section, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                  <div className="whitespace-pre-line">{section.content}</div>
                </div>
              ))}

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 mt-12">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Governing Law</h3>
                <p className="mb-4">
                  These terms are governed by the laws of Zimbabwe. Any disputes shall be resolved in the courts of Mutare.
                </p>
                <p>
                  <strong>Contact for Legal Notices:</strong> legal@xash.network
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;