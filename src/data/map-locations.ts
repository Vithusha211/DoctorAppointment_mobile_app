export type MapClinic = {
  id: string;
  name: string;
  image: string;
  address: string;
  rating: number;
  reviews: number;
  distance: string;
  type: string;
};

export type MapDoctorPin = {
  id: string;
  image: string;
  top: number;
  left: number;
};

export const MAP_CLINICS: MapClinic[] = [
  {
    id: 'sunrise',
    name: 'Sunrise Health Clinic',
    image:
      'https://images.unsplash.com/photo-1519494021092-0a322f7ec6f6?w=500&q=80',
    address: '123 Oak Street, CA 98765',
    rating: 5.0,
    reviews: 58,
    distance: '2.5 km/40min',
    type: 'Hospital',
  },
  {
    id: 'golden',
    name: 'Golden Cardiology Center',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&q=80',
    address: '555 Bridge Street, CA 98765',
    rating: 4.9,
    reviews: 108,
    distance: '2.5 km/40min',
    type: 'Hospital',
  },
  {
    id: 'wellness',
    name: 'Wellness Medical Hub',
    image:
      'https://images.unsplash.com/photo-1586773866496-35d45b9b42bd?w=500&q=80',
    address: '789 Pine Avenue, CA 98765',
    rating: 4.8,
    reviews: 42,
    distance: '3.1 km/50min',
    type: 'Clinic',
  },
];

export const MAP_DOCTOR_PINS: MapDoctorPin[] = [
  {
    id: 'pin-1',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f4a5b16d?w=200&q=80',
    top: 0.18,
    left: 0.62,
  },
  {
    id: 'pin-2',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80',
    top: 0.32,
    left: 0.28,
  },
  {
    id: 'pin-3',
    image:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&q=80',
    top: 0.42,
    left: 0.55,
  },
  {
    id: 'pin-4',
    image:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&q=80',
    top: 0.24,
    left: 0.78,
  },
];

export const MAP_BACKGROUND_IMAGE =
  'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80';
