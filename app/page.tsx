// page.tsx
'use client';
import TerminalAbout from "@/components/home/AboutMe";
import Banner from "@/components/home/Banner";
import TerminalContact from "@/components/home/ContactMe";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import TerminalFooter from "@/components/home/TeminalFooter";
import TerminalLoader from "@/components/Loader";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loader after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-nunito">
      {isLoading ? <TerminalLoader /> :
        <div className="">
          <section id="home">
            <Banner />
          </section>
          <section id="about">
            <TerminalAbout />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <TerminalContact />
          </section>
          <TerminalFooter />
        </div>
      }
    </div>
  );
}