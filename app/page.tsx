import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SearchSection } from "@/components/SearchSection";
import { DealsSection } from "@/components/deals/DealsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="relative min-h-screen w-full overflow-hidden md:min-h-screen">
        {/* Background Image - Mobile */}
        <div className="absolute inset-0 z-0 md:hidden">
          <Image
            src="/images/hero-background-mobile.png"
            alt="Winter mountain landscape"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Background Image - Desktop */}
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src="/images/hero-background-desktop.png"
            alt="Winter mountain landscape"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Curved Fade Effect at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10 h-[200px] hidden md:block">
          <svg 
            viewBox="0 0 1440 200" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path 
              d="M0 0 Q360 100 720 100 T1440 0 L1440 200 L0 200 Z" 
              fill="url(#fadeGradient)"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-20">
          <Header />
          
          <main className="pt-32 md:pt-28 lg:pt-32 pb-16 md:pb-12">
            <div className="space-y-6 md:space-y-10 lg:space-y-12">
              <Hero />
              <SearchSection />
            </div>
          </main>
        </div>
      </div>

      {/* Deals Section - Below Hero */}
      <DealsSection />
    </div>
  );
}
