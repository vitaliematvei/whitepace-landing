'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function WorkToghetherSection() {
  return (
    <section
      className="w-full bg-white relative overflow-hidden py-12 md:py-20 lg:py-32"
      data-testid="work-together-section"
    >
      <div className="max-w-[1480px] w-full mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Image */}
          <div
            className="w-full lg:w-1/2 flex justify-center lg:justify-start"
            data-testid="work-together-image-container"
          >
            <div className="relative w-full max-w-[748px] aspect-[748/547]">
              <Image
                src="/images/work-together-image.svg"
                alt="Work Together Image"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Content & CTA */}
          <div className="w-full lg:w-1/2 flex flex-col lg:items-start items-center max-w-[650px]">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.15] mb-6 text-center lg:text-left"
              data-testid="work-together-title"
            >
              Work together
            </h1>

            <p
              className="text-base sm:text-lg text-black font-normal leading-relaxed mb-8 max-w-[540px] text-center lg:text-left"
              data-testid="work-together-subtitle"
            >
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </p>

            <Link
              href="/signup"
              className="inline-flex items-center gap-2.5 bg-primary-light hover:brightness-95 text-white font-medium py-4 px-8 rounded-lg text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-none whitespace-nowrap"
              data-testid="work-together-cta-button"
            >
              Try it now
              <span className="text-xl leading-none">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
