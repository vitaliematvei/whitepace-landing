import Link from 'next/link';
import Image from 'next/image';

export default function YourWorkSection() {
  return (
    <section
      className="w-full relative overflow-hidden bg-primary-dark py-20 md:py-28 lg:py-36 text-white"
      data-testid="your-work-section"
    >
      {/* Wrapper imagine fundal - Marcat ca decorativ pentru a11y */}
      <div
        className="absolute inset-0 z-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      >
        <Image
          src="/images/your-work-bg-image2.svg"
          alt=""
          fill
          className="object-cover object-left"
          // Scoate priority dacă secțiunea e sub hero
        />
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6 relative inline-block"
            data-testid="your-work-title"
          >
            Your work, everywhere{' '}
            <span className="relative inline-block whitespace-nowrap">
              you are
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-primary-light pointer-events-none"
                viewBox="0 0 200 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2 10C50 4 150 3 198 11"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p
            className="text-sm sm:text-base text-blue-100 font-normal leading-relaxed max-w-4xl mb-10"
            data-testid="your-work-subtitle"
          >
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </p>

          <Link
            href="/signup"
            className="inline-flex items-center justify-center gap-3 bg-primary-light hover:opacity-90 text-white font-medium py-3.5 px-7 rounded-lg text-base transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light"
            data-testid="your-work-cta-button"
          >
            Try Taskey
            <span className="text-lg leading-none" aria-hidden="true">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
