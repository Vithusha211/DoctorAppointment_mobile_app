import { NotificationIcon } from '@/components/notifications/NotificationIcon';
import {
  NOTIFICATIONS_COLORS,
  NOTIFICATIONS_ITEM_CONTENT_WIDTH,
  NOTIFICATIONS_ITEM_HEIGHT,
  NOTIFICATIONS_ITEM_ICON_COLUMN_WIDTH,
  NOTIFICATIONS_ITEM_MESSAGE_LINE_HEIGHT,
  NOTIFICATIONS_ITEM_MESSAGE_SIZE,
  NOTIFICATIONS_ITEM_PADDING_LEFT,
  NOTIFICATIONS_ITEM_PADDING_V,
  NOTIFICATIONS_ITEM_TIMESTAMP_LINE_HEIGHT,
  NOTIFICATIONS_ITEM_TIMESTAMP_SIZE,
  NOTIFICATIONS_ITEM_TITLE_LINE_HEIGHT,
  NOTIFICATIONS_ITEM_TITLE_SIZE,
  NOTIFICATIONS_ITEM_TITLE_TO_MESSAGE_GAP,
} from '@/constants/notifications';
import { Notification } from '@/data/notifications';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type NotificationItemProps = {
  notification: Notification;
  onPress?: () => void;
};

export function NotificationItem({ notification, onPress }: NotificationItemProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, !notification.read && styles.unread]}
    >
      <View style={styles.iconColumn}>
        <NotificationIcon type={notification.type} />
      </View>

      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Text style={styles.title} numberOfLines={1}>
            {notification.title}
          </Text>
          <Text style={styles.timestamp}>{notification.timestamp}</Text>
        </View>

        <View style={{ height: NOTIFICATIONS_ITEM_TITLE_TO_MESSAGE_GAP }} />

        <Text style={styles.message} numberOfLines={2}>
          {notification.message}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: NOTIFICATIONS_ITEM_HEIGHT,
    paddingLeft: NOTIFICATIONS_ITEM_PADDING_LEFT,
    paddingVertical: NOTIFICATIONS_ITEM_PADDING_V,
  },
  unread: {
    backgroundColor: NOTIFICATIONS_COLORS.unreadBg,
  },
  iconColumn: {
    width: NOTIFICATIONS_ITEM_ICON_COLUMN_WIDTH,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  content: {
    width: NOTIFICATIONS_ITEM_CONTENT_WIDTH,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: NOTIFICATIONS_ITEM_TITLE_TO_MESSAGE_GAP,
  },
  title: {
    flex: 1,
    color: NOTIFICATIONS_COLORS.title,
    fontSize: NOTIFICATIONS_ITEM_TITLE_SIZE,
    fontWeight: '700',
    lineHeight: NOTIFICATIONS_ITEM_TITLE_LINE_HEIGHT,
  },
  timestamp: {
    color: NOTIFICATIONS_COLORS.subtitle,
    fontSize: NOTIFICATIONS_ITEM_TIMESTAMP_SIZE,
    fontWeight: '400',
    lineHeight: NOTIFICATIONS_ITEM_TIMESTAMP_LINE_HEIGHT,
  },
  message: {
    color: NOTIFICATIONS_COLORS.subtitle,
    fontSize: NOTIFICATIONS_ITEM_MESSAGE_SIZE,
    fontWeight: '400',
    lineHeight: NOTIFICATIONS_ITEM_MESSAGE_LINE_HEIGHT,
  },
});
