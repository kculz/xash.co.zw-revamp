import { motion } from 'framer-motion';
import { 
  Users, 
  TrendingUp, 
  Shield, 
  Clock, 
  DollarSign, 
  Smartphone,
  CheckCircle,
  MessageCircle,
  GraduationCap,
  ChartLine,
  UserCheck,
  Phone,
  MapPin,
  ArrowRight,
  Zap
} from 'lucide-react';
import { Helmet } from 'react-helmet';

const Agents = () => {
  const stats = [
    { value: '200+', label: 'Active Agents', icon: Users, description: 'Across Zimbabwe' },
    { value: '$5K+', label: 'Monthly Commissions', icon: DollarSign, description: 'Paid to agents' },
    { value: '95%', label: 'Satisfaction Rate', icon: CheckCircle, description: 'Agent satisfaction' },
    { value: '24/7', label: 'Support Available', icon: Clock, description: 'Always here to help' }
  ];

  const benefits = [
    {
      title: 'Earn Commissions',
      description: 'Earn attractive commissions on every transaction you process',
      icon: DollarSign,
      color: '#10B981',
      features: ['5-12% commission rates', 'Weekly payments', 'Bonus opportunities']
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support for all your queries and issues',
      icon: Clock,
      color: '#2563EB',
      features: ['WhatsApp support', 'Dedicated agent line', 'Technical assistance']
    },
    {
      title: 'Flexible Hours',
      description: 'Work anytime, anywhere through our WhatsApp platform',
      icon: Smartphone,
      color: '#7C3AED',
      features: ['No fixed hours', 'Work from anywhere', 'Mobile-friendly']
    },
    {
      title: 'Training Provided',
      description: 'Complete training and onboarding support included',
      icon: GraduationCap,
      color: '#F59E0B',
      features: ['Video tutorials', 'Live training sessions', 'Agent handbook']
    },
    {
      title: 'No Startup Cost',
      description: 'Start earning immediately with zero investment required',
      icon: TrendingUp,
      color: '#10B981',
      features: ['No registration fees', 'No equipment needed', 'Free marketing materials']
    },
    {
      title: 'Growth Opportunities',
      description: 'Scale your earnings as your customer base grows',
      icon: ChartLine,
      color: '#2563EB',
      features: ['Tiered commissions', 'Referral bonuses', 'Performance rewards']
    }
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

  const commissionStructure = [
    { 
      service: 'Econet USD Airtime',
      rate: '9.00%', 
      example: '$9 on $100 sales',
      color: '#10B981'
    },
    { 
      service: 'Econet USD Data',
      rate: '9.00%', 
      example: '$9 on $100 sales',
      color: '#10B981'
    },
    { 
      service: 'NetOne USD Airtime',
      rate: '7.50%', 
      example: '$7.50 on $100 sales',
      color: '#2563EB'
    },
    { 
      service: 'Telecel USD Airtime',
      rate: '7.00%', 
      example: '$7 on $100 sales',
      color: '#7C3AED'
    },
    { 
      service: 'ZESA USD',
      rate: '1.20%', 
      example: '$1.20 on $100 sales',
      color: '#F59E0B'
    },
  ];

  return (
    <div className="pt-20 bg-white">
      <Helmet>
        <title>Become a Xash Agent - Earn Commissions with Zero Investment</title>
        <meta 
          name="description" 
          content="Join Xash as an agent and start earning commissions by providing essential services to your community. No startup costs, flexible hours, and 24/7 support." 
        />  
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-24 bg-mesh overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-xash-primary-blue/10 rounded-full filter blur-3xl animate-blob" />
          <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] bg-xash-accent-gold/10 rounded-full filter blur-3xl animate-pulse-slow" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-xash-primary-blue/20 text-xash-primary-blue text-sm font-bold mb-6">
                <span className="flex h-2 w-2 rounded-full bg-xash-primary-blue mr-2 animate-pulse"></span>
                Join Our Agent Network
              </span>
              <h1 className="text-5xl sm:text-7xl font-bold font-sora mb-6 text-xash-dark-text tracking-tight">
                Become a <span className="bg-gradient-to-r from-xash-primary-blue to-xash-accent-gold bg-clip-text text-transparent">Xash Agent</span>
              </h1>
              <p className="text-xl text-gray-600 font-outfit mb-10 leading-relaxed">
                Join our growing network of successful entrepreneurs earning real commissions from their communities. No startup costs, flexible hours, and dedicated 24/7 support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="https://wa.me/263716409412?text=Hello%2C%20I%20would%20like%20to%20become%20an%20agent."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-xash-primary-blue text-white px-8 py-5 rounded-2xl font-bold shadow-xl inline-flex items-center justify-center hover:bg-xash-secondary-blue transition-all"
                >
                  Register Now
                  <ArrowRight className="ml-2" size={20} />
                </motion.a>
                <motion.a
                  href="https://wa.me/263716409412"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white border-2 border-xash-primary-blue/20 text-xash-primary-blue px-8 py-5 rounded-2xl font-bold inline-flex items-center justify-center hover:bg-xash-primary-blue/5 transition-all"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Chat with Support
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-xash-primary-blue/20 to-xash-accent-gold/20 rounded-3xl blur-2xl" />
              <img 
                src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80" 
                alt="Successful Xash Agent" 
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover border-4 border-white/50"
              />
              {/* Floating Stat Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-6 -left-6 glass-panel p-6 rounded-2xl shadow-2xl"
              >
                <div className="text-3xl font-bold font-sora text-xash-primary-blue">$5K+</div>
                <div className="text-sm text-gray-600 font-outfit">Monthly Commissions Paid</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card hover:glass-panel rounded-2xl p-8 text-center transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-xash-primary-blue flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold font-sora text-xash-dark-text mb-1">{stat.value}</div>
                <div className="text-sm font-bold text-xash-primary-blue font-outfit mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500 font-outfit">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-xash-primary-blue/20 text-xash-primary-blue text-sm font-bold mb-6">
              Why Join Xash?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-sora mb-4 text-xash-dark-text">
              Benefits of Being a Xash Agent
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-outfit">
              Join hundreds of successful agents building their businesses with Xash across Zimbabwe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-panel p-8 rounded-3xl border border-white/60 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="mb-6">
                  <div 
                    style={{ backgroundColor: benefit.color }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-500"
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-sora text-xash-dark-text text-center">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-5 text-center font-outfit">
                    {benefit.description}
                  </p>
                  <ul className="space-y-2">
                    {benefit.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600 font-outfit">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-xash-primary-blue/10 text-xash-primary-blue text-sm font-bold mb-6">
              Simple Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-sora mb-4 text-xash-dark-text">
              How to Become a Xash Agent
            </h2>
            <p className="text-gray-600 text-lg font-outfit">
              Start your journey in four simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card hover:glass-panel p-8 rounded-3xl text-center transition-all duration-400 group"
              >
                <div className="relative inline-flex mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-xash-primary-blue flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-xash-accent-gold flex items-center justify-center text-xs font-bold text-xash-primary-blue">{step.step}</div>
                </div>
                <h3 className="text-lg font-bold mb-2 font-sora text-xash-dark-text">{step.title}</h3>
                <p className="text-gray-600 text-sm font-outfit">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="py-24 bg-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-xash-primary-blue/20 to-xash-accent-gold/20 rounded-3xl blur-2xl" />
              <img 
                src="https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&w=800&q=80" 
                alt="Agent Success" 
                className="relative rounded-3xl shadow-2xl w-full h-[480px] object-cover border-4 border-white/50"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-10">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-xash-accent-gold/20 text-amber-700 text-sm font-bold mb-6">
                  Commission Structure
                </span>
                <h2 className="text-4xl font-bold font-sora mb-4 text-xash-dark-text">
                  Service Commission Rates
                </h2>
                <p className="text-gray-600 font-outfit mb-2">
                  Earn competitive commissions on every transaction you process.
                </p>
              </div>

              <div className="space-y-4">
                {commissionStructure.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="glass-panel p-6 rounded-2xl transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div 
                          style={{ backgroundColor: item.color }}
                          className="w-3 h-3 rounded-full mr-4 shadow-md"
                        ></div>
                        <div>
                          <h3 className="text-base font-bold font-sora text-xash-dark-text">{item.service}</h3>
                          <p className="text-gray-500 text-xs font-outfit">{item.example}</p>
                        </div>
                      </div>
                      <div 
                        style={{ color: item.color }}
                        className="text-2xl font-bold font-sora"
                      >
                        {item.rate}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Agent Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold font-sora mb-6 text-xash-dark-text">Real People, <span className="text-xash-primary-blue">Real Success</span></h2>
              <p className="text-gray-600 text-lg font-outfit mb-8 leading-relaxed">
                Meet our agents who have transformed their income by joining the Xash network. 
                From students to shop owners, everyone can build a thriving business with Xash.
              </p>
              <div className="space-y-6">
                <div className="flex items-start glass-panel p-5 rounded-2xl">
                  <CheckCircle className="text-green-500 mr-4 mt-1 flex-shrink-0" size={22} />
                  <div>
                    <h4 className="font-bold font-sora text-xash-dark-text">Average Monthly Earnings: $650</h4>
                    <p className="text-gray-500 text-sm font-outfit">Top agents earn $1,200+ monthly</p>
                  </div>
                </div>
                <div className="flex items-start glass-panel p-5 rounded-2xl">
                  <CheckCircle className="text-xash-primary-blue mr-4 mt-1 flex-shrink-0" size={22} />
                  <div>
                    <h4 className="font-bold font-sora text-xash-dark-text">Start Earning Within 24 Hours</h4>
                    <p className="text-gray-500 text-sm font-outfit">Quick onboarding and training process</p>
                  </div>
                </div>
                <div className="flex items-start glass-panel p-5 rounded-2xl">
                  <CheckCircle className="text-xash-accent-gold mr-4 mt-1 flex-shrink-0" size={22} />
                  <div>
                    <h4 className="font-bold font-sora text-xash-dark-text">No Investment Required</h4>
                    <p className="text-gray-500 text-sm font-outfit">Zero registration fees or equipment costs</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-xash-accent-gold/20 to-xash-primary-blue/20 rounded-3xl blur-2xl" />
              <img 
                src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=800&q=80" 
                alt="Successful Agents" 
                className="relative rounded-3xl shadow-2xl w-full h-[480px] object-cover border-4 border-white/50"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-24 bg-mesh-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl mb-8 border border-white/20">
            <Users className="w-10 h-10 text-xash-accent-gold" />
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold font-sora mb-8 text-white tracking-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/80 mb-12 text-xl font-outfit max-w-2xl mx-auto">
            Join hundreds of successful agents building their businesses with Xash. 
            Zero investment, flexible hours, and unlimited earning potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="https://wa.me/263716409412?text=Hello%2C%20I%20would%20like%20to%20become%20an%20agent."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-xash-accent-gold text-xash-primary-blue px-10 py-5 rounded-2xl font-bold shadow-2xl inline-flex items-center justify-center hover:bg-white transition-all"
            >
              Register Now
              <ArrowRight className="ml-2" size={20} />
            </motion.a>
            <motion.a
              href="https://wa.me/263716409412"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white/50 text-white px-10 py-5 rounded-2xl font-bold inline-flex items-center justify-center hover:bg-white/10 transition-all"
            >
              <MessageCircle className="mr-2" size={20} />
              Ask Questions
            </motion.a>
          </div>
          <p className="text-white/60 mt-8 text-sm font-outfit">
            Registration takes less than 5 minutes • Start earning within 24 hours
          </p>

          {/* Contact Info */}
          <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="glass-panel rounded-2xl p-6 border border-white/20">
              <Phone className="w-6 h-6 text-xash-accent-gold mx-auto mb-3" />
              <h4 className="font-bold text-white mb-2 font-sora">Call Us</h4>
              <p className="text-white/70 text-sm font-outfit">+263 716 409 412</p>
            </div>
            <div className="glass-panel rounded-2xl p-6 border border-white/20">
              <MapPin className="w-6 h-6 text-xash-accent-gold mx-auto mb-3" />
              <h4 className="font-bold text-white mb-2 font-sora">Visit Office</h4>
              <p className="text-white/70 text-sm font-outfit">63 Embassy Building, Mutare</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agents;