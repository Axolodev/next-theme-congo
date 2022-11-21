import React from "react";
import svgs from "./svgs";

export interface IconProps {
  name: string;
}

export default function Icon({ name }: IconProps) {
  const Component = svgs[name];

  if (!Component) {
    return null;
  }

  return (
    <span className="relative inline-block align-text-bottom icon">
      <Component />
    </span>
  );
}
