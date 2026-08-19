'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-white w-full text-brand-blue">
      {/* yellow waves */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/images/hero-wave-pattern.svg"
          alt=""
          fill
          className="object-contain object-left"
          priority
        />
      </div>
      <div className="max-w-screen-2xl bg-yellow-300 px-7 py-[140px] relative z-10 mx-auto flex flex-col lg:flex-row">
        {/* left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex-1 flex flex-col text-left items-start font-dm-sans py-24 gap-6"
        >
          <h1 className="font-inter font-bold text-4xl sm:text-5xl lg:text-[64px] tracking-[-2%] leading-[1.2]">
            Get More Done with <br className="hidden sm:inline" />
            whitepace
          </h1>

          <p className="font-dm-sans text-base sm:text-lg max-w-lg leading-relaxed">
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </p>
          <div className="pt-2 w-full ">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-blue-600 text-white font-medium text-[18px] px-[15px] py-[19px] mt-7 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-brand-blue w-full sm:w-auto shadow-sm"
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
          <div className="w-full max-w-[686px] h-[549px] bg-brand-light-blue rounded-none lg:rounded-md shadow-sm" />
        </motion.div>
      </div>
    </section>
  );
}
