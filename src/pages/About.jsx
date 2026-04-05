import { motion } from 'framer-motion';
import { 
  Target, 
  Users, 
  Globe, 
  Shield, 
  TrendingUp, 
  Award, 
  Heart,
  Zap,
  Clock,
  Building,
  CheckCircle,
  Star
} from 'lucide-react';
import ImageWithSkeleton from '../components/ui/ImageWithSkeleton';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import about from '../assets/images/about_team.png';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'Empower retail businesses across Zimbabwe with accessible fintech solutions',
      color: '#0B3C5D'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Bank-grade security and compliance in every transaction',
      color: '#F5B700'
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Building solutions that work for local communities',
      color: '#1F6AE1'
    },
    {
      icon: TrendingUp,
      title: 'Growth Mindset',
      description: 'Continuous innovation to drive financial inclusion',
      color: '#F5B700'
    }
  ];

  const milestones = [
    { 
      year: '2020', 
      event: 'Company Founded', 
      description: 'Started operations in Mutare',
      icon: Building
    },
    { 
      year: '2021', 
      event: 'First 100 Agents', 
      description: 'Onboarded 100 retail agents',
      icon: Users
    },
    { 
      year: '2022', 
      event: 'POS Launch', 
      description: 'Launched Xash POS system',
      icon: Zap
    },
    { 
      year: '2023', 
      event: 'API Platform', 
      description: 'Released developer API',
      icon: Globe
    },
    { 
      year: '2024', 
      event: 'National Expansion', 
      description: 'Covered all major cities',
      icon: Award
    }
  ];

  const stats = [
    { value: '500+', label: 'Active Agents', sublabel: 'Across Zimbabwe' },
    { value: '$2k+', label: 'Monthly Volume', sublabel: 'Processed' },
    { value: '24/7', label: 'Support', sublabel: 'Always Available' },
    { value: '99.9%', label: 'Uptime', sublabel: 'System Reliability' }
  ];

  const teamMembers = [
    { 
      name: 'Rodney Jesiman.', 
      role: 'CEO & Co-Founder', 
      bio: 'Fintech entrepreneur with 5+ years experience',
      image: 'https://media.licdn.com/dms/image/v2/C4D03AQG-KKg8VB9d3w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1651585358689?e=1769040000&v=beta&t=1OstlOcEqajOX6OV0ren-gNrhWmFT3qGuXTOkLDuIuU'
    },
    { 
      name: 'Joshua Munapo.', 
      role: 'CTO & Co-Founder', 
      bio: 'Software Engineer with 5+ years experience',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQHFBK9wyLTTtA/profile-displayphoto-shrink_800_800/B56ZeO6V6hG0Ac-/0/1750449349774?e=1769040000&v=beta&t=FndFTrIP8J_Ht3lI3yghDKMkyDL7hwrP3B9K41rxIG0'
    }
  ];

  const principles = [
    {
      title: 'Transparency',
      description: 'We operate with complete transparency in all our dealings',
      icon: CheckCircle,
      color: '#0B3C5D'
    },
    {
      title: 'Innovation',
      description: 'Constantly improving our services to meet market needs',
      icon: Zap,
      color: '#1F6AE1'
    },
    {
      title: 'Reliability',
      description: 'Building trust through consistent and reliable service delivery',
      icon: Shield,
      color: '#F5B700'
    },
    {
      title: 'Customer First',
      description: 'Every decision is made with our customers in mind',
      icon: Heart,
      color: '#F5B700'
    }
  ];

  return (
    <div className="pt-20 bg-white">
      <Helmet>
        <title>About Us - Xash</title>
        <meta name="description" content="Learn about Xash, Zimbabwe's trusted fintech partner, and our mission to make digital financial services accessible to every retail business." /> 
      </Helmet>
      {/* Hero Section */}
      <section className="py-24 bg-mesh relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-blue-500/10 rounded-full filter blur-3xl animate-blob" />
          <div className="absolute top-1/2 -left-24 w-[400px] h-[400px] bg-orange-500/10 rounded-full filter blur-3xl animate-pulse-slow" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-xash-primary-blue/20 text-xash-primary-blue text-sm font-bold mb-6">
                <span className="flex h-2 w-2 rounded-full bg-xash-primary-blue mr-2"></span>
                Our Identity
              </span>
              <h1 className="text-5xl md:text-7xl font-bold font-sora mb-6 text-xash-dark-text tracking-tight">
                Empowering <span className="bg-gradient-to-r from-xash-primary-blue to-xash-secondary-blue bg-clip-text text-transparent">Zimbabwean Retail</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-outfit">
                At Xash, we believe financial inclusion is the cornerstone of economic growth. We're building the infrastructure that connects local shops to the digital economy.
              </p>
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
                className="glass-card hover:glass-panel rounded-2xl p-8 text-center transition-all duration-300"
              >
                <div className="text-4xl font-bold mb-2 font-sora text-xash-dark-text">{stat.value}</div>
                <div className="text-lg font-bold text-xash-primary-blue mb-1 font-outfit">{stat.label}</div>
                <div className="text-sm text-gray-500 font-outfit">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ImageWithSkeleton 
                src={about}
                alt="Xash Team Working"
                className="w-full h-[400px] object-cover rounded-3xl shadow-2xl border-4 border-white/50"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-[#1A1A1A]">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  Founded in Mutare, Zimbabwe, Xash was born from a simple idea: make digital financial 
                  services accessible to every retail business, no matter their size or location.
                </p>
                <p>
                  We started with a small team of developers and financial experts who saw the gap 
                  between traditional banking services and the needs of local shop owners.
                </p>
                <p>
                  Today, we serve hundreds of agents across the country, processing millions in 
                  transactions monthly while maintaining our commitment to security, reliability, 
                  and exceptional support.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                  <Building style={{ color: '#1F6AE1' }} className="w-8 h-8 mb-2" />
                  <div className="text-2xl font-bold text-[#1A1A1A]">2020</div>
                  <div className="text-sm text-gray-600">Year Founded</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                  <Users style={{ color: '#0B3C5D' }} className="w-8 h-8 mb-2" />
                  <div className="text-2xl font-bold text-[#1A1A1A]">5+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#F5F7FA] text-[#1F6AE1] rounded-full text-sm font-semibold mb-4 border border-[#1F6AE1]/20">
              Our Values
            </span>
            <h2 className="text-4xl font-bold mb-4 text-[#1A1A1A]">What Drives Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card hover:glass-panel p-8 rounded-3xl transition-all duration-500 group"
              >
                <div 
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}
                  style={{ backgroundColor: value.color }}
                >
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-sora text-xash-dark-text">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed font-outfit">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#F5F7FA] text-[#1F6AE1] rounded-full text-sm font-semibold mb-4 border border-[#1F6AE1]/20">
              Our Journey
            </span>
            <h2 className="text-4xl font-bold mb-4 text-[#1A1A1A]">Milestones & Achievements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Key moments in our growth story
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-xash-primary-blue border-4 border-white shadow-xl z-10 animate-pulse-slow"></div>
                  
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                    <div className="glass-panel p-8 rounded-3xl hover:shadow-2xl transition-all duration-300">
                      <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : 'justify-start'}`}>
                        <div 
                          className="w-14 h-14 rounded-2xl bg-xash-primary-blue flex items-center justify-center shadow-lg"
                        >
                          <milestone.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="text-4xl font-bold font-sora text-xash-primary-blue">{milestone.year}</div>
                      </div>
                      <div className="text-2xl font-bold font-sora text-xash-dark-text mb-3">{milestone.event}</div>
                      <p className="text-gray-600 font-outfit leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#1A1A1A]">Our Guiding Principles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              How we operate and serve our customers every day
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#F5F7FA] rounded-xl shadow-lg p-6 border border-gray-100 text-center"
              >
                <div 
                  style={{ backgroundColor: principle.color }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                >
                  <principle.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1A1A1A]">{principle.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="py-24 bg-mesh-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl mb-8 border border-white/20">
              <Star className="text-xash-accent-gold" size={40} />
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold font-sora mb-8 text-white tracking-tight">
              Join Our Journey
            </h2>
            <p className="text-xl text-[#F5F7FA]/90 mb-12 leading-relaxed font-outfit max-w-2xl mx-auto">
              Be part of the movement transforming retail finance in Zimbabwe. We are always looking for visionary partners and agents.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="https://wa.me/263716409412?text=Hello%2C%20I%20would%20like%20to%20become%20an%20agent."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-xash-accent-gold text-xash-primary-blue px-10 py-5 rounded-2xl font-bold shadow-2xl inline-flex items-center justify-center hover:bg-white transition-all transform hover:-translate-y-1"
                >
                  Become an Agent
                </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;