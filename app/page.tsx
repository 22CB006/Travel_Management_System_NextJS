import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SearchSection } from "@/components/SearchSection";
import { DealsSection } from "@/components/deals/DealsSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.png"
            alt="Winter mountain landscape"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Gradient Fade at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent z-10" />

        {/* Content */}
        <div className="relative z-20">
          <Header />
          
          <main className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12">
            <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
              <Hero />
              <SearchSection />
            </div>
          </main>
        </div>
      </div>

      {/* Deals Section - Below Hero */}
      <DealsSection />
    </>
  );
}
