"use client";
import React from "react";
import { Linkedin, Mail, ChevronDown } from "lucide-react";

import { HeroProps } from "../../interface";
import CONSTANTS from "../../constants";

export const Hero = ({ scrollToSection }: HeroProps) => {
  return (
    <section
      id={CONSTANTS.NAVIGATION.NAV_ITEMS.HOME}
      className='relative min-h-screen flex items-center justify-center overflow-hidden'
    >
      <div className='absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800'></div>
      <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8'>
        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-6'>
          <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent'>
            Full Stack
          </span>
          <br />
          <span className='text-gray-900 dark:text-white'>Developer</span>
        </h1>
        <p className='text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed'>
          Software engineer with a strong interest in developing top-notch
          solutions for real-world problems.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <button
            onClick={() => scrollToSection("projects")}
            className='px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg'
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className='px-8 py-4 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300'
          >
            Get In Touch
          </button>
        </div>
        <div className='mt-12 flex justify-center space-x-6'>
          <a
            href={CONSTANTS.LINKS.GITHUB}
            className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
            aria-label='GitHub'
            target='_blank'
          >
            <svg
              role='img'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='currentColor'
            >
              <title>GitHub</title>
              <path
                d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
                3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
                0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61
                C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729
                1.205.084 1.838 1.236 1.838 1.236 
                1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605
                -2.665-.3-5.466-1.332-5.466-5.93 
                0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
                0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 
                3-.405 1.02.006 2.04.138 3 .405 
                2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 
                2.873.12 3.176.765.84 1.23 1.91 
                1.23 3.22 0 4.61-2.805 5.625-5.475 
                5.92.42.36.81 1.096.81 2.22 
                0 1.606-.015 2.896-.015 3.286 
                0 .315.21.69.825.57C20.565 22.092 24 
                17.592 24 12.297c0-6.627-5.373-12-12-12'
              />
            </svg>
          </a>

          <a
            href={CONSTANTS.LINKS.LINKEDIN}
            target='_blank'
            className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
          >
            <Linkedin size={24} />
          </a>
          <a
            href={CONSTANTS.LINKS.MAILTO}
            className='text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
        <ChevronDown className='text-gray-400 dark:text-gray-600' size={32} />
      </div>
    </section>
  );
};
