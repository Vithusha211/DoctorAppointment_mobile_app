import {
  FAVORITES_COLORS,
  FAVORITES_CONTENT_WIDTH,
  FAVORITES_HOSPITAL_CONTENT_PADDING,
  FAVORITES_HOSPITAL_DETAIL_LINE_HEIGHT,
  FAVORITES_HOSPITAL_DETAIL_SIZE,
  FAVORITES_HOSPITAL_FOOTER_PADDING_V,
  FAVORITES_HOSPITAL_HEART_SIZE,
  FAVORITES_HOSPITAL_IMAGE_HEIGHT,
  FAVORITES_HOSPITAL_INFO_GAP,
  FAVORITES_HOSPITAL_NAME_LINE_HEIGHT,
  FAVORITES_HOSPITAL_NAME_SIZE,
  FAVORITES_HOSPITAL_RATING_SIZE,
  FAVORITES_HOSPITAL_STAR_SIZE,
  FAVORITES_HOSPITAL_CARD_RADIUS,
} from '@/constants/favorites';
import { FavoriteHospital } from '@/data/favorites';
import { scale } from '@/constants/layout';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type HospitalFavoriteCardProps = {
  hospital: FavoriteHospital;
  isFavorite: boolean;
  onToggleFavorite: () => void;
};

function formatRating(rating: number) {
  return rating.toFixed(1);
}

function StarRating({ rating }: { rating: number }) {
  return (
    <View style={styles.stars}>
      {Array.from({ length: 5 }, (_, index) => (
        <Ionicons
          key={index}
          name={index < Math.round(rating) ? 'star' : 'star-outline'}
          size={FAVORITES_HOSPITAL_STAR_SIZE}
          color={FAVORITES_COLORS.star}
        />
      ))}
    </View>
  );
}

export function HospitalFavoriteCard({
  hospital,
  isFavorite,
  onToggleFavorite,
}: HospitalFavoriteCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: hospital.image }} style={styles.image} contentFit="cover" />

        <Pressable onPress={onToggleFavorite} hitSlop={8} style={styles.favoriteButton}>
          <Ionicons
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={scale(16)}
            color={FAVORITES_COLORS.imageHeart}
          />
        </Pressable>
      </View>

      <View style={styles.body}>
        <Text style={styles.name} numberOfLines={1}>
          {hospital.name}
        </Text>

        <View style={{ height: FAVORITES_HOSPITAL_INFO_GAP }} />

        <View style={styles.addressRow}>
          <Ionicons name="location-outline" size={scale(14)} color={FAVORITES_COLORS.subtitle} />
          <Text style={styles.address} numberOfLines={1}>
            {hospital.address}
          </Text>
        </View>

        <View style={{ height: FAVORITES_HOSPITAL_INFO_GAP }} />

        <View style={styles.ratingRow}>
          <Text style={styles.ratingValue}>{formatRating(hospital.rating)}</Text>
          <StarRating rating={hospital.rating} />
          <Text style={styles.reviews}>({hospital.reviews} Reviews)</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Ionicons name="navigate-outline" size={scale(14)} color={FAVORITES_COLORS.subtitle} />
          <Text style={styles.footerText}>
            {hospital.distance}/{hospital.duration}
          </Text>
        </View>

        <View style={styles.footerItem}>
          <Ionicons name="business-outline" size={scale(14)} color={FAVORITES_COLORS.subtitle} />
          <Text style={styles.footerText}>{hospital.type}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: FAVORITES_CONTENT_WIDTH,
    borderRadius: FAVORITES_HOSPITAL_CARD_RADIUS,
    backgroundColor: FAVORITES_COLORS.cardBg,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: scale(2) },
    shadowOpacity: 0.08,
    shadowRadius: scale(8),
    elevation: 3,
  },
  imageWrapper: {
    width: '100%',
    height: FAVORITES_HOSPITAL_IMAGE_HEIGHT,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  favoriteButton: {
    position: 'absolute',
    top: scale(10),
    right: scale(10),
    width: FAVORITES_HOSPITAL_HEART_SIZE,
    height: FAVORITES_HOSPITAL_HEART_SIZE,
    borderRadius: FAVORITES_HOSPITAL_HEART_SIZE / 2,
    backgroundColor: FAVORITES_COLORS.imageHeartBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    paddingHorizontal: FAVORITES_HOSPITAL_CONTENT_PADDING,
    paddingTop: FAVORITES_HOSPITAL_CONTENT_PADDING,
  },
  name: {
    color: FAVORITES_COLORS.title,
    fontSize: FAVORITES_HOSPITAL_NAME_SIZE,
    fontWeight: '700',
    lineHeight: FAVORITES_HOSPITAL_NAME_LINE_HEIGHT,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(4),
  },
  address: {
    flex: 1,
    color: FAVORITES_COLORS.subtitle,
    fontSize: FAVORITES_HOSPITAL_DETAIL_SIZE,
    fontWeight: '400',
    lineHeight: FAVORITES_HOSPITAL_DETAIL_LINE_HEIGHT,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(6),
    height: scale(18),
  },
  ratingValue: {
    color: FAVORITES_COLORS.title,
    fontSize: FAVORITES_HOSPITAL_RATING_SIZE,
    fontWeight: '700',
    lineHeight: scale(18),
  },
  stars: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(2),
  },
  reviews: {
    color: FAVORITES_COLORS.subtitle,
    fontSize: FAVORITES_HOSPITAL_DETAIL_SIZE,
    fontWeight: '400',
    lineHeight: FAVORITES_HOSPITAL_DETAIL_LINE_HEIGHT,
  },
  divider: {
    height: 1,
    backgroundColor: FAVORITES_COLORS.border,
    marginTop: FAVORITES_HOSPITAL_CONTENT_PADDING,
    marginHorizontal: FAVORITES_HOSPITAL_CONTENT_PADDING,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: FAVORITES_HOSPITAL_CONTENT_PADDING,
    paddingVertical: FAVORITES_HOSPITAL_FOOTER_PADDING_V,
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(4),
  },
  footerText: {
    color: FAVORITES_COLORS.subtitle,
    fontSize: FAVORITES_HOSPITAL_DETAIL_SIZE,
    fontWeight: '400',
    lineHeight: FAVORITES_HOSPITAL_DETAIL_LINE_HEIGHT,
  },
});
