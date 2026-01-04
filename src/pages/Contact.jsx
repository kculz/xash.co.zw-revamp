import { motion } from 'framer-motion';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  User,
  Building2,
  FileText,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { useState } from 'react';
import about from '../assets/images/about.jpeg';
import MapSection from './MapSection';
import ImageWithSkeleton from '../components/ui/ImageWithSkeleton';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    inquiryType: 'general',
    message: ''
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => {
      setFormStatus(null);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        businessName: '',
        inquiryType: 'general',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+263 716 409 412', '+263 773 123 456'],
      color: '#7C3AED',
      description: 'Mon-Fri 8AM-5PM, Sat 9AM-1PM'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['support@xash.co.zw', 'sales@xash.co.zw'],
      color: '#2563EB',
      description: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['63 Embassy Building', 'Mutare, Zimbabwe'],
      color: '#10B981',
      description: 'Visit us Mon-Fri 8AM-5PM'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: ['+263 716 409 412'],
      color: '#F59E0B',
      description: '24/7 instant support'
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'pos', label: 'POS Device Application' },
    { value: 'agent', label: 'Agent Registration' },
    { value: 'support', label: 'Technical Support' },
    { value: 'partnership', label: 'Business Partnership' },
    { value: 'complaint', label: 'Complaint/Feedback' }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 5:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 1:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
    { day: 'Public Holidays', hours: 'Closed' }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                Get in Touch
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                Contact <span style={{ color: '#7C3AED' }}>XASH</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Have questions? We're here to help. Reach out to us through any of the channels below 
                and our team will get back to you as soon as possible.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all"
              >
                <div 
                  style={{ backgroundColor: info.color }}
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                >
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-700 font-medium mb-1">{detail}</p>
                ))}
                <p className="text-gray-500 text-sm mt-2">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form and Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold mb-2 text-gray-900">Send Us a Message</h2>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
                </div>

                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start"
                  >
                    <CheckCircle className="text-green-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="text-green-800 font-medium">Message sent successfully!</p>
                      <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <User className="inline w-4 h-4 mr-1" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <Mail className="inline w-4 h-4 mr-1" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <Phone className="inline w-4 h-4 mr-1" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                        placeholder="+263 712 345 678"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Building2 className="inline w-4 h-4 mr-1" />
                      Business Name (Optional)
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your Business Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <FileText className="inline w-4 h-4 mr-1" />
                      Inquiry Type *
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ backgroundColor: '#7C3AED' }}
                    className="w-full text-white py-4 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center"
                  >
                    Send Message
                    <Send className="ml-2" size={20} />
                  </motion.button>

                  <p className="text-gray-500 text-sm text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Office Info & Hours */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Office Image */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <ImageWithSkeleton 
                  src={about}
                  alt="Office Building"
                  className="w-full h-64 rounded-lg shadow-md"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Visit Our Office</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin style={{ color: '#10B981' }} className="mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-semibold text-gray-900">63 Embassy Building</p>
                        <p className="text-gray-600">Corner Herbert Chitepo & 3rd Street</p>
                        <p className="text-gray-600">Mutare, Zimbabwe</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div 
                    style={{ backgroundColor: '#2563EB' }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                  >
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
                </div>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                    >
                      <span className="font-medium text-gray-700">{schedule.day}</span>
                      <span className={`font-semibold ${
                        schedule.hours === 'Closed' ? 'text-red-600' : 'text-green-600'
                      }`}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl shadow-2xl overflow-hidden"
          >
            <MapSection />
          </motion.div>
        </div>
      </section>


    </div>
  );
};

export default Contact;
