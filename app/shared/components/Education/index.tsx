import React from "react";
import CONSTANTS from "../../constants";

export const Education = () => {
  const education = CONSTANTS.EDUCATION;
  const courseColors: Record<string, string> = {
    "Data Structures": "text-blue-400 border-blue-400/30 hover:shadow-blue-400",
    Algorithms: "text-green-400 border-green-400/30 hover:shadow-green-400",
    "Database Systems":
      "text-purple-400 border-purple-400/30 hover:shadow-purple-400",
    "Software Engineering":
      "text-pink-400 border-pink-400/30 hover:shadow-pink-400",
    "Web Development":
      "text-yellow-400 border-yellow-400/30 hover:shadow-yellow-400",
    "Hardware Programming":
      "text-red-400 border-red-400/30 hover:shadow-red-400",
    default: "text-gray-400 border-gray-400/30 hover:shadow-gray-400",
  };

  return (
    <section
      id={CONSTANTS.NAVIGATION.NAV_ITEMS.EDUCATION}
      className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-7'>
          <h2 className='text-4xl font-bold mb-4 text-gray-900 dark:text-white'>
            Education
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-3'></div>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            Academic background and continuous learning
          </p>
        </div>

        <div className='space-y-8'>
          {education.map((edu, index) => (
            <div
              key={index}
              className='bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8'
            >
              <div className='flex flex-col md:flex-row md:items-start md:justify-between mb-6'>
                <div className='mb-4 md:mb-0'>
                  <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
                    {edu.degree}
                  </h3>
                  <h4 className='text-xl text-blue-600 dark:text-blue-400 font-semibold'>
                    {edu.school}
                  </h4>
                </div>
                <span className='px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium'>
                  {edu.period}
                </span>
              </div>
              <p className='text-gray-600 dark:text-gray-300 mb-6 leading-relaxed'>
                {edu.description}
              </p>
              <div>
                <h5 className='font-semibold text-gray-900 dark:text-white mb-3'>
                  Key Coursework:
                </h5>
                <div className='flex flex-wrap gap-3 pt-4'>
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className={`px-4 py-2 rounded-full border backdrop-blur-sm bg-white/5 dark:bg-black/20 text-sm font-medium cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-[0_0_10px] ${
                        courseColors[course] || courseColors.default
                      }`}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
