import React from 'react';
import { Helmet } from 'react-helmet';

const CookiePolicy = () => {
  const lastUpdated = "01 January 2026";

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <Helmet>
                <meta charSet="utf-8" />
                <title>Xash | Cookies Policy</title>
                <link rel="canonical" href="http://xash.co.zw/cookies-policy" />
       </Helmet>
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700 border-b-2 border-gray-200 pb-4">
            COOKIE POLICY
          </h1>
          <div className="mt-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              Last updated: {lastUpdated}
            </span>
          </div>
        </header>

        <main className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. WHAT ARE COOKIES?</h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies are small text files stored on your device to help websites function efficiently.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. HOW WE USE COOKIES</h2>
            <p className="text-gray-700 mb-3">We use cookies to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Improve website performance</li>
              <li>Understand how users interact with our sites</li>
              <li>Enable analytics and security features</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. MANAGING COOKIES</h2>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="text-gray-700 leading-relaxed">
                You can disable cookies through your browser settings. Some features may not function 
                properly if cookies are disabled.
              </p>
            </div>
            <div className="mt-6 bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">How to Manage Cookies in Popular Browsers:</h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-medium text-gray-800">Google Chrome:</p>
                  <p className="text-gray-700 text-sm">
                    Settings → Privacy and Security → Cookies and other site data
                  </p>
                </li>
                <li>
                  <p className="font-medium text-gray-800">Mozilla Firefox:</p>
                  <p className="text-gray-700 text-sm">
                    Options → Privacy & Security → Cookies and Site Data
                  </p>
                </li>
                <li>
                  <p className="font-medium text-gray-800">Safari:</p>
                  <p className="text-gray-700 text-sm">
                    Preferences → Privacy → Cookies and website data
                  </p>
                </li>
                <li>
                  <p className="font-medium text-gray-800">Microsoft Edge:</p>
                  <p className="text-gray-700 text-sm">
                    Settings → Cookies and site permissions → Cookies and site data
                  </p>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. CHANGES</h2>
            <p className="text-gray-700 leading-relaxed">
              This Cookie Policy may be updated periodically. Please check this page for the latest version.
            </p>
          </section>

          <div className="mt-12 p-6 bg-gray-100 rounded-xl border border-gray-300">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">COMPLIANCE & REGULATORY NOTICE</h3>
            <p className="text-gray-700 leading-relaxed">
              "Xash provides payment facilitation and connectivity services in partnership with licensed 
              financial institutions and network providers. Xash does not operate as a bank. Services are 
              subject to applicable laws and regulations in Zimbabwe."
            </p>
          </div>

          <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Additional Resources</h3>
            <p className="text-gray-700 mb-3">
              For more information about our data practices, please review:
            </p>
            <ul className="space-y-2">
              <li>
                <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800 font-medium">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-blue-600 hover:text-blue-800 font-medium">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </main>

        <footer className="mt-12 pt-8 border-t border-gray-300">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Xash Solutions (Private) Limited. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0 space-x-4">
              <a href="/privacy" className="text-gray-600 hover:text-gray-800 text-sm">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-600 hover:text-gray-800 text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CookiePolicy;