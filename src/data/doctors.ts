export type Doctor = {
  id: string;
  name: string;
  specialty: string;
  location: string;
  image: string;
  rating: number;
  reviews: number;
};

export type DoctorReview = {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  text: string;
};

export type DoctorDetail = Doctor & {
  clinic: string;
  patients: string;
  experience: string;
  about: string;
  workingTime: string;
  featuredReview: DoctorReview;
};

export const DOCTOR_CATEGORIES = [
  'All',
  'General',
  'Cardiologist',
  'Dentist',
  'Gynecologist',
  'Orthopedic Surgery',
  'Pediatrics',
  'Neurology',
] as const;

export type DoctorCategory = (typeof DOCTOR_CATEGORIES)[number];

export const DOCTORS: Doctor[] = [
  {
    id: 'david-patel',
    name: 'Dr. David Patel',
    specialty: 'Cardiologist',
    location: 'Cardiology Center, USA',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f4a5b16d?w=200&q=80',
    rating: 5,
    reviews: 1872,
  },
  {
    id: 'jessica-turner',
    name: 'Dr. Jessica Turner',
    specialty: 'Gynecologist',
    location: "Women's Clinic, Seattle, USA",
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80',
    rating: 4.9,
    reviews: 127,
  },
  {
    id: 'michael-johnson',
    name: 'Dr. Michael Johnson',
    specialty: 'Orthopedic Surgery',
    location: 'Maple Associates, NY, USA',
    image:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&q=80',
    rating: 4.7,
    reviews: 5223,
  },
  {
    id: 'emily-walker',
    name: 'Dr. Emily Walker',
    specialty: 'Pediatrics',
    location: 'Serenity Pediatrics Clinic',
    image:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&q=80',
    rating: 5,
    reviews: 405,
  },
  {
    id: 'sarah-chen',
    name: 'Dr. Sarah Chen',
    specialty: 'General',
    location: 'City Health Clinic, Boston, USA',
    image:
      'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&q=80',
    rating: 4.8,
    reviews: 312,
  },
  {
    id: 'robert-kim',
    name: 'Dr. Robert Kim',
    specialty: 'Dentist',
    location: 'Bright Smile Dental, LA, USA',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=200&q=80',
    rating: 4.6,
    reviews: 891,
  },
  {
    id: 'lisa-martinez',
    name: 'Dr. Lisa Martinez',
    specialty: 'Neurology',
    location: 'NeuroCare Institute, Chicago, USA',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80',
    rating: 4.9,
    reviews: 654,
  },
  {
    id: 'james-wilson',
    name: 'Dr. James Wilson',
    specialty: 'Cardiologist',
    location: 'Heart & Vascular Center, Miami, USA',
    image:
      'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&q=80',
    rating: 4.8,
    reviews: 1024,
  },
  {
    id: 'emma-green',
    name: 'Dr. Emma Green',
    specialty: 'Gynecologist',
    location: 'Bernard Clinic',
    image:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&q=80',
    rating: 5,
    reviews: 214,
  },
];

const DOCTOR_DETAILS: Record<string, Omit<DoctorDetail, keyof Doctor>> = {
  'david-patel': {
    clinic: 'Golden Cardiology Center',
    patients: '2,000+',
    experience: '10+',
    about:
      'Dr. David Patel, a dedicated cardiologist, brings a wealth of experience to Golden Gate Cardiology Center in Golden Gate, CA.',
    workingTime: 'Monday-Friday, 08.00 AM-18.00 PM',
    featuredReview: {
      id: 'review-1',
      author: 'Emily Anderson',
      avatar:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80',
      rating: 5,
      text: 'Dr. Patel is a true professional who genuinely cares about his patients. I highly recommend Dr. Patel to anyone looking for expert cardiac care.',
    },
  },
};

function buildDefaultDetail(doctor: Doctor): Omit<DoctorDetail, keyof Doctor> {
  return {
    clinic: doctor.location.split(',')[0],
    patients: '1,000+',
    experience: '5+',
    about: `${doctor.name} is a dedicated ${doctor.specialty.toLowerCase()} with extensive experience serving patients at ${doctor.location}.`,
    workingTime: 'Monday-Friday, 09.00 AM-17.00 PM',
    featuredReview: {
      id: `${doctor.id}-review`,
      author: 'Verified Patient',
      avatar:
        'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&q=80',
      rating: doctor.rating,
      text: `${doctor.name} provided excellent care and took the time to explain everything clearly. Highly recommended.`,
    },
  };
}

export function getDoctorById(id: string): Doctor | undefined {
  return DOCTORS.find((doctor) => doctor.id === id);
}

export function getDoctorDetail(id: string): DoctorDetail | undefined {
  const doctor = getDoctorById(id);
  if (!doctor) {
    return undefined;
  }

  const detail = DOCTOR_DETAILS[id] ?? buildDefaultDetail(doctor);
  return { ...doctor, ...detail };
}
