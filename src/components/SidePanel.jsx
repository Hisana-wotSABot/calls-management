import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa'; 

const SidePanel = () => {
  const [isSystemFiltersOpen, setIsSystemFiltersOpen] = useState(false);
  const [isFilterByFieldsOpen, setIsFilterByFieldsOpen] = useState(false);

  return (
    <div className="w-1/4 bg-white p-4 border border-md shadow-md rounded">
      <h2 className="text-xl font-semibold mb-4">Filter Call By</h2>

      {/* Search Bar */}
        <div className="flex items-center border border-gray-300 rounded-full w-full mb-4">
            <FaSearch className="text-gray-700 ml-3 text-xl font-light" /> {/* Add the search icon */}
            <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 outline-none border-none rounded-full "
            />
        </div>

      {/* System Defined Filters Dropdown */}
      <div className="mb-4">
      

        <button
            onClick={() => setIsSystemFiltersOpen(!isSystemFiltersOpen)}
            className="w-full text-left p-2 bg-white rounded flex items-center"
        >
            <FaChevronDown className="mr-2" /> {/* Add the dropdown icon with some margin */}
            System Defined Filters
        </button>

        {isSystemFiltersOpen && (
          <div className="mt-2 p-2 bg-white ">
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" />
              Touched Records
            </label>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" />
              Untouched Records
            </label>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" />
              Record Action
            </label>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" />
              Related Record Action
            </label>
          </div>
        )}
      </div>

      {/* Filter By Fields Dropdown */}
      <div className="flex-grow">
        <button
            onClick={() => setIsFilterByFieldsOpen(!isFilterByFieldsOpen)}
            className="w-full text-left p-2 bg-white rounded flex items-center"
        >
            <FaChevronDown className="mr-2" /> {/* Add the dropdown icon with margin */}
            Filter By Fields
        </button>
        {isFilterByFieldsOpen && (
          <div className="mt-2 p-2 bg-white  ">
            {[
              'Call Agenda',
              'Call Duration',
              'Call Duration (in seconds)',
              'Call Owner',
              'Call Purpose',
              'Call Result',
              'Call Start Time',
              'Call Type',
              'Caller ID',
              'Contact Name',
              'Created By',
              'Created Time',
              'Dialed Number',
              'Modified By',
              'Modified Time',
              'Outgoing Call Status',
              'Related To',
              'Scheduled in CRM'
            ].map((field) => (
              <label key={field} className="block mb-2">
                <input type="checkbox" className="mr-2" />
                {field}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SidePanel;
