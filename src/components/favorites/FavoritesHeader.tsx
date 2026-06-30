import {
  FAVORITES_COLORS,
  FAVORITES_CONTENT_WIDTH,
  FAVORITES_HEADER_HEIGHT,
} from '@/constants/favorites';
import { scale } from '@/constants/layout';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export function FavoritesHeader() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()} hitSlop={12} style={styles.sideButton}>
        <Ionicons name="arrow-back" size={scale(24)} color={FAVORITES_COLORS.title} />
      </Pressable>

      <Text style={styles.title}>Favorites</Text>

      <View style={styles.sideButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: FAVORITES_CONTENT_WIDTH,
    height: FAVORITES_HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sideButton: {
    width: scale(40),
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    color: FAVORITES_COLORS.title,
    fontSize: scale(18),
    fontWeight: '700',
    lineHeight: scale(30),
    textAlign: 'center',
  },
});
