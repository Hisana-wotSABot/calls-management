import React from 'react';
import { FiVolume2 } from 'react-icons/fi';
import { FaComments, FaUsers, FaAddressBook, FaDesktop, FaStickyNote,FaBezierCurve,FaTools,FaUserTimes,FaRegCalendarAlt, FaUndo, FaCloud, FaClock, FaFileAlt, FaTrashAlt, FaRegListAlt, FaRegClock } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="flex justify-between items-center p-2 bg-gray-100 border-t border-gray-300">
      {/* Left side icons */}
      <div className="flex items-center ml-8 space-x-16">
        <div className="flex flex-col items-center text-gray-500">
          <FaComments className="text-xl" />
          <span className="text-xs">Chats</span>
        </div>
        <div className="flex flex-col items-center text-gray-500">
          <FaUsers className="text-xl" />
          <span className="text-xs">Channels</span>
        </div>
        <div className="flex flex-col items-center text-gray-500">
          <FaAddressBook className="text-xl" />
          <span className="text-xs">Contacts</span>
        </div>
        <div className="h-6 border-l border-gray-300"></div>
        <div className="flex flex-col items-center text-gray-700">
          <span className="text-xs">Here is your smart chat (Ctrl + Space)</span>
        </div>
      </div>

      {/* Right side icons */}
      <div className="flex items-center space-x-4">
      {[
        { Icon: FaDesktop },
        { Icon: FiVolume2 },
        { text: 'Ask Zia' }, // Text between two icons
        {Icon: FaTools},
        { Icon: FaStickyNote },
        { Icon: FaUndo },
        
        { Icon: FaClock },
        { Icon: FaRegClock },
        { Icon: FaFileAlt },
      ].map(({ Icon, text }, index) => (
        <div key={index} className="flex items-center space-x-2">
          {Icon && <Icon className="text-xl text-gray-600" />}
          {text && <span className="text-gray-600">{text}</span>}
          {index !== 7 && <div className="h-6 border-l border-gray-300"></div>}
        </div>
      ))}
    </div>
        
      
    </footer>
  );
};

export default Footer;
