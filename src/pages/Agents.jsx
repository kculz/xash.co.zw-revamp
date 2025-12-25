import React, { useState } from 'react';
import { 
  Users, 
  TrendingUp, 
  Shield, 
  Clock, 
  DollarSign, 
  Smartphone,
  CheckCircle,
  MessageCircle,
  Award,
  BarChart,
  Home,
  ArrowRight,
  Star,
  Target,
  Zap,
  FileText,
  GraduationCap,
  HelpCircle,
  ShieldCheck,
  Globe,
  Smartphone as PhoneIcon,
  Gift,
  ChartLine,
  UserCheck,
  Briefcase,
  MapPin,
  Phone,
  Mail,
  ChevronRight
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import PageHero from '../components/ui/PageHero';
import AgentRegistrationCard from '../components/ui/AgentRegistrationCard';
import { BRAND } from '../utils/constants';
import { Helmet } from 'react-helmet';

const Agents = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Become an Agent' }
  ];

  const stats = [
    { value: '200+', label: 'Active Agents', icon: Users, description: 'Across Zimbabwe' },
    { value: '$5K+', label: 'Monthly Commissions', icon: DollarSign, description: 'Paid to agents' },
    { value: '95%', label: 'Satisfaction Rate', icon: Star, description: 'Agent satisfaction' },
    { value: '24/7', label: 'Support Available', icon: Clock, description: 'Always here to help' }
  ];

  const benefits = [
    {
      title: 'Earn Commissions',
      description: 'Earn attractive commissions on every transaction you process',
      icon: DollarSign,
      gradient: 'from-green-500 to-green-600',
      features: ['5-12% commission rates', 'Weekly payments', 'Bonus opportunities']
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support for all your queries and issues',
      icon: Clock,
      gradient: 'from-blue-500 to-blue-600',
      features: ['WhatsApp support', 'Dedicated agent line', 'Technical assistance']
    },
    {
      title: 'Flexible Hours',
      description: 'Work anytime, anywhere through our WhatsApp platform',
      icon: Smartphone,
      gradient: 'from-purple-500 to-purple-600',
      features: ['No fixed hours', 'Work from anywhere', 'Mobile-friendly']
    },
    {
      title: 'Training Provided',
      description: 'Complete training and onboarding support included',
      icon: GraduationCap,
      gradient: 'from-yellow-500 to-yellow-600',
      features: ['Video tutorials', 'Live training sessions', 'Agent handbook']
    },
    {
      title: 'No Startup Cost',
      description: 'Start earning immediately with zero investment required',
      icon: TrendingUp,
      gradient: 'from-emerald-500 to-emerald-600',
      features: ['No registration fees', 'No equipment needed', 'Free marketing materials']
    },
    {
      title: 'Growth Opportunities',
      description: 'Scale your earnings as your customer base grows',
      icon: BarChart,
      gradient: 'from-cyan-500 to-cyan-600',
      features: ['Tiered commissions', 'Referral bonuses', 'Performance rewards']
    }
  ];

  const commissionStructure = [
    { 
      range: 'Up to $100', 
      rate: '5%', 
      example: '$5 on $100 sales',
      color: 'from-blue-400 to-blue-500',
      badge: 'Starter'
    },
    { 
      range: '$101 - $500', 
      rate: '7%', 
      example: '$35 on $500 sales',
      color: 'from-green-400 to-green-500',
      badge: 'Bronze'
    },
    { 
      range: '$501 - $1,000', 
      rate: '10%', 
      example: '$100 on $1,000 sales',
      color: 'from-yellow-400 to-yellow-500',
      badge: 'Silver'
    },
    { 
      range: 'Above $1,000', 
      rate: '12%', 
      example: '$120+ monthly',
      color: 'from-purple-400 to-purple-500',
      badge: 'Gold'
    },
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: 'Secure Platform',
      description: 'Bank-grade security for all transactions'
    },
    {
      icon: Globe,
      title: 'Nationwide Coverage',
      description: 'Serve customers across Zimbabwe'
    },
    {
      icon: PhoneIcon,
      title: 'WhatsApp Business',
      description: 'Official WhatsApp Business integration'
    },
    {
      icon: Gift,
      title: 'Welcome Bonus',
      description: 'Get bonus commission on your first month'
    }
  ];

  const requirements = [
    'Valid Zimbabwean ID',
    'Active mobile number',
    'WhatsApp installed on your phone',
    'No criminal record',
    'Basic understanding of digital payments',
    'Age 18 years and above'
  ];

  const steps = [
    {
      step: 1,
      title: 'Register',
      description: 'Complete the registration process via WhatsApp or visit our office',
      icon: UserCheck
    },
    {
      step: 2,
      title: 'Get Trained',
      description: 'Attend our free training session (online or in-person)',
      icon: GraduationCap
    },
    {
      step: 3,
      title: 'Start Earning',
      description: 'Begin processing transactions and earning commissions immediately',
      icon: DollarSign
    },
    {
      step: 4,
      title: 'Grow Your Business',
      description: 'Expand your customer base and increase your earnings',
      icon: ChartLine
    }
  ];

  const faqs = [
    {
      question: 'How much can I earn as a XASH agent?',
      answer: 'Earnings vary based on your sales volume. Our top agents earn $1,000+ monthly with commissions ranging from 5-12%.'
    },
    {
      question: 'Is there any registration fee?',
      answer: 'No, there is absolutely no registration fee. You can start earning immediately without any investment.'
    },
    {
      question: 'How do I receive my commissions?',
      answer: 'Commissions are paid weekly via mobile money (EcoCash, OneMoney) directly to your account.'
    },
    {
      question: 'What training is provided?',
      answer: 'We provide comprehensive training including video tutorials, live sessions, and a detailed agent handbook.'
    },
    {
      question: 'Can I work from anywhere?',
      answer: 'Yes! You can work from anywhere in Zimbabwe as long as you have internet access and WhatsApp.'
    },
    {
      question: 'How quickly can I start?',
      answer: 'You can start earning within 24 hours of registration after completing the brief training.'
    }
  ];

  const successStories = [
    {
      name: 'Tendai M.',
      location: 'Harare',
      duration: '6 months',
      earnings: '$850/month',
      story: 'Started as a side hustle, now earning full-time income'
    },
    {
      name: 'Sarah K.',
      location: 'Bulawayo',
      duration: '1 year',
      earnings: '$1,200/month',
      story: 'From retail assistant to business owner with XASH'
    },
    {
      name: 'James T.',
      location: 'Mutare',
      duration: '4 months',
      earnings: '$650/month',
      story: 'Perfect for students needing flexible income'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FA] dark:bg-gray-900">
       <Helmet>
                <meta charSet="utf-8" />
                <title>Xash | Agents</title>
                <link rel="canonical" href="http://xash.co.zw/agents" />
       </Helmet>
      {/* Hero Section */}
      <PageHero
        title="Become a XASH Agent"
        description="Join our network of successful agents and earn commissions by providing essential services to your community. No startup costs, flexible hours, and 24/7 support."
        breadcrumbItems={breadcrumbItems}
        gradient="from-[#0B3C5D] via-[#1F6AE1] to-[#0B3C5D]"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            href="#registration"
            variant="secondary"
            size="lg"
            icon={ArrowRight}
          >
            Register Now
          </Button>
          <Button 
            href={`https://wa.me/${BRAND.contacts.support.replace(/\D/g, '')}?text=Hello,%20I%20want%20to%20become%20a%20XASH%20agent`}
            target="_blank"
            variant="whatsapp"
            size="lg"
            icon={MessageCircle}
            rel="noopener noreferrer"
          >
            Chat with Agent Support
          </Button>
        </div>
      </PageHero>

      {/* Stats Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} variant="elevated" className="text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1F6AE1] to-[#0B3C5D] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-[#1A1A1A] dark:text-white mb-1">{stat.value}</div>
              <div className="text-sm font-semibold text-[#1F6AE1] dark:text-blue-400 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{stat.description}</div>
            </Card>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-[#1F6AE1] dark:text-blue-400 rounded-full text-sm font-semibold mb-4">
            Why Join XASH?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A1A1A] dark:text-white">
            Benefits of Being a XASH Agent
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Join thousands of successful agents building their businesses with XASH
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} hover className="h-full group hover:shadow-2xl transition-all">
              <div className="mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1A1A1A] dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {benefit.description}
                </p>
                <ul className="space-y-2">
                  {benefit.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-white dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold mb-4">
                Simple Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A1A1A] dark:text-white">
                How to Become a XASH Agent
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Start your journey in four simple steps
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1F6AE1] to-[#0B3C5D] transform -translate-x-1/2"></div>
              
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                {steps.map((step, index) => (
                  <div 
                    key={step.step} 
                    className={`relative ${index % 2 === 0 ? 'lg:text-right' : 'lg:col-start-2 lg:text-left'} ${index < steps.length - 1 ? 'mb-16 lg:mb-0' : ''}`}
                  >
                    <Card hover className={`inline-block max-w-md ${index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                      <div className="flex flex-col lg:flex-row items-center lg:items-start">
                        <div className={`w-12 h-12 bg-gradient-to-br from-[#1F6AE1] to-[#0B3C5D] rounded-xl flex items-center justify-center mb-4 lg:mb-0 ${index % 2 === 0 ? 'lg:ml-4' : 'lg:mr-4'} flex-shrink-0`}>
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className={`text-center lg:text-left ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                          <div className="text-xs font-semibold text-[#1F6AE1] dark:text-blue-400 mb-1">STEP {step.step}</div>
                          <h3 className="text-lg font-bold mb-2 text-[#1A1A1A] dark:text-white">{step.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

{/* Commission Structure & Requirements */}
<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
  <div className="grid lg:grid-cols-2 gap-12">
    {/* Commission Structure */}
    <div>
      <div className="text-center mb-8">
        <span className="inline-block px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-[#F5B700] dark:text-yellow-400 rounded-full text-sm font-semibold mb-4">
          Commission Structure
        </span>
        <h2 className="text-3xl font-bold mb-4 text-[#1A1A1A] dark:text-white">
          Service Commission Rates
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Earn competitive commissions on every transaction
        </p>
      </div>

      {/* Service Commission Cards */}
      <div className="space-y-4 mb-8">
        {/* Airtime Commissions */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-[#1A1A1A] dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            Mobile Network Commissions
          </h3>
          <div className="space-y-3">
            <Card hover className="relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-green-500 to-green-600"></div>
              <div className="flex items-center justify-between p-6">
                <div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] dark:text-white">Econet USD Airtime</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">USD transactions</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">9.00%</div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Commission</p>
                </div>
              </div>
            </Card>

            <Card hover className="relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-green-500 to-green-600"></div>
              <div className="flex items-center justify-between p-6">
                <div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] dark:text-white">Econet USD Data</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">USD transactions</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">9.00%</div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Commission</p>
                </div>
              </div>
            </Card>

            <Card hover className="relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-500 to-blue-600"></div>
              <div className="flex items-center justify-between p-6">
                <div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] dark:text-white">NetOne USD Airtime</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">USD transactions</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">7.50%</div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Commission</p>
                </div>
              </div>
            </Card>

            <Card hover className="relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-purple-500 to-purple-600"></div>
              <div className="flex items-center justify-between p-6">
                <div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] dark:text-white">Telecel USD Airtime</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">USD transactions</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">7.00%</div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Commission</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Utility Commissions */}
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-4 text-[#1A1A1A] dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            Utility Commissions
          </h3>
          <Card hover className="relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-red-500 to-red-600"></div>
            <div className="flex items-center justify-between p-6">
              <div>
                <h3 className="text-lg font-bold text-[#1A1A1A] dark:text-white">ZESA USD</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Electricity payments</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600 dark:text-red-400">1.20%</div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Commission</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Payment Information */}
      {/* <Card variant="gradient">
        <h3 className="text-lg font-bold text-white mb-4">Receiving Payments</h3>
        <div className="space-y-3">
          <p className="text-blue-100">
            All transaction costs for EcoCash and InnBucks payments will be borne by the end user.
          </p>
          <p className="text-blue-100">
            The vendor's wallet will not incur any charges, and the full payment amount will be credited instantly to their wallet.
          </p>
        </div>
      </Card> */}
    </div>

    {/* Requirements */}
    <div>
      <div className="text-center mb-8">
        <span className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-semibold mb-4">
          Requirements
        </span>
        <h2 className="text-3xl font-bold mb-4 text-[#1A1A1A] dark:text-white">
          Who Can Become an Agent?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Basic requirements to start your journey as a XASH agent
        </p>
      </div>

      <Card className="p-6">
        <ul className="space-y-4">
          {requirements.map((req, index) => (
            <li key={index} className="flex items-center">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-gray-700 dark:text-gray-300">{req}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <h4 className="font-bold text-lg mb-4 text-[#1A1A1A] dark:text-white">What You'll Need:</h4>
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <feature.icon className="w-6 h-6 text-[#1F6AE1] dark:text-blue-400 mb-2" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Tiered Commission Structure (Original Design) */}
<div className="mt-12">
  <div className="text-center mb-6">
    <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-[#1F6AE1] dark:text-blue-400 rounded-full text-sm font-semibold mb-2">
      Service Commission Rates
    </span>
    <h3 className="text-xl font-bold mb-3 text-[#1A1A1A] dark:text-white">
      Detailed Commission Structure
    </h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm">
      Earn commissions on every transaction you process
    </p>
  </div>

  <Card>
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="bg-[#F5F7FA] dark:bg-gray-700">
            <th className="px-4 py-3 text-left text-sm font-semibold text-[#1A1A1A] dark:text-white">
              Service
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-[#1A1A1A] dark:text-white">
              Type
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-[#1A1A1A] dark:text-white">
              Commission Rate
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-[#1A1A1A] dark:text-white">
              Example Earnings
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {/* Econet Services */}
          <tr className="hover:bg-[#F5F7FA] dark:hover:bg-gray-700/50 transition-colors">
            <td className="px-4 py-3">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-green-600 dark:text-green-400 font-bold">E</span>
                </div>
                <span className="font-semibold text-[#1A1A1A] dark:text-white">Econet</span>
              </div>
            </td>
            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">USD Airtime</td>
            <td className="px-4 py-3">
              <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full font-semibold text-sm">
                9.00%
              </span>
            </td>
            <td className="px-4 py-3 text-gray-700 dark:text-gray-300 font-medium">
              $9 on $100 sales
            </td>
          </tr>
          <tr className="hover:bg-[#F5F7FA] dark:hover:bg-gray-700/50 transition-colors">
            <td className="px-4 py-3">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-green-600 dark:text-green-400 font-bold">E</span>
                </div>
                <span className="font-semibold text-[#1A1A1A] dark:text-white">Econet</span>
              </div>
            </td>
            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">USD Data</td>
            <td className="px-4 py-3">
              <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full font-semibold text-sm">
                9.00%
              </span>
            </td>
            <td className="px-4 py-3 text-gray-700 dark:text-gray-300 font-medium">
              $9 on $100 sales
            </td>
          </tr>
          
          {/* NetOne Service */}
          <tr className="hover:bg-[#F5F7FA] dark:hover:bg-gray-700/50 transition-colors">
            <td className="px-4 py-3">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">N</span>
                </div>
                <span className="font-semibold text-[#1A1A1A] dark:text-white">NetOne</span>
              </div>
            </td>
            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">USD Airtime</td>
            <td className="px-4 py-3">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full font-semibold text-sm">
                7.50%
              </span>
            </td>
            <td className="px-4 py-3 text-gray-700 dark:text-gray-300 font-medium">
              $7.50 on $100 sales
            </td>
          </tr>
          
          {/* Telecel Service */}
          <tr className="hover:bg-[#F5F7FA] dark:hover:bg-gray-700/50 transition-colors">
            <td className="px-4 py-3">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">T</span>
                </div>
                <span className="font-semibold text-[#1A1A1A] dark:text-white">Telecel</span>
              </div>
            </td>
            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">USD Airtime</td>
            <td className="px-4 py-3">
              <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full font-semibold text-sm">
                7.00%
              </span>
            </td>
            <td className="px-4 py-3 text-gray-700 dark:text-gray-300 font-medium">
              $7 on $100 sales
            </td>
          </tr>
          
          {/* ZESA Service */}
          <tr className="hover:bg-[#F5F7FA] dark:hover:bg-gray-700/50 transition-colors">
            <td className="px-4 py-3">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mr-3">
                  <Zap className="w-4 h-4 text-red-600 dark:text-red-400" />
                </div>
                <span className="font-semibold text-[#1A1A1A] dark:text-white">ZESA</span>
              </div>
            </td>
            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">USD Electricity</td>
            <td className="px-4 py-3">
              <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full font-semibold text-sm">
                1.20%
              </span>
            </td>
            <td className="px-4 py-3 text-gray-700 dark:text-gray-300 font-medium">
              $1.20 on $100 sales
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Card>
  

</div>
    </div>
  </div>
</div>

      {/* Registration Section */}
      <div id="registration" className="bg-white dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] text-white rounded-full text-sm font-semibold mb-4">
                Get Started
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A1A1A] dark:text-white">
                Register as a XASH Agent Today
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
                Choose your preferred registration method and start your journey to financial independence
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Registration Card */}
              <div>
                <AgentRegistrationCard />
              </div>

              {/* Additional Information */}
              <div>
                <Card variant="elevated" className="mb-8">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A] dark:text-white">Why Register Now?</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <Zap className="w-6 h-6 text-[#F5B700] mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-[#1A1A1A] dark:text-white">Fast Onboarding</h4>
                          <p className="text-gray-600 dark:text-gray-300">Get approved and start earning within 24 hours</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Briefcase className="w-6 h-6 text-[#1F6AE1] mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-[#1A1A1A] dark:text-white">Business Support</h4>
                          <p className="text-gray-600 dark:text-gray-300">Free marketing materials and business tools</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Award className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-[#1A1A1A] dark:text-white">Exclusive Perks</h4>
                          <p className="text-gray-600 dark:text-gray-300">Priority support and special agent events</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Card>

                {/* Contact Info */}
                <Card>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-[#1A1A1A] dark:text-white">Need Help Deciding?</h3>
                    <div className="space-y-4">
                      <div className="flex items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <MessageCircle className="w-5 h-5 text-green-500 mr-3" />
                        <div>
                          <p className="font-medium text-[#1A1A1A] dark:text-white">Chat on WhatsApp</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{BRAND.contacts.whatsapp}</p>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <Phone className="w-5 h-5 text-[#1F6AE1] mr-3" />
                        <div>
                          <p className="font-medium text-[#1A1A1A] dark:text-white">Call Us</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{BRAND.contacts.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <MapPin className="w-5 h-5 text-[#F5B700] mr-3" />
                        <div>
                          <p className="font-medium text-[#1A1A1A] dark:text-white">Visit Our Office</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{BRAND.contacts.address}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-gradient-to-br from-[#F5F7FA] to-blue-50 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#0B3C5D] to-[#1F6AE1] text-white rounded-full text-sm font-semibold mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A1A1A] dark:text-white">
              Real Agents, Real Results
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
              Hear from agents who have transformed their lives with XASH
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} hover className="relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B3C5D] via-[#1F6AE1] to-[#0B3C5D]"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0B3C5D] to-[#1F6AE1] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {story.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-[#1A1A1A] dark:text-white">{story.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{story.location} • {story.duration}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic mb-6">"{story.story}"</p>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    {/* <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Monthly Earnings</p>
                        <p className="text-xl font-bold text-green-600 dark:text-green-400">{story.earnings}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1F6AE1] group-hover:translate-x-2 transition-all" />
                    </div> */}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold mb-4">
              FAQs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A1A1A] dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Everything you need to know about becoming a XASH agent
            </p>
          </div>

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

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-[#0B3C5D] via-[#1F6AE1] to-[#0B3C5D] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl border border-white/20">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Start Your Journey?
            </h2>
            <p className="text-blue-100 dark:text-gray-300 mb-8 text-lg">
              Join thousands of successful agents building their businesses with XASH. 
              Zero investment, flexible hours, and unlimited earning potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="#registration"
                variant="secondary"
                size="lg"
                icon={ArrowRight}
              >
                Register Now
              </Button>
              <Button
                href={`https://wa.me/${BRAND.contacts.whatsapp.replace('+', '')}?text=Hello,%20I%20have%20more%20questions%20about%20becoming%20a%20XASH%20agent`}
                variant="whatsapp"
                size="lg"
                icon={MessageCircle}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ask Questions
              </Button>
            </div>
            <p className="text-blue-200 dark:text-blue-300 mt-6 text-sm">
              Registration takes less than 5 minutes • Start earning within 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agents;