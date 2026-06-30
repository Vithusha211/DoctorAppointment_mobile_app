import {
  PROFILE_COLORS,
  PROFILE_TAB_TITLE_LINE_HEIGHT,
  PROFILE_TAB_TITLE_SIZE,
} from '@/constants/profile';
import { StyleSheet, Text, View } from 'react-native';

export function ProfileTabHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: PROFILE_COLORS.title,
    fontSize: PROFILE_TAB_TITLE_SIZE,
    fontWeight: '700',
    lineHeight: PROFILE_TAB_TITLE_LINE_HEIGHT,
    textAlign: 'center',
  },
});
