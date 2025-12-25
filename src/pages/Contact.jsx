import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Home,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  HelpCircle,
  Shield,
  Users,
  Zap,
  ChevronRight,
  Map as MapIcon,
  Headphones,
  Briefcase,
  FileText,
  Award,
  Globe,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import PageHero from '../components/ui/PageHero';
import { BRAND } from '../utils/constants';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Contact Us' }
  ];

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp Support',
      value: BRAND.contacts.whatsapp,
      href: `https://wa.me/${BRAND.contacts.support.replace(/\D/g, '')}`,
      gradient: 'from-green-500 to-green-600',
      description: 'Fastest response • 24/7 available',
      badge: 'Recommended',
      features: [
        'Instant response',
        '24/7 availability',
        'File sharing support',
        'Quick issue resolution'
      ]
    },
    {
      icon: Phone,
      title: 'Phone Support',
      value: BRAND.contacts.phone,
      href: `tel:${BRAND.contacts.phone}`,
      gradient: 'from-blue-500 to-blue-600',
      description: 'Business hours • Professional support',
      badge: 'Mon-Fri, 8AM-5PM',
      features: [
        'Direct conversation',
        'Complex issue handling',
        'Immediate assistance',
        'Professional support team'
      ]
    },
    {
      icon: Mail,
      title: 'Email Support',
      value: BRAND.contacts.email,
      href: `mailto:${BRAND.contacts.email}`,
      gradient: 'from-purple-500 to-purple-600',
      description: 'Detailed inquiries • Formal communication',
      badge: '24h Response',
      features: [
        'Formal documentation',
        'Detailed explanations',
        'Attachment support',
        'Official correspondence'
      ]
    },
    {
      icon: MapPin,
      title: 'Visit Our Office',
      value: BRAND.contacts.address,
      href: '#map',
      gradient: 'from-orange-500 to-orange-600',
      description: 'In-person meetings • Walk-ins welcome',
      badge: 'Mutare Office',
      features: [
        'Face-to-face meetings',
        'Document submission',
        'Training sessions',
        'Agent onboarding'
      ]
    }
  ];

  const departments = [
    {
      name: 'Customer Support',
      description: 'For general inquiries, account issues, and service questions',
      email: 'support@xash.network',
      phone: BRAND.contacts.phone,
      icon: Headphones,
      gradient: 'from-blue-500 to-cyan-600',
      responsibilities: [
        'Account management',
        'Service inquiries',
        'Basic troubleshooting',
        'Payment issues'
      ]
    },
    {
      name: 'Agent Support',
      description: 'For agent applications, commission queries, and training',
      email: 'agents@xash.network',
      phone: BRAND.contacts.phone,
      icon: Users,
      gradient: 'from-green-500 to-emerald-600',
      responsibilities: [
        'Agent onboarding',
        'Commission tracking',
        'Training coordination',
        'Performance support'
      ]
    },
    {
      name: 'Technical Support',
      description: 'For technical issues, API integration, and system problems',
      email: 'tech@xash.network',
      phone: BRAND.contacts.phone,
      icon: Zap,
      gradient: 'from-purple-500 to-violet-600',
      responsibilities: [
        'API integration',
        'System troubleshooting',
        'Technical issues',
        'Platform support'
      ]
    },
    {
      name: 'Business Development',
      description: 'For partnerships, enterprise solutions, and collaborations',
      email: 'business@xash.network',
      phone: BRAND.contacts.phone,
      icon: Briefcase,
      gradient: 'from-yellow-500 to-amber-600',
      responsibilities: [
        'Partnership inquiries',
        'Enterprise solutions',
        'Business proposals',
        'Corporate accounts'
      ]
    }
  ];

  const businessHours = [
    { 
      day: 'Monday - Friday', 
      hours: '8:00 AM - 5:00 PM', 
      status: 'Open',
      icon: '✅'
    },
    { 
      day: 'Saturday', 
      hours: '9:00 AM - 1:00 PM', 
      status: 'Limited',
      icon: '⚠️'
    },
    { 
      day: 'Sunday', 
      hours: 'Closed', 
      status: 'Closed',
      icon: '❌'
    },
    { 
      day: 'WhatsApp Support', 
      hours: '24/7', 
      status: 'Available',
      icon: '📱'
    }
  ];

  const faqs = [
    {
      question: 'What is the best way to contact XASH?',
      answer: 'For immediate assistance, use WhatsApp - we respond within minutes. For detailed inquiries, email us at info@xash.network. For agent-related questions, visit the Agents page.'
    },
    {
      question: 'How long does it take to get a response?',
      answer: 'WhatsApp: Immediate response within minutes. Email: Within 24 business hours. Phone: During business hours (Mon-Fri, 8AM-5PM).'
    },
    {
      question: 'Can I visit your office without an appointment?',
      answer: 'Yes, walk-ins are welcome during business hours. However, we recommend contacting us via WhatsApp first to ensure the right person is available to assist you.'
    },
    {
      question: 'Do you offer support on weekends?',
      answer: 'WhatsApp support is available 24/7 including weekends. Our office is open Saturday mornings (9AM-1PM) and closed on Sundays.'
    },
    {
      question: 'How do I become a XASH agent?',
      answer: 'Visit our "Become an Agent" page or WhatsApp us directly. We guide you through the registration process which takes less than 24 hours to complete.'
    },
    {
      question: 'Where is your office located?',
      answer: 'Our headquarters is at  63 Embassy Building, Aerodrome RD Mutare. We serve customers nationwide through our digital platform.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FA] dark:bg-gray-900">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Xash | Contact Us</title>
                <link rel="canonical" href="http://xash.co.zw/contact" />
       </Helmet>
      {/* Hero */}
      <PageHero
        title="Contact Us"
        description="Get in touch with our team through multiple channels. We're here to help with any questions about our services, agent program, or partnerships."
        breadcrumbItems={breadcrumbItems}
        gradient="from-[#0B3C5D] via-[#1F6AE1] to-[#0B3C5D]"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <Button 
            href={`https://wa.me/${BRAND.contacts.support.replace(/\D/g, '')}`}
            target="_blank"
            variant="whatsapp"
            size="lg"
            icon={MessageCircle}
            rel="noopener noreferrer"
          >
            WhatsApp Now
          </Button>
          <Button 
            href={`tel:${BRAND.contacts.phone}`}
            variant="secondary"
            size="lg"
            icon={Phone}
          >
            Call Us Today
          </Button>
        </div>
      </PageHero>

      {/* Contact Methods */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 mb-20">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-[#1F6AE1] dark:text-blue-400 rounded-full text-sm font-semibold mb-4">
            How to Reach Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A1A1A] dark:text-white">
            Choose Your Preferred Contact Method
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            We offer multiple channels to ensure you get the support you need, when you need it
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <Card key={index} hover className="group overflow-hidden h-full flex flex-col">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <method.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    method.badge.includes('Recommended') ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' :
                    method.badge.includes('24h') ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' :
                    'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400'
                  }`}>
                    {method.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#1A1A1A] dark:text-white">{method.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{method.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-sm text-[#1A1A1A] dark:text-white mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {method.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center justify-center w-full mt-auto bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] hover:from-[#1F6AE1] hover:to-[#0B3C5D] text-white py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl group-hover:scale-105"
                >
                  {method.title.includes('Visit') ? 'View Location' : 'Contact Now'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Departments Section */}
      <div className="bg-white dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold mb-4">
              Departments
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A1A1A] dark:text-white">
              Contact Specific Departments
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
              For specialized assistance, contact the appropriate department directly
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} hover className="group">
                <div className="p-6">
                  <div className="flex items-start mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${dept.gradient} rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <dept.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-xl text-[#1A1A1A] dark:text-white mb-1">{dept.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{dept.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#1A1A1A] dark:text-white mb-3">Responsibilities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {dept.responsibilities.map((resp, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs">
                          {resp}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <div className="flex items-center mb-2">
                          <Mail className="w-4 h-4 text-[#1F6AE1] mr-2" />
                          <span className="text-sm font-medium text-[#1A1A1A] dark:text-white">Email:</span>
                        </div>
                        <a 
                          href={`mailto:${dept.email}`}
                          className="text-[#1F6AE1] dark:text-blue-400 font-medium hover:underline block"
                        >
                          {dept.email}
                        </a>
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <Phone className="w-4 h-4 text-[#F5B700] mr-2" />
                          <span className="text-sm font-medium text-[#1A1A1A] dark:text-white">Phone:</span>
                        </div>
                        <a 
                          href={`tel:${dept.phone}`}
                          className="text-[#1A1A1A] dark:text-white font-medium hover:underline block"
                        >
                          {dept.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Office & Business Hours */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Office Location */}
          <div>
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] text-white rounded-full text-sm font-semibold mb-4">
                Our Location
              </span>
              <h2 className="text-3xl font-bold mb-4 text-[#1A1A1A] dark:text-white">
                Visit Our Headquarters
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Located in the heart of Mutare, our office welcomes walk-ins during business hours
              </p>
            </div>

            <Card variant="elevated" className="overflow-hidden">
              {/* Map Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-gray-800 dark:to-gray-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapIcon className="w-16 h-16 text-[#1F6AE1] dark:text-blue-400 mx-auto mb-4" />
                    <p className="text-xl font-bold text-[#1A1A1A] dark:text-white">XASH Solutions</p>
                    <p className="text-gray-600 dark:text-gray-400">{BRAND.contacts.address}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-[#1F6AE1] dark:text-blue-400 mr-4 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg text-[#1A1A1A] dark:text-white mb-1">Address</h4>
                      <p className="text-gray-600 dark:text-gray-300">{BRAND.contacts.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-[#F5B700] mr-4 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg text-[#1A1A1A] dark:text-white mb-1">Best Time to Visit</h4>
                      <p className="text-gray-600 dark:text-gray-300">Weekdays, 10:00 AM - 4:00 PM</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">For appointments, please contact us first</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Globe className="w-6 h-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg text-[#1A1A1A] dark:text-white mb-1">Coverage Area</h4>
                      <p className="text-gray-600 dark:text-gray-300">Nationwide services available</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Serving all of Zimbabwe through our digital platform</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Business Hours & Quick Actions */}
          <div className="space-y-6">
            <div>
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-semibold mb-4">
                  Business Hours
                </span>
                <h2 className="text-3xl font-bold mb-4 text-[#1A1A1A] dark:text-white">
                  When We're Available
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Our availability throughout the week
                </p>
              </div>

              <Card variant="elevated">
                <div className="p-6">
                  <div className="space-y-4">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700 last:border-0 last:pb-0">
                        <div className="flex items-center">
                          <span className="text-xl mr-3">{schedule.icon}</span>
                          <div>
                            <span className="font-medium text-[#1A1A1A] dark:text-white">{schedule.day}</span>
                            <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                              schedule.status === 'Open' ? 'bg-green-100 text-green-600 dark:bg-green-900/30' :
                              schedule.status === 'Closed' ? 'bg-red-100 text-red-600 dark:bg-red-900/30' :
                              schedule.status === 'Limited' ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30' :
                              'bg-blue-100 text-blue-600 dark:bg-blue-900/30'
                            }`}>
                              {schedule.status}
                            </span>
                          </div>
                        </div>
                        <span className="font-semibold text-[#1F6AE1] dark:text-blue-400">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            {/* Quick Actions */}
<Card className="relative overflow-hidden border-2 border-transparent bg-gradient-to-br from-white to-blue-50 dark:from-[#0B3C5D] dark:via-[#1F6AE1] dark:to-[#0B3C5D] shadow-xl">
  {/* Decorative elements */}
  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 dark:bg-blue-500/10 rounded-full -translate-y-16 translate-x-16"></div>
  <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-500/5 dark:bg-green-500/10 rounded-full -translate-x-12 translate-y-12"></div>
  
  <div className="relative z-10">
    <h3 className="text-lg font-bold text-[#0B3C5D] dark:text-white mb-4">
      Quick Actions
    </h3>
    <p className="text-gray-600 dark:text-white/90 mb-6">
      Choose the fastest way to get help based on your needs
    </p>
    <div className="space-y-3">
      <a
        href={`https://wa.me/${BRAND.contacts.support.replace(/\D/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between w-full bg-white dark:bg-white/10 hover:bg-green-50 dark:hover:bg-white/20 text-gray-800 dark:text-white px-4 py-4 rounded-xl font-medium transition-all shadow-md hover:shadow-lg border border-gray-200 dark:border-white/20 group"
      >
        <div className="flex items-center">
          <div className="w-10 h-10 bg-green-100 dark:bg-green-500/30 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
            <MessageCircle className="w-5 h-5 text-green-600 dark:text-green-300" />
          </div>
          <div>
            <div className="font-bold">WhatsApp Support</div>
            <div className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-300 transition-colors">
              Instant response, 24/7
            </div>
          </div>
        </div>
        <ArrowRight className="w-5 h-5 text-gray-400 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-300 group-hover:translate-x-2 transition-all" />
      </a>
      <a
        href={`tel:${BRAND.contacts.phone}`}
        className="flex items-center justify-between w-full bg-white dark:bg-white/10 hover:bg-blue-50 dark:hover:bg-white/20 text-gray-800 dark:text-white px-4 py-4 rounded-xl font-medium transition-all shadow-md hover:shadow-lg border border-gray-200 dark:border-white/20 group"
      >
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-500/30 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
            <Phone className="w-5 h-5 text-blue-600 dark:text-blue-300" />
          </div>
          <div>
            <div className="font-bold">Phone Support</div>
            <div className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
              Mon-Fri, 8AM-5PM
            </div>
          </div>
        </div>
        <ArrowRight className="w-5 h-5 text-gray-400 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 group-hover:translate-x-2 transition-all" />
      </a>
      <a
        href={`mailto:${BRAND.contacts.email}`}
        className="flex items-center justify-between w-full bg-white dark:bg-white/10 hover:bg-purple-50 dark:hover:bg-white/20 text-gray-800 dark:text-white px-4 py-4 rounded-xl font-medium transition-all shadow-md hover:shadow-lg border border-gray-200 dark:border-white/20 group"
      >
        <div className="flex items-center">
          <div className="w-10 h-10 bg-purple-100 dark:bg-purple-500/30 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
            <Mail className="w-5 h-5 text-purple-600 dark:text-purple-300" />
          </div>
          <div>
            <div className="font-bold">Email Support</div>
            <div className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
              Detailed inquiries
            </div>
          </div>
        </div>
        <ArrowRight className="w-5 h-5 text-gray-400 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-300 group-hover:translate-x-2 transition-all" />
      </a>
    </div>
  </div>
</Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="bg-white dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-[#F5B700] dark:text-yellow-400 rounded-full text-sm font-semibold mb-4">
              FAQs
            </span>
            <h2 className="text-3xl font-bold mb-4 text-[#1A1A1A] dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              Common questions about contacting XASH
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} hover className="group">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <div className="flex items-center">
                        <HelpCircle className="w-6 h-6 text-[#1F6AE1] mr-4 flex-shrink-0" />
                        <h3 className="text-lg font-semibold text-[#1A1A1A] dark:text-white text-left">
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                    </summary>
                    <div className="px-6 pb-6 pl-14">
                      <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                    </div>
                  </details>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#0B3C5D] via-[#1F6AE1] to-[#0B3C5D] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl border border-white/20">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Need Immediate Assistance?
            </h2>
            <p className="text-blue-100 dark:text-gray-300 mb-8 text-lg">
              Our WhatsApp support team is available 24/7 to help you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href={`https://wa.me/${BRAND.contacts.support.replace(/\D/g, '')}`}
                target="_blank"
                variant="whatsapp"
                size="lg"
                icon={MessageCircle}
                rel="noopener noreferrer"
                className="animate-pulse"
              >
                WhatsApp Now (24/7)
              </Button>
              <Button
                href={`tel:${BRAND.contacts.phone}`}
                variant="secondary"
                size="lg"
                icon={Phone}
              >
                Call Us Now
              </Button>
            </div>
            <p className="text-blue-200 dark:text-blue-300 mt-6 text-sm">
              Average response time: 2 minutes on WhatsApp • 98% customer satisfaction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;