import { motion } from 'framer-motion';
import { 
  Target, Users, Globe, Shield, 
  TrendingUp, Award, Clock, Heart 
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'Empower retail businesses across Zimbabwe with accessible fintech solutions',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Bank-grade security and compliance in every transaction',
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Building solutions that work for local communities',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: TrendingUp,
      title: 'Growth Mindset',
      description: 'Continuous innovation to drive financial inclusion',
      color: 'text-orange-600 bg-orange-100'
    }
  ];

  const milestones = [
    { year: '2020', event: 'Company Founded', description: 'Started operations in Mutare' },
    { year: '2021', event: 'First 100 Agents', description: 'Onboarded 100 retail agents' },
    { year: '2022', event: 'POS Launch', description: 'Launched Xash POS system' },
    { year: '2023', event: 'API Platform', description: 'Released developer API' },
    { year: '2024', event: 'National Expansion', description: 'Covered all major cities' }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900">
              About Xash
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're building the future of retail finance in Zimbabwe, one transaction at a time
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection direction="left">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
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
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-gray-600">Active Agents</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">$2M+</div>
                    <div className="text-gray-600">Monthly Volume</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
                    <div className="text-gray-600">Support Available</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
                    <div className="text-4xl font-bold text-orange-600 mb-2">99.9%</div>
                    <div className="text-gray-600">System Uptime</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-2xl border border-gray-200 h-full">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${value.color}`}>
                    <value.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Milestones in our growth and development
            </p>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-6 h-6 rounded-full bg-blue-600 absolute left-1/2 transform -translate-x-1/2`}></div>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                      <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                        <div className="text-2xl font-bold text-gray-900 mb-2">{milestone.year}</div>
                        <div className="text-lg font-semibold text-gray-800 mb-2">{milestone.event}</div>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experienced professionals driving our vision forward
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Takudzwa M.', role: 'CEO & Founder', bio: 'Fintech entrepreneur with 10+ years experience' },
              { name: 'Sarah C.', role: 'CTO', bio: 'Former banking systems architect' },
              { name: 'James T.', role: 'Head of Operations', bio: '15 years in retail financial services' }
            ].map((member, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="text-blue-600 font-medium mb-4">{member.role}</div>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Join Our Journey
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Be part of the movement transforming retail finance in Zimbabwe.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold border border-white hover:bg-blue-50 transition-colors text-lg"
            >
              Become an Agent
            </motion.button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;