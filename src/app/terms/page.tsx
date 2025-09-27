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

export default function TermsOfService() {
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
          <h1 className="text-4xl font-bold theme-text-primary mb-8">Terms of Service</h1>
          
          <div className="space-y-8 theme-text-secondary">
            <section>
              <p className="text-sm theme-text-tertiary mb-6">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              
              <h2 className="text-2xl font-semibold theme-text-primary mb-4">Company Information</h2>
              <p>
                These Terms of Service are provided by Kerem Uğurlu, operating as a sole proprietor under the business name "Kerem Uğurlu" (the "Company", "we", "our", or "us").
              </p>
              <div className="mt-4 p-4 theme-bg-secondary rounded-lg">
                <p><strong>Legal Name:</strong> Kerem Uğurlu</p>
                <p><strong>Business Type:</strong> Sole Proprietor</p>
                <p><strong>Website:</strong> keremugurlu.com</p>
                <p><strong>Contact Email:</strong> kerem@keremugurlu.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold theme-text-primary mb-4">Agreement to Terms</h2>
              <p>
                By accessing and using keremugurlu.com and related services (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold theme-text-primary mb-4">Description of Service</h2>
              <p>
                Our Service provides information about Kerem Uğurlu's projects, including but not limited to micro-SaaS tools, blog content, and related services. We reserve the right to modify, suspend, or discontinue the Service at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold theme-text-primary mb-4">User Responsibilities</h2>
              <p>When using our Service, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Use the Service only for lawful purposes</li>
                <li>Not attempt to gain unauthorized access to any part of the Service</li>
                <li>Not interfere with or disrupt the Service or servers</li>
                <li>Not use the Service to transmit harmful or malicious code</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold theme-text-primary mb-4">Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are owned by Kerem Uğurlu and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold theme-text-primary mb-4">Third-Party Services</h2>
              <p>
                Our Service may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold theme-text-primary mb-4">Disclaimer of Warranties</h2>
              <p>
                The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We expressly disclaim all warranties of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold theme-text-primary mb-4">Limitation of Liability</h2>
              <p>
                In no event shall Kerem Uğurlu, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold theme-text-primary mb-4">Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Kerem Uğurlu and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold theme-text-primary mb-4">Termination</h2>
              <p>
                We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will cease immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold theme-text-primary mb-4">Governing Law</h2>
              <p>
                These Terms shall be interpreted and governed by the laws of Turkey, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold theme-text-primary mb-4">Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold theme-text-primary mb-4">Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us:
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
