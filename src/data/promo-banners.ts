export type PromoBanner = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
};

export const PROMO_BANNERS: PromoBanner[] = [
  {
    id: 'specialists',
    title: 'Looking for Specialist Doctors?',
    subtitle: 'Schedule an appointment with our top doctors.',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
  },
  {
    id: 'checkup',
    title: 'Book Your Health Checkup',
    subtitle: 'Find trusted doctors near you today.',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f4a5b16d?w=400&q=80',
  },
  {
    id: 'consult',
    title: 'Online Consultation',
    subtitle: 'Talk to a doctor from the comfort of your home.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80',
  },
  {
    id: 'emergency',
    title: '24/7 Emergency Care',
    subtitle: 'Get immediate medical support when you need it.',
    image:
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&q=80',
  },
];
