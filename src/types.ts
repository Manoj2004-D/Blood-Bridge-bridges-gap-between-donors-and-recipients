export interface BloodGroup {
  type: string;
  available: number;
  canDonateTo: string[];
  canReceiveFrom: string[];
}

export interface BloodRequest {
  id?: string;
  name: string;
  bloodType: string;
  units: number;
  urgency: 'normal' | 'urgent' | 'emergency';
  contact: string;
  hospital: string;
  status?: 'pending' | 'approved' | 'rejected';
  createdAt?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
}