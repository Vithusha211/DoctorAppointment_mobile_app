import { Button } from '@/components/common/Button';
import { DoctorDetailsHeader } from '@/components/doctors/DoctorDetailsHeader';
import { DoctorProfileSummaryCard } from '@/components/doctors/DoctorProfileSummaryCard';
import { DoctorReviewCard } from '@/components/doctors/DoctorReviewCard';
import { DoctorStatsRow } from '@/components/doctors/DoctorStatsRow';
import {
  AUTH_BUTTON_RADIUS,
  AUTH_COLORS,
  AUTH_CONTENT_WIDTH,
} from '@/constants/auth';
import {
  DOCTOR_DETAILS_ABOUT_TITLE_MARGIN,
  DOCTOR_DETAILS_ABOUT_TO_WORKING_GAP,
  DOCTOR_DETAILS_BODY_FONT_SIZE,
  DOCTOR_DETAILS_BODY_LINE_HEIGHT,
  DOCTOR_DETAILS_BUTTON_HEIGHT,
  DOCTOR_DETAILS_CARD_TO_STATS_GAP,
  DOCTOR_DETAILS_COLORS,
  DOCTOR_DETAILS_CONTENT_WIDTH,
  DOCTOR_DETAILS_FOOTER_PADDING,
  DOCTOR_DETAILS_HEADER_TO_CARD_GAP,
  DOCTOR_DETAILS_HORIZONTAL_MARGIN,
  DOCTOR_DETAILS_REVIEWS_HEADER_HEIGHT,
  DOCTOR_DETAILS_REVIEWS_HEADER_MARGIN,
  DOCTOR_DETAILS_REVIEWS_TO_BUTTON_GAP,
  DOCTOR_DETAILS_SECTION_TITLE_LINE_HEIGHT,
  DOCTOR_DETAILS_SECTION_TITLE_SIZE,
  DOCTOR_DETAILS_STATS_TO_ABOUT_GAP,
  DOCTOR_DETAILS_TOP_PADDING,
  DOCTOR_DETAILS_WORKING_TITLE_MARGIN,
  DOCTOR_DETAILS_WORKING_TO_REVIEWS_GAP,
} from '@/constants/doctor-details';
import { HOME_COLORS } from '@/constants/home';
import { getDoctorDetail } from '@/data/doctors';
import { scale } from '@/constants/layout';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function DoctorDetailsScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const insets = useSafeAreaInsets();
  const [isFavorite, setIsFavorite] = useState(false);

  const doctor = typeof id === 'string' ? getDoctorDetail(id) : undefined;

  const footerHeight =
    DOCTOR_DETAILS_FOOTER_PADDING +
    DOCTOR_DETAILS_BUTTON_HEIGHT +
    DOCTOR_DETAILS_FOOTER_PADDING;

  if (!doctor) {
    return (
      <View style={[styles.flex, styles.centered, { paddingTop: insets.top }]}>
        <Text style={styles.missingText}>Doctor not found</Text>
        <Pressable onPress={() => router.back()} hitSlop={8}>
          <Text style={styles.backLink}>Go back</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.flex}>
      <ScrollView
        style={styles.flex}
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingTop: insets.top + DOCTOR_DETAILS_TOP_PADDING,
            paddingBottom:
              footerHeight + DOCTOR_DETAILS_REVIEWS_TO_BUTTON_GAP + insets.bottom,
          },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <DoctorDetailsHeader
          isFavorite={isFavorite}
          onToggleFavorite={() => setIsFavorite((prev) => !prev)}
        />

        <View style={{ height: DOCTOR_DETAILS_HEADER_TO_CARD_GAP }} />

        <DoctorProfileSummaryCard doctor={doctor} />

        <View style={{ height: DOCTOR_DETAILS_CARD_TO_STATS_GAP }} />

        <DoctorStatsRow doctor={doctor} />

        <View style={{ height: DOCTOR_DETAILS_STATS_TO_ABOUT_GAP }} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About me</Text>
          <View style={{ height: DOCTOR_DETAILS_ABOUT_TITLE_MARGIN }} />
          <Text style={styles.bodyText}>
            {doctor.about}{' '}
            <Text style={styles.link}>view more</Text>
          </Text>
        </View>

        <View style={{ height: DOCTOR_DETAILS_ABOUT_TO_WORKING_GAP }} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Working Time</Text>
          <View style={{ height: DOCTOR_DETAILS_WORKING_TITLE_MARGIN }} />
          <Text style={styles.bodyText}>{doctor.workingTime}</Text>
        </View>

        <View style={{ height: DOCTOR_DETAILS_WORKING_TO_REVIEWS_GAP }} />

        <View style={styles.section}>
          <View style={[styles.reviewsHeader, { height: DOCTOR_DETAILS_REVIEWS_HEADER_HEIGHT }]}>
            <Text style={styles.sectionTitle}>Reviews</Text>
            <Pressable hitSlop={8}>
              <Text style={styles.seeAll}>See All</Text>
            </Pressable>
          </View>
          <View style={{ height: DOCTOR_DETAILS_REVIEWS_HEADER_MARGIN }} />
          <DoctorReviewCard review={doctor.featuredReview} />
        </View>
      </ScrollView>

      <View
        style={[
          styles.footer,
          {
            paddingBottom: Math.max(insets.bottom, DOCTOR_DETAILS_FOOTER_PADDING),
          },
        ]}
      >
        <Button
          title="Book Appointment"
          width={AUTH_CONTENT_WIDTH}
          onPress={() => router.push(`/doctors/${doctor.id}/book`)}
          style={styles.bookButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: DOCTOR_DETAILS_COLORS.background,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: scale(12),
  },
  scrollContent: {
    alignItems: 'center',
    paddingHorizontal: DOCTOR_DETAILS_HORIZONTAL_MARGIN,
  },
  section: {
    width: DOCTOR_DETAILS_CONTENT_WIDTH,
  },
  sectionTitle: {
    color: DOCTOR_DETAILS_COLORS.title,
    fontSize: DOCTOR_DETAILS_SECTION_TITLE_SIZE,
    fontWeight: '700',
    lineHeight: DOCTOR_DETAILS_SECTION_TITLE_LINE_HEIGHT,
  },
  bodyText: {
    color: DOCTOR_DETAILS_COLORS.subtitle,
    fontSize: DOCTOR_DETAILS_BODY_FONT_SIZE,
    fontWeight: '400',
    lineHeight: DOCTOR_DETAILS_BODY_LINE_HEIGHT,
  },
  link: {
    color: DOCTOR_DETAILS_COLORS.link,
    fontSize: DOCTOR_DETAILS_BODY_FONT_SIZE,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  reviewsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  seeAll: {
    color: HOME_COLORS.seeAll,
    fontSize: scale(14),
    fontWeight: '600',
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    paddingTop: DOCTOR_DETAILS_FOOTER_PADDING,
    paddingHorizontal: DOCTOR_DETAILS_HORIZONTAL_MARGIN,
    backgroundColor: DOCTOR_DETAILS_COLORS.background,
  },
  bookButton: {
    height: DOCTOR_DETAILS_BUTTON_HEIGHT,
    borderRadius: AUTH_BUTTON_RADIUS,
    backgroundColor: AUTH_COLORS.primary,
    width: AUTH_CONTENT_WIDTH,
  },
  missingText: {
    color: DOCTOR_DETAILS_COLORS.title,
    fontSize: scale(16),
    fontWeight: '600',
  },
  backLink: {
    color: DOCTOR_DETAILS_COLORS.link,
    fontSize: scale(14),
    fontWeight: '600',
  },
});
