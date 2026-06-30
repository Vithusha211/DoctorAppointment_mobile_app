import {
  NOTIFICATIONS_COLORS,
  NOTIFICATIONS_CONTENT_WIDTH,
  NOTIFICATIONS_HEADER_HEIGHT,
  NOTIFICATIONS_BADGE_HEIGHT,
  NOTIFICATIONS_BADGE_PADDING_H,
  NOTIFICATIONS_BADGE_RADIUS,
  NOTIFICATIONS_BADGE_TEXT_LINE_HEIGHT,
  NOTIFICATIONS_BADGE_TEXT_SIZE,
  NOTIFICATIONS_TITLE_LINE_HEIGHT,
  NOTIFICATIONS_TITLE_SIZE,
} from '@/constants/notifications';
import { scale } from '@/constants/layout';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type NotificationsHeaderProps = {
  unreadCount: number;
};

export function NotificationsHeader({ unreadCount }: NotificationsHeaderProps) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()} hitSlop={12} style={styles.backButton}>
        <Ionicons name="arrow-back" size={scale(24)} color={NOTIFICATIONS_COLORS.title} />
      </Pressable>

      <Text style={styles.title}>Notification</Text>

      <View style={styles.badgeSlot}>
        {unreadCount > 0 ? (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              {unreadCount} New
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: NOTIFICATIONS_CONTENT_WIDTH,
    height: NOTIFICATIONS_HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    width: scale(57),
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  badgeSlot: {
    width: scale(57),
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    color: NOTIFICATIONS_COLORS.title,
    fontSize: NOTIFICATIONS_TITLE_SIZE,
    fontWeight: '700',
    lineHeight: NOTIFICATIONS_TITLE_LINE_HEIGHT,
    textAlign: 'center',
  },
  badge: {
    height: NOTIFICATIONS_BADGE_HEIGHT,
    borderRadius: NOTIFICATIONS_BADGE_RADIUS,
    backgroundColor: NOTIFICATIONS_COLORS.badgeBg,
    paddingHorizontal: NOTIFICATIONS_BADGE_PADDING_H,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: NOTIFICATIONS_COLORS.badgeText,
    fontSize: NOTIFICATIONS_BADGE_TEXT_SIZE,
    fontWeight: '600',
    lineHeight: NOTIFICATIONS_BADGE_TEXT_LINE_HEIGHT,
  },
});
