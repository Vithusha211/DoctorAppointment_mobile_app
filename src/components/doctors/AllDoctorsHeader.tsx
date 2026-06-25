import {
  DOCTORS_COLORS,
  DOCTORS_HEADER_HEIGHT,
} from '@/constants/doctors';
import { scale } from '@/constants/layout';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export function AllDoctorsHeader() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()} hitSlop={12} style={styles.backButton}>
        <Ionicons name="arrow-back" size={scale(24)} color={DOCTORS_COLORS.title} />
      </Pressable>
      <Text style={styles.title}>All Doctors</Text>
      <View style={styles.backButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: DOCTORS_HEADER_HEIGHT,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    width: scale(40),
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    color: DOCTORS_COLORS.title,
    fontSize: scale(18),
    fontWeight: '700',
    textAlign: 'center',
  },
});
