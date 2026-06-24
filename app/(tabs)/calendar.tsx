import { HOME_COLORS } from '@/constants/home';
import { StyleSheet, Text, View } from 'react-native';

export default function CalendarScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calendar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: HOME_COLORS.background,
  },
  text: {
    color: HOME_COLORS.title,
    fontSize: 18,
    fontWeight: '600',
  },
});
