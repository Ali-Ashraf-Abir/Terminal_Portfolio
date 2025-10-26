'use client';
import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaHome, FaUser, FaCode, FaProjectDiagram, FaMailBulk } from 'react-icons/fa';

export default function TerminalFooter() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [glitchActive, setGlitchActive] = useState(false);
  const [statusBlink, setStatusBlink] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 100);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setStatusBlink(prev => !prev);
    }, 800);

    return () => clearInterval(blinkInterval);
  }, []);

  const socialLinks = [
    { icon: FaLinkedin, name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', username: '@yourprofile' },
    { icon: FaGithub, name: 'GitHub', url: 'https://github.com/yourprofile', username: '@yourprofile' },
    { icon: FaEnvelope, name: 'Email', url: 'mailto:AliAshrafAbir19@gmail.com', username: 'AliAshrafAbir19@gmail.com' },
    { icon: FaPhone, name: 'Phone', url: 'tel:+8801624969678', username: '+880 1624-969678' }
  ];

  const quickLinks = [
    { name: 'Home', command: '$ cd ~/', section: 'home', icon: FaHome },
    { name: 'About', command: '$ cat about.txt', section: 'about', icon: FaUser },
    { name: 'Skills', command: '$ cat skills.txt', section: 'skills', icon: FaCode },
    { name: 'Projects', command: '$ ls projects/', section: 'projects', icon: FaProjectDiagram },
    { name: 'Contact', command: '$ mail -s contact', section: 'contact', icon: FaMailBulk }
  ];

  const handleScrollToSection = (sectionId: any) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="bg-black text-green-500 font-mono relative overflow-hidden border-t-4 border-green-500 pt-12">
      {/* Scanlines effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #00ff00 2px, #00ff00 4px)',
        }}></div>
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#00ff00 1px, transparent 1px), linear-gradient(90deg, #00ff00 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      {/* Animated scanning line - top to bottom */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent animate-scan"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className={`text-2xl font-bold mb-4 ${glitchActive ? 'glitch' : ''}`}>
              <span className="text-green-400">ALI</span>
              <span className="text-green-300">_ABIR</span>
            </div>
            <p className="text-green-400 text-sm mb-4">
              &gt; Full-Stack Developer
            </p>
            <p className="text-green-500 text-xs leading-relaxed">
              Building innovative web solutions with modern technologies. Available for freelance projects and full-time opportunities.
            </p>
            <div className="mt-4 flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${statusBlink ? 'bg-green-500' : 'bg-green-700'} transition-colors`}></div>
              <span className="text-green-400 text-xs">STATUS: AVAILABLE</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-green-400 font-bold mb-4 text-sm">
              <span className="text-green-300">$</span> QUICK_LINKS
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <li key={index}>
                    <button
                      onClick={() => handleScrollToSection(link.section)}
                      className="group flex items-start space-x-2 text-green-500 hover:text-green-300 transition-colors text-sm text-left w-full"
                    >
                      <IconComponent className="mt-1 text-green-700 group-hover:text-green-500 transition-colors" />
                      <div>
                        <div className="group-hover:translate-x-1 transition-transform">
                          {link.name}
                        </div>
                        <div className="text-xs text-green-700 opacity-0 group-hover:opacity-100 transition-opacity">
                          {link.command}
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-1">
            <h3 className="text-green-400 font-bold mb-4 text-sm">
              <span className="text-green-300">$</span> CONNECT
            </h3>
            <ul className="space-y-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <li key={index}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-3 text-green-500 hover:text-green-300 transition-all"
                    >
                      <IconComponent className="text-xl group-hover:scale-110 transition-transform" />
                      <div className="text-xs">
                        <div className="font-bold">{social.name}</div>
                        <div className="text-green-700 group-hover:text-green-500 break-all">
                          {social.username}
                        </div>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* System Info */}
          <div className="md:col-span-1">
            <h3 className="text-green-400 font-bold mb-4 text-sm">
              <span className="text-green-300">$</span> SYSTEM_INFO
            </h3>
            <div className="space-y-2 text-xs">
              <div className="bg-gray-900 border border-green-500 rounded p-2">
                <div className="text-green-300 mb-1">LOCATION:</div>
                <div className="text-green-500">Dhaka, Bangladesh</div>
              </div>
              <div className="bg-gray-900 border border-green-500 rounded p-2">
                <div className="text-green-300 mb-1">LOCAL_TIME:</div>
                <div className="text-green-500 font-mono">
                  {currentTime.toLocaleTimeString('en-US', { 
                    hour12: false,
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                  })}
                </div>
              </div>
              <div className="bg-gray-900 border border-green-500 rounded p-2">
                <div className="text-green-300 mb-1">UPTIME:</div>
                <div className="text-green-500">24/7 ONLINE</div>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal Command Line */}
        <div className="border-t-2 border-green-500 pt-6 mb-6">
          <div className="bg-gray-900 border-2 border-green-500 rounded p-3 flex items-center space-x-2 shadow-lg shadow-green-500/30">
            <span className="text-green-400">guest@portfolio:~$</span>
            <span className="text-green-300 animate-pulse">_</span>
            <span className="text-green-500 text-sm ml-4">
              Type 'help' for available commands...
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-500/30 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-green-500 text-xs text-center md:text-left">
              <span className="text-green-700">&copy;</span> {new Date().getFullYear()} Ali Ashraf Abir. 
              <span className="text-green-700"> All rights reserved.</span>
            </div>

            {/* Tech Stack */}
            <div className="flex items-center space-x-4 text-xs">
              <span className="text-green-700">Built with:</span>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 bg-gray-900 border border-green-500 rounded text-green-400">
                  React.js
                </span>
                <span className="px-2 py-1 bg-gray-900 border border-green-500 rounded text-green-400">
                  Next.js
                </span>
                <span className="px-2 py-1 bg-gray-900 border border-green-500 rounded text-green-400">
                  Tailwind
                </span>
              </div>
            </div>

            {/* Version */}
            <div className="text-green-500 text-xs">
              <span className="text-green-700">v</span>1.0.0
              <span className="ml-2 text-green-700">|</span>
              <span className="ml-2 text-green-400">STABLE</span>
            </div>
          </div>
        </div>

        {/* Easter Egg - Hidden Command */}
        <div className="mt-6 text-center">
          <button
            onClick={() => alert('🎮 Easter Egg Found! "sudo make me a sandwich" 🥪')}
            className="text-green-700 hover:text-green-500 text-xs transition-colors"
          >
            [HIDDEN_COMMAND]
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(calc(100vh));
          }
        }

        .animate-scan {
          animation: scan 4s linear infinite;
        }

        @keyframes glitch {
          0%, 100% {
            transform: translate(0);
            text-shadow: 2px 0 #00ff00;
          }
          25% {
            transform: translate(-2px, 2px);
            text-shadow: -2px 0 #ff00de, 2px 0 #00ffff;
          }
          50% {
            transform: translate(2px, -2px);
            text-shadow: 2px 0 #00ffff, -2px 0 #ff00de;
          }
          75% {
            transform: translate(-2px, -2px);
            text-shadow: -2px 0 #00ff00, 2px 0 #ff00de;
          }
        }

        .glitch {
          animation: glitch 0.3s;
        }
      `}</style>
    </footer>
  );
}