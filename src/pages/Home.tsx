import React, { useState } from 'react';
import Stats from '../components/Stats';
import BloodGroupCard from '../components/BloodGroupCard';
import RequestForm from '../components/RequestForm';
import { bloodGroups } from '../data/bloodGroups';
import { useRequests } from '../context/RequestContext';

export default function Home() {
  const [selectedBloodType, setSelectedBloodType] = useState<string | null>(null);
  const { addRequest } = useRequests();

  const handleRequestSubmit = (request: BloodRequest) => {
    addRequest(request);
    alert('Blood request submitted successfully! We will contact you shortly.');
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Blood Bank Management</h2>
          <p className="text-xl text-gray-600">Every drop counts. Save a life today.</p>
        </div>
        <Stats />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Available Blood Groups</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bloodGroups.map((group) => (
            <BloodGroupCard
              key={group.type}
              group={group}
              onRequestClick={() => setSelectedBloodType(group.type)}
            />
          ))}
        </div>
      </div>

      {selectedBloodType && (
        <RequestForm
          selectedBloodType={selectedBloodType}
          onClose={() => setSelectedBloodType(null)}
          onSubmit={handleRequestSubmit}
        />
      )}
    </main>
  );
}