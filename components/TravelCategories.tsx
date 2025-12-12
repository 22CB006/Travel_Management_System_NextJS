import TravelIcon, { type TravelIconName } from "./TravelIcon";

interface Category {
  name: TravelIconName;
  label: string;
}

const categories: Category[] = [
  { name: "flights", label: "Flights" },
  { name: "hotels", label: "Hotels" },
  { name: "packages", label: "Packages" },
  { name: "cabs", label: "Cabs" },
  { name: "trains", label: "Trains" },
  { name: "buses", label: "Buses" },
  { name: "cruise", label: "Cruise" },
  { name: "activities", label: "Activities" },
];

interface TravelCategoriesProps {
  onCategoryClick?: (category: TravelIconName) => void;
  activeCategory?: TravelIconName;
}

export default function TravelCategories({
  onCategoryClick,
  activeCategory,
}: TravelCategoriesProps) {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {categories.map((category) => {
        const isActive = activeCategory === category.name;
        
        return (
          <button
            key={category.name}
            onClick={() => onCategoryClick?.(category.name)}
            className={`
              flex flex-col items-center gap-2 p-4 rounded-xl
              transition-all duration-300
              ${
                isActive
                  ? "bg-brand text-white shadow-lg scale-105"
                  : "bg-white hover:bg-brand-light hover:scale-105"
              }
            `}
          >
            <div className={isActive ? "brightness-0 invert" : ""}>
              <TravelIcon name={category.name} size={32} />
            </div>
            <span className="text-small font-semibold">{category.label}</span>
          </button>
        );
      })}
    </div>
  );
}
