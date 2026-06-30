import {
  BOOK_APPOINTMENT_COLORS,
  BOOK_APPOINTMENT_CONTENT_WIDTH,
  BOOK_APPOINTMENT_TIME_SLOT_FONT_SIZE,
  BOOK_APPOINTMENT_TIME_SLOT_GAP,
  BOOK_APPOINTMENT_TIME_SLOT_HEIGHT,
  BOOK_APPOINTMENT_TIME_SLOT_LINE_HEIGHT,
  BOOK_APPOINTMENT_TIME_SLOT_RADIUS,
  BOOK_APPOINTMENT_TIME_SLOT_WIDTH,
} from '@/constants/book-appointment';
import { APPOINTMENT_TIME_SLOTS, AppointmentTimeSlot } from '@/data/appointment-slots';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type TimeSlotGridProps = {
  selectedSlot: AppointmentTimeSlot;
  onSelectSlot: (slot: AppointmentTimeSlot) => void;
};

export function TimeSlotGrid({ selectedSlot, onSelectSlot }: TimeSlotGridProps) {
  return (
    <View style={styles.grid}>
      {APPOINTMENT_TIME_SLOTS.map((slot) => {
        const isSelected = slot === selectedSlot;

        return (
          <Pressable
            key={slot}
            onPress={() => onSelectSlot(slot)}
            style={[
              styles.slot,
              isSelected ? styles.slotSelected : styles.slotDefault,
            ]}
          >
            <Text style={[styles.slotText, isSelected && styles.slotTextSelected]}>
              {slot}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    width: BOOK_APPOINTMENT_CONTENT_WIDTH,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: BOOK_APPOINTMENT_TIME_SLOT_GAP,
  },
  slot: {
    width: BOOK_APPOINTMENT_TIME_SLOT_WIDTH,
    height: BOOK_APPOINTMENT_TIME_SLOT_HEIGHT,
    borderRadius: BOOK_APPOINTMENT_TIME_SLOT_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slotDefault: {
    backgroundColor: BOOK_APPOINTMENT_COLORS.slotBg,
  },
  slotSelected: {
    backgroundColor: BOOK_APPOINTMENT_COLORS.selectedBg,
  },
  slotText: {
    color: BOOK_APPOINTMENT_COLORS.title,
    fontSize: BOOK_APPOINTMENT_TIME_SLOT_FONT_SIZE,
    fontWeight: '500',
    lineHeight: BOOK_APPOINTMENT_TIME_SLOT_LINE_HEIGHT,
  },
  slotTextSelected: {
    color: BOOK_APPOINTMENT_COLORS.selectedText,
    fontWeight: '600',
  },
});
