export type MedicalCenter = {
  id: string;
  name: string;
  image: string;
};

export const MEDICAL_CENTERS: MedicalCenter[] = [
  {
    id: 'sunrise',
    name: 'Sunrise Health Clinic',
    image:
      'https://images.unsplash.com/photo-1519494021092-0a322f7ec6f6?w=500&q=80',
  },
  {
    id: 'golden',
    name: 'Golden Cardiology Center',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&q=80',
  },
  {
    id: 'wellness',
    name: 'Wellness Medical Hub',
    image:
      'https://images.unsplash.com/photo-1586773866496-35d45b9b42bd?w=500&q=80',
  },
];
