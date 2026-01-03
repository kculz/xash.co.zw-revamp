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

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'Empower retail businesses across Zimbabwe with accessible fintech solutions',
      color: '#2563EB'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Bank-grade security and compliance in every transaction',
      color: '#10B981'
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Building solutions that work for local communities',
      color: '#7C3AED'
    },
    {
      icon: TrendingUp,
      title: 'Growth Mindset',
      description: 'Continuous innovation to drive financial inclusion',
      color: '#F59E0B'
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
    { value: '$2M+', label: 'Monthly Volume', sublabel: 'Processed' },
    { value: '24/7', label: 'Support', sublabel: 'Always Available' },
    { value: '99.9%', label: 'Uptime', sublabel: 'System Reliability' }
  ];

  const teamMembers = [
    { 
      name: 'Takudzwa M.', 
      role: 'CEO & Founder', 
      bio: 'Fintech entrepreneur with 10+ years experience',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop'
    },
    { 
      name: 'Sarah C.', 
      role: 'CTO', 
      bio: 'Former banking systems architect',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop'
    },
    { 
      name: 'James T.', 
      role: 'Head of Operations', 
      bio: '15 years in retail financial services',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
    }
  ];

  const principles = [
    {
      title: 'Transparency',
      description: 'We operate with complete transparency in all our dealings',
      icon: CheckCircle,
      color: '#2563EB'
    },
    {
      title: 'Innovation',
      description: 'Constantly improving our services to meet market needs',
      icon: Zap,
      color: '#7C3AED'
    },
    {
      title: 'Reliability',
      description: 'Building trust through consistent and reliable service delivery',
      icon: Shield,
      color: '#10B981'
    },
    {
      title: 'Customer First',
      description: 'Every decision is made with our customers in mind',
      icon: Heart,
      color: '#F59E0B'
    }
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
                About Us
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                Building the Future of <br />
                <span style={{ color: '#7C3AED' }}>Retail Finance</span> in Zimbabwe
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We're on a mission to make digital financial services accessible to every retail business, 
                one transaction at a time.
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
                className="bg-gray-50 rounded-xl shadow-lg p-6 text-center border border-gray-100"
              >
                <div className="text-4xl font-bold mb-2 text-gray-900">{stat.value}</div>
                <div className="text-lg font-semibold text-purple-600 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
                alt="Team Collaboration" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
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
                  <Building style={{ color: '#7C3AED' }} className="w-8 h-8 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">2020</div>
                  <div className="text-sm text-gray-600">Year Founded</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                  <Users style={{ color: '#2563EB' }} className="w-8 h-8 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">50+</div>
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
            <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
              Our Values
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">What Drives Us</h2>
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
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all"
              >
                <div 
                  style={{ backgroundColor: value.color }}
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg"
                >
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-semibold mb-4">
              Our Journey
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Milestones & Achievements</h2>
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
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-purple-600 border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-lg">
                      <div className="flex items-center gap-4 mb-3 justify-start lg:justify-end">
                        <div 
                          style={{ backgroundColor: '#7C3AED' }}
                          className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                        >
                          <milestone.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-3xl font-bold text-purple-600">{milestone.year}</div>
                      </div>
                      <div className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</div>
                      <p className="text-gray-600">{milestone.description}</p>
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
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Guiding Principles</h2>
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
                className="bg-gray-50 rounded-xl shadow-lg p-6 border border-gray-100 text-center"
              >
                <div 
                  style={{ backgroundColor: principle.color }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                >
                  <principle.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{principle.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-semibold mb-4">
              Meet the Team
            </span>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Experienced professionals driving our vision forward
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl border border-gray-100 shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="text-purple-600 font-medium mb-4">{member.role}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#7C3AED' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl mb-6">
              <Star className="text-white" size={32} />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Join Our Journey
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Be part of the movement transforming retail finance in Zimbabwe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-700 px-10 py-4 rounded-lg font-bold shadow-xl inline-flex items-center justify-center"
              >
                Become an Agent
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ backgroundColor: '#10B981' }}
                className="text-white px-10 py-4 rounded-lg font-bold inline-flex items-center justify-center"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;