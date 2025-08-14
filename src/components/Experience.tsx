import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
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

  const experiences = [
    {
      title: 'IT Infrastrucuture Lead',
      company: 'PT Konvergensi Mitra Solusi',
      location: 'Yogyakarta, Indonesia',
      period: '2022 - 2024',
      description: 'Led IT infrastructure initiatives, ensuring secure, high-availability systems across Data Centers. Expert in network/server maintenance, ISO 27001 compliance, and incident documentation.',
      achievements: [
        ' Planned and directed IT infrastructure projects, managing teams for network and hardware maintenance across server applications and Data Centers.',
        'Oversaw server and Data Center software configuration and maintenance, including LAN, WAM, routers, switches, firewalls, and physical servers',
        'Established and implemented data security policies aligned with ISO 27001 standards.',
        'Maintained uptime and availability for critical infrastructure, including backup power solutions.',
        'Developed documentation for Incident Reports, Reason for Outage, and Investigation Reports.'
      ]
    },
    {
      title: 'IT Supervisor',
      company: 'PT Konvergensi Mitra Solusi',
      location: 'Yogyakarta, Indonesia',
      period: '2020 - 2022',
      description: 'Provided Tier 2 support, configured networking devices, produced IT reports, and ensured operational continuity through real-time system troubleshooting.',
      achievements: [
        'Provided Tier 2 suppoer, resolving network, server, and hardware/software issues.',
        'Configured networking devices (Mikrotik, Unifi, Cisco) and installed routers, switches, access points, and servers.',
        'Created IT team reports, including helpdesk ticketing challenges, SLA compliance, and system monitoring.',
        'Real-time monitoring and troubleshooting of telephony systems, CRM, and other essential applications to ensure operational continuity.'
      ]
    },
    {
      title: 'IT Support & Helpdesk',
      company: 'PT Konvergensi Mitra Solusi',
      location: 'Yogyakarta, Indonesia',
      period: '2019 - 2020',
      description: 'Provided Tier 1 support for hardware, OS, and network issues, ensuring smooth operations through timely troubleshooting and ticket resolution.',
      achievements: [
        'Provided Tier 1 support for hardware issues (computers, headsets, phones, printers).',
        'Installed and configured OS (Ubuntu, Debian, CentOS, Windows) for operations.',
        'Managed software installations, updates, and network troubleshooting for consistent connectivity.',
        'Prioritized and resolved tickets based on urgency and importance.'
      ]
    },
    {
      title: 'IT Support (Internship)',
      company: 'PT Eastparc Hotel Tbk',
      location: 'Yogyakarta, Indonesia',
      period: 'April - October 2019',
      description: 'Resolved common IT issues, performed hardware maintenance, and ensured reliable connectivity through routine equipment checks.',
      achievements: [
        'Troubleshot common issues (internet, printers, software), conducted hardware maintenance, and supported software installations.',
        'Conducted routine checks on hardware, particularly WiFi Access Points, to ensure connectivity across the property.'
      ]
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-l from-orange-900/5 to-pink-900/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-400 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A journey through my professional career in network engineering.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-orange-400 to-pink-400"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-start lg:items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Node */}
                <div className="absolute left-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-4 h-4 bg-orange-400 rounded-full border-4 border-gray-900 z-10"></div>

                {/* Content */}
                <div className={`lg:w-1/2 ml-16 lg:ml-0 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-orange-400/20 shadow-2xl hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Briefcase className="w-6 h-6 text-orange-400" />
                        <div>
                          <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                          <h4 className="text-orange-400 font-medium">{exp.company}</h4>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                    <div className="space-y-2">
                      <h5 className="font-semibold text-orange-400 mb-3">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternate layout */}
                <div className="hidden lg:block lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;