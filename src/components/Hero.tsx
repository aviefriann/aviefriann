import React from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import photoAvief from "../assets/images/photo-avief.jpg";

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-950/30"></div>

      {/* Network Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-orange-400/20"></div>
          ))}
        </div>
      </div>

      {/* Floating Network Nodes */}
      <div className="absolute inset-0">
        <div className="floating-node absolute top-1/4 left-1/4 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
        <div className="floating-node absolute top-1/3 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-1000"></div>
        <div className="floating-node absolute bottom-1/3 left-1/3 w-4 h-4 bg-orange-300 rounded-full animate-pulse delay-2000"></div>
        <div className="floating-node absolute bottom-1/4 right-1/3 w-2 h-2 bg-pink-300 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
        <div className="w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              {/* <Server className="w-8 h-8 text-orange-400 mr-3" /> */}
              <span className="text-orange-400 text-sm font-medium tracking-wider uppercase">Network Engineer</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white">I'am</span>
              <span className="block bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Avief Rian</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              IT Infrastructure & Network Administrator | Experienced in System Management, and Network Optimization
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-orange-500/25">
                View My Work
              </button>
              <button className="border border-orange-400/50 text-orange-400 px-8 py-3 rounded-full font-medium hover:bg-orange-400 hover:text-gray-900 transition-all duration-200">
                Contact Me
              </button>
            </div> */}

            <div className="flex space-x-6 justify-center lg:justify-start">
              <a
                href="https://github.com/aviefriann"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/aviefrian"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:aviefriann@gmail.com"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative order-first lg:order-last animate-fade-in-right">
            <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-orange-400/30 shadow-lg">
              <img src={photoAvief} alt="Avief Rian" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-900/50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button onClick={scrollToNext} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-orange-400 animate-bounce hover:text-orange-300 transition-colors duration-200 z-50">
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
