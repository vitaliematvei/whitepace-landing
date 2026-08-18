'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-white w-full text-brand-blue py-16 lg:py-24 overflow-hidden">
      {/* yellow waves */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60 bg-no-repeat bg-left bg-contain"
        style={{ backgroundImage: "url('/images/hero-wave-pattern.svg')" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex-1 flex flex-col gap-6 text-left items-start"
        >
          <h1 className="font-inter font-bold text-4xl sm:text-5xl lg:text-[64px] leading-[1.12] tracking-tight">
            Get More Done with <br className="hidden sm:inline" />
            whitepace
          </h1>

          <p className="font-dm-sans text-base sm:text-lg lg:text-[18px] max-w-lg leading-relaxed">
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </p>
          <div className="pt-2 w-full sm:w-auto">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-blue-600 text-white font-medium text-[18px] h-[60px] px-8 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-brand-blue w-full sm:w-auto shadow-sm"
            >
              <span className="text-white">Try Whitepace free</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </motion.div>
        {/* Dreapta: Containerul Albastru-Deschis (Placeholder Grafică) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="flex-1 w-full flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-[685px] h-[320px] sm:h-[420px] lg:h-[520px] bg-[#C4DEFD] rounded-none lg:rounded-md shadow-sm" />
        </motion.div>
      </div>
    </section>
  );
}
