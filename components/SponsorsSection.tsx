import Image from 'next/image';

const sponsors = [
  {
    name: 'Apple',
    src: '/icons/apple-black-logo.svg',
    width: 32,
    height: 38,
  },
  {
    name: 'Microsoft',
    src: '/icons/Microsoft.svg',
    width: 170,
    height: 36,
  },
  {
    name: 'Slack',
    src: '/icons/Slack.svg',
    width: 140,
    height: 38,
  },
  {
    name: 'Google',
    src: '/icons/Google.svg',
    width: 130,
    height: 40,
  },
];

export default function SponsorsSection() {
  return (
    <section
      className="w-full bg-white relative overflow-hidden py-16 md:py-24 lg:py-28"
      data-testid="sponsors-section"
    >
      <div className="max-w-[1480px] w-full mx-auto px-4 lg:px-8 relative z-10">
        {/* Title with yellow underline accent */}
        <div className="text-center mb-16 md:mb-20">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black relative inline-block"
            data-testid="sponsors-title"
          >
            Our{' '}
            <span className="relative inline-block whitespace-nowrap">
              sponsors
              {/* Yellow brush stroke element */}
              <svg
                className="absolute -bottom-2 left-0 w-full h-4 text-[#FDE047] pointer-events-none -z-10"
                viewBox="0 0 200 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M3 10C55 4 145 3 197 11"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
        </div>

        {/* Logos container */}
        <div
          className="flex items-center justify-center md:justify-between gap-10 md:gap-8 lg:gap-16 max-w-6xl mx-auto px-4"
          data-testid="sponsors-logos-container"
        >
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center p-2 transition-opacity duration-200 hover:opacity-80"
              data-testid={`sponsor-item-${sponsor.name.toLowerCase()}`}
            >
              <Image
                src={sponsor.src}
                alt={`${sponsor.name} logo`}
                width={sponsor.width}
                height={sponsor.height}
                className="object-contain max-h-10 md:max-h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
