"use client"
import { useState } from "react";
import Image from "next/image";
import {
  HomeIcon,
  BriefcaseIcon,
  FolderIcon,
  CheckIcon,
  CalendarIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`h-full ${
        isOpen ? "w-64" : "w-16"
      } bg-dark-blue text-white transition-all duration-300`}
    >
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="m-4 p-2 text-white hover:bg-gray-700 rounded"
      >
        <Bars3Icon className="w-6 h-6" />
      </button>

      {/* Sidebar Content */}
      {isOpen && (
        <div className="p-4">
          <Image
            src="/bugcrusher-logo.png"
            alt="Profile"
            width={64}
            height={64}
            className="rounded-full mx-auto"
          />
          <p className="text-center mt-2">Nelson Abalos Jr</p>
          {/* Navigation */}
          <nav className="mt-8 space-y-4">
            <a href="#" className="block text-sm hover:text-gray-400">
              <HomeIcon className="w-5 h-5 inline-block mr-2" /> Home
            </a>
            <a href="#" className="block text-sm hover:text-gray-400">
              <BriefcaseIcon className="w-5 h-5 inline-block mr-2" /> Jobs
            </a>
            <a href="#" className="block text-sm hover:text-gray-400">
              <FolderIcon className="w-5 h-5 inline-block mr-2" /> Resumes
            </a>
            <a href="#" className="block text-sm hover:text-gray-400">
              <CheckIcon className="w-5 h-5 inline-block mr-2" /> Tasks
            </a>
            <a href="#" className="block text-sm hover:text-gray-400">
              <CalendarIcon className="w-5 h-5 inline-block mr-2" /> Calendar
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
