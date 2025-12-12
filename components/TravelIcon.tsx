import Image from "next/image";

export type TravelIconName =
  | "packages"
  | "hotels"
  | "cabs"
  | "activities"
  | "trains"
  | "buses"
  | "flights"
  | "cruise";

interface TravelIconProps {
  name: TravelIconName;
  size?: number;
  className?: string;
  alt?: string;
}

export default function TravelIcon({
  name,
  size = 24,
  className = "",
  alt,
}: TravelIconProps) {
  return (
    <Image
      src={`/icons/${name}.svg`}
      alt={alt || name}
      width={size}
      height={size}
      className={className}
    />
  );
}
