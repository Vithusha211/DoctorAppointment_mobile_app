export const APPOINTMENT_TIME_SLOTS = [
  '09.00 AM',
  '09.30 AM',
  '10.00 AM',
  '10.30 AM',
  '11.00 AM',
  '11.30 AM',
  '3.00 PM',
  '3.30 PM',
  '4.00 PM',
  '4.30 PM',
  '5.00 PM',
  '5.30 PM',
] as const;

export type AppointmentTimeSlot = (typeof APPOINTMENT_TIME_SLOTS)[number];

export const WEEKDAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const;

export const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

export type CalendarDay = {
  date: Date;
  inCurrentMonth: boolean;
};

export function getMonthDays(year: number, month: number): CalendarDay[] {
  const firstDay = new Date(year, month, 1);
  const startOffset = firstDay.getDay();
  const gridStart = new Date(year, month, 1 - startOffset);

  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(gridStart);
    date.setDate(gridStart.getDate() + index);
    return {
      date,
      inCurrentMonth: date.getMonth() === month,
    };
  });
}

export function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function formatMonthYear(year: number, month: number) {
  return `${MONTH_NAMES[month]} ${year}`;
}

export function formatAppointmentDate(date: Date) {
  return `${MONTH_NAMES[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

export function formatAppointmentTimeForMessage(slot: AppointmentTimeSlot) {
  return slot.replace('.', ':');
}
