export const bloodGroups = [
  {
    type: 'A+',
    available: 45,
    canDonateTo: ['A+', 'AB+'],
    canReceiveFrom: ['A+', 'A-', 'O+', 'O-']
  },
  {
    type: 'A-',
    available: 12,
    canDonateTo: ['A+', 'A-', 'AB+', 'AB-'],
    canReceiveFrom: ['A-', 'O-']
  },
  {
    type: 'B+',
    available: 38,
    canDonateTo: ['B+', 'AB+'],
    canReceiveFrom: ['B+', 'B-', 'O+', 'O-']
  },
  {
    type: 'B-',
    available: 8,
    canDonateTo: ['B+', 'B-', 'AB+', 'AB-'],
    canReceiveFrom: ['B-', 'O-']
  },
  {
    type: 'AB+',
    available: 15,
    canDonateTo: ['AB+'],
    canReceiveFrom: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
  },
  {
    type: 'AB-',
    available: 4,
    canDonateTo: ['AB+', 'AB-'],
    canReceiveFrom: ['A-', 'B-', 'AB-', 'O-']
  },
  {
    type: 'O+',
    available: 85,
    canDonateTo: ['A+', 'B+', 'AB+', 'O+'],
    canReceiveFrom: ['O+', 'O-']
  },
  {
    type: 'O-',
    available: 18,
    canDonateTo: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    canReceiveFrom: ['O-']
  }
];