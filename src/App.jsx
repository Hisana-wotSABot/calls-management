// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './components/Mainpage';
import Footer from './components/Footer';
import CallDetails from './pages/CallDetails';
import './index.css'; // Ensure Tailwind CSS is imported

function App() {
  return (
    <Router>
      <div className="App">
        <ConditionalHeaderFooter />
        
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/call/:callId" element={<CallDetails />} />
        </Routes>

        <ConditionalFooter />
      </div>
    </Router>
  );
}

// This component conditionally renders the Header and Footer based on the current route
function ConditionalHeaderFooter() {
  const location = useLocation();

  // Don't render the Header and Footer on the CallDetails page
  if (location.pathname.startsWith('/call')) {
    return null;
  }

  return <Header />;
}

function ConditionalFooter() {
  const location = useLocation();

  // Don't render the Footer on the CallDetails page
  if (location.pathname.startsWith('/call')) {
    return null;
  }

  return <Footer />;
}

export default App;
