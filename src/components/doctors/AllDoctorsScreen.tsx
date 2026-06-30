import { AllDoctorsHeader } from '@/components/doctors/AllDoctorsHeader';
import { CategoryChips } from '@/components/doctors/CategoryChips';
import { DoctorCard } from '@/components/doctors/DoctorCard';
import { HomeSearchBar } from '@/components/home/HomeSearchBar';
import {
  DOCTORS_CARD_GAP,
  DOCTORS_CHIPS_TO_RESULTS_GAP,
  DOCTORS_COLORS,
  DOCTORS_CONTENT_WIDTH,
  DOCTORS_HEADER_TO_SEARCH_GAP,
  DOCTORS_HORIZONTAL_MARGIN,
  DOCTORS_RESULTS_TO_LIST_GAP,
  DOCTORS_SEARCH_TO_CHIPS_GAP,
  DOCTORS_TOP_PADDING,
  DOCTORS_TOTAL_FOUND,
} from '@/constants/doctors';
import { scale } from '@/constants/layout';
import {
  DOCTOR_CATEGORIES,
  DOCTORS,
  Doctor,
  DoctorCategory,
} from '@/data/doctors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type SortOption = 'default' | 'rating-desc' | 'rating-asc' | 'name';

const SORT_LABELS: Record<SortOption, string> = {
  default: 'Default',
  'rating-desc': 'Rating ↓',
  'rating-asc': 'Rating ↑',
  name: 'Name A-Z',
};

const SORT_ORDER: SortOption[] = ['default', 'rating-desc', 'rating-asc', 'name'];

function filterDoctors(
  doctors: Doctor[],
  query: string,
  category: DoctorCategory,
): Doctor[] {
  const normalizedQuery = query.trim().toLowerCase();

  return doctors.filter((doctor) => {
    const matchesCategory =
      category === 'All' || doctor.specialty.toLowerCase() === category.toLowerCase();

    if (!matchesCategory) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    return (
      doctor.name.toLowerCase().includes(normalizedQuery) ||
      doctor.specialty.toLowerCase().includes(normalizedQuery) ||
      doctor.location.toLowerCase().includes(normalizedQuery)
    );
  });
}

function sortDoctors(doctors: Doctor[], sort: SortOption): Doctor[] {
  const sorted = [...doctors];

  switch (sort) {
    case 'rating-desc':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'rating-asc':
      return sorted.sort((a, b) => a.rating - b.rating);
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return sorted;
  }
}

export function AllDoctorsScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<DoctorCategory>('All');
  const [sort, setSort] = useState<SortOption>('default');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const filteredDoctors = useMemo(
    () => sortDoctors(filterDoctors(DOCTORS, searchQuery, selectedCategory), sort),
    [searchQuery, selectedCategory, sort],
  );

  const handleToggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleCycleSort = () => {
    const currentIndex = SORT_ORDER.indexOf(sort);
    const nextIndex = (currentIndex + 1) % SORT_ORDER.length;
    setSort(SORT_ORDER[nextIndex]);
  };

  const resultsCount =
    selectedCategory === 'All' && !searchQuery.trim()
      ? DOCTORS_TOTAL_FOUND
      : filteredDoctors.length;

  const listHeader = (
    <View style={styles.headerContent}>
      <AllDoctorsHeader />

      <View style={{ height: DOCTORS_HEADER_TO_SEARCH_GAP }} />

      <HomeSearchBar value={searchQuery} onChangeText={setSearchQuery} autoFocus={false} />

      <View style={{ height: DOCTORS_SEARCH_TO_CHIPS_GAP }} />

      <CategoryChips
        categories={DOCTOR_CATEGORIES}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <View style={{ height: DOCTORS_CHIPS_TO_RESULTS_GAP }} />

      <View style={styles.resultsRow}>
        <Text style={styles.resultsCount}>
          {resultsCount} found
        </Text>
        <Pressable onPress={handleCycleSort} style={styles.sortButton} hitSlop={8}>
          <Text style={styles.sortLabel}>{SORT_LABELS[sort]}</Text>
          <Ionicons name="swap-vertical" size={scale(16)} color={DOCTORS_COLORS.title} />
        </Pressable>
      </View>

      <View style={{ height: DOCTORS_RESULTS_TO_LIST_GAP }} />
    </View>
  );

  return (
    <FlatList
      style={styles.flex}
      contentContainerStyle={[
        styles.content,
        {
          paddingTop: insets.top + DOCTORS_TOP_PADDING,
          paddingBottom: Math.max(insets.bottom, DOCTORS_TOP_PADDING),
        },
      ]}
      data={filteredDoctors}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={listHeader}
      renderItem={({ item }) => (
        <DoctorCard
          doctor={item}
          isFavorite={favorites.has(item.id)}
          onToggleFavorite={() => handleToggleFavorite(item.id)}
          onPress={() => router.push(`/doctors/${item.id}`)}
        />
      )}
      ItemSeparatorComponent={() => <View style={{ height: DOCTORS_CARD_GAP }} />}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    />
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: DOCTORS_COLORS.background,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: DOCTORS_HORIZONTAL_MARGIN,
  },
  headerContent: {
    width: DOCTORS_CONTENT_WIDTH,
  },
  resultsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  resultsCount: {
    color: DOCTORS_COLORS.title,
    fontSize: scale(16),
    fontWeight: '700',
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(4),
  },
  sortLabel: {
    color: DOCTORS_COLORS.title,
    fontSize: scale(14),
    fontWeight: '500',
  },
});
