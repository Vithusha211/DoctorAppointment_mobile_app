import {
  DOCTOR_DETAILS_COLORS,
  DOCTOR_DETAILS_HEADER_HEIGHT,
  DOCTOR_DETAILS_HEADER_ICON_SIZE,
} from '@/constants/doctor-details';
import { scale } from '@/constants/layout';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type DoctorDetailsHeaderProps = {
  isFavorite: boolean;
  onToggleFavorite: () => void;
};

export function DoctorDetailsHeader({
  isFavorite,
  onToggleFavorite,
}: DoctorDetailsHeaderProps) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()} hitSlop={12} style={styles.sideButton}>
        <Ionicons
          name="arrow-back"
          size={DOCTOR_DETAILS_HEADER_ICON_SIZE}
          color={DOCTOR_DETAILS_COLORS.title}
        />
      </Pressable>
      <Text style={styles.title}>Doctor Details</Text>
      <Pressable onPress={onToggleFavorite} hitSlop={12} style={styles.sideButton}>
        <Ionicons
          name={isFavorite ? 'heart' : 'heart-outline'}
          size={DOCTOR_DETAILS_HEADER_ICON_SIZE}
          color={isFavorite ? '#EF4444' : DOCTOR_DETAILS_COLORS.title}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: DOCTOR_DETAILS_HEADER_HEIGHT,
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
    color: DOCTOR_DETAILS_COLORS.title,
    fontSize: scale(18),
    fontWeight: '700',
    textAlign: 'center',
  },
});
