import {
  PROFILE_COLORS,
  PROFILE_HEADER_HEIGHT,
} from '@/constants/profile';
import { scale } from '@/constants/layout';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export function ProfileHeader() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()} hitSlop={12} style={styles.backButton}>
        <Ionicons name="arrow-back" size={scale(22)} color={PROFILE_COLORS.title} />
      </Pressable>
      <Text style={styles.title}>Fill Your Profile</Text>
      <View style={styles.backButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: PROFILE_HEADER_HEIGHT,
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
    color: PROFILE_COLORS.title,
    fontSize: scale(18),
    fontWeight: '700',
    textAlign: 'center',
  },
});
