'use client';
import React, { useState, useEffect } from 'react';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiJavascript, SiSocketdotio, SiNodedotjs, SiPrisma, SiPostgresql, SiMongodb, SiGithub } from 'react-icons/si';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [glitchText, setGlitchText] = useState('PROJECTS');
  const [isGlitching, setIsGlitching] = useState(false);
  const [direction, setDirection] = useState(0);

  const techIcons = {
    'React': SiReact,
    'Next.js': SiNextdotjs,
    'TypeScript': SiTypescript,
    'Tailwind CSS': SiTailwindcss,
    'Express': SiExpress,
    'Socket.io': SiSocketdotio,
    'Node.js': SiNodedotjs,
    'Prisma': SiPrisma,
    'PostgreSQL': SiPostgresql,
    'MongoDB': SiMongodb,
    'JavaScript': SiJavascript,
  };

  const projects = [
    {
      title: 'TeamVault',
      description: 'A full-stack real-time messaging platform with WebSocket support, user authentication, and message persistence.',
      stack: ['React', 'Node.js', 'Socket.io', 'Express', 'PostGreSQL', "Prisma", "Next.JS"],
      github: 'https://github.com/Ali-Ashraf-Abir/TeamVault-Frontend',
      live: '#',
      features: ['Real-time messaging', 'User authentication', 'Room creation', 'Message history', 'MultiTenant System', "Lobby Chats"],
      images: [
        'https://i.ibb.co.com/vCpGr4GT/banner.png', // Main banner
        'https://i.ibb.co.com/0RB7PTfp/invite.png',
        'https://i.ibb.co.com/NdJGNP8b/dashboard.png',
      ],
      color: '#61DAFB'
    },
    {
      title: 'Freshies',
      description: 'Modern admin dashboard for e-commerce management with analytics, inventory tracking, and order processing.',
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
      github: 'https://github.com/Ali-Ashraf-Abir/Freshies',
      live: 'https://freshies-weld.vercel.app/',
      features: ['Sales analytics', 'Inventory management', 'Order tracking', 'User management'],
      images: [
        'https://i.ibb.co.com/ds63Fy0Q/banner.png',
        'https://i.ibb.co.com/XZgjFfmd/FoodList.png',

      ],
      color: '#fbfcfdff'
    },
    {
      title: 'GameGalaxy',
      description: 'A very simple website I build when i started to learn web devlopment,just some basic login and crud operations going on here',
      stack: ['React', 'JavaScript', 'Express', 'MongoDB'],
      github: 'https://github.com/Ali-Ashraf-Abir/Game-Galaxy-Client',
      live: 'https://gaming-galaxy-e5eb6.web.app/',
      features: ['Add Create Delete Toys', 'Login Using Firebase', 'Protected Routes Testings', 'Notifications'],
      images: [
        'https://i.ibb.co.com/BVJbVMNL/banner.png',
        'https://i.ibb.co.com/zT8D3Hqf/dashboard.png',

      ],
      color: '#47A248'
    },
    // {
    //   title: 'Portfolio Website Builder',
    //   description: 'Dynamic portfolio generator with customizable templates, CMS integration, and SEO optimization.',
    //   stack: ['Next.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    //   github: 'https://github.com/yourusername/portfolio-builder',
    //   live: 'https://portfolio-builder-demo.com',
    //   features: ['Template customization', 'CMS integration', 'SEO optimized', 'Responsive design'],
    //   images: [
    //     'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop',
    //     'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop',
    //     'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400&h=300&fit=crop',
    //   ],
    //   color: '#06B6D4'
    // },
  ];

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?PROJECTS';
      let iterations = 0;

      const glitchTimer = setInterval(() => {
        setGlitchText(prev =>
          prev.split('').map((char, i) => {
            if (i < iterations) return 'PROJECTS'[i];
            return chars[Math.floor(Math.random() * chars.length)];
          }).join('')
        );

        iterations += 1 / 2;

        if (iterations >= 8) {
          clearInterval(glitchTimer);
          setGlitchText('PROJECTS');
          setIsGlitching(false);
        }
      }, 50);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  useEffect(() => {
    setSelectedImage(0);
  }, [currentProject]);

  const nextProject = () => {
    setDirection(1);
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentProject];

  return (
    <div className="relative bg-black py-12 sm:py-16 lg:py-6 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
        <div className="mb-8 sm:mb-12">
          <div className="border-2 border-green-500 bg-black/80 backdrop-blur-sm inline-block">
            <div className="border-b-2 border-green-500 px-4 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-green-500 text-xs sm:text-sm font-mono ml-2">projects.sh</span>
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

        {/* Project Counter */}
        <div className="text-center mb-6">
          <p className="text-green-500 font-mono text-sm">
            [{currentProject + 1}/{projects.length}] Loading project data...
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 z-20 bg-black border-2 border-green-500 p-2 sm:p-3 hover:bg-green-500/20 transition-all duration-300 group"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 z-20 bg-black border-2 border-green-500 p-2 sm:p-3 hover:bg-green-500/20 transition-all duration-300 group"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 group-hover:scale-110 transition-transform" />
          </button>

          {/* Bento Box Layout */}
          <div
            key={currentProject}
            className="border-2 border-green-500 bg-black/80 backdrop-blur-sm overflow-hidden animate-fadeIn relative"
          >
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-400 z-10"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green-400 z-10"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-400 z-10"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-400 z-10"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left Column - Images & Tech Stack */}
              <div className="lg:col-span-5 border-b-2 lg:border-b-0 lg:border-r-2 border-green-500/30 flex flex-col">
                {/* Main Banner Image */}
                <div className="relative aspect-video lg:aspect-[4/3] border-b-2 border-green-500/30 overflow-hidden group">
                  <img
                    src={project.images[selectedImage]}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                  {/* Image glitch effect overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 0, 0.03) 2px, rgba(0, 255, 0, 0.03) 4px)',
                    }}>
                  </div>

                  {/* Image counter */}
                  <div className="absolute top-4 right-4 bg-black/80 border border-green-500 px-2 py-1 text-green-500 font-mono text-xs">
                    {selectedImage + 1}/{project.images.length}
                  </div>
                </div>

                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-3 gap-2 p-4 border-b-2 lg:border-b-2 border-green-500/30">
                  {project.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`relative aspect-video border-2 overflow-hidden transition-all duration-300 ${selectedImage === i
                        ? 'border-green-500 scale-95'
                        : 'border-green-500/30 hover:border-green-500/60'
                        }`}
                    >
                      <img
                        src={img}
                        alt={`${project.title} thumbnail ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {selectedImage === i && (
                        <div className="absolute inset-0 bg-green-500/20"></div>
                      )}
                    </button>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="p-4 sm:p-6 flex-1 max-h-[200px] overflow-y-auto scroll-terminal">
                  <h4 className="text-green-500 font-mono text-base sm:text-lg mb-4 border-b-2 border-green-500/30 pb-2">
                    {'>'} Tech Stack
                  </h4>

                  <div className="flex flex-col gap-3">
                    {project.stack.map((tech, i) => {
                      const Icon = techIcons[tech];
                      return (
                        <div
                          key={i}
                          className="group relative border-2 border-green-500/30 p-3 hover:border-green-500 transition-all duration-300 bg-black/40"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        >
                          <div className="flex items-center gap-3">
                            {Icon && (
                              <div className="relative">
                                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 group-hover:scale-110 transition-transform" />
                                <div
                                  className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-30 transition-opacity"
                                  style={{ backgroundColor: project.color }}
                                ></div>
                              </div>
                            )}
                            <span className="text-green-500 font-mono text-xs sm:text-sm group-hover:text-green-400 transition-colors">
                              {tech}
                            </span>
                          </div>

                          {/* Small corner brackets */}
                          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-green-500"></div>
                          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-green-500"></div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column - Project Info */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-500 font-mono mb-4"
                    style={{ textShadow: '0 0 10px rgba(0, 255, 0, 0.3)' }}>
                    {project.title}
                  </h3>

                  <p className="text-green-400/80 font-mono text-sm sm:text-base mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features Grid */}
                  <div className="mb-8">
                    <h4 className="text-green-500 font-mono text-base sm:text-lg mb-4 border-b-2 border-green-500/30 pb-2">
                      {'>'} Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 text-green-500/70 font-mono text-xs sm:text-sm">
                          <span className="text-green-500 mt-1">▹</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3 sm:gap-4 pt-6 border-t-2 border-green-500/30">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border-2 border-green-500 px-4 sm:px-6 py-2 sm:py-3 text-green-500 font-mono text-sm hover:bg-green-500 hover:text-black transition-all duration-300 group"
                  >
                    <SiGithub className="w-4 h-4" />
                    <span>Source Code</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border-2 border-green-500 px-4 sm:px-6 py-2 sm:py-3 bg-green-500 text-black font-mono text-sm hover:bg-green-400 transition-all duration-300 group"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentProject ? 1 : -1);
                setCurrentProject(i);
              }}
              className={`transition-all duration-300 ${i === currentProject
                ? 'w-8 h-2 bg-green-500'
                : 'w-2 h-2 bg-green-500/30 hover:bg-green-500/60'
                }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>

        {/* Terminal Footer */}
        <div className="mt-8 text-center">
          <p className="text-green-500/60 font-mono text-xs sm:text-sm">
            {'>'} Use arrows to navigate projects | Click thumbnails to preview
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(${direction > 0 ? '20' : '-20'}px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Projects;