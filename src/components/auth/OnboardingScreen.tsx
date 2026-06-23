import { Button } from '@/components/common/Button';
import { OnboardingPagination } from '@/components/auth/OnboardingPagination';
import {
  ONBOARDING_BUTTON_PAGINATION_GAP,
  ONBOARDING_CARD_RADIUS,
  ONBOARDING_COLORS,
  ONBOARDING_CONTENT_TOP_PADDING,
  ONBOARDING_CONTENT_WIDTH,
  ONBOARDING_HERO_HEIGHT,
  ONBOARDING_HORIZONTAL_MARGIN,
  ONBOARDING_PAGINATION_SKIP_GAP,
  ONBOARDING_SKIP_BOTTOM,
  ONBOARDING_SUBTITLE_BUTTON_GAP,
  ONBOARDING_TITLE_SUBTITLE_GAP,
} from '@/constants/onboarding';
import { scale } from '@/constants/layout';
import { ONBOARDING_SLIDES } from '@/data/onboarding-slides';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function OnboardingScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [activeIndex, setActiveIndex] = useState(0);

  const slide = ONBOARDING_SLIDES[activeIndex];
  const isLastSlide = activeIndex === ONBOARDING_SLIDES.length - 1;

  const handleNext = () => {
    if (isLastSlide) {
      router.replace('/auth/register');
      return;
    }

    setActiveIndex((current) => current + 1);
  };

  const handleSkip = () => {
    router.replace('/auth/register');
  };

  return (
    <View style={styles.container}>
      <Image
        key={slide.id}
        source={
          typeof slide.image === 'string' ? { uri: slide.image } : slide.image
        }
        style={styles.heroImage}
        contentFit="cover"
        transition={300}
      />

      <View style={styles.contentCard}>
        <View style={styles.textBlock}>
          <Text style={styles.title}>{slide.title}</Text>
          <Text style={styles.description}>{slide.description}</Text>
        </View>

        <View style={styles.spacer} />

        <Button title="Next" onPress={handleNext} />

        <View style={styles.gapButtonPagination} />

        <OnboardingPagination
          total={ONBOARDING_SLIDES.length}
          activeIndex={activeIndex}
        />

        <View style={styles.gapPaginationSkip} />

        <Pressable onPress={handleSkip} hitSlop={12} style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </Pressable>

        <View
          style={[
            styles.bottomInset,
            { height: Math.max(insets.bottom, ONBOARDING_SKIP_BOTTOM) },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ONBOARDING_COLORS.white,
  },
  heroImage: {
    width: '100%',
    height: ONBOARDING_HERO_HEIGHT,
  },
  contentCard: {
    flex: 1,
    marginTop: -ONBOARDING_CARD_RADIUS,
    borderTopLeftRadius: ONBOARDING_CARD_RADIUS,
    borderTopRightRadius: ONBOARDING_CARD_RADIUS,
    backgroundColor: ONBOARDING_COLORS.white,
    paddingTop: ONBOARDING_CONTENT_TOP_PADDING,
    paddingHorizontal: ONBOARDING_HORIZONTAL_MARGIN,
    alignItems: 'center',
  },
  textBlock: {
    width: ONBOARDING_CONTENT_WIDTH,
    alignSelf: 'center',
  },
  title: {
    color: ONBOARDING_COLORS.title,
    fontSize: scale(24),
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: scale(30),
    marginBottom: ONBOARDING_TITLE_SUBTITLE_GAP,
  },
  description: {
    color: ONBOARDING_COLORS.body,
    fontSize: scale(14),
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: scale(22),
  },
  spacer: {
    flex: 1,
    minHeight: ONBOARDING_SUBTITLE_BUTTON_GAP,
  },
  gapButtonPagination: {
    height: ONBOARDING_BUTTON_PAGINATION_GAP,
  },
  gapPaginationSkip: {
    height: ONBOARDING_PAGINATION_SKIP_GAP,
  },
  bottomInset: {
    width: '100%',
  },
  skipButton: {
    minWidth: scale(32),
    alignItems: 'center',
  },
  skipText: {
    color: ONBOARDING_COLORS.skip,
    fontSize: scale(15),
    fontWeight: '500',
  },
});
