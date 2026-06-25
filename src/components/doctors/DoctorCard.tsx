import {
  DOCTORS_CARD_DETAIL_FONT_SIZE,
  DOCTORS_CARD_DETAIL_GAP,
  DOCTORS_CARD_HEART_SIZE,
  DOCTORS_CARD_HEIGHT,
  DOCTORS_CARD_IMAGE_GAP,
  DOCTORS_CARD_IMAGE_RADIUS,
  DOCTORS_CARD_IMAGE_SIZE,
  DOCTORS_CARD_NAME_FONT_SIZE,
  DOCTORS_CARD_NAME_TO_SPECIALTY_GAP,
  DOCTORS_CARD_PADDING,
  DOCTORS_CARD_RADIUS,
  DOCTORS_CARD_SPECIALTY_FONT_SIZE,
  DOCTORS_COLORS,
  DOCTORS_CONTENT_WIDTH,
} from '@/constants/doctors';
import { Doctor } from '@/data/doctors';
import { scale } from '@/constants/layout';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type DoctorCardProps = {
  doctor: Doctor;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onPress?: () => void;
  favoriteColor?: string;
};

function formatReviews(count: number) {
  return count.toLocaleString('en-US');
}

function formatRating(rating: number) {
  return Number.isInteger(rating) ? String(rating) : rating.toFixed(1);
}

export function DoctorCard({
  doctor,
  isFavorite,
  onToggleFavorite,
  onPress,
  favoriteColor = '#EF4444',
}: DoctorCardProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      style={({ pressed }) => [styles.card, pressed && onPress ? styles.pressed : null]}
    >
      <Image source={{ uri: doctor.image }} style={styles.image} contentFit="cover" />

      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Text style={styles.name} numberOfLines={1}>
            {doctor.name}
          </Text>

          <Pressable onPress={onToggleFavorite} hitSlop={8} style={styles.favoriteButton}>
            <Ionicons
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={DOCTORS_CARD_HEART_SIZE}
              color={isFavorite ? favoriteColor : DOCTORS_COLORS.title}
            />
          </Pressable>
        </View>

        <View style={{ height: DOCTORS_CARD_NAME_TO_SPECIALTY_GAP }} />

        <Text style={styles.specialty} numberOfLines={1}>
          {doctor.specialty}
        </Text>

        <View style={{ height: DOCTORS_CARD_DETAIL_GAP }} />

        <View style={styles.locationRow}>
          <Ionicons name="location-outline" size={scale(14)} color={DOCTORS_COLORS.subtitle} />
          <Text style={styles.location} numberOfLines={1}>
            {doctor.location}
          </Text>
        </View>

        <View style={{ height: DOCTORS_CARD_DETAIL_GAP }} />

        <View style={styles.ratingRow}>
          <Ionicons name="star" size={scale(14)} color={DOCTORS_COLORS.star} />
          <Text style={styles.rating}>{formatRating(doctor.rating)}</Text>
          <Text style={styles.separator}>|</Text>
          <Text style={styles.reviews}>{formatReviews(doctor.reviews)} Reviews</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.92,
  },
  card: {
    width: DOCTORS_CONTENT_WIDTH,
    height: DOCTORS_CARD_HEIGHT,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: DOCTORS_CARD_PADDING,
    gap: DOCTORS_CARD_IMAGE_GAP,
    borderRadius: DOCTORS_CARD_RADIUS,
    backgroundColor: DOCTORS_COLORS.cardBg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: scale(2) },
    shadowOpacity: 0.08,
    shadowRadius: scale(8),
    elevation: 3,
  },
  image: {
    width: DOCTORS_CARD_IMAGE_SIZE,
    height: DOCTORS_CARD_IMAGE_SIZE,
    borderRadius: DOCTORS_CARD_IMAGE_RADIUS,
  },
  content: {
    flex: 1,
    minHeight: DOCTORS_CARD_IMAGE_SIZE,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: scale(8),
  },
  favoriteButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    flex: 1,
    color: DOCTORS_COLORS.title,
    fontSize: DOCTORS_CARD_NAME_FONT_SIZE,
    fontWeight: '700',
    lineHeight: scale(20),
  },
  specialty: {
    color: DOCTORS_COLORS.subtitle,
    fontSize: DOCTORS_CARD_SPECIALTY_FONT_SIZE,
    fontWeight: '400',
    lineHeight: scale(18),
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(4),
  },
  location: {
    flex: 1,
    color: DOCTORS_COLORS.subtitle,
    fontSize: DOCTORS_CARD_DETAIL_FONT_SIZE,
    fontWeight: '400',
    lineHeight: scale(16),
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(4),
  },
  rating: {
    color: DOCTORS_COLORS.title,
    fontSize: DOCTORS_CARD_DETAIL_FONT_SIZE,
    fontWeight: '700',
  },
  separator: {
    color: DOCTORS_COLORS.border,
    fontSize: DOCTORS_CARD_DETAIL_FONT_SIZE,
    fontWeight: '400',
  },
  reviews: {
    color: DOCTORS_COLORS.subtitle,
    fontSize: DOCTORS_CARD_DETAIL_FONT_SIZE,
    fontWeight: '400',
  },
});
