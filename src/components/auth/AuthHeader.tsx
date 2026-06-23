import { HealthPalLogoIcon } from '@/components/common/Loader/HealthPalLogo';
import {
  AUTH_COLORS,
  AUTH_LOGO_BLOCK_HEIGHT,
  AUTH_LOGO_SIZE,
  AUTH_LOGO_TO_TITLE_GAP,
} from '@/constants/auth';
import { scale } from '@/constants/layout';
import { StyleSheet, Text, View } from 'react-native';

export function AuthHeader() {
  return (
    <View style={styles.container}>
      <HealthPalLogoIcon size={AUTH_LOGO_SIZE} color={AUTH_COLORS.primary} />
      <Text style={styles.brandName}>HealthPal</Text>
    </View>
  );
}

export const AUTH_HEADER_SPACING = AUTH_LOGO_TO_TITLE_GAP;

const styles = StyleSheet.create({
  container: {
    height: AUTH_LOGO_BLOCK_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    gap: scale(10),
  },
  brandName: {
    color: AUTH_COLORS.brandText,
    fontSize: scale(18),
    fontWeight: '500',
    letterSpacing: scale(0.2),
  },
});
