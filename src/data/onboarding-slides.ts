export type OnboardingSlide = {
  id: string;
  title: string;
  description: string;
  image: string | number;
};

export const ONBOARDING_SLIDES: OnboardingSlide[] = [
  {
    id: '1',
    title: 'Meet Doctors Online',
    description:
      'Connect with Specialized Doctors Online for Convenient and Comprehensive Medical Consultations.',
    image:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80',
  },
  {
    id: '2',
    title: 'Connect with Specialists',
    description:
      'Connect with Specialized Doctors Online for Convenient and Comprehensive Medical Consultations.',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
  },
  {
    id: '3',
    title: 'Thousands of Online Specialists',
    description:
      'Explore a Vast Array of Online Medical Specialists, Offering an Extensive Range of Expertise Tailored to Your Healthcare Needs.',
    image:
      'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80',
  },
];
