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

export default function AISlideAssistant() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen theme-bg-primary">
      {/* Header */}
      <header className="py-8">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <Link 
            href="/" 
            className="text-lg font-semibold theme-text-primary hover:theme-text-secondary transition-colors"
          >
            ← Back to Home
          </Link>
          <DarkModeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold theme-text-primary mb-6">
              AI Slide Assistant
            </h1>
            <p className="text-2xl theme-text-secondary mb-8 max-w-3xl mx-auto">
              From Outline to Presentation in Minutes
            </p>
            <p className="text-lg theme-text-secondary mb-12 max-w-2xl mx-auto">
              Turn your ideas into polished slides instantly — no design skills needed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://fynta.io/slides"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors text-lg"
              >
                Try AI Slide Assistant
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href="#features"
                className="inline-flex items-center px-8 py-4 theme-border rounded-lg font-medium theme-button theme-hover transition-colors text-lg"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 theme-bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold theme-text-primary mb-6">What is AI Slide Assistant?</h2>
              <p className="text-lg theme-text-secondary mb-6">
                AI Slide Assistant is an intelligent tool that transforms your simple outline or ideas into 
                fully formatted presentation decks (PPTX). Just write a topic or bullet points, choose a style, 
                and download a professional slide deck.
              </p>
              <p className="text-lg theme-text-secondary">
                Ideal for educators, professionals, and creators who want great visuals without spending hours on formatting.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="theme-text-primary">Input your topic or outline</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="theme-text-primary">Choose your preferred style</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="theme-text-primary">Download your PPTX file</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold theme-text-primary mb-6">Key Features</h2>
            <p className="text-lg theme-text-secondary max-w-2xl mx-auto">
              Everything you need to create professional presentations in minutes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 theme-bg-secondary rounded-lg">
              <div className="w-12 h-12 theme-bg-primary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 theme-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold theme-text-primary mb-3">Outline → Slides</h3>
              <p className="theme-text-secondary">
                Convert your idea, topic, or short outline into a slide-by-slide structure with title and bullets.
              </p>
            </div>

            <div className="p-6 theme-bg-secondary rounded-lg">
              <div className="w-12 h-12 theme-bg-primary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 theme-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold theme-text-primary mb-3">PPTX Export</h3>
              <p className="theme-text-secondary">
                Get a downloadable PowerPoint (.pptx) file ready to edit, present, or share immediately.
              </p>
            </div>

            <div className="p-6 theme-bg-secondary rounded-lg">
              <div className="w-12 h-12 theme-bg-primary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 theme-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold theme-text-primary mb-3">Multiple Themes</h3>
              <p className="theme-text-secondary">
                Choose from 2–3 styles (Minimal, Corporate, Dark) to match your branding or mood.
              </p>
            </div>

            <div className="p-6 theme-bg-secondary rounded-lg">
              <div className="w-12 h-12 theme-bg-primary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 theme-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold theme-text-primary mb-3">Language Support</h3>
              <p className="theme-text-secondary">
                Create presentations in English or Turkish seamlessly with proper localization.
              </p>
            </div>

            <div className="p-6 theme-bg-secondary rounded-lg">
              <div className="w-12 h-12 theme-bg-primary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 theme-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold theme-text-primary mb-3">Slide Count Control</h3>
              <p className="theme-text-secondary">
                Decide how many slides you want (5–20 slides) and let the tool handle the content distribution.
              </p>
            </div>

            <div className="p-6 theme-bg-secondary rounded-lg">
              <div className="w-12 h-12 theme-bg-primary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 theme-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold theme-text-primary mb-3">AI-Powered</h3>
              <p className="theme-text-secondary">
                Advanced AI algorithms ensure your content is well-structured and professionally formatted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 theme-bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold theme-text-primary mb-6">How It Works</h2>
            <p className="text-lg theme-text-secondary max-w-2xl mx-auto">
              Create professional presentations in just 3 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-semibold theme-text-primary mb-4">Enter Your Topic</h3>
              <p className="theme-text-secondary">
                Write your topic, bullet list, or any ideas you want to present. The AI will understand and structure your content.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-semibold theme-text-primary mb-4">Select Style & Count</h3>
              <p className="theme-text-secondary">
                Choose your preferred theme and decide how many slides you want. The tool will handle the rest.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-semibold theme-text-primary mb-4">Download & Present</h3>
              <p className="theme-text-secondary">
                Get your PPTX file instantly. Present immediately or edit further in PowerPoint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold theme-text-primary mb-6">Perfect For</h2>
            <p className="text-lg theme-text-secondary max-w-2xl mx-auto">
              Whether you're a teacher, professional, or student, AI Slide Assistant saves you time
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 theme-bg-secondary rounded-lg">
              <div className="w-12 h-12 theme-bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 theme-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold theme-text-primary mb-2">Teachers</h3>
              <p className="text-sm theme-text-secondary">Preparing lecture slides in minutes</p>
            </div>

            <div className="text-center p-6 theme-bg-secondary rounded-lg">
              <div className="w-12 h-12 theme-bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 theme-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              <h3 className="font-semibold theme-text-primary mb-2">Professionals</h3>
              <p className="text-sm theme-text-secondary">Quick pitch decks and reports</p>
            </div>

            <div className="text-center p-6 theme-bg-secondary rounded-lg">
              <div className="w-12 h-12 theme-bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 theme-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="font-semibold theme-text-primary mb-2">Students</h3>
              <p className="text-sm theme-text-secondary">Assignment presentations</p>
            </div>

            <div className="text-center p-6 theme-bg-secondary rounded-lg">
              <div className="w-12 h-12 theme-bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 theme-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold theme-text-primary mb-2">Creators</h3>
              <p className="text-sm theme-text-secondary">Video content and webinars</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Features Section */}
      <section className="py-16 theme-bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold theme-text-primary mb-6">Coming Soon</h2>
            <p className="text-lg theme-text-secondary max-w-2xl mx-auto">
              Exciting new features are in development to make your presentations even better
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 theme-bg-primary rounded-lg border-2 border-dashed theme-border">
              <div className="w-12 h-12 theme-bg-secondary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 theme-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold theme-text-primary mb-2">PDF Export</h3>
              <p className="text-sm theme-text-secondary">Export presentations as PDF files</p>
            </div>

            <div className="p-6 theme-bg-primary rounded-lg border-2 border-dashed theme-border">
              <div className="w-12 h-12 theme-bg-secondary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 theme-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold theme-text-primary mb-2">AI Images</h3>
              <p className="text-sm theme-text-secondary">AI-suggested images and icons</p>
            </div>

            <div className="p-6 theme-bg-primary rounded-lg border-2 border-dashed theme-border">
              <div className="w-12 h-12 theme-bg-secondary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 theme-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold theme-text-primary mb-2">Google Slides</h3>
              <p className="text-sm theme-text-secondary">Live editing support</p>
            </div>

            <div className="p-6 theme-bg-primary rounded-lg border-2 border-dashed theme-border">
              <div className="w-12 h-12 theme-bg-secondary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 theme-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold theme-text-primary mb-2">Team Accounts</h3>
              <p className="text-sm theme-text-secondary">Multi-user collaboration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold theme-text-primary mb-6">Simple, Transparent Pricing</h2>
            <p className="text-lg theme-text-secondary max-w-2xl mx-auto">
              Choose the plan that fits your needs. No hidden fees, no subscriptions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className="p-8 theme-bg-secondary rounded-lg border-2 theme-border">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold theme-text-primary mb-2">Basic</h3>
                <div className="text-4xl font-bold theme-text-primary mb-2">$5</div>
                <p className="theme-text-secondary">One-time payment</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="theme-text-primary">5-10 slides</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="theme-text-primary">All themes included</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="theme-text-primary">PPTX download</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="theme-text-primary">English & Turkish</span>
                </li>
              </ul>
              <a
                href="https://fynta.io/slides"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center px-6 py-3 theme-border rounded-lg font-medium theme-button theme-hover transition-colors"
              >
                Get Started
              </a>
            </div>

            {/* Pro Plan */}
            <div className="p-8 theme-bg-secondary rounded-lg border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold theme-text-primary mb-2">Pro</h3>
                <div className="text-4xl font-bold theme-text-primary mb-2">$20</div>
                <p className="theme-text-secondary">One-time payment</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="theme-text-primary">10-15 slides</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="theme-text-primary">All themes included</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="theme-text-primary">PPTX download</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="theme-text-primary">English & Turkish</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="theme-text-primary">Priority support</span>
                </li>
              </ul>
              <a
                href="https://fynta.io/slides"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
              >
                Get Started
              </a>
            </div>

            {/* Enterprise Plan */}
            <div className="p-8 theme-bg-secondary rounded-lg border-2 theme-border">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold theme-text-primary mb-2">Enterprise</h3>
                <div className="text-4xl font-bold theme-text-primary mb-2">$50</div>
                <p className="theme-text-secondary">One-time payment</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="theme-text-primary">15-20 slides</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="theme-text-primary">All themes included</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="theme-text-primary">PPTX download</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="theme-text-primary">English & Turkish</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="theme-text-primary">Priority support</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="theme-text-primary">Custom branding</span>
                </li>
              </ul>
              <a
                href="https://fynta.io/slides"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center px-6 py-3 theme-border rounded-lg font-medium theme-button theme-hover transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 theme-bg-secondary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold theme-text-primary mb-6">Ready to Create Amazing Presentations?</h2>
          <p className="text-lg theme-text-secondary mb-8">
            Join thousands of users who are already saving hours with AI Slide Assistant
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://fynta.io/slides"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors text-lg"
            >
              Start Creating Now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href="mailto:kerem@keremugurlu.com?subject=AI Slide Assistant Support"
              className="inline-flex items-center px-8 py-4 theme-border rounded-lg font-medium theme-button theme-hover transition-colors text-lg"
            >
              Get Support
            </a>
          </div>

          <div className="p-6 theme-bg-secondary rounded-lg">
            <h3 className="font-semibold theme-text-primary mb-2">Need Help?</h3>
            <p className="theme-text-secondary mb-4">
              If you run into issues or want help crafting better outlines, reach out to us at kerem@keremugurlu.com
            </p>
            <p className="text-sm theme-text-tertiary">
              We continuously refine the tool — feature feedback is welcome.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t theme-border py-8">
        <div className="max-w-6xl mx-auto px-6">
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
              <Link
                href="/terms"
                className="hover:theme-text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="hover:theme-text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/refund-policy"
                className="hover:theme-text-primary transition-colors"
              >
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
