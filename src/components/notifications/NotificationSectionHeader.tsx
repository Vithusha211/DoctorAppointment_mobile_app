import {
  NOTIFICATIONS_COLORS,
  NOTIFICATIONS_MARK_READ_LINE_HEIGHT,
  NOTIFICATIONS_MARK_READ_SIZE,
  NOTIFICATIONS_SECTION_HEADER_HEIGHT,
  NOTIFICATIONS_SECTION_LABEL_LINE_HEIGHT,
  NOTIFICATIONS_SECTION_LABEL_SIZE,
} from '@/constants/notifications';
import { NotificationSection, NOTIFICATION_SECTION_LABELS } from '@/data/notifications';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type NotificationSectionHeaderProps = {
  section: NotificationSection;
  onMarkAllRead: () => void;
};

export function NotificationSectionHeader({
  section,
  onMarkAllRead,
}: NotificationSectionHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{NOTIFICATION_SECTION_LABELS[section]}</Text>
      <Pressable onPress={onMarkAllRead} hitSlop={8}>
        <Text style={styles.markRead}>Mark all as read</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: NOTIFICATIONS_SECTION_HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    color: NOTIFICATIONS_COLORS.sectionLabel,
    fontSize: NOTIFICATIONS_SECTION_LABEL_SIZE,
    fontWeight: '600',
    lineHeight: NOTIFICATIONS_SECTION_LABEL_LINE_HEIGHT,
    letterSpacing: 0.5,
  },
  markRead: {
    color: NOTIFICATIONS_COLORS.markRead,
    fontSize: NOTIFICATIONS_MARK_READ_SIZE,
    fontWeight: '700',
    lineHeight: NOTIFICATIONS_MARK_READ_LINE_HEIGHT,
  },
});
