import {
  ONBOARDING_COLORS,
  ONBOARDING_DOT_ACTIVE_WIDTH,
  ONBOARDING_DOT_GAP,
  ONBOARDING_DOT_HEIGHT,
  ONBOARDING_DOT_INACTIVE_WIDTH,
} from '@/constants/onboarding';
import { StyleSheet, View } from 'react-native';

type OnboardingPaginationProps = {
  total: number;
  activeIndex: number;
};

export function OnboardingPagination({
  total,
  activeIndex,
}: OnboardingPaginationProps) {
  return (
    <View style={styles.container}>
      {Array.from({ length: total }, (_, index) => {
        const isActive = index === activeIndex;

        return (
          <View
            key={index}
            style={[
              styles.dot,
              isActive ? styles.dotActive : styles.dotInactive,
            ]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: ONBOARDING_DOT_GAP,
  },
  dot: {
    height: ONBOARDING_DOT_HEIGHT,
    borderRadius: ONBOARDING_DOT_HEIGHT / 2,
  },
  dotActive: {
    width: ONBOARDING_DOT_ACTIVE_WIDTH,
    backgroundColor: ONBOARDING_COLORS.dotActive,
  },
  dotInactive: {
    width: ONBOARDING_DOT_INACTIVE_WIDTH,
    backgroundColor: ONBOARDING_COLORS.dotInactive,
  },
});
