import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Clock, 
  Send, CheckCircle, AlertCircle 
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['63 Embassy Building', 'Aerodrome Rd', 'Mutare, Zimbabwe'],
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+263 123 456 789', 'Mon-Fri: 8am-5pm'],
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@xash.network', 'support@xash.network'],
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 8am - 5pm', 'Saturday: 9am - 1pm', 'Sunday: Closed'],
      color: 'text-orange-600 bg-orange-100'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help. Reach out with questions, partnership inquiries, or support requests.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Info */}
            <AnimatedSection direction="left">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Contact Information</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${info.color}`}>
                      <info.icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-gray-900">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-start">
                  <AlertCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Support Response Times</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• General inquiries: Within 24 hours</li>
                      <li>• Technical support: Within 4 business hours</li>
                      <li>• Agent applications: Within 48 hours</li>
                      <li>• Emergency support: Call hotline</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection direction="right">
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Send a Message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="text-green-600" size={40} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Message Sent!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="+263 77 123 4567"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Subject *
                          </label>
                          <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          >
                            <option value="">Select a subject</option>
                            <option value="pos-application">POS Application</option>
                            <option value="technical-support">Technical Support</option>
                            <option value="partnership">Partnership Inquiry</option>
                            <option value="api-access">API Access</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="6"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="How can we help you?"
                        />
                      </div>

                      <div>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full py-4 px-6 rounded-xl font-bold transition-colors ${
                            isSubmitting
                              ? 'bg-gray-400 cursor-not-allowed'
                              : 'bg-blue-600 hover:bg-blue-700 text-white'
                          }`}
                        >
                          {isSubmitting ? (
                            'Sending...'
                          ) : (
                            <>
                              Send Message
                              <Send className="inline ml-2" size={20} />
                            </>
                          )}
                        </motion.button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Visit Our Office</h2>
                <p className="text-gray-600 mb-6">
                  Located in the heart of Mutare's business district
                </p>
              </div>
              <div className="h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-gray-400 mx-auto mb-4" size={48} />
                  <p className="text-gray-600">Interactive map would appear here</p>
                  <p className="text-sm text-gray-500 mt-2">63 Embassy Building, Mutare</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;