"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Theme toggle function using CSS variables
const toggleTheme = () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  
  if (currentTheme === 'dark') {
    html.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    return false;
  } else {
    html.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    return true;
  }
};

// Dark mode toggle component using CSS variables
const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      // Default to light theme
      document.documentElement.removeAttribute('data-theme');
    }
  }, []);

  const handleToggle = () => {
    toggleTheme();
  };

  if (!mounted) {
    // Return a placeholder that matches the server-rendered version
    return (
      <button
        className="p-2 rounded-lg theme-button theme-hover transition-colors"
        title="Toggle dark mode"
      >
        <svg className="w-5 h-5 theme-sun-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </button>
    );
  }

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-lg theme-button theme-hover transition-colors"
      title="Toggle dark mode"
    >
      {/* Sun icon - always visible, color changes via CSS variable */}
      <svg className="w-5 h-5 theme-sun-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </button>
  );
};

export default function About() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen theme-bg-primary">
      {/* Header */}
      <header className="py-8">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <Link 
            href="/" 
            className="text-lg font-semibold theme-text-primary hover:theme-text-secondary transition-colors"
          >
            ← Back to Home
          </Link>
          <DarkModeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold theme-text-primary mb-6">About Me</h1>
          <p className="text-xl theme-text-secondary max-w-2xl mx-auto">
            Building tiny internet businesses, one micro-SaaS at a time.
          </p>
        </div>

        <div className="space-y-12">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold theme-text-primary mb-6">Who I Am</h2>
            <div className="prose prose-lg max-w-none theme-text-secondary">
              <p className="text-lg leading-relaxed mb-6">
                I'm Kerem Uğurlu, an indie hacker and micro-SaaS builder based in Istanbul, Turkey. 
                I'm passionate about creating small, focused tools that solve real problems for real people.
              </p>
              <p className="text-lg leading-relaxed">
                My journey in tech started with a simple belief: that great software doesn't have to be complex. 
                I focus on shipping fast, learning quickly, and building sustainable businesses that provide genuine value.
              </p>
            </div>
          </section>

          {/* What I Do */}
          <section>
            <h2 className="text-2xl font-semibold theme-text-primary mb-6">What I Do</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 theme-bg-secondary rounded-lg">
                <div className="w-12 h-12 theme-bg-primary rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 theme-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold theme-text-primary mb-3">Micro-SaaS Development</h3>
                <p className="theme-text-secondary">
                  I build small, focused software tools that solve specific problems. 
                  Each product is designed to be simple, effective, and profitable.
                </p>
              </div>

              <div className="p-6 theme-bg-secondary rounded-lg">
                <div className="w-12 h-12 theme-bg-primary rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 theme-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold theme-text-primary mb-3">Product Strategy</h3>
                <p className="theme-text-secondary">
                  I help validate ideas, find product-market fit, and scale sustainable businesses. 
                  My approach is data-driven and user-focused.
                </p>
              </div>

              <div className="p-6 theme-bg-secondary rounded-lg">
                <div className="w-12 h-12 theme-bg-primary rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 theme-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold theme-text-primary mb-3">Content Creation</h3>
                <p className="theme-text-secondary">
                  I share my journey, insights, and lessons learned through writing. 
                  Building in public and helping others learn from my experiences.
                </p>
              </div>

              <div className="p-6 theme-bg-secondary rounded-lg">
                <div className="w-12 h-12 theme-bg-primary rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 theme-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold theme-text-primary mb-3">Community Building</h3>
                <p className="theme-text-secondary">
                  I believe in the power of community and knowledge sharing. 
                  Connecting with fellow builders and entrepreneurs to learn and grow together.
                </p>
              </div>
            </div>
          </section>

          {/* My Philosophy */}
          <section>
            <h2 className="text-2xl font-semibold theme-text-primary mb-6">My Philosophy</h2>
            <div className="prose prose-lg max-w-none theme-text-secondary">
              <blockquote className="border-l-4 border-blue-500 pl-6 italic text-lg mb-6">
                "I build tiny internet businesses."
              </blockquote>
              <p className="text-lg leading-relaxed mb-6">
                This isn't just a tagline—it's my approach to entrepreneurship. I believe that the best solutions 
                are often the simplest ones. Instead of building complex platforms, I focus on creating tools that 
                do one thing exceptionally well.
              </p>
              <p className="text-lg leading-relaxed">
                My goal is to ship fast, learn quickly, and build sustainable businesses that provide genuine value 
                to users while allowing me to maintain a healthy work-life balance.
              </p>
            </div>
          </section>

          {/* Current Focus */}
          <section>
            <h2 className="text-2xl font-semibold theme-text-primary mb-6">Current Focus</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold theme-text-primary mb-4">Active Projects</h3>
                <ul className="space-y-3 theme-text-secondary">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    AI Slide Assistant - Presentation generation tool
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    Newsletter - Weekly insights and updates
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Content creation and community building
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold theme-text-primary mb-4">Learning & Growth</h3>
                <ul className="space-y-3 theme-text-secondary">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Advanced AI/ML integration
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                    Product marketing strategies
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                    Scaling micro-SaaS businesses
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Fun Facts */}
          <section>
            <h2 className="text-2xl font-semibold theme-text-primary mb-6">Fun Facts</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 theme-bg-secondary rounded-lg">
                <div className="text-3xl font-bold theme-text-primary mb-2">24/7</div>
                <p className="theme-text-secondary">Always thinking about the next idea</p>
              </div>
              <div className="text-center p-6 theme-bg-secondary rounded-lg">
                <div className="text-3xl font-bold theme-text-primary mb-2">100%</div>
                <p className="theme-text-secondary">Remote-first approach</p>
              </div>
              <div className="text-center p-6 theme-bg-secondary rounded-lg">
                <div className="text-3xl font-bold theme-text-primary mb-2">∞</div>
                <p className="theme-text-secondary">Coffee consumption</p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center p-8 theme-bg-secondary rounded-lg">
            <h2 className="text-2xl font-semibold theme-text-primary mb-4">Let's Connect</h2>
            <p className="text-lg theme-text-secondary mb-6">
              Interested in collaborating, learning more about my projects, or just want to chat? 
              I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Get in Touch
              </Link>
              <a
                href="mailto:kerem@keremugurlu.com?subject=Subscribe"
                className="inline-flex items-center px-6 py-3 theme-border rounded-lg font-medium theme-button theme-hover transition-colors"
              >
                Subscribe to Updates
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t theme-border py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm theme-text-tertiary">
            <p>
              © {currentYear} Kerem Uğurlu
            </p>
            
            <div className="flex items-center space-x-6 mt-4 sm:mt-0">
              <Link
                href="/"
                className="hover:theme-text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/contact"
                className="hover:theme-text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
