import {
  HOME_COLORS,
  HOME_NOTIFICATION_BUTTON_SIZE,
} from '@/constants/home';
import { scale } from '@/constants/layout';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export function HomeHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.locationBlock}>
        <Text style={styles.locationLabel}>Location</Text>
        <Pressable style={styles.locationRow} hitSlop={8}>
          <Ionicons name="location-outline" size={scale(18)} color={HOME_COLORS.title} />
          <Text style={styles.locationText}>Seattle, USA</Text>
          <Ionicons name="chevron-down" size={scale(16)} color={HOME_COLORS.title} />
        </Pressable>
      </View>

      <Pressable style={styles.notificationButton} hitSlop={8}>
        <Ionicons
          name="notifications-outline"
          size={scale(20)}
          color={HOME_COLORS.title}
        />
        <View style={styles.notificationDot} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  locationBlock: {
    flex: 1,
    gap: scale(4),
  },
  locationLabel: {
    color: HOME_COLORS.subtitle,
    fontSize: scale(12),
    fontWeight: '400',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(6),
  },
  locationText: {
    color: HOME_COLORS.title,
    fontSize: scale(16),
    fontWeight: '600',
  },
  notificationButton: {
    width: HOME_NOTIFICATION_BUTTON_SIZE,
    height: HOME_NOTIFICATION_BUTTON_SIZE,
    borderRadius: HOME_NOTIFICATION_BUTTON_SIZE / 2,
    borderWidth: 1,
    borderColor: HOME_COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationDot: {
    position: 'absolute',
    top: scale(7),
    right: scale(8),
    width: scale(8),
    height: scale(8),
    borderRadius: scale(4),
    backgroundColor: HOME_COLORS.notificationDot,
    borderWidth: 1.5,
    borderColor: HOME_COLORS.background,
  },
});
