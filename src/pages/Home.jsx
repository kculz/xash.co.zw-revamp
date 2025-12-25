import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  Zap, 
  Tv, 
  Droplets, 
  Wifi, 
  Shield, 
  TrendingUp,
  Users,
  Smartphone,
  CheckCircle,
  Home as HomeIcon,
  ArrowRight,
  Star
} from 'lucide-react';
import Button from '../components/ui/Button';
import { BRAND } from '../utils/constants';
import Card from '../components/ui/Card';
import PageHero from '../components/ui/PageHero';
import WhatsAppMockup from '../components/ui/WhatsAppMockup';
import { Helmet } from 'react-helmet';

const Home = () => {
  const howItWorks = [
    {
      step: 1,
      title: 'Sign Up',
      description: 'Register as an agent or customer in minutes',
      icon: Users
    },
    {
      step: 2,
      title: 'Choose Service',
      description: 'Select from airtime, electricity, DSTV, and more',
      icon: Smartphone
    },
    {
      step: 3,
      title: 'Make Payment',
      description: 'Pay securely via our platform',
      icon: Shield
    },
    {
      step: 4,
      title: 'Get Confirmation',
      description: 'Receive instant confirmation on WhatsApp',
      icon: CheckCircle
    }
  ];

  const popularServices = [
    {
      name: 'Airtime & Bundles',
      description: 'Instant airtime top-up for all networks',
      icon: MessageCircle,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      name: 'Electricity (ZESA)',
      description: 'Pay your ZESA bills instantly',
      icon: Zap,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
    },
    {
      name: 'DSTV Subscription',
      description: 'All DSTV packages available',
      icon: Tv,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      name: 'Water Bills',
      description: 'Pay municipal water bills',
      icon: Droplets,
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50 dark:bg-cyan-900/20'
    }
  ];

  const testimonials = [
    {
      name: 'Tendai M.',
      role: 'Small Business Owner',
      content: 'XASH has transformed my business. I can now offer multiple services to my customers through WhatsApp!',
      rating: 5
    },
    {
      name: 'Sarah K.',
      role: 'Agent',
      content: 'Earning commissions has never been easier. The platform is reliable and payments are instant.',
      rating: 5
    },
    {
      name: 'James T.',
      role: 'Customer',
      content: 'Convenient service. I pay all my bills through XASH without leaving my home.',
      rating: 5
    }
  ];

  const stats = [
    { value: '10,000+', label: 'Active Users' },
    { value: '500+', label: 'Registered Agents' },
    { value: '$2M+', label: 'Transactions Processed' },
    { value: '99.9%', label: 'Uptime' }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Xash | Home</title>
        <link rel="canonical" href="http://xash.co.zw/" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B3C5D] via-[#1F6AE1] to-[#0B3C5D] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F5B700] rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="inline-block mb-4 px-4 py-2 bg-[#F5B700]/20 rounded-full">
                <span className="text-[#F5B700] font-semibold text-sm">🚀 Zimbabwe's Leading Payment Platform</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Buy, Sell & Earn — All on <span className="text-green-400">WhatsApp</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 dark:text-gray-300 mb-8 leading-relaxed">
                A seamless payment service for individuals and businesses to buy/sell prepaid airtime, data, electricity, and other services all on 1 platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  href={`https://wa.me/${BRAND.contacts.whatsapp.replace(/\D/g, '')}`}
                  variant="whatsapp"
                  size="lg"
                  icon={MessageCircle}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </Button>
                <Button 
                  to="/agents"
                  variant="secondary"
                  size="lg"
                  icon={ArrowRight}
                >
                  Register as Agent
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-[#F5B700] mb-1">{stat.value}</div>
                    <div className="text-xs text-blue-200 dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - WhatsApp Mockup */}
            <div className="hidden lg:flex justify-center items-center">
              <WhatsAppMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile WhatsApp Demo Section - Visible only on mobile */}
      <section className="lg:hidden py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#1A1A1A] dark:text-white mb-2">
              See It In Action
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Watch how easy it is to buy data on WhatsApp
            </p>
          </div>
          <WhatsAppMockup />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-[#1F6AE1] dark:text-blue-400 rounded-full text-sm font-semibold mb-4">
              Simple Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A1A1A] dark:text-white">
              How It Works
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              Get started with XASH in 4 simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item) => (
              <Card key={item.step} hover className="text-center relative">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#1F6AE1] to-[#0B3C5D] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1F6AE1]/10 to-[#0B3C5D]/10 dark:from-[#1F6AE1]/20 dark:to-[#0B3C5D]/20 rounded-2xl flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-[#1F6AE1] dark:text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1A1A1A] dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-20 bg-[#F5F7FA] dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-[#F5B700] dark:text-yellow-400 rounded-full text-sm font-semibold mb-4">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A1A1A] dark:text-white">
              Popular Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              All your payment needs in one place
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularServices.map((service) => (
              <Card key={service.name} hover className="text-center group">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1A1A1A] dark:text-white">{service.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                {/* <Button variant="outline" size="sm" icon={ArrowRight}>
                  Learn More
                </Button> */}
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button to="/services" variant="primary" size="lg" icon={ArrowRight}>
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-semibold mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A1A1A] dark:text-white">
              What Our Users Say
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              Join thousands of satisfied customers and agents
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} variant="gradient" className="relative">
                <div className="absolute -top-4 left-6">
                  <div className="w-12 h-12 bg-[#F5B700] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-2xl">"</span>
                  </div>
                </div>
                <div className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#F5B700] fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed text-lg">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1F6AE1] to-[#0B3C5D] rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-lg">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-bold text-[#1A1A1A] dark:text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0B3C5D] via-[#1F6AE1] to-[#0B3C5D] dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5B700] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of agents and customers using XASH for their daily transactions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              href={`https://wa.me/${BRAND.contacts.whatsapp.replace(/\D/g, '')}`}
              variant="whatsapp"
              size="lg"
              icon={MessageCircle}
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Chatting Now
            </Button>
            <Button 
              to="/agents"
              variant="secondary"
              size="lg"
              icon={ArrowRight}
            >
              Become an Agent
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;