import React from 'react';
import { Droplet } from 'lucide-react';
import type { BloodGroup } from '../types';

interface Props {
  group: BloodGroup;
  onRequestClick: (bloodType: string) => void;
}

export default function BloodGroupCard({ group, onRequestClick }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-red-600 flex items-center gap-2">
          <Droplet className="text-red-500" size={24} />
          {group.type}
        </h3>
        <span className="px-4 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold">
          {group.available} units
        </span>
      </div>
      
      <div className="space-y-3 mb-4">
        <div>
          <p className="text-sm font-semibold text-gray-600">Can donate to:</p>
          <p className="text-sm text-gray-800">{group.canDonateTo.join(', ')}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-600">Can receive from:</p>
          <p className="text-sm text-gray-800">{group.canReceiveFrom.join(', ')}</p>
        </div>
      </div>

      <button
        onClick={() => onRequestClick(group.type)}
        className="w-full py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
      >
        Request Blood
      </button>
    </div>
  );
}