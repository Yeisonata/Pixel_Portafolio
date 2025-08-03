import React from "react";
import { twMerge } from "tailwind-merge";
import "../style/Frameworks.css";

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}) {
  const calculatedDuration = duration / speed;

  return (
    <>
  {path && (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="orbit-path"
    width={radius * 2 + 50}
    height={radius * 2 + 50}
    viewBox={`0 0 ${radius * 2 + 50} ${radius * 2 + 50}`}
  >
    <circle
      cx="50%"
      cy="50%"
      r={radius}
      fill="none"
      className="orbit-path-circle"
    />
  </svg>
)}


      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;

        return (
          <div
            style={{
              "--duration": `${calculatedDuration}s`,
              "--radius": `${radius}px`,
              "--angle": `${angle}deg`,
              "--icon-size": `${iconSize}px`,
            }}
            className={twMerge(
              `absolute flex w-[var(--icon-size)] h-[var(--icon-size)] items-center justify-center rounded-full
              animate-orbit transform-gpu
              ${reverse ? "animate-reverse" : ""}`,
              className
            )}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}
