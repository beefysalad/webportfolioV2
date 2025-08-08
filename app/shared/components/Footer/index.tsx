import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import CONSTANTS from "../../constants";

export const Footer = () => {
  return (
    <footer className='py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white'>
      <div className='max-w-6xl mx-auto text-center'>
        <p className='text-gray-400 mb-2'>
          Just like me, this website will continue to evolve. Never Static.
        </p>
        <p className='text-gray-400 mb-2 text-sm'>
          Built with Next.js, TypeScript and TailwindCSS
        </p>
        <p className='text-gray-400 mb-4 text-xs'>Copyright © Patrick 2025</p>
        <div className='flex justify-center space-x-6'>
          <a
            href={CONSTANTS.LINKS.GITHUB}
            className='text-gray-400 hover:text-white transition-colors'
            target='_blank'
          >
            {/* TODO: DEPRECATED; REPLACE */}
            <Github size={20} />
          </a>
          <a
            href={CONSTANTS.LINKS.LINKEDIN}
            className='text-gray-400 hover:text-white transition-colors'
            target='_blank'
          >
            {/* TODO: DEPRECATED; REPLACE */}
            <Linkedin size={20} />
          </a>
          <a
            href={CONSTANTS.LINKS.MAILTO}
            className='text-gray-400 hover:text-white transition-colors'
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
