import React from 'react';
import { ChevronLeftIcon, PhoneArrowUpRightIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const SidePanel = ({ handleCallClick }) => {
  const navigate = useNavigate();

  const handleBackToAllCalls = () => {
    navigate(-1);
  };

  return (
    <div className="w-64 bg-white p-4 shadow-lg min-h-screen">
      {/* Back Button */}
      <div className="mb-6 flex items-center space-x-2">
        <button 
          onClick={handleBackToAllCalls} 
          className="text-black flex items-center space-x-1"
        >
          <ChevronLeftIcon className="h-5 w-5 text-black" />
          <span className="font-semibold text-xl">All Calls</span>
        </button>
      </div>

      {/* Call Details Button */}
      <button onClick={handleCallClick} className="w-full text-left">
        <div className="bg-white p-2 w-full flex items-center justify-between hover:bg-blue-50 transition-colors duration-200">
          <div className="flex items-center">
            <PhoneArrowUpRightIcon className="h-5 w-5 text-black mr-4" />
            <div>
              <p className="text-black font-semibold">Chau Kitzman (Sample)</p>
              <p className="text-gray-500 text-sm">You</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm">Jul 3</p>
        </div>
      </button>
    </div>
  );
};

export default SidePanel;
