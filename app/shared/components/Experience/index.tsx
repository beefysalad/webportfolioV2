import React from "react";
import CONSTANTS from "../../constants";

export const Experience = () => {
  const experiences = CONSTANTS.EXPERIENCE;
  return (
    <section id='experience' className='py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold mb-4 text-gray-900 dark:text-white'>
            Work Experience
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8'></div>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            My professional journey and key accomplishments
          </p>
        </div>
        <div className='space-y-8'>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className='bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8'
            >
              <div className='flex flex-col md:flex-row md:items-start md:justify-between mb-6'>
                <div className='mb-4 md:mb-0'>
                  <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
                    {exp.title}
                  </h3>
                  <h4 className='text-xl text-blue-600 dark:text-blue-400 font-semibold'>
                    {exp.company}
                  </h4>
                </div>
                <span className='px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium'>
                  {exp.period}
                </span>
              </div>
              <p className='text-gray-600 dark:text-gray-300 mb-6 leading-relaxed'>
                {exp.description}
              </p>
              <div className='space-y-2'>
                <h5 className='font-semibold text-gray-900 dark:text-white mb-3'>
                  Key Achievements:
                </h5>
                <ul className='space-y-2'>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className='flex items-start'>
                      <div className='w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                      <span className='text-gray-600 dark:text-gray-300'>
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
