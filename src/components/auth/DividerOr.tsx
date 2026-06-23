import {
  AUTH_COLORS,
  AUTH_CONTENT_WIDTH,
  AUTH_OR_SECTION_HEIGHT,
} from '@/constants/auth';
import { scale } from '@/constants/layout';
import { StyleSheet, Text, View } from 'react-native';

export function DividerOr() {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>or</Text>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: AUTH_CONTENT_WIDTH,
    height: AUTH_OR_SECTION_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(12),
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: AUTH_COLORS.border,
  },
  text: {
    color: AUTH_COLORS.placeholder,
    fontSize: scale(14),
    fontWeight: '400',
  },
});
