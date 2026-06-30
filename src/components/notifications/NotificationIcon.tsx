import {
  NOTIFICATIONS_COLORS,
  NOTIFICATIONS_ITEM_ICON_SIZE,
} from '@/constants/notifications';
import { NotificationType } from '@/data/notifications';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

const ICON_CONFIG: Record<
  NotificationType,
  {
    name: keyof typeof MaterialCommunityIcons.glyphMap;
    bg: string;
    color: string;
  }
> = {
  success: {
    name: 'calendar-check',
    bg: NOTIFICATIONS_COLORS.successIconBg,
    color: NOTIFICATIONS_COLORS.successIcon,
  },
  cancelled: {
    name: 'calendar-remove',
    bg: NOTIFICATIONS_COLORS.cancelledIconBg,
    color: NOTIFICATIONS_COLORS.cancelledIcon,
  },
  changed: {
    name: 'calendar-edit',
    bg: NOTIFICATIONS_COLORS.changedIconBg,
    color: NOTIFICATIONS_COLORS.changedIcon,
  },
};

type NotificationIconProps = {
  type: NotificationType;
};

export function NotificationIcon({ type }: NotificationIconProps) {
  const config = ICON_CONFIG[type];
  const iconSize = NOTIFICATIONS_ITEM_ICON_SIZE * 0.5;

  return (
    <View style={[styles.container, { backgroundColor: config.bg }]}>
      <MaterialCommunityIcons name={config.name} size={iconSize} color={config.color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: NOTIFICATIONS_ITEM_ICON_SIZE,
    height: NOTIFICATIONS_ITEM_ICON_SIZE,
    borderRadius: NOTIFICATIONS_ITEM_ICON_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
