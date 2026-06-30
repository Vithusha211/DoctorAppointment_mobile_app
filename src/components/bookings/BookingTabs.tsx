import {
  BOOKINGS_COLORS,
  BOOKINGS_CONTENT_WIDTH,
  BOOKINGS_TAB_INDICATOR_HEIGHT,
  BOOKINGS_TABS_HEIGHT,
} from '@/constants/bookings';
import { BOOKING_TABS, BookingStatus } from '@/data/bookings';
import { scale } from '@/constants/layout';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type BookingTabsProps = {
  activeTab: BookingStatus;
  onTabChange: (tab: BookingStatus) => void;
};

export function BookingTabs({ activeTab, onTabChange }: BookingTabsProps) {
  return (
    <View style={styles.container}>
      {BOOKING_TABS.map((tab) => {
        const isActive = tab.id === activeTab;

        return (
          <Pressable
            key={tab.id}
            onPress={() => onTabChange(tab.id)}
            style={styles.tab}
          >
            <Text style={[styles.tabText, isActive ? styles.tabTextActive : styles.tabTextInactive]}>
              {tab.label}
            </Text>
            {isActive ? <View style={styles.indicator} /> : <View style={styles.indicatorPlaceholder} />}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: BOOKINGS_CONTENT_WIDTH,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: BOOKINGS_TABS_HEIGHT + BOOKINGS_TAB_INDICATOR_HEIGHT,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
  },
  tabText: {
    fontSize: scale(14),
    fontWeight: '600',
    lineHeight: BOOKINGS_TABS_HEIGHT,
    marginBottom: scale(6),
  },
  tabTextActive: {
    color: BOOKINGS_COLORS.tabActive,
  },
  tabTextInactive: {
    color: BOOKINGS_COLORS.tabInactive,
  },
  indicator: {
    width: scale(72),
    height: BOOKINGS_TAB_INDICATOR_HEIGHT,
    backgroundColor: BOOKINGS_COLORS.tabActive,
    borderRadius: BOOKINGS_TAB_INDICATOR_HEIGHT / 2,
  },
  indicatorPlaceholder: {
    height: BOOKINGS_TAB_INDICATOR_HEIGHT,
  },
});
