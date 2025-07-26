"use client";

import Image from "next/image";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

import TechnicalSkills from "@/components/ui/technical-skills";
import Location from "@/components/location";
export default function Home() {
  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'ardy-ghoorchian-resume.pdf';
    link.target = '_blank';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div id="home" className="flex items-center justify-center p-8 relative overflow-hidden h-[50vh]">
        {/* Background Boxes */}
        <div className="absolute inset-0 w-full h-full bg-black z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        
        {/* Main Content */}
        <main className="text-center max-w-2xl mx-auto relative z-20">
          {/* Name */}
          <h1 className={cn("text-4xl md:text-5xl font-bold mb-4")}>
            Ardy Ghoorchian
          </h1>
          
          {/* Job Titles */}
          <p className="text-lg md:text-xl mb-6 text-gray-300">
            Full Stack Engineer, DevOps Engineer, MLOps Engineer
          </p>
          
          {/* Professional Description */}
          <p className="text-base md:text-lg mb-8 text-gray-300 max-w-lg mx-auto">
            Full-stack developer with expertise in delivering AI-powered applications from concept to production.
          </p>
          
          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="mailto:rdghoorchian@gmail.com" className="flex items-center justify-center gap-2 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Get In Touch
            </a>
            <button 
              onClick={handleDownloadResume}
              className="flex items-center justify-center gap-2 bg-transparent border border-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download Resume
            </button>
          </div>
          
          {/* Social Icons */}
          <div className="flex justify-center gap-8 mb-12">
            <a href="https://github.com/ardalangh" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/ardygh/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h20.728c.904 0 1.636.732 1.636 1.636zM7.2 15.858V8.143L12 11.143l4.8-3v7.715H7.2z"/>
              </svg>
            </a>
          </div>
          
          {/* Employment and Education Details */}
          <div className="text-sm md:text-base text-gray-300 space-y-2">
            <p>
              Currently at <a href="https://www.creditkarma.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-gray-300 transition-colors">Credit Karma</a>
            </p>
            <p>
              Bacholars in Data Science at <a href="https://www.berkeley.edu/" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-gray-300 transition-colors">UC Berkeley</a>
            </p>
            <p>
              Persuing Masters in Data Science at <span className="font-bold">Somewhere</span>
            </p>
          </div>
        </main>
      </div>

      {/* Technical Skills Section */}
      <TechnicalSkills />

      {/* Location Section */}
      <Location />
    </div>
  );
}
