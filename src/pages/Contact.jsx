import { motion } from 'framer-motion';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  ArrowRight,
  Shield,
  Star,
  ExternalLink,
  Calendar,
  Zap
} from 'lucide-react';
import { useState } from 'react';

// MapSection Component (embedded)
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const MapSection = () => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const coordinates = { lat: -18.97244, lng: 32.66996 };

  useEffect(() => {
    if (!mapRef.current) return;

    const map = L.map(mapRef.current).setView([coordinates.lat, coordinates.lng], 18);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    const customIcon = L.divIcon({
      html: `
        <div class="relative">
          <div class="w-12 h-12 bg-[#1F6AE1] rounded-full border-4 border-white shadow-xl animate-pulse flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
            </svg>
          </div>
        </div>
      `,
      className: 'custom-marker',
      iconSize: [48, 60],
      iconAnchor: [24, 48],
    });

    markerRef.current = L.marker([coordinates.lat, coordinates.lng], { icon: customIcon })
      .addTo(map)
      .bindPopup(`
        <div class="p-2">
          <strong class="text-[#0B3C5D]">Xash Technologies</strong><br>
          <span class="text-gray-600">63 Embassy Building</span><br>
          <span class="text-gray-600">Mutare, Zimbabwe</span>
        </div>
      `);

    return () => {
      map.remove();
    };
  }, []);

  const handleGetDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}`;
    window.open(url, '_blank');
  };

  return (
    <div className="rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <div 
        ref={mapRef} 
        className="h-96 w-full relative"
        style={{ minHeight: '384px', zIndex: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F7FA] to-gray-100 flex items-center justify-center z-0">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1F6AE1] mx-auto mb-4"></div>
            <p className="text-gray-600 font-medium">Loading map...</p>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F7FA] p-6 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center">
            <div className="bg-white p-2 rounded-lg shadow-sm mr-4 border border-gray-200">
              <MapPin className="text-[#1F6AE1]" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-[#1A1A1A]">Xash Technologies</h3>
              <p className="text-gray-600 text-sm">63 Embassy Building, Mutare</p>
            </div>
          </div>
          
          <motion.button
            onClick={handleGetDirections}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ backgroundColor: '#1F6AE1' }}
            className="flex items-center text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all hover:bg-[#0B3C5D]"
          >
            <ExternalLink className="mr-2" size={20} />
            Get Directions
          </motion.button>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Handle contact actions
  const handleContactAction = (type, value) => {
    switch(type) {
      case 'phone':
        window.open(`tel:${value}`, '_self');
        break;
      case 'email':
        window.open(`mailto:${value}`, '_self');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/${value.replace(/\D/g, '')}`, '_blank');
        break;
      case 'directions':
        const coordinates = { lat: -18.97244, lng: 32.66996 };
        window.open(`https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}`, '_blank');
        break;
      default:
        break;
    }
  };

  // Handle CTA actions
  const handleCTAAction = (action) => {
    switch(action) {
      case 'pos':
        // Navigate to POS page or open application form
        console.log('Navigate to POS application');
        break;
      case 'call':
        window.open('tel:+263716409412', '_self');
        break;
      default:
        break;
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+263 716 409 412', '+263 773 123 456'],
      color: '#1F6AE1',
      description: 'Mon-Fri 8AM-5PM, Sat 9AM-1PM',
      action: 'Call Now',
      actionType: 'phone',
      actionValue: '+263716409412'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['support@xash.co.zw', 'sales@xash.co.zw'],
      color: '#0B3C5D',
      description: 'We reply within 24 hours',
      action: 'Send Email',
      actionType: 'email',
      actionValue: 'support@xash.co.zw'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['63 Embassy Building', 'Mutare, Zimbabwe'],
      color: '#F5B700',
      description: 'Visit us Mon-Fri 8AM-5PM',
      action: 'Get Directions',
      actionType: 'directions'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: ['+263 716 409 412'],
      color: '#1F6AE1',
      description: '24/7 instant support',
      action: 'Chat Now',
      actionType: 'whatsapp',
      actionValue: '+263716409412'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 5:00 PM', status: 'open' },
    { day: 'Saturday', hours: '9:00 AM - 1:00 PM', status: 'open' },
    { day: 'Sunday', hours: 'Closed', status: 'closed' },
    { day: 'Public Holidays', hours: 'Closed', status: 'closed' }
  ];

  const quickLinks = [
    { 
      icon: Zap, 
      label: 'Apply for Free POS', 
      path: '/pos', 
      color: '#1F6AE1',
      action: () => handleCTAAction('pos')
    },
    { 
      icon: Shield, 
      label: 'Become an Agent', 
      path: '/agent', 
      color: '#0B3C5D',
      action: () => console.log('Navigate to agent page')
    },
    { 
      icon: Star, 
      label: 'View Solutions', 
      path: '/solutions', 
      color: '#F5B700',
      action: () => console.log('Navigate to solutions page')
    }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section - Asymmetric Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#F5F7FA] to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-[#1F6AE1]/20 text-[#1F6AE1] text-sm font-medium mb-6 shadow-sm"
              >
                <span className="flex h-2 w-2 rounded-full bg-[#1F6AE1] mr-2 animate-pulse"></span>
                We're Here to Help
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              >
                <span className="text-[#1A1A1A]">Let's Connect</span>
                <br />
                <span className="text-[#1F6AE1]">& Grow Together</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 leading-relaxed mb-8"
              >
                Your success is our priority. Reach out through any channel and experience 
                support that truly understands your business needs.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-6"
              >
                <div className="flex items-center space-x-2 text-[#1A1A1A]">
                  <div className="w-10 h-10 rounded-lg bg-[#1F6AE1]/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#1F6AE1]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Quick Response</p>
                    <p className="text-xs text-gray-600">Within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-[#1A1A1A]">
                  <div className="w-10 h-10 rounded-lg bg-[#F5B700]/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#F5B700]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Fully Compliant</p>
                    <p className="text-xs text-gray-600">Zimbabwe Registered</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Contact Cards Stack */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <motion.button
                    key={index}
                    type="button"
                    onClick={() => handleContactAction(info.actionType, info.actionValue)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 cursor-pointer transition-all hover:shadow-2xl text-left focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1F6AE1]"
                    style={{
                      borderTopColor: hoveredCard === index ? info.color : undefined,
                      borderTopWidth: hoveredCard === index ? '3px' : '1px'
                    }}
                  >
                    <div 
                      style={{ backgroundColor: info.color }}
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-md"
                    >
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-[#1A1A1A]">{info.title}</h3>
                    <div className="space-y-1 mb-3">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-gray-700 font-medium">{detail}</p>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500">{info.description}</p>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-3 pt-3 border-t border-gray-100"
                    >
                      <div 
                        className="text-xs font-semibold flex items-center"
                        style={{ color: info.color }}
                      >
                        {info.action}
                        <ArrowRight className="ml-1" size={12} />
                      </div>
                    </motion.div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1F6AE1]/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F5B700]/5 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* Map and Office Hours Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#1A1A1A]">Visit Our Office</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Located in the heart of Mutare, we're easy to find and always ready to welcome you
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map Section - Takes 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <MapSection />
            </motion.div>

            {/* Office Hours Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div 
                  style={{ backgroundColor: '#F5B700' }}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mr-4 shadow-lg"
                >
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A]">Office Hours</h3>
                  <p className="text-sm text-gray-600">When we're available</p>
                </div>
              </div>

              <div className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between py-4 px-4 rounded-xl bg-[#F5F7FA] hover:bg-gray-100 transition-all"
                  >
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-3 ${
                        schedule.status === 'open' ? 'bg-green-500' : 'bg-red-500'
                      }`}></div>
                      <span className="font-medium text-gray-700">{schedule.day}</span>
                    </div>
                    <span className={`font-bold text-sm ${
                      schedule.status === 'open' ? 'text-[#0B3C5D]' : 'text-red-600'
                    }`}>
                      {schedule.hours}
                    </span>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={() => handleContactAction('whatsapp', '+263716409412')}
                className="mt-6 p-4 bg-[#1F6AE1]/5 rounded-xl border border-[#1F6AE1]/20 hover:bg-[#1F6AE1]/10 transition-all w-full text-center"
              >
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-[#1F6AE1]">Need urgent help?</span>
                  <br />
                  WhatsApp us 24/7
                </p>
              </button>
            </motion.div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0B3C5D' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1F6AE1] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F5B700] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl mb-6"
          >
            <Star className="text-white" size={32} />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight"
          >
            Ready to Transform Your Business?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Join hundreds of businesses across Zimbabwe who trust Xash for their fintech needs. 
            Let's build something amazing together.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
          >
            
            
            <motion.button
              onClick={() => handleCTAAction('call')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-xl font-bold text-base transition-all hover:bg-white/10 inline-flex items-center justify-center"
            >
              <Phone className="mr-2" size={18} />
              Call Us Now
            </motion.button>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-white/80">
            <div className="flex items-center">
              <MapPin className="mr-2" size={16} />
              <span className="text-sm">Based in Mutare</span>
            </div>
            <div className="flex items-center">
              <Shield className="mr-2" size={16} />
              <span className="text-sm">Zimbabwe Registered</span>
            </div>
            <div className="flex items-center">
              <Star className="mr-2" size={16} />
              <span className="text-sm">Fully Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Leaflet CSS */}
      <style jsx global>{`
        .leaflet-container {
          font-family: inherit;
        }
        .leaflet-control-zoom {
          border: none !important;
          border-radius: 8px !important;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .leaflet-control-zoom a {
          border-radius: 0 !important;
          border: none !important;
          background: white !important;
          color: #1F6AE1 !important;
          font-weight: bold;
        }
        .leaflet-control-zoom a:hover {
          background: #F5F7FA !important;
        }
        .custom-marker {
          background: transparent !important;
          border: none !important;
        }
      `}</style>
    </div>
  );
};

export default Contact;