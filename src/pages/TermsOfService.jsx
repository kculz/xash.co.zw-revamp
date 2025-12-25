import React from 'react';
import { Helmet } from 'react-helmet';

const TermsOfService = () => {
  const lastUpdated = "01 January 2026";

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <Helmet>
                <meta charSet="utf-8" />
                <title>Xash | Terms of Service</title>
                <link rel="canonical" href="http://xash.co.zw/terms" />
       </Helmet>
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700 border-b-2 border-gray-200 pb-4">
            TERMS OF SERVICE
          </h1>
          <p className="text-gray-500 italic mt-2 text-sm">
            (For Xash, XashPay & Equal)
          </p>
          <div className="mt-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              Last updated: {lastUpdated}
            </span>
          </div>
        </header>

        <main className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. ACCEPTANCE OF TERMS</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using our websites or services, you agree to be bound by these
              Terms of Service. If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. DESCRIPTION OF SERVICES</h2>
            <p className="text-gray-700 mb-3">Xash provides:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Digital payment facilitation services</li>
              <li>WhatsApp-based transaction services (XashPay)</li>
              <li>Wi-Fi and connectivity services through Equal</li>
            </ul>
            <p className="text-gray-700 mt-3">
              Some services are delivered in partnership with licensed third-party providers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. ELIGIBILITY</h2>
            <p className="text-gray-700 mb-3">You must:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Be at least 18 years old</li>
              <li>Provide accurate and truthful information</li>
            </ul>
            <p className="text-gray-700 mt-3">
              We reserve the right to refuse service where required.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. USER RESPONSIBILITIES</h2>
            <p className="text-gray-700 mb-3">You agree to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Use the services lawfully</li>
              <li>Not engage in fraud, abuse, or unauthorized access</li>
              <li>Keep your account details secure</li>
            </ul>
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-gray-700 font-medium">
                You are responsible for all activity conducted through your account.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. FEES & TRANSACTIONS</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Fees or commissions may apply to certain services</li>
              <li>Transaction details are displayed at the point of use</li>
              <li>Completed transactions may not be reversible</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. SERVICE AVAILABILITY</h2>
            <p className="text-gray-700 mb-3">Services may be unavailable due to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Network outages</li>
              <li>Maintenance</li>
              <li>Third-party service disruptions</li>
            </ul>
            <p className="text-gray-700 mt-3">
              Xash is not liable for outages beyond its reasonable control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. SUSPENSION OR TERMINATION</h2>
            <p className="text-gray-700 mb-3">We may suspend or terminate access if:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>These Terms are violated</li>
              <li>Fraud or misuse is suspected</li>
              <li>Required by law or regulation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. LIMITATION OF LIABILITY</h2>
            <p className="text-gray-700 leading-relaxed">
              To the maximum extent permitted by law:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li>Xash is not liable for indirect or consequential losses</li>
              <li>Use of services is at your own risk</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. GOVERNING LAW</h2>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 font-medium">
                These Terms are governed by the laws of Zimbabwe.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. CONTACT</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a 
                  href="mailto:support@xash.network" 
                  className="text-blue-600 hover:text-blue-800"
                >
                  support@xash.network
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <a 
                  href="mailto:compliance@xash.network" 
                  className="text-blue-600 hover:text-blue-800"
                >
                  compliance@xash.network
                </a>
              </div>
            </div>
          </section>

          <div className="mt-12 p-6 bg-gray-100 rounded-xl border border-gray-300">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">COMPLIANCE & REGULATORY NOTICE</h3>
            <p className="text-gray-700 leading-relaxed">
              "Xash provides payment facilitation and connectivity services in partnership with licensed 
              financial institutions and network providers. Xash does not operate as a bank. Services are 
              subject to applicable laws and regulations in Zimbabwe."
            </p>
          </div>
        </main>

        <footer className="mt-12 pt-8 border-t border-gray-300">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Xash Solutions (Private) Limited. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default TermsOfService;