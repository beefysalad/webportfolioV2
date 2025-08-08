import React from "react";
import CONSTANTS from "../../constants";
import { Code } from "lucide-react";

export const About = () => {
  const techStack = CONSTANTS.ABOUT.TECH;
  const techColors: Record<string, string> = CONSTANTS.ABOUT.TECHSTACK_COLORS;

  return (
    <section id='about' className='py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold mb-4 text-gray-900 dark:text-white'>
            About Me
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto'></div>
        </div>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h3 className='text-4xl font-bold text-gray-900 dark:text-white mb-4 lg:-mt-16'>
              John Patrick Ryan D. Mandal
            </h3>
            <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
              With over 2 years of experience in full-stack development, I
              specialize in creating scalable web applications and intuitive
              user interfaces. Im passionate about clean code, modern design,
              and continuous learning.
            </p>
            <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
              When Im not coding, youll find me playing videogames and watching
              animes.
            </p>
            <div className='flex flex-wrap gap-3 pt-4'>
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className={`px-4 py-2 rounded-full border backdrop-blur-sm bg-white/5 dark:bg-black/20 text-sm font-medium cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-[0_0_10px] hover:shadow-current ${
                    techColors[tech] || techColors.default
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className='relative'>
            <div className='w-full h-96 bg-gradient-to-br from-blue-400 via-purple-500 to-blue-600 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300'>
              <div className='absolute inset-4 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center'>
                <div className='text-center'>
                  <Code size={64} className='mx-auto mb-4 text-blue-600' />
                  <h4 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
                    Clean Code
                  </h4>
                  <p className='text-gray-600 dark:text-gray-300'>
                    Beautiful, maintainable solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
