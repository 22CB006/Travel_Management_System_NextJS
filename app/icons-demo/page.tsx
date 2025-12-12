"use client";

import { useState } from "react";
import TravelIcon, { type TravelIconName } from "@/components/TravelIcon";
import TravelCategories from "@/components/TravelCategories";

const allIcons: TravelIconName[] = [
  "packages",
  "hotels",
  "cabs",
  "activities",
  "trains",
  "buses",
  "flights",
  "cruise",
];

export default function IconsDemo() {
  const [activeCategory, setActiveCategory] = useState<TravelIconName>("flights");

  return (
    <div className="min-h-screen bg-primary">
      <div className="container py-16">
        {/* Page Header */}
        <div className="bg-white rounded-2xl p-8 mb-8">
          <h1 className="text-h2 text-primary mb-2">Travel Icons</h1>
          <p className="text-body1 text-secondary">
            All travel category icons from your Figma design
          </p>
        </div>

        {/* Interactive Categories */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl p-8">
            <h2 className="text-h3 text-primary mb-6">Interactive Categories</h2>
            <TravelCategories
              activeCategory={activeCategory}
              onCategoryClick={setActiveCategory}
            />
            <div className="mt-6 text-center">
              <p className="text-body2 text-secondary">
                Selected: <span className="text-brand font-semibold">{activeCategory}</span>
              </p>
            </div>
          </div>
        </section>

        {/* All Icons Grid */}
        <section className="mb-12">
          <h2 className="text-h3 text-primary mb-6">All Icons</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {allIcons.map((icon) => (
              <div key={icon} className="bg-white rounded-xl p-6 text-center">
                <div className="flex justify-center mb-4">
                  <TravelIcon name={icon} size={48} />
                </div>
                <p className="text-subtitle2 text-primary capitalize">{icon}</p>
                <code className="text-small text-subheader bg-secondary px-2 py-1 rounded mt-2 inline-block">
                  {icon}.svg
                </code>
              </div>
            ))}
          </div>
        </section>

        {/* Size Variations */}
        <section className="mb-12">
          <h2 className="text-h3 text-primary mb-6">Size Variations</h2>
          <div className="bg-white rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[16, 24, 32, 48].map((size) => (
                <div key={size} className="text-center">
                  <p className="text-small text-secondary mb-4">{size}px</p>
                  <div className="flex justify-center">
                    <TravelIcon name="flights" size={size} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="mb-12">
          <h2 className="text-h3 text-primary mb-6">Usage Examples</h2>
          
          {/* Example 1: Navigation Tabs */}
          <div className="bg-white rounded-2xl p-8 mb-6">
            <h3 className="text-subtitle1 text-primary mb-4">Navigation Tabs</h3>
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {allIcons.map((icon) => (
                <button
                  key={icon}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-brand transition whitespace-nowrap"
                >
                  <TravelIcon name={icon} size={20} />
                  <span className="text-body2 capitalize">{icon}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Example 2: Feature Cards */}
          <div className="bg-white rounded-2xl p-8 mb-6">
            <h3 className="text-subtitle1 text-primary mb-4">Feature Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["flights", "hotels", "packages"].map((icon) => (
                <div key={icon} className="card">
                  <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mb-4">
                    <TravelIcon name={icon as TravelIconName} size={32} />
                  </div>
                  <h4 className="text-subtitle1 text-primary mb-2 capitalize">
                    {icon}
                  </h4>
                  <p className="text-body2 text-secondary">
                    Book your {icon} with the best deals and offers available.
                  </p>
                  <button className="btn-outline text-button mt-4">
                    Explore
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Example 3: List Items */}
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-subtitle1 text-primary mb-4">List Items</h3>
            <div className="space-y-3">
              {allIcons.map((icon) => (
                <div
                  key={icon}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary transition"
                >
                  <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center">
                    <TravelIcon name={icon} size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-subtitle2 text-primary capitalize">{icon}</p>
                    <p className="text-small text-secondary">
                      Explore {icon} options
                    </p>
                  </div>
                  <button className="text-brand hover:text-primary transition">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section>
          <h2 className="text-h3 text-primary mb-6">Code Examples</h2>
          <div className="bg-white rounded-2xl p-8">
            <div className="space-y-6">
              <div>
                <p className="text-subtitle2 text-primary mb-2">Basic Usage</p>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code className="text-small text-subheader">
{`import TravelIcon from "@/components/TravelIcon";

<TravelIcon name="flights" size={24} />`}
                  </code>
                </pre>
              </div>

              <div>
                <p className="text-subtitle2 text-primary mb-2">With Custom Styling</p>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code className="text-small text-subheader">
{`<TravelIcon 
  name="hotels" 
  size={32} 
  className="text-brand hover:scale-110 transition"
/>`}
                  </code>
                </pre>
              </div>

              <div>
                <p className="text-subtitle2 text-primary mb-2">Using TravelCategories Component</p>
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code className="text-small text-subheader">
{`import TravelCategories from "@/components/TravelCategories";

<TravelCategories
  activeCategory={activeCategory}
  onCategoryClick={setActiveCategory}
/>`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
