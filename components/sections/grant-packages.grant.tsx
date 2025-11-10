import Divider from "../divider";
import PricingComponent from "../pricing-component"; // You can rename this to CollectionCard or something more generic if you like

const featuredCollections = [
  {
    title: "Electronics Essentials",
    label:
      "Top-rated electronics and gadgets from trusted vendors to upgrade your tech",
    perks: [
      "Curated selection of 50+ products",
      "Exclusive vendor discounts",
      "Fast shipping options",
      "Customer reviews & ratings",
    ],
    packageLink: "electronics-essentials",
  },
  {
    title: "Fashion & Accessories",
    label:
      "Discover the latest trends from multiple fashion vendors for every style",
    perks: [
      "Curated selection of 100+ products",
      "Seasonal collections",
      "Exclusive vendor discounts",
      "Customer reviews & ratings",
    ],
    packageLink: "fashion-accessories",
    isRecommended: true,
  },
  {
    title: "Home & Living",
    label:
      "Quality products from trusted vendors to beautify your home and lifestyle",
    perks: [
      "Curated selection of 80+ products",
      "Premium vendor deals",
      "Fast shipping options",
      "Customer reviews & ratings",
    ],
    packageLink: "home-living",
  },
];

export default function FeaturedCollections() {
  return (
    <section id="collections" className="py-16">
      <div className="py-16 px-4">
        <div>
          <h1 className="text-heading-0 text-center font-bold">
            Explore Our Collections
          </h1>
        </div>

        <p className="text-paragraph text-center mx-auto max-w-[40ch] mt-2">
          Browse curated collections from top vendors across multiple categories
        </p>

        <div className="grid md:grid-cols-3 mt-16 gap-4">
          {featuredCollections.map((collection, index) => (
            <PricingComponent grantPackage={collection} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
