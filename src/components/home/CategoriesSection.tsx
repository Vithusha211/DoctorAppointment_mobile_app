import { SectionHeader } from '@/components/home/SectionHeader';
import {
  HOME_CATEGORY_COLUMNS,
  HOME_CATEGORY_ICON_RADIUS,
  HOME_CATEGORY_ICON_SIZE,
  HOME_COLORS,
  HOME_CONTENT_WIDTH,
} from '@/constants/home';
import { CATEGORIES } from '@/data/categories';
import { scale } from '@/constants/layout';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const CELL_GAP = scale(16);
const CELL_WIDTH =
  (HOME_CONTENT_WIDTH - CELL_GAP * (HOME_CATEGORY_COLUMNS - 1)) /
  HOME_CATEGORY_COLUMNS;

export function CategoriesSection() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <SectionHeader title="Categories" onSeeAllPress={() => router.push('/doctors')} />

      <View style={styles.grid}>
        {CATEGORIES.map((category) => (
          <View key={category.id} style={styles.cell}>
            <View style={[styles.iconBox, { backgroundColor: category.color }]}>
              <MaterialCommunityIcons
                name={category.icon}
                size={scale(24)}
                color={HOME_COLORS.background}
              />
            </View>
            <Text style={styles.label} numberOfLines={1}>
              {category.label}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: HOME_CONTENT_WIDTH,
  },
  grid: {
    width: HOME_CONTENT_WIDTH,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: CELL_GAP,
  },
  cell: {
    width: CELL_WIDTH,
    alignItems: 'center',
    gap: scale(8),
  },
  iconBox: {
    width: HOME_CATEGORY_ICON_SIZE,
    height: HOME_CATEGORY_ICON_SIZE,
    borderRadius: HOME_CATEGORY_ICON_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: HOME_COLORS.title,
    fontSize: scale(12),
    fontWeight: '500',
    textAlign: 'center',
  },
});
