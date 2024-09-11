import React, { useState } from 'react';
import { UserCircleIcon, BuildingOfficeIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { MdPhone } from 'react-icons/md';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const RightSidebar = ({ activeSection, setActiveSection, handleNewClick, activities }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [createdButtons, setCreatedButtons] = useState([]);
  const [dropdownStates, setDropdownStates] = useState({});
  const [inputValues, setInputValues] = useState({});

  const options = ['Tasks', 'Calls', 'Meetings'];

  const handleOptionSelect = (option) => {
    if (!createdButtons.includes(option)) {
      setCreatedButtons([...createdButtons, option]);
      setInputValues(prev => ({
        ...prev,
        [option]: ''
      }));
    }
    setDropdownOpen(false); // Close the main dropdown
  };

  const handleDropdownButtonClick = (buttonType) => {
    setDropdownStates(prev => ({
      ...prev,
      [buttonType]: !prev[buttonType]
    }));
    setActiveButton(buttonType);
  };

  const handleOptionClick = (buttonType, option) => {
    setInputValues(prev => ({
      ...prev,
      [buttonType]: option
    }));
    setDropdownStates(prev => ({
      ...prev,
      [buttonType]: false
    }));
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="w-68 bg-white p-4  min-h-screen">
      {/* Navigation Buttons */}
      <div className="flex flex-col">
        <div className="flex space-x-4 border-b border-gray-300">
          {['Info', 'Timeline', 'Conversations'].map((item) => (
            <button
              key={item}
              onClick={() => setActiveSection(item)}
              className={`flex-1 text-center py-2 font-semibold text-gray-700 hover:text-blue-500 relative ${activeSection === item ? 'text-blue-500' : ''}`}
            >
              {item}
              <span className={`absolute left-0 right-0 bottom-0 h-1 bg-blue-500 transform ${activeSection === item ? 'scale-x-100' : 'scale-x-0'} origin-left transition-transform duration-200`}></span>
            </button>
          ))}
        </div>
      </div>

      {/* Section Content */}
      {activeSection === 'Info' && (
        <div>
          {/* User Profile Icon and Info */}
          <div className="flex items-center space-x-4 mt-4">
            <UserCircleIcon className="h-12 w-12 text-gray-700" />
            <div>
              <p className="text-lg font-semibold text-gray-900">Chau Kitzman</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Send Email
              </button>
            </div>
          </div>

          {/* Additional Contact Information */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-2">
              <BuildingOfficeIcon className="h-6 w-6 text-gray-500" />
              <p className="text-gray-900">Creative Business Systems</p>
            </div>
            <div className="flex items-center space-x-2">
              <MdPhone className="h-6 w-6 text-gray-500" />
              <p className="text-gray-900">555-555-5555</p>
            </div>
            <div className="flex items-center space-x-2">
              <PhoneIcon className="h-6 w-6 text-gray-500" />
              <p className="text-gray-900">555-555-5555</p>
            </div>
            <div className="flex items-center space-x-2">
              <EnvelopeIcon className="h-6 w-6 text-gray-500" />
              <p className="text-blue-500">chau-kitzman@noemail.com</p>
            </div>
            <div className="flex items-center space-x-4 justify-between right-0 mt-2">
              <p className="text-blue-500 cursor-pointer">0 followers</p>
              <p className="text-blue-500 cursor-pointer">More Info</p>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'Timeline' && (
        <div className="mt-4">
          {/* Activities Section */}
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start space-x-2 mb-4">
              <MdPhone className="h-6 w-6 text-gray-700" />
              <div>
                <p className="font-semibold text-gray-900">{activity.title}</p>
                <p className="text-sm text-gray-500">{activity.time}</p>
                <p className="text-gray-700">{activity.description}</p>
              </div>
            </div>
          ))}
          {/* Add New Activity */}
          <button 
            onClick={handleNewClick} 
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
          >
            Add New Activity
          </button>
        </div>
      )}

      {activeSection === 'Conversations' && (
        <div className="mt-4">
          {/* Display conversation logs */}
          <p className="text-gray-700">No conversations yet.</p>
        </div>
      )}

      {/* Open Activities and Dropdown */}
      <div className="flex flex-col mt-4 relative">
        <div className="flex items-center justify-between">
          <p className="text-gray-900">Open Activities</p>
          <button 
            onClick={toggleDropdown} 
            className="bg-white text-blue-500 py-1 px-3 rounded  flex items-center justify-between"
          >
            <span>+ New</span>
            
          </button>
        </div>

        {/* Dropdown menu */}
        {dropdownOpen && (
          <div className="mt-2 w-full bg-white border border-gray-300 rounded shadow-lg">
            {options.map(option => (
              <button
                key={option}
                onClick={() => handleOptionSelect(option)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                {option}
              </button>
            ))}
          </div>
        )}

        {/* Dynamic Input Fields with Dropdowns */}
        {createdButtons.map((buttonType, index) => (
          <div key={index} className="mt-2 relative">
            <input
  type="text"
  value={inputValues[buttonType] || buttonType}
  readOnly
  className="border bg-blue-50 border-gray-300 rounded py-2 px-3  pr-10"
  style={{ position: 'relative' }} // Add this inline style
/>
<ChevronDownIcon
  onClick={() => handleDropdownButtonClick(buttonType)}
  className="absolute right-2 top-2 h-5 w-5 text-gray-500 cursor-pointer" // Use absolute positioning
  style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }} // Adjust position
/>

            {dropdownStates[buttonType] && (
              <div className="mt-2 border border-gray-100 bg-white rounded shadow-md absolute w-full z-10">
                {/* Dynamic Dropdown Options */}
                {buttonType === 'Tasks' && (
                  <>
                    <button
                      onClick={() => handleOptionClick(buttonType, 'Task 1')}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Task 1
                    </button>
                    <button
                      onClick={() => handleOptionClick(buttonType, 'Task 2')}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 "
                    >
                      Task 2
                    </button>
                  </>
                )}
                {buttonType === 'Calls' && (
                  <>
                    <button
                      onClick={() => handleOptionClick(buttonType, 'Call 1')}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Call 1
                    </button>
                    <button
                      onClick={() => handleOptionClick(buttonType, 'Call 2')}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Call 2
                    </button>
                  </>
                )}
                {buttonType === 'Meetings' && (
                  <>
                    <button
                      onClick={() => handleOptionClick(buttonType, 'Meeting 1')}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Meeting 1
                    </button>
                    <button
                      onClick={() => handleOptionClick(buttonType, 'Meeting 2')}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Meeting 2
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;
