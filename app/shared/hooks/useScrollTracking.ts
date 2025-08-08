import { useEffect, useState } from "react";
import CONSTANTS from "../constants";

export const useScrollTracking = () => {
  const [activeSection, setActiveSection] = useState<string>(
    CONSTANTS.NAVIGATION.NAV_ITEMS.HOME
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = CONSTANTS.NAVIGATION.NAV_ITEMS_ARRAY;
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection;
};
