'use client';
import { useState, useEffect } from 'react';
import FaultyTerminal from '../FaultyTerminal';
import TextType from '../TextType';

export default function Banner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth < 768);
        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    return (
        <section className="relative w-full lg:h-screen h-[150vh] bg-black overflow-hidden">
            {/* Background Glitch Terminal */}
            <FaultyTerminal
                scale={isMobile ? 0.7 : 2.5}

                gridMul={[2, 1]}
                digitSize={isMobile ? 2.6 : 1.6}
                timeScale={1}
                pause={false}
                scanlineIntensity={1}
                glitchAmount={1}
                flickerAmount={1}
                noiseAmp={1}
                chromaticAberration={0}
                dither={0}
                curvature={isMobile?0.001:0.09}
                tint="#5C9944"
                mouseReact={true}
                mouseStrength={0.5}
                pageLoadAnimation={false}
                brightness={1.1}
            />

            {/* Banner Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none font-mono py-8">
                <div className={`w-full max-w-5xl mx-4 transition-all duration-1000 perspective-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    {/* Main Card */}
                    <div className="relative pointer-events-auto transform-style-preserve-3d">
                        {/* CRT Terminal Card */}
                        <div className="relative backdrop-blur-sm transform rotate-x-[80deg] rotate-y-[-60deg] scale-[0.96] bg-black/70 border-2 border-green-500/50 rounded-sm p-6 md:p-8 shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-500 hover:border-green-400/70" style={{ boxShadow: '0 0 30px rgba(34, 197, 94, 0.3), inset 0 0 60px rgba(0, 0, 0, 0.8)' }}>

                            {/* CRT Scanlines */}
                            <div className="absolute inset-0 pointer-events-none opacity-30" style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34, 197, 94, 0.1) 2px, rgba(34, 197, 94, 0.1) 4px)' }}></div>

                            {/* Phosphor Glow Effect */}
                            <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-green-500/10 via-transparent to-transparent blur-xl"></div>

                            {/* Terminal Header Bar */}
                            <div className="absolute top-0 left-0 right-0 h-6 bg-green-500/20 border-b border-green-500/50 flex items-center px-3 gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
                                <span className="ml-2 text-green-400/70 text-[10px]">SYSTEM_TERMINAL_v1.0</span>
                            </div>

                            <div className="mt-4"></div>

                            {/* Terminal Prompt Name */}
                            <div className="relative mb-4">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-green-400 text-sm md:text-base">root@portfolio:~$</span>
                                    <span className="text-green-400/50 text-sm md:text-base animate-pulse">_</span>
                                </div>
                                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-green-400 tracking-wider" style={{ textShadow: '0 0 10px rgba(34, 197, 94, 0.8), 0 0 20px rgba(34, 197, 94, 0.5), 0 0 30px rgba(34, 197, 94, 0.3)' }}>
                                    ALI_ASHRAF_ABIR
                                </h1>
                                <div className="absolute inset-0 text-3xl md:text-5xl lg:text-6xl font-bold text-green-400/20 blur-md -z-10 animate-pulse">
                                    ALI_ASHRAF_ABIR
                                </div>
                                <div className="h-0.5 w-full bg-gradient-to-r from-green-500 via-green-400 to-transparent mt-1"></div>
                            </div>

                            {/* Role Text with Terminal Style */}
                            <div className="mb-4 bg-black/50 border border-green-500/30 p-3 rounded-sm">
                                <span className="text-green-500/70 text-xs">&gt;&gt; INITIALIZING_ROLE...</span>
                                <p className="text-lg md:text-xl lg:text-2xl text-green-400 font-light mt-1" style={{ textShadow: '0 0 5px rgba(34, 197, 94, 0.5)' }}>
                                    <TextType
                                        text={["FULL_STACK_DEVELOPER", "MULTIPLE_TECHNOLOGIES", "EFFICIENT_CODING!"]}
                                        typingSpeed={75}
                                        pauseDuration={1500}
                                        showCursor={true}
                                        cursorCharacter="█"
                                    />
                                </p>
                            </div>

                            {/* Description with Terminal Aesthetics */}
                            <div className="bg-black/60 border-l-4 border-green-500 p-3 mb-4">
                                <p className="text-green-300/90 text-xs md:text-sm leading-relaxed font-mono">
                                    <span className="text-green-500">[INFO]</span> Full-stack developer specializing in React.js, Next.js, and Node.js.
                                    <br />
                                    <span className="text-green-500">[INFO]</span> Creator of innovative B2B solutions with proven track record.
                                    <br />
                                    <span className="text-green-500">[INFO]</span> Programming Hero BlackBelt certified with 59+ average marks.
                                </p>
                            </div>

                            {/* Stats Grid - Terminal Style */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                                {[
                                    { value: "4+", label: "PROJECTS", icon: "▓" },
                                    { value: "10+", label: "TECH_STACK", icon: "▒" },
                                    { value: "3", label: "LANGUAGES", icon: "▓" }
                                ].map((stat, i) => (
                                    <div
                                        key={i}
                                        className="relative bg-black/70 border border-green-500/40 rounded-sm p-3 hover:bg-black/50 hover:border-green-400 transition-all duration-300 group"
                                        style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.2)' }}
                                    >
                                        <div className="absolute top-1 right-1 text-green-500/30 text-[10px]">{stat.icon}</div>
                                        <div className="text-xl md:text-2xl font-bold text-green-400 font-mono" style={{ textShadow: '0 0 8px rgba(34, 197, 94, 0.6)' }}>{stat.value}</div>
                                        <div className="text-[10px] text-green-500/70 mt-0.5 tracking-wider">{stat.label}</div>
                                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500/0 group-hover:bg-green-500/50 transition-all duration-300"></div>
                                    </div>
                                ))}
                            </div>

                            {/* Tech Stack Pills - Terminal Style */}
                            <div className="mb-4 bg-black/50 border border-green-500/30 p-3 rounded-sm">
                                <div className="text-green-500/70 text-[10px] mb-2 tracking-wider">$ cat tech_stack.txt</div>
                                <div className="flex flex-wrap gap-1.5">
                                    {['REACT.JS', 'NEXT.JS', 'NODE.JS', 'MONGODB', 'THREE.JS', 'REDUX', 'SOCKET.IO', 'POSTGRESQL'].map((tech, i) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 bg-green-500/10 border border-green-500/50 text-green-400 text-[10px] font-mono hover:bg-green-500/20 hover:border-green-400 hover:scale-105 transition-all duration-300"
                                            style={{
                                                animationDelay: `${i * 100}ms`,
                                                textShadow: '0 0 5px rgba(34, 197, 94, 0.3)'
                                            }}
                                        >
                                            [{tech}]
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Buttons - Terminal Commands */}
                            <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                                <button className="relative px-4 md:px-6 py-2 md:py-3 bg-green-500/90 hover:bg-green-400 text-black font-bold font-mono text-xs md:text-sm rounded-sm transition-all duration-300 hover:scale-105 border-2 border-green-600 overflow-hidden group" style={{ boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)' }}>
                                    <span className="relative z-10">&gt; VIEW_PROJECTS</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                </button>
                                <button className="relative px-4 md:px-6 py-2 md:py-3 bg-black/80 border-2 border-green-500 text-green-400 hover:bg-green-500/10 font-bold font-mono text-xs md:text-sm rounded-sm transition-all duration-300 hover:scale-105 hover:border-green-400 group" style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.3)' }}>
                                    <span className="relative z-10">&gt; DOWNLOAD_CV.sh</span>
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(34, 197, 94, 0.1) 2px, rgba(34, 197, 94, 0.1) 4px)' }}></div>
                                </button>
                                <button className="relative px-4 md:px-6 py-2 md:py-3 bg-black/80 border-2 border-green-500 text-green-400 hover:bg-green-500/10 font-bold font-mono text-xs md:text-sm rounded-sm transition-all duration-300 hover:scale-105 hover:border-green-400 group" style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.3)' }}>
                                    <span className="relative z-10">&gt; CONTACT.exe</span>
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(34, 197, 94, 0.1) 2px, rgba(34, 197, 94, 0.1) 4px)' }}></div>
                                </button>
                            </div>
                        </div>

                        {/* Floating Elements - Terminal Style */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500/20 rounded-sm blur-xl animate-pulse" style={{ boxShadow: '0 0 40px rgba(34, 197, 94, 0.4)' }}></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-500/20 rounded-sm blur-xl animate-pulse" style={{ animationDelay: '1s', boxShadow: '0 0 40px rgba(34, 197, 94, 0.4)' }}></div>

                        {/* Corner Brackets */}
                        <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-green-400/50"></div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-green-400/50"></div>
                        <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-green-400/50"></div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-green-400/50"></div>
                    </div>

                    {/* Scroll Indicator - Terminal Style */}
                    <div className="flex flex-col items-center mt-6 pointer-events-auto gap-1">
                        <span className="text-green-400/70 text-[10px] font-mono tracking-wider animate-pulse">SCROLL_DOWN</span>
                        <div className="animate-bounce">
                            <div className="w-5 h-8 border-2 border-green-400 rounded-sm flex justify-center p-1.5 bg-black/50" style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.3)' }}>
                                <div className="w-1 h-2 bg-green-400 rounded-sm animate-pulse" style={{ boxShadow: '0 0 5px rgba(34, 197, 94, 0.8)' }}></div>
                            </div>
                        </div>
                        <div className="text-green-400/50 text-base animate-bounce" style={{ animationDelay: '0.2s' }}>▼</div>
                    </div>
                </div>
            </div>

            {/* CRT Vignette & Scanline Effects */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-green-500/5 to-transparent"></div>
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle, transparent 0%, rgba(0, 0, 0, 0.7) 100%)' }}></div>
        </section>
    );
}