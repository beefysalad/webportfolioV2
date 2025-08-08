import React from "react";
import CONSTANTS from "../../constants";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = CONSTANTS.PROJECTS;
  return (
    <section
      id={CONSTANTS.NAVIGATION.NAV_ITEMS.PROJECTS}
      className='py-20 px-4 sm:px-6 lg:px-8'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold mb-4 text-gray-900 dark:text-white'>
            Featured Projects
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8'></div>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            A showcase of my recent work and personal projects
          </p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group'
            >
              <div className='h-48 bg-gradient-to-br from-blue-400 via-purple-500 to-blue-600 relative overflow-hidden'>
                <div className='absolute inset-0  bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300'></div>
                <div className='absolute bottom-4 left-4 right-4'>
                  <div className='flex space-x-2'>
                    <a
                      href={project.github}
                      className='p-2 bg-opacity-20 backdrop-blur-sm rounded-lg hover:bg-opacity-30 transition-all'
                    >
                      <Github className='text-white' size={20} />
                    </a>
                    <a
                      href={project.live}
                      className='p-2 bg-opacity-20 backdrop-blur-sm rounded-lg hover:bg-opacity-30 transition-all'
                    >
                      <ExternalLink className='text-white' size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
                  {project.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-300 mb-4 leading-relaxed'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2'>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className='px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm'
                    >
                      {tech}
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
