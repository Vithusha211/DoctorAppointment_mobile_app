import {
  DOCTORS_CHIP_GAP,
  DOCTORS_CHIP_HEIGHT,
  DOCTORS_CHIP_PADDING_H,
  DOCTORS_CHIP_RADIUS,
  DOCTORS_COLORS,
} from '@/constants/doctors';
import { DoctorCategory } from '@/data/doctors';
import { scale } from '@/constants/layout';
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';

type CategoryChipsProps = {
  categories: readonly DoctorCategory[];
  selected: DoctorCategory;
  onSelect: (category: DoctorCategory) => void;
};

export function CategoryChips({ categories, selected, onSelect }: CategoryChipsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.list}
    >
      {categories.map((category) => {
        const isActive = category === selected;

        return (
          <Pressable
            key={category}
            onPress={() => onSelect(category)}
            style={[styles.chip, isActive ? styles.chipActive : styles.chipInactive]}
          >
            <Text style={[styles.chipText, isActive ? styles.chipTextActive : styles.chipTextInactive]}>
              {category}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: DOCTORS_CHIP_GAP,
  },
  chip: {
    height: DOCTORS_CHIP_HEIGHT,
    paddingHorizontal: DOCTORS_CHIP_PADDING_H,
    borderRadius: DOCTORS_CHIP_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipActive: {
    backgroundColor: DOCTORS_COLORS.chipActiveBg,
  },
  chipInactive: {
    backgroundColor: DOCTORS_COLORS.chipInactiveBg,
    borderWidth: 1,
    borderColor: DOCTORS_COLORS.chipInactiveBorder,
  },
  chipText: {
    fontSize: scale(14),
    fontWeight: '500',
  },
  chipTextActive: {
    color: DOCTORS_COLORS.chipActiveText,
  },
  chipTextInactive: {
    color: DOCTORS_COLORS.chipInactiveText,
  },
});
