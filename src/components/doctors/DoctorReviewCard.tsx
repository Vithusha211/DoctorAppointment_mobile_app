import {
  DOCTOR_DETAILS_COLORS,
  DOCTOR_DETAILS_CONTENT_WIDTH,
  DOCTOR_DETAILS_REVIEW_AVATAR_SIZE,
  DOCTOR_DETAILS_REVIEW_HEADER_TO_TEXT_GAP,
} from '@/constants/doctor-details';
import { DoctorReview } from '@/data/doctors';
import { scale } from '@/constants/layout';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

type DoctorReviewCardProps = {
  review: DoctorReview;
};

function StarRating({ rating }: { rating: number }) {
  return (
    <View style={styles.stars}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Ionicons
          key={index}
          name={index < Math.floor(rating) ? 'star' : 'star-outline'}
          size={scale(12)}
          color={DOCTOR_DETAILS_COLORS.star}
        />
      ))}
    </View>
  );
}

export function DoctorReviewCard({ review }: DoctorReviewCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: review.avatar }} style={styles.avatar} contentFit="cover" />

      <View style={styles.content}>
        <Text style={styles.author}>{review.author}</Text>

        <View style={styles.ratingRow}>
          <Text style={styles.rating}>{review.rating.toFixed(1)}</Text>
          <StarRating rating={review.rating} />
        </View>

        <View style={{ height: DOCTOR_DETAILS_REVIEW_HEADER_TO_TEXT_GAP }} />

        <Text style={styles.text} numberOfLines={3}>
          {review.text}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: DOCTOR_DETAILS_CONTENT_WIDTH,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: scale(12),
  },
  avatar: {
    width: DOCTOR_DETAILS_REVIEW_AVATAR_SIZE,
    height: DOCTOR_DETAILS_REVIEW_AVATAR_SIZE,
    borderRadius: DOCTOR_DETAILS_REVIEW_AVATAR_SIZE / 2,
  },
  content: {
    flex: 1,
  },
  author: {
    color: DOCTOR_DETAILS_COLORS.title,
    fontSize: scale(14),
    fontWeight: '700',
    lineHeight: scale(20),
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(6),
    marginTop: scale(2),
  },
  rating: {
    color: DOCTOR_DETAILS_COLORS.title,
    fontSize: scale(12),
    fontWeight: '700',
  },
  stars: {
    flexDirection: 'row',
    gap: scale(2),
  },
  text: {
    color: DOCTOR_DETAILS_COLORS.subtitle,
    fontSize: scale(14),
    fontWeight: '400',
    lineHeight: scale(21),
  },
});
