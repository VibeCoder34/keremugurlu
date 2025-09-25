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

export default function PrivacyPolicy() {
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
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold theme-text-primary mb-8">Privacy Policy</h1>
          
          <div className="space-y-8 theme-text-secondary">
            <section>
              <p className="text-sm theme-text-tertiary mb-6">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              
              <h2 className="text-2xl font-semibold theme-text-primary mb-4">Introduction</h2>
              <p>
                This Privacy Policy describes how Kerem Uğurlu ("we", "our", or "us") collects, uses, and shares information when you visit our website keremugurlu.com or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold theme-text-primary mb-4">Information We Collect</h2>
              <h3 className="text-xl font-medium theme-text-primary mb-3">Information you provide directly</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Email addresses when you subscribe to our newsletter</li>
                <li>Contact information when you reach out to us</li>
                <li>Any other information you choose to provide</li>
              </ul>
              
              <h3 className="text-xl font-medium theme-text-primary mb-3 mt-6">Information collected automatically</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Usage data and analytics through services like Google Analytics</li>
                <li>Device information and browser type</li>
                <li>IP address and general location data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold theme-text-primary mb-4">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Provide and improve our services</li>
                <li>Send newsletters and updates (with your consent)</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Analyze website usage and improve user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold theme-text-primary mb-4">Information Sharing</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties except:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements</li>
                <li>To protect our rights and safety</li>
                <li>With trusted service providers who assist in our operations (under strict confidentiality agreements)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold theme-text-primary mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold theme-text-primary mb-4">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your personal information</li>
                <li>Withdraw consent for data processing</li>
                <li>Object to certain processing activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold theme-text-primary mb-4">Cookies and Tracking</h2>
              <p>
                We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold theme-text-primary mb-4">Third-Party Services</h2>
              <p>
                Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold theme-text-primary mb-4">Children's Privacy</h2>
              <p>
                Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will take steps to delete the information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold theme-text-primary mb-4">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold theme-text-primary mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-4 theme-bg-secondary rounded-lg">
                <p><strong>Email:</strong> kerem@keremugurlu.com</p>
                <p><strong>Website:</strong> keremugurlu.com</p>
              </div>
            </section>
          </div>
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
