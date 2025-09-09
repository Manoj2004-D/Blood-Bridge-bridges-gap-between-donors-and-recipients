import React, { useState } from 'react';
import { X } from 'lucide-react';
import type { BloodRequest } from '../types';

interface Props {
  selectedBloodType: string;
  onClose: () => void;
  onSubmit: (request: BloodRequest) => void;
}

export default function RequestForm({ selectedBloodType, onClose, onSubmit }: Props) {
  const [formData, setFormData] = useState<Omit<BloodRequest, 'id' | 'status' | 'createdAt'>>({
    name: '',
    bloodType: selectedBloodType,
    units: 1,
    urgency: 'normal',
    contact: '',
    hospital: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const request: BloodRequest = {
      ...formData,
      id: crypto.randomUUID(),
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    onSubmit(request);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Request Blood</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Blood Type
            </label>
            <input
              type="text"
              readOnly
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
              value={selectedBloodType}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Units Required
            </label>
            <input
              type="number"
              required
              min="1"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={formData.units}
              onChange={e => setFormData({...formData, units: parseInt(e.target.value)})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Urgency Level
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={formData.urgency}
              onChange={e => setFormData({...formData, urgency: e.target.value as BloodRequest['urgency']})}
            >
              <option value="normal">Normal</option>
              <option value="urgent">Urgent</option>
              <option value="emergency">Emergency</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Number
            </label>
            <input
              type="tel"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={formData.contact}
              onChange={e => setFormData({...formData, contact: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Hospital Name
            </label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={formData.hospital}
              onChange={e => setFormData({...formData, hospital: e.target.value})}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}