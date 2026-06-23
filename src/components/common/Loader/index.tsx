import { StyleSheet, Text, View } from 'react-native';
import { HealthPalLogoIcon } from './HealthPalLogo';
import { LoaderBackgroundGrid } from './LoaderBackgroundGrid';
import {
  COLORS,
  LOADER_LOGO_HEIGHT,
  LOADER_LOGO_WIDTH,
  scale,
} from '@/constants/layout';

export function LoaderScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.gridLayer}>
        <LoaderBackgroundGrid />
      </View>

      <View style={styles.overlay} />

      <View style={styles.logoContainer}>
        <View style={styles.logoBlock}>
          <HealthPalLogoIcon />
          <Text style={styles.brandName}>HealthPal</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  gridLayer: {
    ...StyleSheet.absoluteFillObject,
    paddingTop: scale(4),
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLORS.overlay,
  },
  logoContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoBlock: {
    width: LOADER_LOGO_WIDTH,
    minHeight: LOADER_LOGO_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    gap: scale(10),
  },
  brandName: {
    color: COLORS.logoText,
    fontSize: scale(22),
    fontWeight: '600',
    letterSpacing: scale(0.3),
    lineHeight: scale(28),
  },
});
