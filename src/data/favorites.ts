export type FavoriteTab = 'doctors' | 'hospitals';

export type FavoriteHospitalType = 'Hospital' | 'Clinic';

export const FAVORITE_TABS: { id: FavoriteTab; label: string }[] = [
  { id: 'doctors', label: 'Doctors' },
  { id: 'hospitals', label: 'Hospitals' },
];

export const FAVORITE_DOCTOR_IDS = [
  'david-patel',
  'jessica-turner',
  'michael-johnson',
  'emily-walker',
  'emma-green',
] as const;

export type FavoriteHospital = {
  id: string;
  name: string;
  address: string;
  image: string;
  rating: number;
  reviews: number;
  distance: string;
  duration: string;
  type: FavoriteHospitalType;
};

export const FAVORITE_HOSPITALS: FavoriteHospital[] = [
  {
    id: 'sunrise-health',
    name: 'Sunrise Health Clinic',
    address: '123 Oak Street, CA 98765',
    image:
      'https://images.unsplash.com/photo-1519494021092-0a322f7ec6f6?w=800&q=80',
    rating: 5,
    reviews: 128,
    distance: '2.5 km',
    duration: '40min',
    type: 'Hospital',
  },
  {
    id: 'golden-cardiology',
    name: 'Golden Cardiology Center',
    address: '555 Bridge Street, Golden Gate',
    image:
      'https://images.unsplash.com/photo-1586773866496-35d45b9b42bd?w=800&q=80',
    rating: 4.9,
    reviews: 58,
    distance: '2.5 km',
    duration: '40min',
    type: 'Clinic',
  },
  {
    id: 'orthopedic-surgery',
    name: 'Orthopaedic Surgery Center',
    address: '124 Medical Drive, Seattle, WA',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80',
    rating: 4.8,
    reviews: 94,
    distance: '3.1 km',
    duration: '52min',
    type: 'Clinic',
  },
];
