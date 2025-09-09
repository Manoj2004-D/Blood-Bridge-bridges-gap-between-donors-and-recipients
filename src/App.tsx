import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Events from './pages/Events';
import Admin from './pages/Admin';
import Donate from './pages/Donate';
import { RequestProvider } from './context/RequestContext';

export default function App() {
  return (
    <RequestProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
          <footer className="bg-white border-t border-gray-200 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <p className="text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Blood Bank Management System. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </Router>
    </RequestProvider>
  );
}