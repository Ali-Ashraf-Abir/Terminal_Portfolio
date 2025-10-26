'use client';
import { useState, useEffect } from 'react';
import FaultyTerminal from '../FaultyTerminal';
import TextType from '../TextType';

export default function Banner() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth < 768);
        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    return (
        <section className="relative w-full min-h-screen lg:h-screen bg-black overflow-hidden">
            {/* Background Glitch Terminal */}
            <div className="absolute inset-0 w-full h-full">
                <FaultyTerminal
                    scale={isMobile ? 0.4 : 2.5}
                    gridMul={[2, 1]}
                    digitSize={isMobile ? 2.6 : 1.6}
                    timeScale={1}
                    pause={false}
                    scanlineIntensity={isMobile ? 0.1 : 1}
                    glitchAmount={isMobile?0.2:1}
                    flickerAmount={isMobile?0.2:1}
                    noiseAmp={1}
                    chromaticAberration={0}
                    dither={0}
                    curvature={isMobile ? 0.02 : 0.09}
                    tint="#5C9944"
                    mouseReact={!isMobile}
                    mouseStrength={0.5}
                    pageLoadAnimation={false}
                    brightness={1.1}
                />
            </div>

            {/* Banner Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none font-mono py-8 px-4">
                <div className={`w-full max-w-5xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    {/* Main Card */}
                    <div className="relative pointer-events-auto">
                        {/* CRT Terminal Card */}
                        <div className="relative backdrop-blur-sm bg-black/70 border-2 border-green-500/50 rounded-sm p-4 md:p-8 shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-500 hover:border-green-400/70" style={{ boxShadow: '0 0 30px rgba(34, 197, 94, 0.3), inset 0 0 60px rgba(0, 0, 0, 0.8)' }}>

                            {/* CRT Scanlines */}
                            <div className="absolute inset-0 pointer-events-none opacity-30" style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34, 197, 94, 0.1) 2px, rgba(34, 197, 94, 0.1) 4px)' }}></div>

                            {/* Terminal Header Bar */}
                            <div className="absolute top-0 left-0 right-0 h-6 bg-green-500/20 border-b border-green-500/50 flex items-center px-3 gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
                                <span className="ml-2 text-green-400/70 text-[10px]">SYSTEM_TERMINAL_v1.0</span>
                            </div>

                            <div className="mt-4"></div>

                            {/* Terminal Prompt Name */}
                            <div className="relative mb-3 md:mb-4">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-green-400 text-xs md:text-base">root@portfolio:~$</span>
                                    <span className="text-green-400/50 text-xs md:text-base animate-pulse">_</span>
                                </div>
                                <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-green-400 tracking-wider" style={{ textShadow: '0 0 10px rgba(34, 197, 94, 0.8), 0 0 20px rgba(34, 197, 94, 0.5), 0 0 30px rgba(34, 197, 94, 0.3)' }}>
                                    ALI_ASHRAF_ABIR
                                </h1>
                                <div className="h-0.5 w-full bg-gradient-to-r from-green-500 via-green-400 to-transparent mt-1"></div>
                            </div>

                            {/* Role Text with Terminal Style */}
                            <div className="mb-3 md:mb-4 bg-black/50 border border-green-500/30 p-2 md:p-3 rounded-sm">
                                <span className="text-green-500/70 text-[10px]">&gt;&gt; INITIALIZING_ROLE...</span>
                                <p className="text-sm md:text-xl lg:text-2xl text-green-400 font-light mt-1" style={{ textShadow: '0 0 5px rgba(34, 197, 94, 0.5)' }}>
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
                            <div className="bg-black/60 border-l-4 border-green-500 p-2 md:p-3 mb-3 md:mb-4">
                                <p className="text-green-300/90 text-[10px] md:text-sm leading-relaxed font-mono">
                                    <span className="text-green-500">[INFO]</span> Full-stack developer specializing in React.js, Next.js, and Node.js.
                                    <br />
                                    <span className="text-green-500">[INFO]</span> Creator of innovative B2B solutions with proven track record.
                                    {!isMobile && (
                                        <>
                                            <br />
                                            <span className="text-green-500">[INFO]</span> Programming Hero BlackBelt certified with 59+ average marks.
                                        </>
                                    )}
                                </p>
                            </div>

                            {/* Stats Grid - Terminal Style */}
                            <div className="grid grid-cols-3 gap-2 md:gap-3 mb-3 md:mb-4">
                                {[
                                    { value: "4+", label: "PROJECTS", icon: "▓" },
                                    { value: "10+", label: "TECH_STACK", icon: "▒" },
                                    { value: "3", label: "LANGUAGES", icon: "▓" }
                                ].map((stat, i) => (
                                    <div
                                        key={i}
                                        className="relative bg-black/70 border border-green-500/40 rounded-sm p-2 md:p-3 hover:bg-black/50 hover:border-green-400 transition-all duration-300 group"
                                        style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.2)' }}
                                    >
                                        <div className="absolute top-1 right-1 text-green-500/30 text-[8px] md:text-[10px]">{stat.icon}</div>
                                        <div className="text-lg md:text-2xl font-bold text-green-400 font-mono" style={{ textShadow: '0 0 8px rgba(34, 197, 94, 0.6)' }}>{stat.value}</div>
                                        <div className="text-[8px] md:text-[10px] text-green-500/70 mt-0.5 tracking-wider">{stat.label}</div>
                                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500/0 group-hover:bg-green-500/50 transition-all duration-300"></div>
                                    </div>
                                ))}
                            </div>

                            {/* Tech Stack Pills - Terminal Style */}
                            <div className="mb-3 md:mb-4 bg-black/50 border border-green-500/30 p-2 md:p-3 rounded-sm">
                                <div className="text-green-500/70 text-[10px] mb-2 tracking-wider">$ cat tech_stack.txt</div>
                                <div className="flex flex-wrap gap-1 md:gap-1.5">
                                    {['REACT.JS', 'NEXT.JS', 'NODE.JS', 'MONGODB', 'THREE.JS', 'REDUX', 'SOCKET.IO', 'POSTGRESQL'].slice(0, isMobile ? 6 : 8).map((tech, i) => (
                                        <span
                                            key={tech}
                                            className="px-1.5 md:px-2 py-0.5 md:py-1 bg-green-500/10 border border-green-500/50 text-green-400 text-[9px] md:text-[10px] font-mono hover:bg-green-500/20 hover:border-green-400 hover:scale-105 transition-all duration-300"
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
                                <button className="relative px-3 md:px-6 py-2 md:py-3 bg-green-500/90 hover:bg-green-400 text-black font-bold font-mono text-[10px] md:text-sm rounded-sm transition-all duration-300 hover:scale-105 border-2 border-green-600 overflow-hidden group" style={{ boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)' }}>
                                    <span className="relative z-10">&gt; VIEW_PROJECTS</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                </button>
                                <button className="relative px-3 md:px-6 py-2 md:py-3 bg-black/80 border-2 border-green-500 text-green-400 hover:bg-green-500/10 font-bold font-mono text-[10px] md:text-sm rounded-sm transition-all duration-300 hover:scale-105 hover:border-green-400 group" style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.3)' }}>
                                    <span className="relative z-10">&gt; {isMobile ? 'CV' : 'DOWNLOAD_CV.sh'}</span>
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(34, 197, 94, 0.1) 2px, rgba(34, 197, 94, 0.1) 4px)' }}></div>
                                </button>
                                <button className="relative px-3 md:px-6 py-2 md:py-3 bg-black/80 border-2 border-green-500 text-green-400 hover:bg-green-500/10 font-bold font-mono text-[10px] md:text-sm rounded-sm transition-all duration-300 hover:scale-105 hover:border-green-400 group" style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.3)' }}>
                                    <span className="relative z-10">&gt; CONTACT{isMobile ? '' : '.exe'}</span>
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(34, 197, 94, 0.1) 2px, rgba(34, 197, 94, 0.1) 4px)' }}></div>
                                </button>
                            </div>
                        </div>

                        {/* Floating Elements - Terminal Style */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500/20 rounded-sm blur-xl animate-pulse" style={{ boxShadow: '0 0 40px rgba(34, 197, 94, 0.4)' }}></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-500/20 rounded-sm blur-xl animate-pulse" style={{ animationDelay: '1s', boxShadow: '0 0 40px rgba(34, 197, 94, 0.4)' }}></div>

                        {/* Corner Brackets */}
                        <div className="absolute -top-2 -left-2 w-6 md:w-8 h-6 md:h-8 border-l-2 border-t-2 border-green-400/50"></div>
                        <div className="absolute -top-2 -right-2 w-6 md:w-8 h-6 md:h-8 border-r-2 border-t-2 border-green-400/50"></div>
                        <div className="absolute -bottom-2 -left-2 w-6 md:w-8 h-6 md:h-8 border-l-2 border-b-2 border-green-400/50"></div>
                        <div className="absolute -bottom-2 -right-2 w-6 md:w-8 h-6 md:h-8 border-r-2 border-b-2 border-green-400/50"></div>
                    </div>

                    {/* Scroll Indicator - Terminal Style */}
                    {!isMobile && (
                        <div className="flex flex-col items-center mt-6 gap-1">
                            <span className="text-green-400/70 text-[10px] font-mono tracking-wider animate-pulse">SCROLL_DOWN</span>
                            <div className="animate-bounce">
                                <div className="w-5 h-8 border-2 border-green-400 rounded-sm flex justify-center p-1.5 bg-black/50" style={{ boxShadow: '0 0 10px rgba(34, 197, 94, 0.3)' }}>
                                    <div className="w-1 h-2 bg-green-400 rounded-sm animate-pulse" style={{ boxShadow: '0 0 5px rgba(34, 197, 94, 0.8)' }}></div>
                                </div>
                            </div>
                            <div className="text-green-400/50 text-base animate-bounce" style={{ animationDelay: '0.2s' }}>▼</div>
                        </div>
                    )}
                </div>
            </div>

            {/* CRT Vignette Effects */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle, transparent 0%, rgba(0, 0, 0, 0.7) 100%)' }}></div>
        </section>
    );
}