'use client';
import React, { useState, useEffect, useRef } from 'react';

export default function TerminalContact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isGlitching, setIsGlitching] = useState(false);
    const [currentField, setCurrentField] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');
    const [terminalOutput, setTerminalOutput] = useState([]);
    const [glitchActive, setGlitchActive] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const sectionRef = useRef(null);
    const outputEndRef = useRef(null);
    const [glitchText, setGlitchText] = useState('CONTACT_ME');
    const [isTerminalVisible, setIsTerminalVisible] = useState(false);
    const terminalRef = useRef(null);
    
    // Intersection Observer for terminal visibility
    useEffect(() => {
        const terminalObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsTerminalVisible(entry.isIntersecting);
                });
            },
            { threshold: 0.1 }
        );

        if (terminalRef.current) {
            terminalObserver.observe(terminalRef.current);
        }

        return () => {
            if (terminalRef.current) {
                terminalObserver.unobserve(terminalRef.current);
            }
        };
    }, []);

    // Intersection Observer for section
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.3 && !hasStarted) {
                        setHasStarted(true);
                        addTerminalLine('> System online. Contact form initialized...', 'success');
                        addTerminalLine('> Ready to receive transmission.', 'output');
                    }
                });
            },
            {
                threshold: [0, 0.3, 0.5],
                rootMargin: '-100px 0px'
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

    // Glitch effect
    useEffect(() => {
        const glitchInterval = setInterval(() => {
            setGlitchActive(true);
            setTimeout(() => setGlitchActive(false), 100);
        }, 4000);

        return () => clearInterval(glitchInterval);
    }, []);

    // Auto scroll to bottom (only when terminal is visible)
    useEffect(() => {
        if (isTerminalVisible && outputEndRef.current) {
            outputEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, [terminalOutput, isTerminalVisible]);

    const addTerminalLine = (text, type = 'output') => {
        setTerminalOutput(prev => [...prev, { text, type, timestamp: Date.now() }]);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFocus = (fieldName) => {
        setCurrentField(fieldName);
        addTerminalLine(`> Field "${fieldName}" selected...`, 'info');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        addTerminalLine('$ submit --contact-form', 'command');
        addTerminalLine('> Validating data...', 'output');

        setTimeout(() => {
            addTerminalLine('> Validation: SUCCESS', 'success');
            addTerminalLine('> Encrypting message...', 'output');
        }, 500);

        setTimeout(() => {
            addTerminalLine('> Establishing secure connection...', 'output');
            addTerminalLine('> Transmitting data packets...', 'output');
        }, 1000);

        setTimeout(() => {
            addTerminalLine('> Transmission complete!', 'success');
            addTerminalLine('> Message received. I\'ll get back to you soon!', 'success');
            setSubmitStatus('success');
            setIsSubmitting(false);

            // Here you would actually send the data to your backend
            console.log('Form data:', formData);

            // Reset form
            setTimeout(() => {
                setFormData({ name: '', email: '', message: '' });
                setSubmitStatus('');
            }, 3000);
        }, 2000);
    };

    useEffect(() => {
        const glitchInterval = setInterval(() => {
            setIsGlitching(true);
            const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?CONTACT_ME';
            let iterations = 0;

            const glitchTimer = setInterval(() => {
                setGlitchText(prev =>
                    prev.split('').map((char, i) => {
                        if (i < iterations) return 'CONTACT_ME'[i];
                        return chars[Math.floor(Math.random() * chars.length)];
                    }).join('')
                );

                iterations += 1 / 2;

                if (iterations >= 8) {
                    clearInterval(glitchTimer);
                    setGlitchText('CONTACT_ME');
                    setIsGlitching(false);
                }
            }, 50);
        }, 5000);

        return () => clearInterval(glitchInterval);
    }, []);
    const contactMethods = [
        { icon: '📧', label: 'Email', value: 'AliAshrafAbir19@gmail.com', link: 'mailto:AliAshrafAbir19@gmail.com' },
        { icon: '📱', label: 'Phone', value: '+880 1624-969678', link: 'tel:+8801624969678' },
        { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/yourprofile', link: 'https://linkedin.com/in/yourprofile' },
        { icon: '💻', label: 'GitHub', value: 'github.com/yourprofile', link: 'https://github.com/yourprofile' }
    ];

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


            <div className="max-w-6xl mx-auto relative z-10">
                <div className="mb-8 sm:mb-12">
                    <div className="border-2 border-green-500 bg-black/80 backdrop-blur-sm inline-block">
                        <div className="border-b-2 border-green-500 px-4 py-2 flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <span className="text-green-500 text-xs sm:text-sm font-mono ml-2">CONTACT_ME.sh</span>
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
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left side - Contact Form */}
                    <div>
                        {/* Terminal header */}
                        <div className="bg-gray-900 border-2 border-green-500 rounded-t-lg p-3 flex items-center space-x-2 shadow-lg shadow-green-500/50">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="flex-1 text-center text-green-400 text-sm">
                                contact@abir:~
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-black border-2 border-t-0 border-green-500 rounded-b-lg p-6 shadow-lg shadow-green-500/50">
                            <div className="mb-6">
                                <h2 className={`text-2xl font-bold text-green-400 mb-2 ${glitchActive ? 'glitch' : ''}`}>
                                    $ INITIALIZE_CONTACT
                                </h2>
                                <p className="text-green-300 text-sm">
                                    &gt; Send a message through the terminal...
                                </p>
                            </div>

                            <div className="space-y-4">
                                {/* Name Input */}
                                <div>
                                    <label className="block text-green-400 text-sm mb-2">
                                        <span className="text-green-300">&gt;</span> NAME:
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        onFocus={() => handleFocus('name')}
                                        disabled={isSubmitting}
                                        className="w-full bg-gray-900 border-2 border-green-500 rounded px-4 py-3 text-green-400 focus:outline-none focus:border-green-300 focus:shadow-lg focus:shadow-green-500/30 transition-all placeholder-green-700 disabled:opacity-50"
                                        placeholder="Enter your name..."
                                    />
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label className="block text-green-400 text-sm mb-2">
                                        <span className="text-green-300">&gt;</span> EMAIL:
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        onFocus={() => handleFocus('email')}
                                        disabled={isSubmitting}
                                        className="w-full bg-gray-900 border-2 border-green-500 rounded px-4 py-3 text-green-400 focus:outline-none focus:border-green-300 focus:shadow-lg focus:shadow-green-500/30 transition-all placeholder-green-700 disabled:opacity-50"
                                        placeholder="your.email@domain.com"
                                    />
                                </div>

                                {/* Message Input */}
                                <div>
                                    <label className="block text-green-400 text-sm mb-2">
                                        <span className="text-green-300">&gt;</span> MESSAGE:
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        onFocus={() => handleFocus('message')}
                                        disabled={isSubmitting}
                                        rows={5}
                                        className="w-full bg-gray-900 border-2 border-green-500 rounded px-4 py-3 text-green-400 focus:outline-none focus:border-green-300 focus:shadow-lg focus:shadow-green-500/30 transition-all placeholder-green-700 resize-none disabled:opacity-50"
                                        placeholder="Type your message here..."
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    onClick={handleSubmit}
                                    disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                                    className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 px-6 rounded border-2 border-green-300 transition-all hover:shadow-lg hover:shadow-green-500/50 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                                >
                                    <span className="relative z-10">
                                        {isSubmitting ? '> TRANSMITTING...' : '> SEND MESSAGE'}
                                    </span>
                                    <div className="absolute inset-0 bg-green-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                                </button>
                            </div>

                            {submitStatus === 'success' && (
                                <div className="mt-4 p-3 bg-green-900/30 border-2 border-green-500 rounded animate-pulse">
                                    <p className="text-green-400 text-center font-bold">
                                        ✓ MESSAGE SENT SUCCESSFULLY!
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right side - Terminal Output & Contact Info */}
                    <div className="space-y-8">
                        {/* Terminal Output */}
                        <div ref={terminalRef}>
                            <div className="bg-gray-900 border-2 border-green-500 rounded-t-lg p-3 flex items-center space-x-2 shadow-lg shadow-green-500/50">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                                </div>
                                <div className="flex-1 text-center text-green-400 text-sm">
                                    system.log
                                </div>
                            </div>

                            <div className="bg-black border-2 border-t-0 border-green-500 rounded-b-lg p-4 h-64 overflow-y-auto shadow-lg shadow-green-500/50 custom-scrollbar">
                                {terminalOutput.length === 0 ? (
                                    <div className="flex items-center justify-center h-full text-green-700">
                                        <p>Awaiting input...</p>
                                    </div>
                                ) : (
                                    <div className="space-y-1 text-sm">
                                        {terminalOutput.map((line, index) => (
                                            <div
                                                key={index}
                                                className={`
                          ${line.type === 'command' ? 'text-green-300 font-bold' : ''}
                          ${line.type === 'success' ? 'text-green-400' : ''}
                          ${line.type === 'info' ? 'text-green-500' : ''}
                          ${line.type === 'output' ? 'text-green-400' : ''}
                        `}
                                            >
                                                {line.text}
                                            </div>
                                        ))}
                                        <div ref={outputEndRef}></div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Contact Methods */}
                        <div className="bg-black border-2 border-green-500 rounded-lg p-6 shadow-lg shadow-green-500/50">
                            <h3 className="text-xl font-bold text-green-400 mb-4">
                                <span className="text-green-300">$</span> DIRECT_CHANNELS
                            </h3>
                            <div className="space-y-3">
                                {contactMethods.map((method, index) => (
                                    <a
                                        key={index}
                                        href={method.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-3 bg-gray-900 border border-green-500 rounded hover:border-green-300 hover:shadow-lg hover:shadow-green-500/30 transition-all group"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <span className="text-2xl group-hover:scale-110 transition-transform">
                                                {method.icon}
                                            </span>
                                            <div className="flex-1">
                                                <div className="text-green-300 text-xs">{method.label}</div>
                                                <div className="text-green-400 text-sm break-all">{method.value}</div>
                                            </div>
                                            <span className="text-green-500 group-hover:translate-x-1 transition-transform">
                                                →
                                            </span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
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

        /* Custom scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #111827;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #10b981;
          border-radius: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #059669;
        }
      `}</style>
        </div>
    );
}