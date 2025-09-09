import React from 'react';
import { Calendar, MapPin, Phone, Mail } from 'lucide-react';

export default function Donate() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Become a Blood Donor</h2>
        <p className="text-xl text-gray-600">Your donation can save up to three lives!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Eligibility Criteria</h3>
          <ul className="space-y-3 text-gray-600">
            <li>• Age between 18-65 years</li>
            <li>• Weight more than 45kg</li>
            <li>• Hemoglobin level minimum 12.5g/dl</li>
            <li>• No chronic health conditions</li>
            <li>• No recent surgeries or medications</li>
            <li>• Last donation was more than 3 months ago</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">What to Bring</h3>
          <ul className="space-y-3 text-gray-600">
            <li>• Valid ID proof</li>
            <li>• Recent medical reports (if any)</li>
            <li>• List of current medications (if any)</li>
            <li>• Information about recent travel history</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-red-600" />
            <span className="text-gray-600">+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-red-600" />
            <span className="text-gray-600">donate@bloodbank.org</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-red-600" />
            <span className="text-gray-600">123 Medical Center Drive</span>
          </div>
          <div className="flex items-center space-x-3">
            <Calendar className="h-5 w-5 text-red-600" />
            <span className="text-gray-600">Mon-Sat: 9:00 AM - 5:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}