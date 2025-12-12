import Typography from "@/components/Typography";

export default function TypographyDemo() {
  return (
    <div className="min-h-screen bg-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-12 pb-8 border-b border-gray-200">
          <Typography variant="h2" className="mb-2">
            Typography System
          </Typography>
          <Typography variant="body1" className="text-[var(--text-secondary)]">
            Complete typography scale based on Figma design specifications
          </Typography>
        </div>

        {/* Headers Section */}
        <section className="mb-16">
          <Typography variant="h3" className="mb-8 text-[var(--text-secondary)]">
            Headers
          </Typography>
          
          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <p className="text-small text-[var(--text-secondary)] mb-2">
                H1 - Gilroy Semibold 88px
              </p>
              <Typography variant="h1">
                Title/Header 1
              </Typography>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <p className="text-small text-[var(--text-secondary)] mb-2">
                H2 - Gilroy Semibold 65px
              </p>
              <Typography variant="h2">
                Header 2
              </Typography>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <p className="text-small text-[var(--text-secondary)] mb-2">
                H3 - Gilroy Semibold 32px
              </p>
              <Typography variant="h3">
                Header 3
              </Typography>
            </div>
          </div>
        </section>

        {/* Subtitles Section */}
        <section className="mb-16">
          <Typography variant="h3" className="mb-8 text-[var(--text-secondary)]">
            Subtitles
          </Typography>
          
          <div className="space-y-8">
            <div className="border-l-4 border-green-500 pl-6">
              <p className="text-small text-[var(--text-secondary)] mb-2">
                Subtitle 1 - Gilroy Semibold 24px
              </p>
              <Typography variant="subtitle1">
                Subtitle 1
              </Typography>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <p className="text-small text-[var(--text-secondary)] mb-2">
                Subtitle 2 - Gilroy Semibold 18px
              </p>
              <Typography variant="subtitle2">
                Subtitle 2
              </Typography>
            </div>
          </div>
        </section>

        {/* Body Text Section */}
        <section className="mb-16">
          <Typography variant="h3" className="mb-8 text-[var(--text-secondary)]">
            Body Text
          </Typography>
          
          <div className="space-y-8">
            <div className="border-l-4 border-purple-500 pl-6">
              <p className="text-small text-[var(--text-secondary)] mb-2">
                Body 1 - Gilroy Medium 18px
              </p>
              <Typography variant="body1">
                This is body text 1. Perfect for primary content, article paragraphs, and main descriptions. It provides excellent readability with its 18px size and 1.4 line height.
              </Typography>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <p className="text-small text-[var(--text-secondary)] mb-2">
                Body 2 - Gilroy Medium 16px
              </p>
              <Typography variant="body2">
                This is body text 2. Ideal for secondary content, card descriptions, and supporting text. The 16px size works well for dense information while maintaining readability.
              </Typography>
            </div>
          </div>
        </section>

        {/* Small Text Section */}
        <section className="mb-16">
          <Typography variant="h3" className="mb-8 text-[var(--text-secondary)]">
            Small Text
          </Typography>
          
          <div className="border-l-4 border-orange-500 pl-6">
            <p className="text-small text-[var(--text-secondary)] mb-2">
              Small - Work Sans Medium 14px
            </p>
            <p className="text-small">
              This is small text. Perfect for captions, labels, metadata, and supplementary information. Uses Work Sans font family.
            </p>
          </div>
        </section>

        {/* Button Text Section */}
        <section className="mb-16">
          <Typography variant="h3" className="mb-8 text-[var(--text-secondary)]">
            Button Text
          </Typography>
          
          <div className="border-l-4 border-red-500 pl-6">
            <p className="text-small text-[var(--text-secondary)] mb-4">
              Button - Gilroy Semibold 16px (Uppercase)
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="text-button bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Primary Button
              </button>
              <button className="text-button bg-transparent text-blue-600 px-6 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition">
                Secondary Button
              </button>
              <button className="text-button bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                Dark Button
              </button>
            </div>
          </div>
        </section>

        {/* Real-world Example */}
        <section className="mb-16">
          <Typography variant="h3" className="mb-8 text-[var(--text-secondary)]">
            Real-world Example
          </Typography>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <Typography variant="h1" className="mb-4">
              Discover Paradise
            </Typography>
            <Typography variant="subtitle1" className="mb-6 text-[var(--text-secondary)]">
              Explore the world's most beautiful destinations
            </Typography>
            <Typography variant="body1" className="mb-8 max-w-2xl">
              Embark on unforgettable journeys to breathtaking locations. From pristine beaches to majestic mountains, we curate experiences that create lasting memories.
            </Typography>
            <div className="flex gap-4 items-center">
              <button className="text-button bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition">
                Start Exploring
              </button>
              <p className="text-small text-[var(--text-secondary)]">
                Over 10,000 destinations available
              </p>
            </div>
          </div>
        </section>

        {/* Card Example */}
        <section>
          <Typography variant="h3" className="mb-8 text-[var(--text-secondary)]">
            Card Component Example
          </Typography>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Bali, Indonesia", duration: "7 Days • 6 Nights", price: "$1,299" },
              { title: "Paris, France", duration: "5 Days • 4 Nights", price: "$1,899" },
              { title: "Tokyo, Japan", duration: "10 Days • 9 Nights", price: "$2,499" },
            ].map((destination, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
                <Typography variant="h3" className="mb-2">
                  {destination.title}
                </Typography>
                <Typography variant="subtitle2" className="mb-4 text-[var(--text-secondary)]">
                  {destination.duration}
                </Typography>
                <Typography variant="body2" className="mb-4 text-[var(--text-secondary)]">
                  Experience the beauty and culture of this amazing destination with our carefully crafted itinerary.
                </Typography>
                <div className="flex items-center justify-between">
                  <Typography variant="subtitle1" className="text-blue-600">
                    {destination.price}
                  </Typography>
                  <button className="text-button text-blue-600 hover:text-blue-700">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
