"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { links } from "@/lib/data";
import { Menu } from "lucide-react";
import { MobileHeaderProps } from "@/lib/types";

const MobileHeader: React.FC<MobileHeaderProps> = ({
  activeSection,
  setActiveSection,
  setTimeOfLastClick,
  isMenuOpen,
  toggleMenu,
}) => {
  return (
    <nav className="fixed left-0 top-0 z-[999] flex h-[4.5rem] w-full items-center justify-between bg-white bg-opacity-80 px-4 backdrop-blur-[0.5rem] dark:bg-gray-950 dark:bg-opacity-75">
      <div className="flex-grow text-center font-medium">{activeSection}</div>
      <button
        onClick={toggleMenu}
        className="text-gray-500 hover:text-gray-950 dark:hover:text-gray-300"
      >
        <Menu size={24} />
      </button>
      {isMenuOpen && (
        <motion.div
          className="fixed left-0 top-[4.5rem] w-full bg-white shadow-lg dark:bg-gray-950"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <ul className="flex flex-col items-center py-2">
            {links.map((link) => (
              <li key={link.hash} className="w-full">
                <Link
                  className={clsx(
                    "block px-4 py-2 text-gray-500 hover:text-gray-950 dark:hover:text-gray-300",
                    {
                      "bg-gray-100 text-gray-950 dark:bg-gray-800 dark:text-gray-200":
                        activeSection === link.name,
                    },
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
