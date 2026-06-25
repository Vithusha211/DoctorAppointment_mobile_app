import {
  BOOK_APPOINTMENT_HEADER_HEIGHT,
  BOOK_APPOINTMENT_HEADER_ICON_SIZE,
  BOOK_APPOINTMENT_COLORS,
} from '@/constants/book-appointment';
import { scale } from '@/constants/layout';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export function BookAppointmentHeader() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()} hitSlop={12} style={styles.sideButton}>
        <Ionicons
          name="arrow-back"
          size={BOOK_APPOINTMENT_HEADER_ICON_SIZE}
          color={BOOK_APPOINTMENT_COLORS.title}
        />
      </Pressable>
      <Text style={styles.title}>Book Appointment</Text>
      <View style={styles.sideButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: BOOK_APPOINTMENT_HEADER_HEIGHT,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sideButton: {
    width: scale(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    color: BOOK_APPOINTMENT_COLORS.title,
    fontSize: scale(18),
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: scale(30),
  },
});
