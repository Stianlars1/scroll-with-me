import { useEffect, useState } from "react";

export const useDarkMode = () => {
  // State to store the dark mode preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check for saved preference or fallback to system preference
    const savedPreference = localStorage.getItem("dark-mode");
    if (savedPreference !== null) {
      return JSON.parse(savedPreference);
    }
    // Fallback to system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Effect to listen for changes to the system preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (localStorage.getItem("dark-mode") === null) {
        // Only update state if there's no saved preference
        setIsDarkMode(event.matches);
      }
    };

    // Add listener for changes
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup listener on component unmount
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode: boolean) => {
      const newMode = !prevMode;
      localStorage.setItem("dark-mode", JSON.stringify(newMode)); // Save preference
      return newMode;
    });
  };

  return { isDarkMode, toggleDarkMode };
};
