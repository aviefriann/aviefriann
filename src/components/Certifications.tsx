import React, { useEffect, useRef, useState } from 'react';
import { Award, Calendar} from 'lucide-react';

const Certifications: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const certifications = [
    {
      title: 'Cisco Networking Academi - CCNA Routing and Switching',
      issuer: '',
      date: '',
      description: 'Introduction to Network',
      credentialId: ''
    },
    {
      title: 'K3 General Expert Certification',
      issuer: '',
      date: '',
      description: 'Occupational Health & Safety',
      credentialId: ''
    },
    {
      title: 'Field Industrial Practice Certification',
      issuer: '',
      date: '',
      description: 'Computer & Network Maintenance',
      credentialId: ''
    },
    {
      title: 'IT Support Training',
      issuer: '',
      date: '2019',
      description: 'Resolved common IT issues.',
      credentialId: ''
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-l from-orange-900/5 to-pink-900/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-400 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Professional certifications and credentials that validate my expertise in various technologies
          </p>
        </div>

        {/* Card Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {certifications.map((cert, index) => (
            <div
              key={cert.credentialId}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-orange-400/20 shadow-xl hover:shadow-orange-400/10 hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Top */}
              <div>
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-orange-400 mr-2" />
                  <h4 className="text-lg font-bold text-white leading-snug">{cert.title}</h4>
                </div>
                <p className="text-orange-400 font-medium mb-2">{cert.issuer}</p>
                <p className="text-gray-300 text-sm mb-3">{cert.description}</p>
              </div>

              {/* Card Bottom */}
              <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                  <span>ID: {cert.credentialId}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
