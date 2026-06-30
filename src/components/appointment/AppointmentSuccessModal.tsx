import { Button } from '@/components/common/Button';
import { SuccessShieldIcon } from '@/components/profile/SuccessShieldIcon';
import {
  APPOINTMENT_SUCCESS_DONE_BUTTON_HEIGHT,
  APPOINTMENT_SUCCESS_DONE_BUTTON_RADIUS,
  APPOINTMENT_SUCCESS_GAP_BUTTON_EDIT,
  APPOINTMENT_SUCCESS_GAP_ICON_TITLE,
  APPOINTMENT_SUCCESS_GAP_MESSAGE_BUTTON,
  APPOINTMENT_SUCCESS_GAP_TITLE_MESSAGE,
  APPOINTMENT_SUCCESS_HORIZONTAL_PADDING,
  APPOINTMENT_SUCCESS_ICON_SIZE,
  APPOINTMENT_SUCCESS_MESSAGE_LINE_HEIGHT,
  APPOINTMENT_SUCCESS_MESSAGE_SIZE,
  APPOINTMENT_SUCCESS_MODAL_RADIUS,
  APPOINTMENT_SUCCESS_MODAL_WIDTH,
  APPOINTMENT_SUCCESS_OVERLAY,
  APPOINTMENT_SUCCESS_PADDING_BOTTOM,
  APPOINTMENT_SUCCESS_PADDING_TOP,
  APPOINTMENT_SUCCESS_TITLE_LINE_HEIGHT,
  APPOINTMENT_SUCCESS_TITLE_SIZE,
  BOOK_APPOINTMENT_COLORS,
} from '@/constants/book-appointment';
import { AUTH_COLORS } from '@/constants/auth';
import { scale } from '@/constants/layout';
import {
  AppointmentTimeSlot,
  formatAppointmentDate,
  formatAppointmentTimeForMessage,
} from '@/data/appointment-slots';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

type AppointmentSuccessModalProps = {
  visible: boolean;
  doctorName: string;
  date: Date;
  timeSlot: AppointmentTimeSlot;
  onDone: () => void;
  onEdit: () => void;
};

export function AppointmentSuccessModal({
  visible,
  doctorName,
  date,
  timeSlot,
  onDone,
  onEdit,
}: AppointmentSuccessModalProps) {
  const formattedDate = formatAppointmentDate(date);
  const formattedTime = formatAppointmentTimeForMessage(timeSlot);
  const doneButtonWidth =
    APPOINTMENT_SUCCESS_MODAL_WIDTH - APPOINTMENT_SUCCESS_HORIZONTAL_PADDING * 2;

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.card}>
          <SuccessShieldIcon size={APPOINTMENT_SUCCESS_ICON_SIZE} />

          <View style={{ height: APPOINTMENT_SUCCESS_GAP_ICON_TITLE }} />

          <Text style={styles.title}>Congratulations!</Text>

          <View style={{ height: APPOINTMENT_SUCCESS_GAP_TITLE_MESSAGE }} />

          <Text style={styles.message}>
            Your appointment with {doctorName} is confirmed for {formattedDate}, at{' '}
            {formattedTime}.
          </Text>

          <View style={{ height: APPOINTMENT_SUCCESS_GAP_MESSAGE_BUTTON }} />

          <Button
            title="Done"
            width={doneButtonWidth}
            onPress={onDone}
            style={styles.doneButton}
          />

          <View style={{ height: APPOINTMENT_SUCCESS_GAP_BUTTON_EDIT }} />

          <Pressable onPress={onEdit} hitSlop={8}>
            <Text style={styles.editLink}>Edit your appointment</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: APPOINTMENT_SUCCESS_OVERLAY,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scale(24),
  },
  card: {
    width: APPOINTMENT_SUCCESS_MODAL_WIDTH,
    backgroundColor: BOOK_APPOINTMENT_COLORS.cardBg,
    borderRadius: APPOINTMENT_SUCCESS_MODAL_RADIUS,
    alignItems: 'center',
    paddingTop: APPOINTMENT_SUCCESS_PADDING_TOP,
    paddingBottom: APPOINTMENT_SUCCESS_PADDING_BOTTOM,
    paddingHorizontal: APPOINTMENT_SUCCESS_HORIZONTAL_PADDING,
  },
  title: {
    color: BOOK_APPOINTMENT_COLORS.title,
    fontSize: APPOINTMENT_SUCCESS_TITLE_SIZE,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: APPOINTMENT_SUCCESS_TITLE_LINE_HEIGHT,
  },
  message: {
    color: BOOK_APPOINTMENT_COLORS.subtitle,
    fontSize: APPOINTMENT_SUCCESS_MESSAGE_SIZE,
    fontWeight: '400',
    lineHeight: APPOINTMENT_SUCCESS_MESSAGE_LINE_HEIGHT,
    textAlign: 'center',
  },
  doneButton: {
    height: APPOINTMENT_SUCCESS_DONE_BUTTON_HEIGHT,
    borderRadius: APPOINTMENT_SUCCESS_DONE_BUTTON_RADIUS,
    backgroundColor: AUTH_COLORS.primary,
  },
  editLink: {
    color: BOOK_APPOINTMENT_COLORS.subtitle,
    fontSize: scale(14),
    fontWeight: '500',
    textAlign: 'center',
  },
});
