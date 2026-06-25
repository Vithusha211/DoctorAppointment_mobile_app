import { AppointmentTimeSlot } from '@/data/appointment-slots';

export type BookingStatus = 'upcoming' | 'completed' | 'canceled';

export type Booking = {
  id: string;
  doctorId: string;
  doctorName: string;
  specialty: string;
  location: string;
  image: string;
  date: string;
  time: AppointmentTimeSlot;
  status: BookingStatus;
};

export const BOOKING_TABS: { id: BookingStatus; label: string }[] = [
  { id: 'upcoming', label: 'Upcoming' },
  { id: 'completed', label: 'Completed' },
  { id: 'canceled', label: 'Canceled' },
];

export const BOOKINGS: Booking[] = [
  {
    id: 'booking-1',
    doctorId: 'michael-johnson',
    doctorName: 'Dr. James Robinson',
    specialty: 'Orthopedic Surgery',
    location: 'Elite Ortho Clinic, USA',
    image:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&q=80',
    date: 'May 22, 2023',
    time: '10.00 AM',
    status: 'upcoming',
  },
  {
    id: 'booking-2',
    doctorId: 'david-patel',
    doctorName: 'Dr. Daniel Lee',
    specialty: 'Gastroenterologist',
    location: 'Digestive Institute, USA',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f4a5b16d?w=200&q=80',
    date: 'June 14, 2023',
    time: '3.00 PM',
    status: 'upcoming',
  },
  {
    id: 'booking-3',
    doctorId: 'james-wilson',
    doctorName: 'Dr. Nathan Harris',
    specialty: 'Cardiologist',
    location: 'Heart Care Center, USA',
    image:
      'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&q=80',
    date: 'June 21, 2023',
    time: '10.00 AM',
    status: 'upcoming',
  },
  {
    id: 'booking-4',
    doctorId: 'jessica-turner',
    doctorName: 'Dr. Sarah Johnson',
    specialty: 'Gynecologist',
    location: "Women's Health Clinic",
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80',
    date: 'March 12, 2023',
    time: '11.00 AM',
    status: 'completed',
  },
  {
    id: 'booking-6',
    doctorId: 'jessica-turner',
    doctorName: 'Dr. Sarah Johnson',
    specialty: 'Gynecologist',
    location: "Women's Health Clinic",
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80',
    date: 'February 3, 2023',
    time: '2.00 PM',
    status: 'completed',
  },
  {
    id: 'booking-7',
    doctorId: 'david-patel',
    doctorName: 'Dr. David Patel',
    specialty: 'Cardiologist',
    location: 'Golden Cardiology Center',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f4a5b16d?w=200&q=80',
    date: 'January 18, 2023',
    time: '10.00 AM',
    status: 'completed',
  },
  {
    id: 'booking-5',
    doctorId: 'jessica-turner',
    doctorName: 'Dr. Jessica Turner',
    specialty: 'Gynecologist',
    location: "Women's Clinic, Seattle, USA",
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80',
    date: 'April 10, 2023',
    time: '11.30 AM',
    status: 'canceled',
  },
];

export function getBookingsByStatus(status: BookingStatus) {
  return BOOKINGS.filter((booking) => booking.status === status);
}

export function formatBookingDateTime(date: string, time: AppointmentTimeSlot) {
  return `${date} - ${time}`;
}
