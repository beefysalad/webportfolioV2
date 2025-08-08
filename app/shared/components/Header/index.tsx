"use client";
import React, { useEffect, useState } from "react";
import { NavigationProps } from "../../interface";
import CONSTANTS from "../../constants";
import { Menu, X } from "lucide-react";

export const Header = ({
  activeSection,
  isMenuOpen,
  scrollToSection,
  setIsMenuOpen,
}: NavigationProps) => {
  const navItems = CONSTANTS.NAVIGATION.NAV_ITEMS_ARRAY;
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
      console.log(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16 mt-4'>
          <div className='flex-shrink-0'>
            <h1 className='text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              PTRCK.DEV
            </h1>
          </div>

          <div className='hidden lg:block'>
            <div className='ml-10 flex items-baseline space-x-8'>
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize px-3 py-2 rounded-md text-sm font-bold transition-colors ${
                    activeSection === item
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className='lg:hidden flex items-center space-x-2'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='p-2 rounded-md text-gray-700 dark:text-gray-300'
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className='lg:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className='capitalize block px-3 py-2 rounded-md text-base font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 w-full text-left'
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
