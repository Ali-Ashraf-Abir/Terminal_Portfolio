'use client';
import React, { useState, useEffect, useRef } from 'react';

export default function TerminalAbout() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);

  const terminalLines = [
    { type: 'command', text: '$ whoami' },
    { type: 'output', text: '> Ali Ashraf Abir' },
    { type: 'output', text: '> Full-Stack Web Developer | React.js Specialist' },
    { type: 'blank', text: '' },
    { type: 'command', text: '$ cat about.txt' },
    { type: 'output', text: '> Loading profile...' },
    { type: 'blank', text: '' },
    { type: 'section', text: '━━━ SYSTEM PROFILE ━━━' },
    { type: 'output', text: '> Computer Science & Engineering student at Dhaka City College' },
    { type: 'output', text: '> Expected Graduation: December 2025' },
    { type: 'output', text: '> Location: Dhaka, Bangladesh' },
    { type: 'blank', text: '' },
    { type: 'section', text: '━━━ EXPERIENCE LOG ━━━' },
    { type: 'output', text: '> [CodencoIt] Frontend Developer - 6 months' },
    { type: 'output', text: '  └─ Built complete HRMS for travel agency' },
    { type: 'output', text: '  └─ Architected 10+ integrated modules' },
    { type: 'output', text: '  └─ React.js, Redux, RESTful APIs' },
    { type: 'blank', text: '' },
    { type: 'output', text: '> [Tiki2] Freelance Frontend Developer' },
    { type: 'output', text: '  └─ TikTok-style rewards platform (China)' },
    { type: 'output', text: '  └─ Responsive UI components' },
    { type: 'output', text: '  └─ International team collaboration' },
    { type: 'blank', text: '' },
    { type: 'section', text: '━━━ TECH STACK ━━━' },
    { type: 'output', text: '> Frontend: React.js | Next.js | Redux | Three.js' },
    { type: 'output', text: '> Backend: Node.js | Express.js | MongoDB | PostgreSQL' },
    { type: 'output', text: '> Tools: Socket.io | Prisma | Firebase | Git' },
    { type: 'blank', text: '' },
    { type: 'section', text: '━━━ FEATURED PROJECTS ━━━' },
    { type: 'output', text: '> [1] HRMS - Enterprise HR Management System' },
    { type: 'output', text: '> [2] TeamVault - Discord-like Workspace Platform' },
    { type: 'output', text: '> [3] Freshies - B2B Restaurant Management' },
    { type: 'output', text: '> [4] Game Galaxy - Gaming Community Platform' },
    { type: 'blank', text: '' },
    { type: 'section', text: '━━━ ACHIEVEMENTS UNLOCKED ━━━' },
    { type: 'output', text: '> ★ Programming Hero Black Belt (59/60)' },
    { type: 'output', text: '> ★ 11 Assignments Completed' },
    { type: 'output', text: '> ★ Full-Stack Certification' },
    { type: 'blank', text: '' },
    { type: 'command', text: '$ status --current' },
    { type: 'success', text: '> STATUS: Available for opportunities' },
    { type: 'success', text: '> MODE: Ready to build innovative solutions' },
    { type: 'cursor', text: '> _' }
  ];

  // Intersection Observer to detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Start animation only when section is actually visible
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3 && !hasStarted) {
            setHasStarted(true);
            setIsTyping(true);
          }
        });
      },
      {
        threshold: [0, 0.3, 0.5], // Multiple thresholds for better detection
        rootMargin: '-100px 0px' // Start only when 100px past viewport top
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasStarted]);

  // Typing animation
  useEffect(() => {
    if (!hasStarted) return;

    if (currentLine < terminalLines.length) {
      const line = terminalLines[currentLine];
      const delay = line.type === 'blank' ? 100 : line.type === 'command' ? 800 : 300;
      
      const timer = setTimeout(() => {
        setCurrentLine(currentLine + 1);
      }, delay);

      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [currentLine, hasStarted]);

  // Glitch effect
  useEffect(() => {
    if (!hasStarted) return;

    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 100);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, [hasStarted]);

  return (
    <div ref={sectionRef} className="min-h-screen bg-black text-green-500 font-mono p-4 md:p-8 relative overflow-hidden">
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

      {/* Vignette effect */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.7) 100%)'
      }}></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Terminal header */}
        <div className="bg-gray-900 border-2 border-green-500 rounded-t-lg p-3 flex items-center space-x-2 shadow-lg shadow-green-500/50">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 text-center text-green-400 text-sm">
            terminal@abir:~
          </div>
        </div>

        {/* Terminal content */}
        <div className="bg-black border-2 border-t-0 border-green-500 rounded-b-lg p-6 md:p-8 min-h-[600px] shadow-lg shadow-green-500/50">
          {!hasStarted ? (
            <div className="flex items-center justify-center h-[500px]">
              <div className="text-green-400 animate-pulse">
                <span className="text-2xl">▶</span> Scroll to activate terminal...
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              {terminalLines.slice(0, currentLine).map((line, index) => (
                <div 
                  key={index}
                  className={`
                    ${line.type === 'command' ? 'text-green-400 font-bold' : ''}
                    ${line.type === 'section' ? 'text-green-300 font-bold mt-4 mb-2' : ''}
                    ${line.type === 'success' ? 'text-green-400 font-bold animate-pulse' : ''}
                    ${line.type === 'blank' ? 'h-2' : ''}
                    ${line.type === 'cursor' ? 'text-green-400 animate-pulse inline-block' : ''}
                    ${glitchActive && Math.random() > 0.7 ? 'glitch' : ''}
                    transition-all duration-75
                  `}
                >
                  {line.text}
                </div>
              ))}
              
              {isTyping && currentLine < terminalLines.length && (
                <span className="inline-block w-2 h-4 bg-green-500 animate-pulse ml-1"></span>
              )}
            </div>
          )}
        </div>

        {/* Bottom info bar */}
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-green-400 justify-center">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>SYSTEM: {hasStarted ? 'ONLINE' : 'STANDBY'}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>📧 AliAshrafAbir19@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>📍 Dhaka, Bangladesh</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }

        .glitch {
          animation: glitch 0.3s;
          text-shadow: 2px 0 #ff00de, -2px 0 #00ffff;
        }

        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}