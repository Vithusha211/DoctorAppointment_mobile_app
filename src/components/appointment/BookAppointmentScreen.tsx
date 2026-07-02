import { AppointmentCalendar } from '@/components/appointment/AppointmentCalendar';
import { AppointmentSuccessModal } from '@/components/appointment/AppointmentSuccessModal';
import { BookAppointmentHeader } from '@/components/appointment/BookAppointmentHeader';
import { TimeSlotGrid } from '@/components/appointment/TimeSlotGrid';
import { Button } from '@/components/common/Button';
import {
  AUTH_COLORS,
  AUTH_CONTENT_WIDTH,
} from '@/constants/auth';
import {
  BOOK_APPOINTMENT_BUTTON_HEIGHT,
  BOOK_APPOINTMENT_BUTTON_RADIUS,
  BOOK_APPOINTMENT_COLORS,
  BOOK_APPOINTMENT_CONTENT_WIDTH,
  BOOK_APPOINTMENT_DATE_TO_HOUR_GAP,
  BOOK_APPOINTMENT_FOOTER_PADDING,
  BOOK_APPOINTMENT_HEADER_TO_CONTENT_GAP,
  BOOK_APPOINTMENT_HORIZONTAL_MARGIN,
  BOOK_APPOINTMENT_SECTION_TITLE_LINE_HEIGHT,
  BOOK_APPOINTMENT_SECTION_TITLE_SIZE,
  BOOK_APPOINTMENT_SECTION_TITLE_TO_CONTENT,
  BOOK_APPOINTMENT_TOP_PADDING,
} from '@/constants/book-appointment';
import { AppointmentTimeSlot } from '@/data/appointment-slots';
import { getDoctorById } from '@/data/doctors';
import { scale } from '@/constants/layout';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const DEFAULT_MONTH = new Date(2023, 5, 1);
const DEFAULT_SELECTED_DATE = new Date(2023, 5, 30);
const DEFAULT_TIME_SLOT: AppointmentTimeSlot = '10.00 AM';

export function BookAppointmentScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const insets = useSafeAreaInsets();
  const [visibleMonth, setVisibleMonth] = useState(DEFAULT_MONTH);
  const [selectedDate, setSelectedDate] = useState(DEFAULT_SELECTED_DATE);
  const [selectedSlot, setSelectedSlot] = useState<AppointmentTimeSlot>(DEFAULT_TIME_SLOT);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const doctor = typeof id === 'string' ? getDoctorById(id) : undefined;

  const footerHeight =
    BOOK_APPOINTMENT_FOOTER_PADDING +
    BOOK_APPOINTMENT_BUTTON_HEIGHT +
    BOOK_APPOINTMENT_FOOTER_PADDING;

  if (!doctor) {
    return (
      <View style={[styles.flex, styles.centered, { paddingTop: insets.top }]}>
        <Text style={styles.missingText}>Doctor not found</Text>
        <Pressable onPress={() => router.back()} hitSlop={8}>
          <Text style={styles.backLink}>Go back</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.flex}>
      <ScrollView
        style={styles.flex}
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingTop: insets.top + BOOK_APPOINTMENT_TOP_PADDING,
            paddingBottom: footerHeight + insets.bottom,
          },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <BookAppointmentHeader />

        <View style={{ height: BOOK_APPOINTMENT_HEADER_TO_CONTENT_GAP }} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Date</Text>
          <View style={{ height: BOOK_APPOINTMENT_SECTION_TITLE_TO_CONTENT }} />
          <AppointmentCalendar
            visibleMonth={visibleMonth}
            selectedDate={selectedDate}
            onMonthChange={setVisibleMonth}
            onSelectDate={(date) => {
              setSelectedDate(date);
              setVisibleMonth(new Date(date.getFullYear(), date.getMonth(), 1));
            }}
          />
        </View>

        <View style={{ height: BOOK_APPOINTMENT_DATE_TO_HOUR_GAP }} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Hour</Text>
          <View style={{ height: BOOK_APPOINTMENT_SECTION_TITLE_TO_CONTENT }} />
          <TimeSlotGrid selectedSlot={selectedSlot} onSelectSlot={setSelectedSlot} />
        </View>
      </ScrollView>

      <View
        style={[
          styles.footer,
          {
            paddingBottom: Math.max(insets.bottom, BOOK_APPOINTMENT_FOOTER_PADDING),
          },
        ]}
      >
        <Button
          title="Confirm"
          onPress={() => setShowSuccessModal(true)}
          style={styles.confirmButton}
        />
      </View>

      <AppointmentSuccessModal
        visible={showSuccessModal}
        doctorName={doctor.name}
        date={selectedDate}
        timeSlot={selectedSlot}
        onDone={() => {
          setShowSuccessModal(false);
          router.replace('/(tabs)');
        }}
        onEdit={() => setShowSuccessModal(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: BOOK_APPOINTMENT_COLORS.background,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: scale(12),
  },
  scrollContent: {
    alignItems: 'center',
    paddingHorizontal: BOOK_APPOINTMENT_HORIZONTAL_MARGIN,
  },
  section: {
    width: BOOK_APPOINTMENT_CONTENT_WIDTH,
  },
  sectionTitle: {
    color: BOOK_APPOINTMENT_COLORS.title,
    fontSize: BOOK_APPOINTMENT_SECTION_TITLE_SIZE,
    fontWeight: '700',
    lineHeight: BOOK_APPOINTMENT_SECTION_TITLE_LINE_HEIGHT,
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    paddingTop: BOOK_APPOINTMENT_FOOTER_PADDING,
    paddingHorizontal: BOOK_APPOINTMENT_HORIZONTAL_MARGIN,
    backgroundColor: BOOK_APPOINTMENT_COLORS.background,
  },
  confirmButton: {
    height: BOOK_APPOINTMENT_BUTTON_HEIGHT,
    borderRadius: BOOK_APPOINTMENT_BUTTON_RADIUS,
    backgroundColor: AUTH_COLORS.primary,
    width: '100%',
    maxWidth: BOOK_APPOINTMENT_CONTENT_WIDTH,
  },
  missingText: {
    color: BOOK_APPOINTMENT_COLORS.title,
    fontSize: scale(16),
    fontWeight: '600',
  },
  backLink: {
    color: AUTH_COLORS.link,
    fontSize: scale(14),
    fontWeight: '600',
  },
});
