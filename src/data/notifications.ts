export type NotificationType = 'success' | 'cancelled' | 'changed';
export type NotificationSection = 'today' | 'yesterday';

export type Notification = {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  section: NotificationSection;
};

export const NOTIFICATIONS: Notification[] = [
  {
    id: 'notif-1',
    type: 'success',
    title: 'Appointment Success',
    message: 'You have successfully booked your appointment with Dr. Emily Walker.',
    timestamp: '1h',
    read: true,
    section: 'today',
  },
  {
    id: 'notif-2',
    type: 'cancelled',
    title: 'Appointment Cancelled',
    message: 'You have successfully cancelled your appointment with Dr. David Patel.',
    timestamp: '2h',
    read: false,
    section: 'today',
  },
  {
    id: 'notif-3',
    type: 'changed',
    title: 'Scheduled Changed',
    message: 'You have successfully changes your appointment with Dr. Jesica Turner.',
    timestamp: '8h',
    read: true,
    section: 'today',
  },
  {
    id: 'notif-4',
    type: 'success',
    title: 'Appointment success',
    message: 'You have successfully booked your appointment with Dr. David Patel.',
    timestamp: '1d',
    read: true,
    section: 'yesterday',
  },
];

export const NOTIFICATION_SECTION_LABELS: Record<NotificationSection, string> = {
  today: 'TODAY',
  yesterday: 'YESTERDAY',
};

export function getNotificationSections(
  notifications: Notification[],
): { section: NotificationSection; data: Notification[] }[] {
  const sections: NotificationSection[] = ['today', 'yesterday'];

  return sections
    .map((section) => ({
      section,
      data: notifications.filter((notification) => notification.section === section),
    }))
    .filter((group) => group.data.length > 0);
}
