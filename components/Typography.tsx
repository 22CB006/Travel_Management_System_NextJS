import React from "react";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "small"
  | "button";

type TypographyElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";

interface TypographyProps {
  variant?: TypographyVariant;
  as?: TypographyElement;
  className?: string;
  children: React.ReactNode;
}

const variantMapping: Record<TypographyVariant, TypographyElement> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  subtitle1: "h4",
  subtitle2: "h5",
  body1: "p",
  body2: "p",
  small: "p",
  button: "span",
};

export default function Typography({
  variant = "body1",
  as,
  className = "",
  children,
}: TypographyProps) {
  const Component = as || variantMapping[variant];
  const variantClass = `text-${variant}`;

  return (
    <Component className={`${variantClass} ${className}`.trim()}>
      {children}
    </Component>
  );
}
