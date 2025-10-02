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

// External link icon component
const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15,3 21,3 21,9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function SlivoraPage() {
  return (
    <div className="min-h-screen theme-bg-primary">
      {/* Header */}
      <header className="py-8">
        <div className="max-w-3xl mx-auto px-6 flex justify-between items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm theme-text-secondary hover:theme-text-primary transition-colors"
          >
            ← Back to home
          </Link>
          <DarkModeToggle />
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="space-y-8">
          {/* Project Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight theme-text-primary">
              Slivora
            </h1>
            <p className="text-xl theme-text-secondary">
              Outline → PPTX in minutes
            </p>
          </div>

          {/* Project Description */}
          <div className="prose prose-lg max-w-none theme-text-primary">
            <p className="text-lg leading-relaxed">
              Slivora is an AI-powered presentation tool that transforms your outlines into professional PowerPoint presentations in minutes. 
              Simply provide your content outline, and our AI will create a beautifully formatted presentation for you.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold theme-text-primary">Features</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-4 theme-border rounded-lg">
                <h3 className="font-semibold theme-text-primary mb-2">AI-Powered Generation</h3>
                <p className="text-sm theme-text-secondary">
                  Advanced AI algorithms create professional presentations from simple outlines
                </p>
              </div>
              <div className="p-4 theme-border rounded-lg">
                <h3 className="font-semibold theme-text-primary mb-2">Quick & Easy</h3>
                <p className="text-sm theme-text-secondary">
                  Generate complete presentations in just a few minutes
                </p>
              </div>
              <div className="p-4 theme-border rounded-lg">
                <h3 className="font-semibold theme-text-primary mb-2">Professional Templates</h3>
                <p className="text-sm theme-text-secondary">
                  Beautiful, modern templates that work for any presentation type
                </p>
              </div>
              <div className="p-4 theme-border rounded-lg">
                <h3 className="font-semibold theme-text-primary mb-2">Export Ready</h3>
                <p className="text-sm theme-text-secondary">
                  Download your presentations in PowerPoint format
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-6 py-8">
            <h2 className="text-2xl font-bold theme-text-primary">Ready to try Slivora?</h2>
            <p className="text-lg theme-text-secondary">
              Visit our website to start creating presentations with AI
            </p>
            <a
              href="https://slivora.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Visit Slivora.com
              <ExternalLinkIcon />
            </a>
          </div>

          {/* Back to Projects */}
          <div className="text-center pt-8">
            <Link
              href="/"
              className="inline-flex items-center text-sm theme-text-secondary hover:theme-text-primary transition-colors"
            >
              ← View all projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
