import React from 'react';
import { Users, Droplet, Activity } from 'lucide-react';

export default function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Donors</p>
            <p className="text-2xl font-bold text-gray-900">2,547</p>
          </div>
          <Users className="h-10 w-10 text-red-600" />
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Blood Units Available</p>
            <p className="text-2xl font-bold text-gray-900">225</p>
          </div>
          <Droplet className="h-10 w-10 text-red-600" />
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Lives Saved</p>
            <p className="text-2xl font-bold text-gray-900">1,834</p>
          </div>
          <Activity className="h-10 w-10 text-red-600" />
        </div>
      </div>
    </div>
  );
}