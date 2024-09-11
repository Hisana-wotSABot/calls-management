import React, { useState } from 'react';
import SidePanel from './SidePanel';
import MainContent from './MainContent';
import RightSidebar from './RightSidebar';
import CallInformationSection from './CallInformationSection';

const CallDetails = () => {
  const [activeSection, setActiveSection] = useState('Info');
  const [activities, setActivities] = useState([
    { title: 'Call with Chau Kitzman', time: '03/07/2024 00:41', description: 'Discussed about the new project.' },
  ]);

  const handleCallClick = () => {
    console.log("Call details button clicked");
  };

  const handleNewClick = () => {
    const newActivity = { title: 'New Activity', time: new Date().toLocaleString(), description: 'Followed up on the previous call.' };
    setActivities([...activities, newActivity]);
  };

  return (
    <div className="flex min-h-screen">
      <SidePanel handleCallClick={handleCallClick} />
      <MainContent 
        CallInformationSection={<CallInformationSection />} 
        RightSidebar={
          <RightSidebar 
            activeSection={activeSection} 
            setActiveSection={setActiveSection} 
            handleNewClick={handleNewClick} 
            activities={activities} 
          />
        } 
      />
    </div>
  );
};

export default CallDetails;
