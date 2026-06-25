import {
  BOOKINGS_BUTTON_GAP,
  BOOKINGS_BUTTON_HEIGHT,
  BOOKINGS_BUTTON_RADIUS,
  BOOKINGS_BUTTON_TEXT_LINE_HEIGHT,
  BOOKINGS_BUTTON_TEXT_SIZE,
  BOOKINGS_CARD_IMAGE_GAP,
  BOOKINGS_CARD_IMAGE_RADIUS,
  BOOKINGS_CARD_IMAGE_SIZE,
  BOOKINGS_CARD_PADDING,
  BOOKINGS_CARD_RADIUS,
  BOOKINGS_COLORS,
  BOOKINGS_CONTENT_TO_BUTTONS_GAP,
  BOOKINGS_CONTENT_WIDTH,
  BOOKINGS_DATE_TO_DIVIDER_GAP,
  BOOKINGS_DIVIDER_TO_CONTENT_GAP,
  BOOKINGS_NAME_TO_SPECIALTY_GAP,
  BOOKINGS_SPECIALTY_TO_LOCATION_GAP,
} from '@/constants/bookings';
import { Booking, formatBookingDateTime } from '@/data/bookings';
import { scale } from '@/constants/layout';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type BookingCardProps = {
  booking: Booking;
  onCancel?: () => void;
  onReschedule?: () => void;
  onReBook?: () => void;
  onAddReview?: () => void;
};

export function BookingCard({
  booking,
  onCancel,
  onReschedule,
  onReBook,
  onAddReview,
}: BookingCardProps) {
  const isUpcoming = booking.status === 'upcoming';
  const isCompleted = booking.status === 'completed';

  return (
    <View style={styles.card}>
      <Text style={styles.dateTime}>
        {formatBookingDateTime(booking.date, booking.time)}
      </Text>

      <View style={{ height: BOOKINGS_DATE_TO_DIVIDER_GAP }} />

      <View style={styles.divider} />

      <View style={{ height: BOOKINGS_DIVIDER_TO_CONTENT_GAP }} />

      <View style={styles.doctorRow}>
        <Image source={{ uri: booking.image }} style={styles.image} contentFit="cover" />

        <View style={styles.doctorContent}>
          <Text style={styles.name} numberOfLines={1}>
            {booking.doctorName}
          </Text>

          <View style={{ height: BOOKINGS_NAME_TO_SPECIALTY_GAP }} />

          <Text style={styles.specialty} numberOfLines={1}>
            {booking.specialty}
          </Text>

          <View style={{ height: BOOKINGS_SPECIALTY_TO_LOCATION_GAP }} />

          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={scale(14)} color={BOOKINGS_COLORS.subtitle} />
            <Text style={styles.location} numberOfLines={1}>
              {booking.location}
            </Text>
          </View>
        </View>
      </View>

      {isUpcoming || isCompleted ? (
        <>
          <View style={{ height: BOOKINGS_CONTENT_TO_BUTTONS_GAP }} />

          {isCompleted ? <View style={styles.divider} /> : null}

          {isCompleted ? (
            <View style={{ height: BOOKINGS_DIVIDER_TO_CONTENT_GAP }} />
          ) : null}

          <View style={styles.actions}>
            {isUpcoming ? (
              <>
                <Pressable onPress={onCancel} style={[styles.button, styles.secondaryButton]}>
                  <Text style={styles.secondaryText}>Cancel</Text>
                </Pressable>
                <Pressable onPress={onReschedule} style={[styles.button, styles.primaryButton]}>
                  <Text style={styles.primaryText}>Reschedule</Text>
                </Pressable>
              </>
            ) : (
              <>
                <Pressable onPress={onReBook} style={[styles.button, styles.secondaryButton]}>
                  <Text style={styles.secondaryText}>Re-Book</Text>
                </Pressable>
                <Pressable onPress={onAddReview} style={[styles.button, styles.primaryButton]}>
                  <Text style={styles.primaryText}>Add Review</Text>
                </Pressable>
              </>
            )}
          </View>
        </>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: BOOKINGS_CONTENT_WIDTH,
    padding: BOOKINGS_CARD_PADDING,
    borderRadius: BOOKINGS_CARD_RADIUS,
    backgroundColor: BOOKINGS_COLORS.cardBg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: scale(2) },
    shadowOpacity: 0.08,
    shadowRadius: scale(8),
    elevation: 3,
  },
  dateTime: {
    color: BOOKINGS_COLORS.title,
    fontSize: scale(14),
    fontWeight: '700',
    lineHeight: scale(20),
  },
  divider: {
    height: 1,
    backgroundColor: BOOKINGS_COLORS.border,
  },
  doctorRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: BOOKINGS_CARD_IMAGE_GAP,
  },
  image: {
    width: BOOKINGS_CARD_IMAGE_SIZE,
    height: BOOKINGS_CARD_IMAGE_SIZE,
    borderRadius: BOOKINGS_CARD_IMAGE_RADIUS,
  },
  doctorContent: {
    flex: 1,
  },
  name: {
    color: BOOKINGS_COLORS.title,
    fontSize: scale(16),
    fontWeight: '700',
    lineHeight: scale(20),
  },
  specialty: {
    color: BOOKINGS_COLORS.subtitle,
    fontSize: scale(14),
    fontWeight: '400',
    lineHeight: scale(18),
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(4),
  },
  location: {
    flex: 1,
    color: BOOKINGS_COLORS.subtitle,
    fontSize: scale(12),
    fontWeight: '400',
    lineHeight: scale(16),
  },
  actions: {
    flexDirection: 'row',
    gap: BOOKINGS_BUTTON_GAP,
  },
  button: {
    flex: 1,
    height: BOOKINGS_BUTTON_HEIGHT,
    borderRadius: BOOKINGS_BUTTON_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scale(8),
  },
  secondaryButton: {
    backgroundColor: BOOKINGS_COLORS.secondaryBg,
  },
  primaryButton: {
    backgroundColor: BOOKINGS_COLORS.primaryBg,
  },
  secondaryText: {
    color: BOOKINGS_COLORS.secondaryText,
    fontSize: BOOKINGS_BUTTON_TEXT_SIZE,
    fontWeight: '600',
    lineHeight: BOOKINGS_BUTTON_TEXT_LINE_HEIGHT,
  },
  primaryText: {
    color: BOOKINGS_COLORS.primaryText,
    fontSize: BOOKINGS_BUTTON_TEXT_SIZE,
    fontWeight: '600',
    lineHeight: BOOKINGS_BUTTON_TEXT_LINE_HEIGHT,
  },
});
