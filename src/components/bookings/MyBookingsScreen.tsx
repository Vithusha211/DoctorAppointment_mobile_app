import { BookingCard } from '@/components/bookings/BookingCard';
import { BookingsHeader } from '@/components/bookings/BookingsHeader';
import { BookingTabs } from '@/components/bookings/BookingTabs';
import {
  BOOKINGS_CARD_GAP,
  BOOKINGS_COLORS,
  BOOKINGS_CONTENT_WIDTH,
  BOOKINGS_HORIZONTAL_MARGIN,
  BOOKINGS_TABS_TO_LIST_GAP,
  BOOKINGS_TITLE_TO_TABS_GAP,
  BOOKINGS_TOP_PADDING,
} from '@/constants/bookings';
import { HOME_TAB_BAR_HEIGHT } from '@/constants/home';
import { BookingStatus, getBookingsByStatus } from '@/data/bookings';
import { scale } from '@/constants/layout';
import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function MyBookingsScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState<BookingStatus>('upcoming');

  const bookings = useMemo(() => getBookingsByStatus(activeTab), [activeTab]);

  const listHeader = (
    <View style={styles.headerContent}>
      <BookingsHeader />

      <View style={{ height: BOOKINGS_TITLE_TO_TABS_GAP }} />

      <BookingTabs activeTab={activeTab} onTabChange={setActiveTab} />

      <View style={{ height: BOOKINGS_TABS_TO_LIST_GAP }} />
    </View>
  );

  return (
    <FlatList
      style={styles.flex}
      contentContainerStyle={[
        styles.content,
        {
          paddingTop: insets.top + BOOKINGS_TOP_PADDING,
          paddingBottom: HOME_TAB_BAR_HEIGHT + insets.bottom + scale(16),
        },
      ]}
      data={bookings}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={listHeader}
      renderItem={({ item }) => (
        <BookingCard
          booking={item}
          onCancel={() => {}}
          onReschedule={() => router.push(`/doctors/${item.doctorId}/book`)}
          onReBook={() => router.push(`/doctors/${item.doctorId}/book`)}
          onAddReview={() => {}}
        />
      )}
      ItemSeparatorComponent={() => <View style={{ height: BOOKINGS_CARD_GAP }} />}
      ListEmptyComponent={
        <View style={styles.empty}>
          <Text style={styles.emptyText}>No {activeTab} bookings</Text>
        </View>
      }
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: BOOKINGS_COLORS.background,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: BOOKINGS_HORIZONTAL_MARGIN,
  },
  headerContent: {
    width: BOOKINGS_CONTENT_WIDTH,
  },
  empty: {
    paddingVertical: scale(48),
    alignItems: 'center',
  },
  emptyText: {
    color: BOOKINGS_COLORS.subtitle,
    fontSize: scale(14),
    fontWeight: '500',
  },
});
