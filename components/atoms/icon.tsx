import React from "react";
import svgs from "./svgs";

export interface IconProps {
  name: string;
  className?: string;
}

export default function Icon({ name, className = "" }: IconProps) {
  const Component = svgs[name];

  if (!Component) {
    return null;
  }

  return (
    <span
      className={`relative inline-block align-text-bottom icon ${className}`}
    >
      <Component />
    </span>
  );
}
