import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const About: React.FC = () => {
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Calendar, label: 'Years Experience', value: '5+' },
    { icon: Award, label: 'Certifications', value: '4' },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-900/10 to-pink-900/10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-400 mx-auto"></div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Big Card */}
          <div className={`lg:col-span-2 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/20 shadow-2xl flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-orange-400">
                Network Engineer
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                IT professional with over 5 years of experience in managing network systems, server infrastructure, and daily IT operations.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I focus on creating stable and secure environments by implementing efficient processes, improving system reliability, and supporting users and teams. My experience includes server virtualization, network setup, troubleshooting, and maintaining data security standards. I enjoy finding practical solutions to everyday IT challenges and am committed to keeping systems running smoothly to support business needs.
              </p>

              <div className="flex flex-wrap gap-3 mt-auto">
                {['Network Architecture', 'Cloud Solutions', 'Server Virtualization', 'Network Security', 'Server Monitoring'].map((skill) => (
                  <span
                    key={skill}
                    className="bg-gradient-to-r from-orange-500/20 to-pink-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-medium border border-orange-400/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Top Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-orange-400/20 shadow-xl hover:scale-105 transition-transform duration-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
                      }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="w-8 h-8 text-orange-400" />
                      <span className="text-3xl font-bold text-white">{stat.value}</span>
                    </div>
                    <p className="text-gray-300 font-medium">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Bottom Personal Info */}
            <div
              className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-orange-400/20 shadow-xl ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
              style={{ animationDelay: `0.2s` }}
            >
              <h4 className="text-xl font-bold mb-4 text-orange-400">Personal Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-orange-400" />
                  <span className="text-gray-300">Yogyakarta, Indonesia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-5 h-5 text-orange-400" />
                  <span className="text-gray-300">Bachelors in Informatics Engineering Concentration in Network Computing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
