import {
  BOOKINGS_COLORS,
  BOOKINGS_TITLE_LINE_HEIGHT,
  BOOKINGS_TITLE_SIZE,
} from '@/constants/bookings';
import { StyleSheet, Text, View } from 'react-native';

export function BookingsHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Bookings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: BOOKINGS_COLORS.title,
    fontSize: BOOKINGS_TITLE_SIZE,
    fontWeight: '700',
    lineHeight: BOOKINGS_TITLE_LINE_HEIGHT,
    textAlign: 'center',
  },
});
