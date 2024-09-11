import React from 'react';
import { MdLocalOffer } from 'react-icons/md';

import { ChevronDownIcon,  EllipsisHorizontalIcon, PhoneIcon } from '@heroicons/react/24/outline';


const MainContent = ({ CallInformationSection, RightSidebar }) => {
  return (
    <div className="flex-1  bg-gray-50 min-h-screen flex flex-col">
      <div className="bg-white rounded border border-gray-200 p-4 mb-4">
        <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
  <PhoneIcon className="h-6 w-6 text-gray-700" />
  <h1 className="text-xl font-bold text-blue-500">
    Chau Kitzman (Sample)
  </h1>
  <h1 className="text-xl font-bold text-black">- Leads</h1>
</div>

        </div>

        <div className="flex items-center justify-between mt-1 mb-2">
        <div className="flex items-center space-x-2">
  <MdLocalOffer className="h-6 w-6 text-gray-700" />
  <span className="text-gray-700">Add tags</span>
</div>

          <div className="flex items-center">
            <div className="flex items-center bg-blue-500 text-white rounded">
              <button className="px-4 py-2 rounded-l hover:bg-blue-600">
                Mark as Completed
              </button>
              <button className="px-3 py-2 hover:bg-blue-600 border-l border-white flex items-center">
  <span className="mr-2"> {/* This span is optional if you want to add space between the icon and text */}
    <ChevronDownIcon className="h-5 w-5 text-white" />
  </span>
</button>

            </div>
            <button className="ml-2 bg-gray-100 shadow-md text-gray-700 px-3 py-2 rounded hover:bg-gray-200 flex items-center">
  <EllipsisHorizontalIcon className="h-5 w-5 text-gray-700" />
</button>

          </div>
        </div>
      </div>

      <div className="flex-1  bg-gray-50 min-h-screen flex">
      {/* CallInformationSection container */}
      <div className="flex-1 p-8 mr-4">
        {CallInformationSection}
      </div>
      
      {/* RightSidebar container */}
      <div className=" bg-white min-h-screen">
        {RightSidebar}
      </div>
    </div>
    </div>
  );
};

export default MainContent;
