'use client';
import React, { useState, useEffect } from 'react';

export default function TerminalLoader() {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('INITIALIZING');
  const [dots, setDots] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const loadingStages = [
    { percent: 15, text: 'LOADING MODULES' },
    { percent: 35, text: 'CONNECTING TO SERVER' },
    { percent: 55, text: 'FETCHING DATA' },
    { percent: 75, text: 'COMPILING ASSETS' },
    { percent: 95, text: 'FINALIZING' },
    { percent: 100, text: 'COMPLETE' }
  ];

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsComplete(true);
          return 100;
        }
        return prev + 2;
      });
    }, 40); // 2 seconds total (100 / 2 * 40ms = 2000ms)

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    // Update loading text based on progress
    const currentStage = loadingStages.find(stage => progress <= stage.percent);
    if (currentStage) {
      setLoadingText(currentStage.text);
    }
  }, [progress]);

  useEffect(() => {
    // Animated dots
    const dotsInterval = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? '' : prev + '.'));
    }, 300);

    return () => clearInterval(dotsInterval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono flex items-center justify-center relative overflow-hidden">
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

      {/* Rotating border effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent animate-scan"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent animate-scan-reverse"></div>
      </div>

      {/* Main loader content */}
      <div className="relative z-10 w-full max-w-2xl px-8">
        {/* Terminal window header */}
        <div className="bg-gray-900 border-2 border-green-500 rounded-t-lg p-3 flex items-center space-x-2 shadow-lg shadow-green-500/50">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <div className="flex-1 text-center text-green-400 text-sm">
            system@loader:~
          </div>
        </div>

        {/* Terminal content */}
        <div className="bg-black border-2 border-t-0 border-green-500 rounded-b-lg p-8 shadow-lg shadow-green-500/50">
          {/* ASCII Logo */}
          <div className="text-center mb-8 text-green-400 text-xs md:text-sm animate-pulse">
            <pre className="inline-block">
{`
   ▄████████    ▄████████ 
  ███    ███   ███    ███ 
  ███    ███   ███    ███ 
  ███    ███   ███    ███ 
▀███████████ ▀███████████ 
  ███    ███   ███    ███ 
  ███    ███   ███    ███ 
  ███    █▀    ███    █▀  
`}
            </pre>
          </div>

          {/* Loading text */}
          <div className="text-center mb-6">
            <div className="text-xl md:text-2xl font-bold text-green-400 mb-2 glitch-text">
              {loadingText}<span className="inline-block w-16 text-left">{dots}</span>
            </div>
            <div className="text-sm text-green-300">
              {progress}% COMPLETE
            </div>
          </div>

          {/* Progress bar */}
          <div className="mb-6">
            <div className="w-full bg-gray-900 h-6 rounded border-2 border-green-500 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-600 via-green-500 to-green-400 transition-all duration-100 relative overflow-hidden"
                style={{ width: `${progress}%` }}
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shine"></div>
              </div>
            </div>
          </div>

          {/* System logs */}
          <div className="space-y-1 text-xs md:text-sm">
            <div className={`transition-opacity duration-300 ${progress > 10 ? 'opacity-100' : 'opacity-0'}`}>
              <span className="text-green-400">✓</span> System initialized
            </div>
            <div className={`transition-opacity duration-300 ${progress > 30 ? 'opacity-100' : 'opacity-0'}`}>
              <span className="text-green-400">✓</span> Modules loaded successfully
            </div>
            <div className={`transition-opacity duration-300 ${progress > 50 ? 'opacity-100' : 'opacity-0'}`}>
              <span className="text-green-400">✓</span> Server connection established
            </div>
            <div className={`transition-opacity duration-300 ${progress > 70 ? 'opacity-100' : 'opacity-0'}`}>
              <span className="text-green-400">✓</span> Data fetched successfully
            </div>
            <div className={`transition-opacity duration-300 ${progress > 90 ? 'opacity-100' : 'opacity-0'}`}>
              <span className="text-green-400">✓</span> Assets compiled
            </div>
            {isComplete && (
              <div className="mt-4 text-center animate-pulse">
                <span className="text-green-400 text-lg font-bold">► SYSTEM READY ◄</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes scan-reverse {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-scan {
          animation: scan 2s linear infinite;
        }

        .animate-scan-reverse {
          animation: scan-reverse 2s linear infinite;
        }

        .animate-shine {
          animation: shine 1s ease-in-out infinite;
        }

        .glitch-text {
          animation: glitch-anim 0.3s infinite;
        }

        @keyframes glitch-anim {
          0%, 100% {
            text-shadow: 0 0 10px #00ff00;
          }
          25% {
            text-shadow: -2px 0 10px #00ff00, 2px 0 10px #ff00de;
          }
          50% {
            text-shadow: 2px 0 10px #00ff00, -2px 0 10px #00ffff;
          }
          75% {
            text-shadow: 0 0 10px #00ff00;
          }
        }
      `}</style>
    </div>
  );
}