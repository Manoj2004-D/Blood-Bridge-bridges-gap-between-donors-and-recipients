import React, { createContext, useContext, useState } from 'react';
import type { BloodRequest } from '../types';

interface RequestContextType {
  requests: BloodRequest[];
  addRequest: (request: BloodRequest) => void;
  updateRequest: (id: string, status: 'approved' | 'rejected') => void;
  deleteRequest: (id: string) => void;
}

const RequestContext = createContext<RequestContextType | undefined>(undefined);

export function RequestProvider({ children }: { children: React.ReactNode }) {
  const [requests, setRequests] = useState<BloodRequest[]>([]);

  const addRequest = (request: BloodRequest) => {
    setRequests(prev => [...prev, request]);
  };

  const updateRequest = (id: string, status: 'approved' | 'rejected') => {
    setRequests(prev =>
      prev.map(request =>
        request.id === id ? { ...request, status } : request
      )
    );
  };

  const deleteRequest = (id: string) => {
    setRequests(prev => prev.filter(request => request.id !== id));
  };

  return (
    <RequestContext.Provider value={{ requests, addRequest, updateRequest, deleteRequest }}>
      {children}
    </RequestContext.Provider>
  );
}

export function useRequests() {
  const context = useContext(RequestContext);
  if (context === undefined) {
    throw new Error('useRequests must be used within a RequestProvider');
  }
  return context;
}