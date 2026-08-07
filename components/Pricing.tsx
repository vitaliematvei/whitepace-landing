'use client';
import Link from 'next/link';

export default function Pricing() {
  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: '$0',
      subtitle: 'Capture ideas and find them quickly',
      highlighted: false,
      buttonText: 'Get Started',
      buttonVariant: 'outline',
      features: [
        'Sync unlimited devices',
        '10 GB monthly uploads',
        '200 MB max. note size',
        'Customize Home dashboard and access extra widgets',
        'Connect primary Google Calendar account',
        'Add due dates, reminders, and notifications to your tasks',
      ],
    },
    {
      id: 'personal',
      name: 'Personal',
      price: '$11.99',
      subtitle: 'Keep home and family on track',
      highlighted: true,
      buttonText: 'Get Started',
      buttonVariant: 'solid',
      features: [
        'Sync unlimited devices',
        '10 GB monthly uploads',
        '200 MB max. note size',
        'Customize Home dashboard and access extra widgets',
        'Connect primary Google Calendar account',
        'Add due dates, reminders, and notifications to your tasks',
      ],
    },
    {
      id: 'organization',
      name: 'Organization',
      price: '$49.99',
      subtitle: 'Capture ideas and find them quickly',
      highlighted: false,
      buttonText: 'Get Started',
      buttonVariant: 'outline',
      features: [
        'Sync unlimited devices',
        '10 GB monthly uploads',
        '200 MB max. note size',
        'Customize Home dashboard and access extra widgets',
        'Connect primary Google Calendar account',
        'Add due dates, reminders, and notifications to your tasks',
      ],
    },
  ];

  return (
    <section
      className="w-full bg-white relative overflow-hidden py-16 md:py-24 lg:py-32"
      data-testid="pricing-section"
    >
      <div className="max-w-[1480px] w-full mx-auto px-4 lg:px-8 relative z-10">
        {/* Header Secțiune */}
        <div className="text-center max-w-[920px] mx-auto mb-16 md:mb-20">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.15] mb-6"
            data-testid="pricing-title"
          >
            Choose Your Plan
          </h2>

          <p
            className="text-base sm:text-lg text-gray-700 font-normal leading-relaxed"
            data-testid="pricing-subtitle"
          >
            Whether you want to get organized, keep your personal life on track,
            or boost workplace productivity, Whitepace has the right plan for
            you.
          </p>
        </div>

        {/* Grilă Carduri de Preț */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-[1280px] mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              data-testid={`pricing-card-${plan.id}`}
              className={`flex flex-col justify-between items-center lg:items-stretch text-center lg:text-left rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-white shadow-2xl scale-100 lg:scale-105 z-20 py-10 lg:py-12'
                  : 'bg-white shadow-sm hover:shadow-md z-10'
              }`}
            >
              <div className="w-full flex flex-col items-center lg:items-start">
                {/* Nume Plan */}
                <h3
                  className={`text-2xl font-semibold mb-4 ${
                    plan.highlighted
                      ? 'text-primary-dark font-bold'
                      : 'text-black'
                  }`}
                >
                  {plan.name}
                </h3>

                {/* Preț */}
                <div
                  className={`text-4xl sm:text-5xl font-bold mb-4 ${
                    plan.highlighted ? 'text-primary-dark' : 'text-black'
                  }`}
                >
                  {plan.price}
                </div>

                {/* Subtitlu Plan */}
                <p
                  className={`text-sm sm:text-base font-medium mb-8 ${
                    plan.highlighted ? 'text-primary-dark' : 'text-gray-700'
                  }`}
                >
                  {plan.subtitle}
                </p>

                {/* Lista de Facilități */}
                <ul className="space-y-4 mb-10 w-full text-left">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm sm:text-base"
                    >
                      {/* Icon Checkmark Cerc */}
                      <svg
                        className={`w-5 h-5 mt-0.5 shrink-0 ${
                          plan.highlighted
                            ? 'text-primary-light'
                            : 'text-gray-700'
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="9"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M8.5 12.5L10.5 14.5L15.5 9.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        className={
                          plan.highlighted
                            ? 'text-primary-dark font-medium'
                            : 'text-gray-700'
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Buton CTA */}
              <div className="w-full flex justify-center lg:block">
                <Link
                  href="/signup"
                  className={`w-auto min-w-[160px] lg:w-full inline-flex items-center justify-center font-medium py-3 px-8 lg:px-6 rounded-lg text-base transition-all duration-200 ${
                    plan.highlighted
                      ? 'bg-primary-light hover:brightness-95 text-white shadow-md hover:-translate-y-0.5'
                      : 'bg-white border border-[#FFE492] hover:border-amber-400 text-black hover:bg-amber-50/30'
                  }`}
                  data-testid={`pricing-button-${plan.id}`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
