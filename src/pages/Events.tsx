import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import type { Event } from '../types';

const events: Event[] = [
  {
    id: '1',
    title: 'Community Blood Drive',
    date: '2024-03-20',
    location: 'City Community Center',
    description: 'Join us for our monthly community blood drive. Every donation helps save lives!',
    image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '2',
    title: 'University Blood Donation Camp',
    date: '2024-03-25',
    location: 'State University Campus',
    description: 'Special blood donation camp organized for university students and staff.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1000'
  }
];

export default function Events() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Blood Donation Events</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
              
              <div className="flex items-center text-gray-600 mb-2">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{new Date(event.date).toLocaleDateString()}</span>
              </div>
              
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{event.location}</span>
              </div>
              
              <p className="text-gray-600 mb-4">{event.description}</p>
              
              <button className="w-full py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                Register for Event
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}