import { MapClinic } from '@/data/map-locations';
import {
  MAP_CLINIC_CARD_HEIGHT,
  MAP_CLINIC_CARD_IMAGE_HEIGHT,
  MAP_CLINIC_CARD_RADIUS,
  MAP_CLINIC_CARD_WIDTH,
  MAP_COLORS,
} from '@/constants/map';
import { scale } from '@/constants/layout';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type MapClinicCardProps = {
  clinic: MapClinic;
};

function StarRating({ rating }: { rating: number }) {
  return (
    <View style={styles.stars}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Ionicons
          key={index}
          name={index < Math.floor(rating) ? 'star' : 'star-outline'}
          size={scale(12)}
          color={MAP_COLORS.star}
        />
      ))}
    </View>
  );
}

export function MapClinicCard({ clinic }: MapClinicCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: clinic.image }} style={styles.image} contentFit="cover" />
        <Pressable style={styles.favoriteButton} hitSlop={8}>
          <Ionicons name="heart-outline" size={scale(16)} color={MAP_COLORS.title} />
        </Pressable>
      </View>

      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {clinic.name}
        </Text>

        <View style={styles.addressRow}>
          <Ionicons name="location-outline" size={scale(14)} color={MAP_COLORS.subtitle} />
          <Text style={styles.address} numberOfLines={1}>
            {clinic.address}
          </Text>
        </View>

        <View style={styles.ratingRow}>
          <Text style={styles.rating}>{clinic.rating.toFixed(1)}</Text>
          <StarRating rating={clinic.rating} />
          <Text style={styles.reviews}>({clinic.reviews} Reviews)</Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.footerItem}>
            <Ionicons name="navigate-outline" size={scale(14)} color={MAP_COLORS.subtitle} />
            <Text style={styles.footerText}>{clinic.distance}</Text>
          </View>
          <View style={styles.footerItem}>
            <Ionicons name="business-outline" size={scale(14)} color={MAP_COLORS.subtitle} />
            <Text style={styles.footerText}>{clinic.type}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: MAP_CLINIC_CARD_WIDTH,
    height: MAP_CLINIC_CARD_HEIGHT,
    borderRadius: MAP_CLINIC_CARD_RADIUS,
    backgroundColor: MAP_COLORS.cardBg,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: scale(2) },
    shadowOpacity: 0.08,
    shadowRadius: scale(8),
    elevation: 3,
  },
  imageWrapper: {
    width: '100%',
    height: MAP_CLINIC_CARD_IMAGE_HEIGHT,
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
    backgroundColor: MAP_COLORS.cardBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: scale(12),
    paddingTop: scale(10),
    paddingBottom: scale(12),
    gap: scale(6),
  },
  name: {
    color: MAP_COLORS.title,
    fontSize: scale(14),
    fontWeight: '700',
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(4),
  },
  address: {
    flex: 1,
    color: MAP_COLORS.subtitle,
    fontSize: scale(11),
    fontWeight: '400',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(4),
  },
  rating: {
    color: MAP_COLORS.title,
    fontSize: scale(12),
    fontWeight: '700',
  },
  stars: {
    flexDirection: 'row',
    gap: scale(1),
  },
  reviews: {
    color: MAP_COLORS.subtitle,
    fontSize: scale(11),
    fontWeight: '400',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: scale(2),
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(4),
  },
  footerText: {
    color: MAP_COLORS.subtitle,
    fontSize: scale(11),
    fontWeight: '400',
  },
});
