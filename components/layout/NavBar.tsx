'use client';

import { motion } from 'framer-motion';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as Dialog from '@radix-ui/react-dialog';
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'products', label: 'Products', href: '#products' },
  { id: 'solutions', label: 'Solutions', href: '#solutions' },
  { id: 'resources', label: 'Resources', href: '#resources' },
  { id: 'pricing', label: 'Pricing', href: '#pricing' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="w-full sticky top-0 z-50 bg-white py-4"
    >
      {/* Wrapper */}
      <div className="max-w-screen-2xl h-[60px] px-7 mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex gap-2 font-inter text-2xl lg:text-[28px] text-brand-blue font-bold focus-visible:ring-2 focus-visible:ring-brand-blue"
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
          {/* Navigation Menu Desktop */}
          <nav aria-label="Main Navigation">
            <ul className="hidden xl:flex gap-6 items-center font-dm-sans font-medium text-brand-blue">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity focus-visible:ring-2 focus-visible:ring-brand-blue"
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Buttons Desktop (Afară din Dialog) */}
          <div className="hidden md:flex items-center gap-[23px] font-medium">
            <AuthButtons />
          </div>

          {/* Mobile Menu cu Radix Dialog */}
          <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <Dialog.Trigger asChild>
              <button
                className="xl:hidden px-2 text-brand-blue focus:outline-none hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-brand-blue"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? (
                  <X className="w-10 h-10" />
                ) : (
                  <Menu className="w-10 h-10" />
                )}
              </button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="sm:hidden fixed inset-0 bg-black/15 z-40 data-[state=open]:animate-overlay-show data-[state=closed]:animate-overlay-hide" />
              <Dialog.Content className="xl:hidden bg-white fixed inset-x-0 top-[92px] overflow-y-auto bottom-0 z-50 border-t border-gray-100 shadow-xl px-7 py-6 flex flex-col gap-6 focus:outline-none data-[state=open]:animate-content-show data-[state=closed]:animate-content-hide">
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
                        <Dialog.Close asChild>
                          <Link
                            href={item.href}
                            className="flex items-center justify-between py-2 border-b border-gray-50 hover:opacity-80 gap-2 transition-opacity focus-visible:ring-2 focus-visible:ring-brand-blue"
                          >
                            {item.label}
                            <ChevronDown
                              className="w-4 h-4"
                              aria-hidden="true"
                            />
                          </Link>
                        </Dialog.Close>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* CTA Buttons Mobile (În interiorul Dialog-ului) */}
                <div className="flex flex-col gap-4 pb-8 md:hidden">
                  <AuthButtons onNavigate={() => setMobileMenuOpen(false)} />
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </motion.header>
  );
}

function AuthButtons({ onNavigate }: { onNavigate?: () => void }) {
  const loginBtn = (
    <Link
      href="/login"
      onClick={onNavigate}
      className="flex items-center justify-center gap-2 bg-brand-yellow h-[60px] px-[40px] rounded-lg hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-brand-yellow font-medium text-[18px]"
    >
      Login
    </Link>
  );

  const signupBtn = (
    <Link
      href="/signup"
      onClick={onNavigate}
      className="flex items-center justify-center gap-2 bg-brand-blue h-[60px] px-[20px] tracking-normal text-white rounded-lg hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-brand-blue font-medium text-[18px]"
    >
      Try Whitepace free
      <ArrowRight className="w-4 h-4" aria-hidden="true" />
    </Link>
  );

  if (onNavigate) {
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
