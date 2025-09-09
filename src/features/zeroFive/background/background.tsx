"use client";
import React from "react";
import { useDarkMode } from "@/hooks/useDarkmode";
import {
  GradientBackground,
  GradientBackgroundProps,
} from "react-gradient-animation";

export const ZeroFiveBackground = () => {
  const { isDarkMode } = useDarkMode();
  const generalOptions = {
    blending: "lighten",
    count: 8,
    skew: 0,
    opacity: { edge: 0, center: 1 },
    shapes: ["c"],
  } as GradientBackgroundProps;
  const gradientOptions = isDarkMode
    ? {
        ...generalOptions,
        size: { min: 800, max: 1600, pulse: 0.2 },
        speed: {
          x: {
            min: 0.5,
            max: 0.8,
          },
          y: {
            min: 0.5,
            max: 0.9,
          },
        },

        colors: {
          background: "hsl(var(--background))",
          particles: ["#100e1c", "#282057", "#990033", "#1720f8"],
        },
      }
    : {
        ...generalOptions,
        size: { min: 1200, max: 1600, pulse: 0.5 },
        count: 3,
        speed: {
          x: {
            min: 0.75,
            max: 1.4,
          },
          y: {
            min: 0.7,
            max: 1.4,
          },
        },

        colors: {
          background: "hsl(var(--background))",
          particles: ["#5166ec", "#a1afe1", "#1720f8"],
        },
      };

  return <GradientBackground key={isDarkMode} {...gradientOptions} />;
};
