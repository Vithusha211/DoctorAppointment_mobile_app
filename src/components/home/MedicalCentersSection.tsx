import { SectionHeader } from '@/components/home/SectionHeader';
import {
  HOME_COLORS,
  HOME_CONTENT_WIDTH,
  HOME_MEDICAL_CARD_GAP,
  HOME_MEDICAL_CARD_IMAGE_HEIGHT,
  HOME_MEDICAL_CARD_RADIUS,
  HOME_MEDICAL_CARD_WIDTH,
} from '@/constants/home';
import { MEDICAL_CENTERS } from '@/data/medical-centers';
import { scale } from '@/constants/layout';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const CARD_TEXT_HEIGHT = scale(20);
const LIST_HEIGHT = HOME_MEDICAL_CARD_IMAGE_HEIGHT + scale(10) + CARD_TEXT_HEIGHT;

export function MedicalCentersSection() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <SectionHeader
        title="Nearby Medical Centers"
        onSeeAllPress={() => router.push('/doctors')}
      />

      <ScrollView
        horizontal
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.listScroll}
        contentContainerStyle={styles.list}
      >
        {MEDICAL_CENTERS.map((center) => (
          <View key={center.id} style={styles.card}>
            <View style={styles.imageWrapper}>
              <Image source={{ uri: center.image }} style={styles.image} contentFit="cover" />
              <Pressable style={styles.favoriteButton} hitSlop={8}>
                <Ionicons name="heart-outline" size={scale(16)} color={HOME_COLORS.title} />
              </Pressable>
            </View>
            <Text style={styles.name} numberOfLines={1}>
              {center.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: HOME_CONTENT_WIDTH,
  },
  listScroll: {
    width: HOME_CONTENT_WIDTH,
    height: LIST_HEIGHT,
  },
  list: {
    gap: HOME_MEDICAL_CARD_GAP,
    height: LIST_HEIGHT,
  },
  card: {
    width: HOME_MEDICAL_CARD_WIDTH,
    gap: scale(10),
  },
  imageWrapper: {
    width: HOME_MEDICAL_CARD_WIDTH,
    height: HOME_MEDICAL_CARD_IMAGE_HEIGHT,
    borderRadius: HOME_MEDICAL_CARD_RADIUS,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  favoriteButton: {
    position: 'absolute',
    top: scale(10),
    right: scale(10),
    width: scale(28),
    height: scale(28),
    borderRadius: scale(14),
    backgroundColor: HOME_COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: HOME_COLORS.cardTitle,
    fontSize: scale(14),
    fontWeight: '600',
  },
});
