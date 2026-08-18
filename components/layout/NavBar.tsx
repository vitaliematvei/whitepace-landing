'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useId } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as Dialog from '@radix-ui/react-dialog';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react';

type NavItem = {
  id: string;
  label: string;
  href: string;
  children?: { id: string; label: string; href: string; desc?: string }[];
};

const NAV_ITEMS: NavItem[] = [
  {
    id: 'products',
    label: 'Products',
    href: '#products',
    children: [
      { id: 'analytics', label: 'Analytics', href: '#analytics' },
      { id: 'automation', label: 'Automation', href: '#automation' },
      { id: 'security', label: 'Security', href: '#security' },
    ],
  },
  {
    id: 'solutions',
    label: 'Solutions',
    href: '#solutions',
    children: [
      { id: 'enterprise', label: 'Enterprise', href: '#enterprise' },
      {
        id: 'small-business',
        label: 'Small Business',
        href: '#small-business',
      },
      { id: 'education', label: 'Education', href: '#education' },
    ],
  },
  {
    id: 'resources',
    label: 'Resources',
    href: '#resources',
    children: [
      { id: 'blog', label: 'Blog', href: '#blog' },
      { id: 'guides', label: 'Guides & Tutorials', href: '#guides' },
      { id: 'help-center', label: 'Help Center', href: '#help-center' },
    ],
  },
  {
    id: 'pricing',
    label: 'Pricing',
    href: '#pricing',
    children: [
      { id: 'personal', label: 'Personal Plan', href: '#personal' },
      { id: 'team', label: 'Team Plan', href: '#team' },
      {
        id: 'enterprise-pricing',
        label: 'Enterprise Pricing',
        href: '#enterprise-pricing',
      },
    ],
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Auto-close mobil la trecerea peste breakpoint-ul XL (1280px)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1280px)');
    const handleResize = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setMobileMenuOpen(false);
      }
    };

    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="w-full top-0 z-50 bg-white py-4 sticky"
    >
      {/* Wrapper */}
      <div className="max-w-screen-2xl h-[60px] px-7 mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex gap-2 font-inter text-2xl lg:text-[28px] text-brand-blue font-bold focus-visible:ring-2 focus-visible:ring-brand-blue rounded-md"
        >
          <Image
            src="/icons/logo-icon.svg"
            alt="Whitepace Logo"
            width={37}
            height={29}
            priority
          />
          <span>whitepace</span>
        </Link>

        {/* Right block */}
        <div className="flex items-center gap-2 xl:gap-[74px] text-[18px]/[23px]">
          {/* Navigation Menu Desktop (se ascunde sub XL) */}
          <nav aria-label="Main Navigation">
            <ul className="hidden xl:flex gap-6 items-center font-dm-sans font-medium text-brand-blue">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  {item.children && item.children.length > 0 ? (
                    <DropdownSubMenu item={item} />
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 hover:opacity-80 transition-opacity focus-visible:ring-2 focus-visible:ring-brand-blue rounded-md px-1"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Buttons Desktop (dispar sub MD - 768px) */}
          <div className="hidden md:flex items-center gap-[23px] font-medium">
            <AuthButtons />
          </div>

          {/* Mobile Menu Trigger (apare sub XL - 1280px) */}
          <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <Dialog.Trigger asChild>
              <button
                className="xl:hidden px-2 text-brand-blue focus:outline-none hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-brand-blue rounded-md"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? (
                  <X className="w-10 h-10" aria-hidden="true" />
                ) : (
                  <Menu className="w-10 h-10" aria-hidden="true" />
                )}
              </button>
            </Dialog.Trigger>

            <AnimatePresence>
              {mobileMenuOpen && (
                <Dialog.Portal forceMount>
                  <Dialog.Content asChild>
                    <motion.div
                      initial={{ opacity: 0, y: -15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="xl:hidden bg-white fixed inset-x-0 top-[92px] overflow-y-auto bottom-0 z-50 border-t border-gray-100 shadow-xl px-7 py-6 flex flex-col gap-6 focus:outline-none"
                    >
                      <Dialog.Title className="sr-only">
                        Mobile Navigation Menu
                      </Dialog.Title>
                      <Dialog.Description className="sr-only">
                        Main menu links and options
                      </Dialog.Description>

                      <nav aria-label="Mobile Navigation">
                        <ul className="flex flex-col gap-4 p-4 font-dm-sans font-medium text-brand-blue text-[18px]">
                          {NAV_ITEMS.map((item) => (
                            <li key={item.id}>
                              {item.children && item.children.length > 0 ? (
                                <MobileAccordion item={item} />
                              ) : (
                                <Dialog.Close asChild>
                                  <Link
                                    href={item.href}
                                    className="flex items-center justify-between py-2 border-b border-gray-50 hover:opacity-80 gap-2 transition-opacity focus-visible:ring-2 focus-visible:ring-brand-blue rounded-md"
                                  >
                                    {item.label}
                                  </Link>
                                </Dialog.Close>
                              )}
                            </li>
                          ))}
                        </ul>
                      </nav>

                      {/* CTA Buttons Mobile */}
                      <div className="flex flex-col sm:flex-row gap-4 pb-8 md:hidden">
                        <AuthButtons isMobile />
                      </div>
                    </motion.div>
                  </Dialog.Content>
                </Dialog.Portal>
              )}
            </AnimatePresence>
          </Dialog.Root>
        </div>
      </div>
    </motion.header>
  );
}

// SubMenu Desktop
function DropdownSubMenu({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <button className="flex items-center gap-2 hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-md px-1">
          {item.label}
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center"
          >
            <ChevronDown className="w-4 h-4" aria-hidden="true" />
          </motion.span>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="start"
          sideOffset={8}
          className="z-50 min-w-[200px] max-w-[280px] bg-white rounded-lg p-2 shadow-lg border border-gray-100 flex flex-col gap-1 font-dm-sans text-brand-blue animate-in fade-in-80 zoom-in-95"
        >
          {item.children?.map((child) => (
            <DropdownMenu.Item key={child.id} asChild>
              <Link
                href={child.href}
                className="px-3 py-2 rounded-md hover:bg-gray-50 transition-colors focus:bg-gray-50 outline-none text-[16px] truncate"
              >
                {child.label}
              </Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

// Acordeon Mobile cu animație Framer Motion pe înălțime (height + opacity)
function MobileAccordion({ item }: { item: NavItem }) {
  const [expanded, setExpanded] = useState(false);
  const contentId = useId();

  return (
    <div className="flex flex-col border-b border-gray-50 py-2">
      <button
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        aria-controls={contentId}
        className="flex items-center justify-between w-full hover:opacity-80 transition-opacity text-left focus-visible:ring-2 focus-visible:ring-brand-blue rounded-md py-1"
      >
        <span>{item.label}</span>
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center"
        >
          <ChevronDown className="w-4 h-4" aria-hidden="true" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id={contentId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <ul className="flex flex-col gap-2 pt-3 pl-4 text-[16px] text-gray-600">
              {item.children?.map((child) => (
                <li key={child.id}>
                  <Dialog.Close asChild>
                    <Link
                      href={child.href}
                      className="block py-1 hover:text-brand-blue transition-colors rounded-md focus-visible:ring-2 focus-visible:ring-brand-blue"
                    >
                      {child.label}
                    </Link>
                  </Dialog.Close>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AuthButtons({ isMobile }: { isMobile?: boolean }) {
  const loginBtn = (
    <Link
      href="/login"
      className="flex items-center justify-center gap-2 bg-brand-yellow h-[60px] px-[40px] rounded-lg hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-brand-yellow font-medium text-[18px] w-full md:w-auto"
    >
      Login
    </Link>
  );

  const signupBtn = (
    <Link
      href="/signup"
      className="flex items-center justify-center gap-2 bg-brand-blue h-[60px] px-[20px] tracking-normal text-white rounded-lg hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-brand-blue font-medium text-[18px] w-full md:w-auto"
    >
      Try Whitepace free
      <ArrowRight className="w-4 h-4" aria-hidden="true" />
    </Link>
  );

  if (isMobile) {
    return (
      <>
        <Dialog.Close asChild>{loginBtn}</Dialog.Close>
        <Dialog.Close asChild>{signupBtn}</Dialog.Close>
      </>
    );
  }

  return (
    <>
      {loginBtn}
      {signupBtn}
    </>
  );
}
