import { DoctorCard } from '@/components/doctors/DoctorCard';
import { FavoritesHeader } from '@/components/favorites/FavoritesHeader';
import { FavoritesTabs } from '@/components/favorites/FavoritesTabs';
import { HospitalFavoriteCard } from '@/components/favorites/HospitalFavoriteCard';
import { RemoveFavoriteModal } from '@/components/favorites/RemoveFavoriteModal';
import {
  FAVORITES_BOTTOM_PADDING,
  FAVORITES_CARD_GAP,
  FAVORITES_COLORS,
  FAVORITES_CONTENT_WIDTH,
  FAVORITES_HEADER_TO_TABS_GAP,
  FAVORITES_HORIZONTAL_MARGIN,
  FAVORITES_TABS_TO_LIST_GAP,
  FAVORITES_TOP_PADDING,
} from '@/constants/favorites';
import {
  FAVORITE_DOCTOR_IDS,
  FAVORITE_HOSPITALS,
  FavoriteHospital,
  FavoriteTab,
} from '@/data/favorites';
import { DOCTORS, Doctor } from '@/data/doctors';
import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function FavoritesScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState<FavoriteTab>('doctors');
  const [favoriteDoctorIds, setFavoriteDoctorIds] = useState<Set<string>>(
    () => new Set(FAVORITE_DOCTOR_IDS),
  );
  const [favoriteHospitalIds, setFavoriteHospitalIds] = useState<Set<string>>(
    () => new Set(FAVORITE_HOSPITALS.map((hospital) => hospital.id)),
  );
  const [doctorToRemove, setDoctorToRemove] = useState<Doctor | null>(null);
  const [hospitalToRemove, setHospitalToRemove] = useState<FavoriteHospital | null>(null);

  const favoriteDoctors = useMemo(
    () =>
      FAVORITE_DOCTOR_IDS.map((id) => DOCTORS.find((doctor) => doctor.id === id))
        .filter((doctor): doctor is Doctor => doctor !== undefined)
        .filter((doctor) => favoriteDoctorIds.has(doctor.id)),
    [favoriteDoctorIds],
  );

  const favoriteHospitals = useMemo(
    () => FAVORITE_HOSPITALS.filter((hospital) => favoriteHospitalIds.has(hospital.id)),
    [favoriteHospitalIds],
  );

  const removeDoctor = (id: string) => {
    setFavoriteDoctorIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  const removeHospital = (id: string) => {
    setFavoriteHospitalIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  const listHeader = (
    <View style={styles.headerContent}>
      <FavoritesHeader />

      <View style={{ height: FAVORITES_HEADER_TO_TABS_GAP }} />

      <FavoritesTabs activeTab={activeTab} onTabChange={setActiveTab} />

      <View style={{ height: FAVORITES_TABS_TO_LIST_GAP }} />
    </View>
  );

  const listContentStyle = [
    styles.content,
    {
      paddingTop: insets.top + FAVORITES_TOP_PADDING,
      paddingBottom: insets.bottom + FAVORITES_BOTTOM_PADDING,
    },
  ];

  return (
    <View style={styles.flex}>
      {activeTab === 'doctors' ? (
        <FlatList
          style={styles.flex}
          contentContainerStyle={listContentStyle}
          data={favoriteDoctors}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={listHeader}
          renderItem={({ item }) => (
            <DoctorCard
              doctor={item}
              isFavorite
              favoriteColor={FAVORITES_COLORS.favoriteHeart}
              onToggleFavorite={() => setDoctorToRemove(item)}
              onPress={() => router.push(`/doctors/${item.id}`)}
            />
          )}
          ItemSeparatorComponent={() => <View style={{ height: FAVORITES_CARD_GAP }} />}
          ListEmptyComponent={
            <View style={styles.empty}>
              <Text style={styles.emptyText}>No favorite doctors yet</Text>
            </View>
          }
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <FlatList
          style={styles.flex}
          contentContainerStyle={listContentStyle}
          data={favoriteHospitals}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={listHeader}
          renderItem={({ item }) => (
            <HospitalFavoriteCard
              hospital={item}
              isFavorite
              onToggleFavorite={() => setHospitalToRemove(item)}
            />
          )}
          ItemSeparatorComponent={() => <View style={{ height: FAVORITES_CARD_GAP }} />}
          ListEmptyComponent={
            <View style={styles.empty}>
              <Text style={styles.emptyText}>No favorite hospitals yet</Text>
            </View>
          }
          showsVerticalScrollIndicator={false}
        />
      )}

      <RemoveFavoriteModal
        visible={doctorToRemove !== null}
        onCancel={() => setDoctorToRemove(null)}
        onConfirm={() => {
          if (doctorToRemove) {
            removeDoctor(doctorToRemove.id);
            setDoctorToRemove(null);
          }
        }}
      >
        {doctorToRemove ? (
          <DoctorCard
            doctor={doctorToRemove}
            isFavorite
            favoriteColor={FAVORITES_COLORS.favoriteHeart}
            onToggleFavorite={() => {}}
          />
        ) : null}
      </RemoveFavoriteModal>

      <RemoveFavoriteModal
        visible={hospitalToRemove !== null}
        onCancel={() => setHospitalToRemove(null)}
        onConfirm={() => {
          if (hospitalToRemove) {
            removeHospital(hospitalToRemove.id);
            setHospitalToRemove(null);
          }
        }}
      >
        {hospitalToRemove ? (
          <HospitalFavoriteCard
            hospital={hospitalToRemove}
            isFavorite
            onToggleFavorite={() => {}}
          />
        ) : null}
      </RemoveFavoriteModal>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: FAVORITES_COLORS.background,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: FAVORITES_HORIZONTAL_MARGIN,
  },
  headerContent: {
    width: FAVORITES_CONTENT_WIDTH,
  },
  empty: {
    width: FAVORITES_CONTENT_WIDTH,
    paddingVertical: 48,
    alignItems: 'center',
  },
  emptyText: {
    color: FAVORITES_COLORS.subtitle,
    fontSize: 14,
    fontWeight: '500',
  },
});
