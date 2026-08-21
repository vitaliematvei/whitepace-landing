'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Extension() {
  return (
    <section className="relative bg-white w-full text-brand-blue">
      {/* yellow waves */}
      <div
        className=" max-w-[602px] max-h-[448px]  pointer-events-none absolute inset-0 top-65 -left-25"
        aria-hidden="true"
      >
        <Image src="/images/extension-wave-pattern.svg" alt="" fill priority />
      </div>
      <div className="max-w-screen-2xl items-center px-7 py-10 lg:py-[135px] relative z-10 mx-auto flex flex-col lg:flex-row">
        {/* left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex-1 flex flex-col text-left items-center lg:items-start font-dm-sans py-24 gap-6"
        >
          <h1 className="font-inter text-brand-dark text-center lg:text-left font-bold text-4xl sm:text-5xl lg:text-[64px] tracking-[-2%] leading-[1.2]">
            Project Management
          </h1>

          <p className="text-center text-brand-dark lg:text-left font-dm-sans text-base sm:text-lg max-w-lg leading-relaxed">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>
          <div className="pt-2 w-full text-center lg:text-left ">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-blue-600 text-white font-medium text-[18px] px-[15px] py-[19px] mt-7 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-brand-blue w-full sm:w-auto shadow-sm"
            >
              <span className="text-white">Get Started</span>
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
          <div className="relative overflow-hidden w-full max-w-[686px] h-[549px] bg-brand-light-blue rounded-none lg:rounded-md shadow-sm">
            <Image
              src="/images/extension-img.jpg"
              alt="extension"
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
