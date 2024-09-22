'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import clsx from 'clsx';
import { links } from '@/lib/data';
import { Menu } from 'lucide-react';
import { MobileHeaderProps } from '@/lib/types';

const MobileHeader: React.FC<MobileHeaderProps> = ({
  activeSection,
  setActiveSection,
  setTimeOfLastClick,
  isMenuOpen,
  toggleMenu,
}) => {
  return (
    <nav className="flex fixed top-0 left-0 w-full h-[4.5rem] items-center justify-between px-4 bg-white bg-opacity-80 dark:bg-gray-950 dark:bg-opacity-75 backdrop-blur-[0.5rem] z-[999]">
      <div className="text-center flex-grow font-medium">{activeSection}</div>
      <button
        onClick={toggleMenu}
        className="text-gray-500 hover:text-gray-950 dark:hover:text-gray-300"
      >
        <Menu size={24} />
      </button>
      {isMenuOpen && (
        <motion.div
          className="fixed top-[4.5rem] left-0 w-full bg-white dark:bg-gray-950 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <ul className="flex flex-col items-center py-2">
            {links.map((link) => (
              <li key={link.hash} className="w-full">
                <Link
                  className={clsx(
                    'block px-4 py-2 text-gray-500 hover:text-gray-950 dark:hover:text-gray-300',
                    {
                      'text-gray-950 dark:text-gray-200 bg-gray-100 dark:bg-gray-800':
                        activeSection === link.name,
                    }
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                    toggleMenu();
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default MobileHeader;
