import React from "react";

interface ComponentWrapperProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  scale?: number;
  className?: string;
}

export default function ComponentWrapper({
  children,
  width = "100%",
  scale = 1,
  height = "auto",
  className = "",
}: ComponentWrapperProps) {
  return (
    <div
      className={`rounded-lg overflow-hidden md:-translate-x-9 md:scale-75 bg-background border border-gray-300 p-2 md:p-5\ shadow-md ${className}`}
      style={{
        width,
        height,
        // transform: `scale(${scale})`,
        transformOrigin: "center",
        maxWidth: "100%",
      }}
    >
      {children}
    </div>
  );
}
