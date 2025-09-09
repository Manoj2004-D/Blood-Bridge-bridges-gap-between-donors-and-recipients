import React from 'react';
import { Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <Heart className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
            <div>
              <h1 className="text-2xl font-bold">Blood Bank Management</h1>
              <p className="text-sm text-red-100">Saving lives through blood donation</p>
            </div>
          </Link>
          <nav className="flex space-x-6">
            <Link
              to="/"
              className={`${isActive('/') ? 'text-white' : 'text-red-100'} hover:text-white transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/events"
              className={`${isActive('/events') ? 'text-white' : 'text-red-100'} hover:text-white transition-colors`}
            >
              Events
            </Link>
            <Link
              to="/donate"
              className={`${isActive('/donate') ? 'text-white' : 'text-red-100'} hover:text-white transition-colors`}
            >
              Donate
            </Link>
            <Link
              to="/admin"
              className={`${isActive('/admin') ? 'text-white' : 'text-red-100'} hover:text-white transition-colors`}
            >
              Admin
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}