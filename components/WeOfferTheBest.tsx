"use client";

import Image from "next/image";

interface Step {
  id: number;
  title: string;
  description: string;
}

const stepsData: Step[] = [
  {
    id: 1,
    title: "Convenience",
    description: "We offer an easy-to-use platform to book their trips and manage their itineraries from anywhere, at any time.",
  },
  {
    id: 2,
    title: "Wide Selection",
    description: "We hand-picked hotels individually to offer you the largest selection of hotels all over India.",
  },
  {
    id: 3,
    title: "Secure Bookings",
    description: "All reservations are processed by horizon, that makes it for its users a trusted booking platform.",
  },
  {
    id: 4,
    title: "Competitive Pricing",
    description: "Get reasonable pricing on all our packages and enjoy your travel experience.",
  },
  {
    id: 5,
    title: "Flexible Pricing Options",
    description: "Enjoy the benefits of price adjustments, including price increases and decreases, ensuring you get the best value for your bookings.",
  },
];

export function WeOfferTheBest() {
  return (
    <section className="w-full bg-white py-[60px] md:py-[100px] overflow-hidden relative">
      {/* Background Airplane */}
      <div className="absolute top-[-60px] left-[50%] translate-x-[-50%] w-[900px] h-[400px] opacity-50 pointer-events-none z-0">
        <Image
          src="/images/backgrounds/airplane-silhouette.png"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-[60px] md:mb-[80px]">
          <h2 className="text-[#16242a] text-[32px] md:text-[42px] font-semibold leading-[40px] md:leading-normal tracking-[-0.64px] md:tracking-[-0.84px] mb-[12px]">
            We offer the Best
          </h2>
          <p className="text-[#29383e] text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[32px] tracking-[-0.32px] md:tracking-[-0.36px]">
            Trust us to offer the best and take your travel experience to the next level
          </p>
        </div>

        {/* Content Container */}
        <div className="relative flex items-center justify-center">
          {/* Left Side Diamond Images - Larger and to edge */}
          <div className="absolute left-[0] top-[40%] translate-y-[-50%]">
            <div className="relative w-[350px] h-[550px]">
              <Image
                src="/images/backgrounds/image-1.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Center Timeline */}
          <div className="relative flex flex-col items-center py-[40px]" style={{ gap: '90px' }}>
            {/* Vertical Line with dots */}
            <div className="absolute top-0 bottom-0 left-[50%] translate-x-[-50%] w-[2px] bg-[#b3e5f1]" />
            
            {/* Top dot */}
            <div className="absolute top-0 left-[50%] translate-x-[-50%] w-[8px] h-[8px] bg-[#b3e5f1] rounded-full" />
            
            {/* Bottom dot */}
            <div className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[8px] h-[8px] bg-[#b3e5f1] rounded-full" />

            {stepsData.map((step, index) => {
              const isRight = index % 2 === 0; // 0, 2, 4 = right side
              
              return (
                <div key={step.id} className="relative w-full flex justify-center z-10" style={{ minHeight: '75px' }}>
                  {/* Step Number Circle - Centered */}
                  <div className="absolute left-[50%] translate-x-[-50%] top-0 w-[80px] h-[75px] bg-[#ff6a00] rounded-full flex items-center justify-center shadow-lg z-20">
                    <span className="text-white text-[32px] font-bold leading-[32px]">{step.id}</span>
                  </div>

                  {/* Step Content - Alternating sides */}
                  {isRight ? (
                    // Right side
                    <div className="absolute left-[50%] top-0 ml-[97px] w-[253px]">
                      <h3 className="text-[#16242a] text-[22px] font-semibold leading-[22px] tracking-[-0.44px] mb-[8px] whitespace-nowrap">
                        {step.title}
                      </h3>
                      <p className="text-[#29383e] text-[14px] font-medium leading-[22px] tracking-[-0.28px]">
                        {step.description}
                      </p>
                    </div>
                  ) : (
                    // Left side
                    <div className="absolute right-[50%] top-0 mr-[97px] w-[255px] text-right">
                      <h3 className="text-[#16242a] text-[22px] font-semibold leading-[22px] tracking-[-0.44px] mb-[8px] whitespace-nowrap">
                        {step.title}
                      </h3>
                      <p className="text-[#29383e] text-[14px] font-medium leading-[22px] tracking-[-0.28px]">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Side Diamond Images - Larger and to edge */}
          <div className="absolute right-[0] top-[40%] translate-y-[-50%]">
            <div className="relative w-[350px] h-[550px]">
              <Image
                src="/images/backgrounds/image-2.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
