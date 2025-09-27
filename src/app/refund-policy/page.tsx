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

export default function RefundPolicy() {
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

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold theme-text-primary mb-6">
              Refund Policy
            </h1>
            <p className="text-lg theme-text-secondary">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold theme-text-primary mb-4">Company Information</h2>
                <p className="theme-text-secondary mb-4">
                  This Refund Policy is provided by Kerem Uğurlu, operating as a sole proprietor under the business name "Kerem Uğurlu" (the "Company", "we", "our", or "us").
                </p>
                <div className="mt-4 p-4 theme-bg-secondary rounded-lg">
                  <p><strong>Legal Name:</strong> Kerem Uğurlu</p>
                  <p><strong>Business Type:</strong> Sole Proprietor</p>
                  <p><strong>Website:</strong> keremugurlu.com</p>
                  <p><strong>Contact Email:</strong> kerem@keremugurlu.com</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold theme-text-primary mb-4">Our Refund Policy</h2>
                <p className="theme-text-secondary mb-4">
                  We want you to be completely satisfied with your AI Slide Assistant purchase. 
                  If you're not happy with the service, we offer a straightforward refund policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold theme-text-primary mb-4">30-Day Money-Back Guarantee</h2>
                <p className="theme-text-secondary mb-4">
                  We offer a 30-day money-back guarantee for all purchases. If you're not satisfied 
                  with your AI Slide Assistant experience, you can request a full refund within 30 days 
                  of your purchase date.
                </p>
                <ul className="list-disc list-inside theme-text-secondary space-y-2">
                  <li>Refund requests must be made within 30 days of purchase</li>
                  <li>Full refund will be processed to your original payment method</li>
                  <li>Refunds typically take 5-10 business days to appear in your account</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold theme-text-primary mb-4">How to Request a Refund</h2>
                <p className="theme-text-secondary mb-4">
                  To request a refund, please contact us with the following information:
                </p>
                <ul className="list-disc list-inside theme-text-secondary space-y-2">
                  <li>Your order number or transaction ID</li>
                  <li>Email address used for the purchase</li>
                  <li>Brief explanation of why you're requesting a refund</li>
                </ul>
                <p className="theme-text-secondary mt-4">
                  Contact us at: <a href="mailto:kerem@keremugurlu.com" className="theme-text-primary hover:theme-text-secondary transition-colors">kerem@keremugurlu.com</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold theme-text-primary mb-4">Refund Processing</h2>
                <p className="theme-text-secondary mb-4">
                  Once we receive your refund request:
                </p>
                <ul className="list-disc list-inside theme-text-secondary space-y-2">
                  <li>We'll review your request within 24 hours</li>
                  <li>If approved, we'll process the refund immediately</li>
                  <li>You'll receive a confirmation email once the refund is processed</li>
                  <li>Refunds will appear in your account within 5-10 business days</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold theme-text-primary mb-4">Non-Refundable Items</h2>
                <p className="theme-text-secondary mb-4">
                  Please note that the following are not eligible for refunds:
                </p>
                <ul className="list-disc list-inside theme-text-secondary space-y-2">
                  <li>Refund requests made after 30 days from purchase date</li>
                  <li>Refund requests for services that have been used extensively (more than 10 presentations generated)</li>
                  <li>Refund requests due to technical issues that were resolved within 48 hours</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold theme-text-primary mb-4">Technical Issues</h2>
                <p className="theme-text-secondary mb-4">
                  If you're experiencing technical issues with AI Slide Assistant, please contact us first. 
                  We're committed to resolving any problems you encounter and will work with you to find a solution.
                </p>
                <p className="theme-text-secondary">
                  Most technical issues can be resolved quickly, and we want to ensure you get the full 
                  value from your purchase.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold theme-text-primary mb-4">Contact Information</h2>
                <p className="theme-text-secondary mb-4">
                  For refund requests or any questions about this policy, please contact us:
                </p>
                <div className="theme-bg-secondary p-6 rounded-lg">
                  <p className="theme-text-primary font-medium mb-2">Email:</p>
                  <p className="theme-text-secondary mb-4">
                    <a href="mailto:kerem@keremugurlu.com" className="theme-text-primary hover:theme-text-secondary transition-colors">
                      kerem@keremugurlu.com
                    </a>
                  </p>
                  <p className="theme-text-primary font-medium mb-2">Response Time:</p>
                  <p className="theme-text-secondary">We typically respond within 24 hours</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold theme-text-primary mb-4">Policy Updates</h2>
                <p className="theme-text-secondary">
                  We may update this refund policy from time to time. Any changes will be posted on this page 
                  with an updated "Last updated" date. We encourage you to review this policy periodically.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t theme-border py-8 mt-16">
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
                href="/ai-slide-assistant"
                className="hover:theme-text-primary transition-colors"
              >
                AI Slide Assistant
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
