import React, { useEffect, useRef, useState } from 'react';
import { CloudCog, DatabaseBackup, Command, Database, Network } from 'lucide-react';

const Tools: React.FC = () => {
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

  const toolCategories = [
    {
      title: 'Networking & Monitoring',
      icon: Network,
      tools: ['Winbox', 'Zabbix', 'PRTG', 'Grafana', 'Wireshark', 'Zerotier', 'Wireguard'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Virtualization & Cloud',
      icon: CloudCog,
      tools: ['Proxmox', 'VMWare', 'VirtualBox'],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Storage & Backup',
      icon: DatabaseBackup,
      tools: ['Synology', 'TrueNAS', 'Drobo', 'Clonezilla', ' Gparted', 'EaseUS'],
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Databases & Administration',
      icon: Database,
      tools: ['DBeaver', 'Heidisql', 'Navicat'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Others',
      icon: Command,
      tools: ['GLPI', 'SnipeIT', 'CMDBuild', 'Powershell ISE', 'FileZilla', 'MobaXterm', 'WinSCP', 'PuTTY'],
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="tools"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-900/10 to-pink-900/10"></div>

      {/* Skills Section */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Tools Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-400 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Technologies and tools I use to build robust, scalable network engineer.
          </p>
        </div>
        <div className={` ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} delay-500`}>
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-orange-400/20 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Skills</h3>
              <p className="text-gray-300">Technical Proficiency</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Networking: Extensive knowledge of network protocols and hardware, including Mikrotik, Unifi , Cisco, and network troubleshooting tools.',
                'System Administration: Experienced in managing virtual and physical servers, network infrastructure, backup strategies, and ISO-compliant security protocols.',
                'Virtualization: Skilled in Proxmox, VMWare, and VirtualBox environments, with experience in server clustering and high availability configurations',
                'Monitoring & Automation: Proficient in Zabbix, Grafana, The Dude, and automation through Cron and rsync'
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-lg p-4 border border-orange-400/30 hover:border-orange-400/50 transition-colors duration-200"
                >
                  <h4 className="font-semibold text-white text-center">{skill}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-orange-400/20 shadow-2xl hover:scale-105 transition-all duration-300 hover:border-orange-400/40 h-full">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} p-3 mr-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {category.tools.map((tool) => (
                      <div
                        key={tool}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/30 border border-gray-700/50 hover:border-orange-400/30 transition-colors duration-200"
                      >
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {tool}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tools;