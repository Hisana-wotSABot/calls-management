// src/components/Header.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDownIcon, ListBulletIcon, FunnelIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const navigate = useNavigate();
  const toggleDropdown = (dropdown) => {
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white text-white">
      {/* Left Side */}
      <div className="flex items-center space-x-4">
        {/* Funnel Icon Button */}
        <button
          onClick={() => toggleDropdown('funnel')}
          className="p-2 bg-gray-100 shadow-md hover:shadow-lg border border-gray-200 hover:bg-gray-200 rounded flex items-center "
        >
          <FunnelIcon className="h-6 w-6 text-black " />
        </button>

        {/* All Calls Button with Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown('allCalls')}
            className="p-2 bg-gray-100 shadow-md hover:shadow-lg border border-gray-200  text-black hover:bg-gray-200 rounded flex items-center space-x-2"
          >
            <span>All Calls</span>
            <ChevronDownIcon className="h-5 w-5 text-black" />
          </button>
          {dropdownOpen === 'allCalls' && (
            <div className="absolute left-0 mt-2 w-48 bg-gray-100 text-black rounded shadow-lg">
                <ul>
                <li
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => navigate('/call/chau-kitzman')}
                >
                    Chau Kitzman (Sample)
                </li>
                <li className="p-2 hover:bg-gray-200">Option 2</li>
                {/* Add more options as needed */}
                </ul>
            </div>
          )}
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        {/* List Icon Button with Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown('list')}
            className="p-2 bg-gray-100 shadow-md hover:shadow-lg border border-gray-200 hover:bg-gray-200 rounded flex items-center"
          >
            <ListBulletIcon className="h-6 w-6 text-black" />
          </button>
          {dropdownOpen === 'list' && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-10">
              <ul>
                <li className="p-2 hover:bg-gray-300">Option 1</li>
                <li className="p-2 hover:bg-gray-300">Option 2</li>
                {/* Add more options as needed */}
              </ul>
            </div>
          )}
        </div>

        {/* Create Call Button */}
        <button className="bg-blue-500 p-2  shadow-md hover:shadow-lg text-white rounded hover:bg-blue-600">
          Create Call
        </button>

        {/* Action Button with Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown('action')}
            className="p-2 border border-gray-200 bg-gray-100 hover:bg-gray-200 rounded flex items-center text-black space-x-2 shadow-md hover:shadow-lg"
          >
            <span>Action</span>
            <ChevronDownIcon className="h-5 w-5 text-black" />
          </button>
          {dropdownOpen === 'action' && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-10">
              <ul>
                <li className="p-2 hover:bg-gray-300">Option 1</li>
                <li className="p-2 hover:bg-gray-300">Option 2</li>
                {/* Add more options as needed */}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
