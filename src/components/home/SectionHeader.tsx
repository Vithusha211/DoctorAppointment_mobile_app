import { HOME_COLORS, HOME_SECTION_HEADER_MARGIN } from '@/constants/home';
import { scale } from '@/constants/layout';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type SectionHeaderProps = {
  title: string;
  onSeeAllPress?: () => void;
};

export function SectionHeader({ title, onSeeAllPress }: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Pressable onPress={onSeeAllPress} hitSlop={8}>
        <Text style={styles.seeAll}>See All</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: HOME_SECTION_HEADER_MARGIN,
  },
  title: {
    color: HOME_COLORS.title,
    fontSize: scale(18),
    fontWeight: '700',
  },
  seeAll: {
    color: HOME_COLORS.seeAll,
    fontSize: scale(14),
    fontWeight: '600',
  },
});
