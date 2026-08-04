'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  {
    name: 'Products',
    href: '#',
    dropdownItems: [
      {
        name: 'Overview',
        href: '#products-overview',
        desc: 'Discover all main features',
      },
      {
        name: 'Task Management',
        href: '#task-management',
        desc: 'Organize projects effortlessly',
      },
      {
        name: 'Real-time Collaboration',
        href: '#collaboration',
        desc: 'Work together with your team',
      },
    ],
  },
  {
    name: 'Solutions',
    href: '#',
    dropdownItems: [
      {
        name: 'For Teams',
        href: '#teams',
        desc: 'Scalable solutions for teams',
      },
      {
        name: 'For Enterprise',
        href: '#enterprise',
        desc: 'Advanced security and control',
      },
      {
        name: 'For Startups',
        href: '#startups',
        desc: 'Grow fast with optimized tools',
      },
    ],
  },
  {
    name: 'Resources',
    href: '#',
    dropdownItems: [
      { name: 'Blog', href: '#blog', desc: 'Productivity articles and guides' },
      { name: 'Help Center', href: '#help', desc: 'Documentation and support' },
      {
        name: 'Guides & Tutorials',
        href: '#tutorials',
        desc: 'Learn how to use Whitepace',
      },
    ],
  },
  {
    name: 'Pricing',
    href: '#pricing',
    dropdownItems: [
      { name: 'Free Plan', href: '#free', desc: 'For personal use' },
      {
        name: 'Personal Pro',
        href: '#pro',
        desc: 'For freelancers and individual pros',
      },
      {
        name: 'Organization',
        href: '#organization',
        desc: 'For large teams and companies',
      },
    ],
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<
    string | null
  >(null);
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState<
    string | null
  >(null);

  // Închide toate meniurile la apăsarea tastei ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setActiveMobileDropdown(null);
        setActiveDesktopDropdown(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleMobileDropdown = (name: string) => {
    setActiveMobileDropdown((prev) => (prev === name ? null : name));
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  };

  const closeDesktopDropdown = () => {
    setActiveDesktopDropdown(null);
  };

  return (
    <header className="w-full h-[60px] bg-white relative z-50 border-b border-gray-100">
      <div className="max-w-[1480px] w-full h-full mx-auto flex items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          data-testid="navbar-logo"
        >
          <Image
            src="/images/logo-blue.svg"
            alt="Whitepace Logo"
            width={160}
            height={32}
            priority
            className="h-8 w-auto"
          />
        </Link>

        {/* Container NAV + BUTOANE (lipite în dreapta) */}
        <div className="flex items-center gap-6 xl:gap-12">
          {/* Desktop Navigation */}
          <nav
            className="hidden min-[1152px]:flex items-center gap-6 xl:gap-8"
            data-testid="desktop-nav"
          >
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative py-4"
                onMouseEnter={() => setActiveDesktopDropdown(link.name)}
                onMouseLeave={closeDesktopDropdown}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1.5 text-base xl:text-lg font-medium transition-colors outline-none ${
                    activeDesktopDropdown === link.name
                      ? 'text-primary-dark'
                      : 'text-primary-light hover:text-primary-dark'
                  }`}
                  aria-haspopup="true"
                  aria-expanded={activeDesktopDropdown === link.name}
                >
                  {link.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
                      activeDesktopDropdown === link.name ? 'rotate-180' : ''
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>

                {/* Dropdown Desktop */}
                {activeDesktopDropdown === link.name && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-xl p-4 z-50 transition-all duration-200 before:content-[''] before:absolute before:-top-4 before:left-0 before:w-full before:h-4">
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeDesktopDropdown}
                        className="block py-3 px-2 rounded-lg hover:bg-gray-50 focus:bg-gray-50 transition-colors"
                      >
                        <div className="text-sm font-medium text-gray-900">
                          {item.name}
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5">
                          {item.desc}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Buttons (Desktop / Tabletă >= md) */}
          <div
            className="hidden md:flex items-center gap-3 lg:gap-4"
            data-testid="desktop-cta"
          >
            <Link
              href="/login"
              className="bg-accent-yellow hover:brightness-95 text-primary-dark rounded-lg px-5 xl:px-8 py-2.5 font-medium text-xs lg:text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-none whitespace-nowrap"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="bg-primary-light hover:brightness-95 text-white font-medium px-4 xl:px-6 py-2.5 rounded-lg text-xs lg:text-sm flex items-center gap-1.5 lg:gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-none whitespace-nowrap"
            >
              Try Whitespace free
              <span className="text-base lg:text-lg leading-none">&rarr;</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="min-[1152px]:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            data-testid="mobile-menu-toggle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-[#043873]"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Accordion Menu */}
      {isMobileMenuOpen && (
        <div
          className="min-[1152px]:hidden bg-white shadow-md border-t border-gray-100"
          data-testid="mobile-menu"
        >
          <nav className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col">
                <button
                  className="flex items-center justify-between w-full py-2.5 text-left text-base font-medium text-gray-800 hover:text-primary-dark transition-colors"
                  onClick={() => toggleMobileDropdown(link.name)}
                  aria-expanded={activeMobileDropdown === link.name}
                >
                  {link.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`h-4 w-4 transition-transform duration-200 ${
                      activeMobileDropdown === link.name
                        ? 'rotate-180 text-primary-dark'
                        : 'text-gray-500'
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {activeMobileDropdown === link.name && (
                  <div className="flex flex-col pl-4 py-1 gap-2 bg-gray-50 rounded-lg my-1">
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="py-1.5 px-2 text-sm text-gray-700 hover:text-primary-dark transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* CTA Mobile */}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100 md:hidden">
              <Link
                href="/login"
                onClick={closeMobileMenu}
                className="w-full text-center bg-accent-yellow text-primary-dark rounded-lg py-2.5 font-medium text-sm"
              >
                Login
              </Link>
              <Link
                href="/signup"
                onClick={closeMobileMenu}
                className="w-full text-center bg-primary-light text-white rounded-lg py-2.5 font-medium text-sm flex items-center justify-center gap-2"
              >
                Try Whitespace free
                <span className="text-lg leading-none">&rarr;</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
