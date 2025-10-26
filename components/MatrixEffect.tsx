'use client';
import { useEffect, useState } from 'react';

export default function MatrixBackground() {
  const [columns, setColumns] = useState<number[]>([]);

  useEffect(() => {
    // Dynamically set number of columns based on screen width
    const cols = Math.floor(window.innerWidth / 40);
    setColumns(Array.from({ length: cols }, (_, i) => i));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 via-black to-black"></div>

      {/* Matrix columns */}
      <div className="absolute inset-0 matrix-container">
        {columns.map((i) => (
          <div
            key={i}
            className="matrix-column"
            style={{
              left: `${(i / columns.length) * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              fontSize: `${Math.random() * 6 + 12}px`,
            }}
          >
            {'01\n'.repeat(40)}
          </div>
        ))}
      </div>

      {/* Scanlines overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34,197,94,0.08) 3px, rgba(34,197,94,0.08) 4px)',
        }}
      ></div>

      {/* Matrix animation styles */}
      <style jsx>{`
        .matrix-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .matrix-column {
          position: absolute;
          top: -100%;
          white-space: pre;
          color: rgba(107, 241, 156, 0.6);
          font-family: monospace;
          animation: matrixFall linear infinite;
          animation-duration: 5s;
          text-shadow: 0 0 8px rgba(107, 241, 156, 0.6);
        }

        @keyframes matrixFall {
          0% {
            transform: translateY(-100%);
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(100%);
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
}
