import React from 'react';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
  const lastUpdated = "01 January 2026";

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <Helmet>
                <meta charSet="utf-8" />
                <title>Xash | Privacy Policy</title>
                <link rel="canonical" href="http://xash.co.zw/privacy-policy" />
       </Helmet>
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700 border-b-2 border-gray-200 pb-4">
            PRIVACY POLICY
          </h1>
          <p className="text-gray-500 italic mt-2 text-sm">
            (For xash.network, xash.co.zw, xashpay.com, equal.co.zw)
          </p>
          <div className="mt-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              Last updated: {lastUpdated}
            </span>
          </div>
        </header>

        <main className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. INTRODUCTION</h2>
            <p className="text-gray-700 leading-relaxed">
              Xash Solutions (Private) Limited ("Xash", "we", "us", or "our") is committed to
              protecting the privacy and personal information of users who access our websites
              and services.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              This Privacy Policy explains how we collect, use, store, and protect your personal
              information in accordance with applicable laws in Zimbabwe.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. INFORMATION WE COLLECT</h2>
            <p className="text-gray-700 mb-3">We may collect the following information:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Full name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Transaction details (such as airtime, electricity, or payment records)</li>
              <li>Device and browser information</li>
              <li>IP address and usage data</li>
            </ul>
            <p className="text-gray-700 mt-3">
              We only collect information that is necessary to provide our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. HOW WE USE YOUR INFORMATION</h2>
            <p className="text-gray-700 mb-3">Your information may be used to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide and improve our services</li>
              <li>Process transactions and payments</li>
              <li>Communicate service updates or support messages</li>
              <li>Prevent fraud and unauthorized use</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. SHARING OF INFORMATION</h2>
            <p className="text-gray-700 font-semibold mb-3">
              We do not sell your personal data.
            </p>
            <p className="text-gray-700 mb-3">Information may be shared only with:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Licensed financial institutions and payment partners</li>
              <li>Network and infrastructure partners (for Equal services)</li>
              <li>Regulatory or law enforcement authorities where required by law</li>
            </ul>
            <p className="text-gray-700 mt-3">
              All partners are required to handle data responsibly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. DATA SECURITY</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement reasonable technical and organizational measures to protect your information against:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li>Unauthorized access</li>
              <li>Loss or misuse</li>
              <li>Disclosure or alteration</li>
            </ul>
            <p className="text-gray-700 mt-3 italic">
              However, no internet-based system is completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. DATA RETENTION</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain personal data only for as long as necessary to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li>Fulfill service obligations</li>
              <li>Meet legal and compliance requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. YOUR RIGHTS</h2>
            <p className="text-gray-700 mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Request access to your personal data</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion where legally permissible</li>
            </ul>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-gray-700">
                Requests can be sent to:{' '}
                <a 
                  href="mailto:privacy@xash.network" 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  privacy@xash.network
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. CHANGES TO THIS POLICY</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Updates will be posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. CONTACT INFORMATION</h2>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="font-semibold text-gray-800">Xash Network (Private) Limited</p>
              <p className="text-gray-700 mt-2">Number 63, Embassy Building</p>
              <p className="text-gray-700">Aerodrome road</p>
              <p className="text-gray-700">Mutare, Manicaland, Zimbabwe</p>
              <p className="mt-4">
                Email:{' '}
                <a 
                  href="mailto:info@xash.network" 
                  className="text-blue-600 hover:text-blue-800"
                >
                  info@xash.network
                </a>
              </p>
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

export default PrivacyPolicy;