'use client';
import React, { useState, useEffect } from 'react';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiSocketdotio, SiNodedotjs, SiPrisma, SiPostgresql, SiMongodb } from 'react-icons/si';

const Skills = () => {
  const [glitchText, setGlitchText] = useState('SKILLS');
  const [isGlitching, setIsGlitching] = useState(false);

  const skills = [
    { Icon: SiReact, name: 'React', color: '#61DAFB', category: 'Frontend' },
    { Icon: SiNextdotjs, name: 'Next.js', color: '#FFFFFF', category: 'Frontend' },
    { Icon: SiTypescript, name: 'TypeScript', color: '#3178C6', category: 'Language' },
    { Icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4', category: 'Frontend' },
    { Icon: SiExpress, name: 'Express', color: '#FFFFFF', category: 'Backend' },
    { Icon: SiSocketdotio, name: 'Socket.io', color: '#FFFFFF', category: 'Backend' },
    { Icon: SiNodedotjs, name: 'Node.js', color: '#339933', category: 'Backend' },
    { Icon: SiPrisma, name: 'Prisma', color: '#2D3748', category: 'Database' },
    { Icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1', category: 'Database' },
    { Icon: SiMongodb, name: 'MongoDB', color: '#47A248', category: 'Database' },
  ];

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?SKILLS';
      let iterations = 0;

      const glitchTimer = setInterval(() => {
        setGlitchText(prev =>
          prev.split('').map((char, i) => {
            if (i < iterations) return 'SKILLS'[i];
            return chars[Math.floor(Math.random() * chars.length)];
          }).join('')
        );

        iterations += 1 / 3;

        if (iterations >= 6) {
          clearInterval(glitchTimer);
          setGlitchText('SKILLS');
          setIsGlitching(false);
        }
      }, 50);
    }, 4000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="relative bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
      
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.7) 100%)'
      }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Terminal Header */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="border-2 border-green-500 bg-black/80 backdrop-blur-sm inline-block">
            <div className="border-b-2 border-green-500 px-4 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-green-500 text-xs sm:text-sm font-mono ml-2">skills.sh</span>
            </div>
            <div className="px-4 py-3 sm:py-4">
              <div className="flex items-center gap-2 font-mono text-green-500">
                <span className="text-xl sm:text-2xl lg:text-3xl">{'>'}</span>
                <h2 className={`text-2xl sm:text-3xl lg:text-5xl font-bold tracking-wider ${isGlitching ? 'animate-pulse' : ''}`}
                  style={{
                    textShadow: isGlitching ? '0 0 10px #00ff00, 0 0 20px #00ff00' : '0 0 5px #00ff00',
                  }}>
                  {glitchText}
                </h2>
                <span className="text-xl sm:text-2xl lg:text-3xl animate-pulse">_</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.Icon;
            return (
              <div
                key={skill.name}
                className="group relative border-2 border-green-500/30 bg-black/60 backdrop-blur-sm hover:border-green-500 transition-all duration-300 overflow-hidden"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Glitch effect on hover */}
                <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-green-500"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-green-500"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-green-500"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-green-500"></div>

                <div className="p-4 sm:p-6 flex flex-col items-center justify-center gap-3 sm:gap-4 relative z-10">
                  <div className="relative">
                    <Icon
                      className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 transition-all duration-300 group-hover:scale-110"
                      style={{ color: skill.color }}
                    />
                    {/* Glow effect */}
                    <div
                      className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                      style={{ backgroundColor: skill.color }}
                    ></div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-green-500 font-mono text-xs sm:text-sm lg:text-base font-semibold group-hover:text-green-400 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-green-700 font-mono text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      [{skill.category}]
                    </p>
                  </div>
                </div>

                {/* Scan line effect on hover */}
                <div className="absolute inset-x-0 h-px bg-green-500 opacity-0 group-hover:opacity-100 group-hover:animate-scan"></div>
              </div>
            );
          })}
        </div>

        {/* Terminal Footer */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-green-500/60 font-mono text-xs sm:text-sm">
            {'>'} System ready. All modules loaded successfully.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            top: 0;
          }
          100% {
            top: 100%;
          }
        }
        .animate-scan {
          animation: scan 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Skills;