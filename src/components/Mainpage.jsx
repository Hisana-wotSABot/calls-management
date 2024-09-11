import React, { useState } from 'react';
import SidePanel from './Sidepanel';
import CallAgenda from './CallAgenda';


const MainPage = () => {
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleRecordsChange = (newCount) => {
    setRecordsPerPage(newCount);
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-gray-200 min-h-screen p-8">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">Total Record 1</div>

        <div className="flex items-center space-x-2">
          {/* Dropdown for Records per page */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="border p-2 shadow-md hover:shadow-lg border border-gray-400  rounded-md bg-white flex items-center"
            >
              {recordsPerPage} Records Per Page
              <svg
                className="w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Options */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                <ul>
                  {[10, 20, 50].map((count) => (
                    <li
                      key={count}
                      className="p-2 shadow-md hover:shadow-lg border border-gray-200 cursor-pointer"
                      onClick={() => handleRecordsChange(count)}
                    >
                      {count} Records Per Page
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Dot Representation */}
          <span className="mx-2 text-xl text-gray-500">•</span>

          {/* Pagination Controls */}
          <div className="flex items-center space-x-1">
            <div className="text-sm font-bold mx-2">1 - 1</div>
            <div className="flex items-center space-x-6">
                <button className="text-gray-500">
                    &lt;
                </button>
                <button className="text-gray-500">
                    &gt;
                </button>
            </div>

          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        {/* Side Panel */}
        <SidePanel />


        {/* Table Content */}
        
        <CallAgenda />
        
      </div>
    </div>
  );
};

export default MainPage;
