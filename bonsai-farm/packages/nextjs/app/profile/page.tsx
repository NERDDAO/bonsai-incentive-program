"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import MarcOsWindow2 from "../../components/macOS/newWindowMacOS2";
import type { NextPage } from "next";

const Debug: NextPage = () => {
  const getWindowDimensions = () => {
    if (typeof window !== "undefined") {
      // setPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
    // Default dimensions if window is not defined (SSR)
    return { width: 0, height: 0 };
  };

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const handleSize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  const windowSize = windowDimensions;
  const [initPosition, setInitPosition] = useState({ x: 350, y: 50 });

  useEffect(() => {
    // Define breakpoints for screen sizes
    const breakpoints = {
      sm: 640,
      md: 768,
      lg: 1024,
    };

    // Determine the current screen size based on window width
    let screenSize = "lg"; // Default to large screen
    if (windowSize.width) {
      screenSize = windowSize.width < breakpoints.sm ? "sm" : windowSize.width < breakpoints.md ? "md" : "lg";
    }

    // Adjust initPosition based on screen size
    let newPosition;
    switch (screenSize) {
      case "sm":
        newPosition = { x: 150, y: 20 }; // Example values for small screens
        break;
      case "md":
        newPosition = { x: 250, y: 30 }; // Example values for medium screens
        break;
      case "lg":
      default:
        newPosition = { x: 350, y: 50 }; // Default values for large screens
        break;
    }

    setInitPosition(newPosition);
  }, [windowSize.width]); // Re-run effect when window width changes

  return (
    <>
      <div className="pt-20 pb-20">
        <div className="flex flex-col items-center justify-center bg-transparent mx-20">
          <MarcOsWindow2 />
        </div>
      </div>
    </>
  );
};

export default Debug;
