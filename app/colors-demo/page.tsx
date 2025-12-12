export default function ColorsDemo() {
  return (
    <div className="min-h-screen bg-primary">
      <div className="container py-16">
        {/* Page Header */}
        <div className="bg-white rounded-2xl p-8 mb-8">
          <h1 className="text-h2 text-primary mb-2">Color System</h1>
          <p className="text-body1 text-secondary">
            Complete color palette based on Figma design specifications
          </p>
        </div>

        {/* Background Colors */}
        <section className="mb-12">
          <h2 className="text-h3 text-primary mb-6">Background Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6">
              <div className="bg-primary h-32 rounded-lg mb-4"></div>
              <p className="text-subtitle2 text-primary mb-1">Background Primary</p>
              <p className="text-body2 text-secondary">#F2F4F6</p>
              <code className="text-small text-subheader bg-secondary px-2 py-1 rounded mt-2 inline-block">
                var(--bg-primary)
              </code>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="bg-secondary h-32 rounded-lg mb-4"></div>
              <p className="text-subtitle2 text-primary mb-1">Background Secondary</p>
              <p className="text-body2 text-secondary">#EBEBEB</p>
              <code className="text-small text-subheader bg-secondary px-2 py-1 rounded mt-2 inline-block">
                var(--bg-secondary)
              </code>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <div className="bg-white h-32 rounded-lg mb-4 border-2 border-gray-200"></div>
              <p className="text-subtitle2 text-primary mb-1">Background White</p>
              <p className="text-body2 text-secondary">#FFFFFF</p>
              <code className="text-small text-subheader bg-secondary px-2 py-1 rounded mt-2 inline-block">
                var(--bg-white)
              </code>
            </div>
          </div>
        </section>

        {/* Brand Colors */}
        <section className="mb-12">
          <h2 className="text-h3 text-primary mb-6">Brand Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6">
              <div className="bg-brand h-32 rounded-lg mb-4"></div>
              <p className="text-subtitle2 text-primary mb-1">Primary Color</p>
              <p className="text-body2 text-secondary">#FF6A00</p>
              <code className="text-small text-subheader bg-secondary px-2 py-1 rounded mt-2 inline-block">
                var(--primary)
              </code>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="bg-brand-light h-32 rounded-lg mb-4"></div>
              <p className="text-subtitle2 text-primary mb-1">Primary Light</p>
              <p className="text-body2 text-secondary">#FFEFDF</p>
              <code className="text-small text-subheader bg-secondary px-2 py-1 rounded mt-2 inline-block">
                var(--primary-light)
              </code>
            </div>
          </div>
        </section>

        {/* Text Colors */}
        <section className="mb-12">
          <h2 className="text-h3 text-primary mb-6">Text Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6">
              <div className="bg-[#16242a] h-32 rounded-lg mb-4"></div>
              <p className="text-subtitle2 text-primary mb-1">Text Primary</p>
              <p className="text-body2 text-secondary">#16242A</p>
              <code className="text-small text-subheader bg-secondary px-2 py-1 rounded mt-2 inline-block">
                var(--text-primary)
              </code>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="bg-[#1e1e1e] h-32 rounded-lg mb-4"></div>
              <p className="text-subtitle2 text-primary mb-1">Text Secondary</p>
              <p className="text-body2 text-secondary">#1E1E1E</p>
              <code className="text-small text-subheader bg-secondary px-2 py-1 rounded mt-2 inline-block">
                var(--text-secondary)
              </code>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="bg-[#29383e] h-32 rounded-lg mb-4"></div>
              <p className="text-subtitle2 text-primary mb-1">Text Subheader</p>
              <p className="text-body2 text-secondary">#29383E</p>
              <code className="text-small text-subheader bg-secondary px-2 py-1 rounded mt-2 inline-block">
                var(--text-subheader)
              </code>
            </div>
          </div>
        </section>

        {/* Gradient */}
        <section className="mb-12">
          <h2 className="text-h3 text-primary mb-6">Gradient</h2>
          <div className="bg-white rounded-xl p-6">
            <div className="bg-gradient h-48 rounded-lg mb-4"></div>
            <p className="text-subtitle2 text-primary mb-1">Gradient Color</p>
            <div className="flex gap-4 flex-wrap">
              <div>
                <p className="text-body2 text-secondary">Start: #FFD9BD</p>
                <code className="text-small text-subheader bg-secondary px-2 py-1 rounded mt-1 inline-block">
                  var(--gradient-start)
                </code>
              </div>
              <div>
                <p className="text-body2 text-secondary">End: #B3E5F1</p>
                <code className="text-small text-subheader bg-secondary px-2 py-1 rounded mt-1 inline-block">
                  var(--gradient-end)
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Button Styles */}
        <section className="mb-12">
          <h2 className="text-h3 text-primary mb-6">Button Styles</h2>
          <div className="bg-white rounded-xl p-8">
            <div className="flex flex-wrap gap-4 mb-6">
              <button className="btn-primary text-button">Primary Button</button>
              <button className="btn-secondary text-button">Secondary Button</button>
              <button className="btn-outline text-button">Outline Button</button>
            </div>
            <div className="bg-secondary p-4 rounded-lg">
              <p className="text-small text-subheader mb-2">Hover over buttons to see effects</p>
              <p className="text-small text-subheader">
                • Primary: Orange with lift effect<br />
                • Secondary: Dark with lift effect<br />
                • Outline: Fills with brand color
              </p>
            </div>
          </div>
        </section>

        {/* Tags */}
        <section className="mb-12">
          <h2 className="text-h3 text-primary mb-6">Tags & Badges</h2>
          <div className="bg-white rounded-xl p-8">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="tag">Featured</span>
              <span className="tag">New</span>
              <span className="tag">Popular</span>
              <span className="tag">Best Seller</span>
              <span className="tag">Limited Offer</span>
            </div>
            <p className="text-body2 text-secondary">
              Tags use the light brand color background (#FFEFDF) with primary text
            </p>
          </div>
        </section>

        {/* Card Example */}
        <section className="mb-12">
          <h2 className="text-h3 text-primary mb-6">Card Component</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <span className="tag mb-3">Featured</span>
              <h3 className="text-h3 text-primary mb-2">Bali, Indonesia</h3>
              <p className="text-subtitle2 text-subheader mb-3">7 Days • 6 Nights</p>
              <p className="text-body2 text-secondary mb-4">
                Experience the beauty of tropical paradise with pristine beaches and rich culture.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-subtitle1 text-brand">$1,299</span>
                <button className="btn-outline text-button">Book Now</button>
              </div>
            </div>

            <div className="card">
              <span className="tag mb-3">Popular</span>
              <h3 className="text-h3 text-primary mb-2">Paris, France</h3>
              <p className="text-subtitle2 text-subheader mb-3">5 Days • 4 Nights</p>
              <p className="text-body2 text-secondary mb-4">
                Discover the city of lights with iconic landmarks and world-class cuisine.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-subtitle1 text-brand">$1,899</span>
                <button className="btn-outline text-button">Book Now</button>
              </div>
            </div>

            <div className="card">
              <span className="tag mb-3">New</span>
              <h3 className="text-h3 text-primary mb-2">Tokyo, Japan</h3>
              <p className="text-subtitle2 text-subheader mb-3">10 Days • 9 Nights</p>
              <p className="text-body2 text-secondary mb-4">
                Immerse yourself in the perfect blend of tradition and modern innovation.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-subtitle1 text-brand">$2,499</span>
                <button className="btn-outline text-button">Book Now</button>
              </div>
            </div>
          </div>
        </section>

        {/* Section Styles */}
        <section className="mb-12">
          <h2 className="text-h3 text-primary mb-6">Section Backgrounds</h2>
          
          <div className="section-white rounded-xl mb-4 py-12">
            <div className="text-center">
              <h3 className="text-h3 text-primary mb-2">White Section</h3>
              <p className="text-body2 text-secondary">Perfect for content areas and cards</p>
            </div>
          </div>

          <div className="section-gray rounded-xl mb-4 py-12">
            <div className="text-center">
              <h3 className="text-h3 text-primary mb-2">Gray Section</h3>
              <p className="text-body2 text-secondary">Ideal for alternating sections</p>
            </div>
          </div>

          <div className="section-gradient rounded-xl py-12">
            <div className="text-center">
              <h3 className="text-h3 text-primary mb-2">Gradient Section</h3>
              <p className="text-body2 text-secondary">Great for hero sections and highlights</p>
            </div>
          </div>
        </section>

        {/* Real World Example */}
        <section>
          <h2 className="text-h3 text-primary mb-6">Real-World Example</h2>
          <div className="section-gradient rounded-2xl p-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="tag mb-4">Limited Time Offer</span>
              <h1 className="text-h1 text-primary mb-4">
                Summer Sale
              </h1>
              <p className="text-body1 text-secondary mb-8">
                Save up to 40% on selected destinations. Book your dream vacation today and create unforgettable memories.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button className="btn-primary text-button">Explore Deals</button>
                <button className="btn-secondary text-button">Learn More</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
