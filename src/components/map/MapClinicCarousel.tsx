import { MapClinicCard } from '@/components/map/MapClinicCard';
import {
  MAP_CLINIC_CARD_GAP,
  MAP_CLINIC_CAROUSEL_BOTTOM,
  MAP_CLINIC_CAROUSEL_MARGIN_LEFT,
} from '@/constants/map';
import { MAP_CLINICS } from '@/data/map-locations';
import { ScrollView, StyleSheet, View } from 'react-native';

export function MapClinicCarousel() {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        decelerationRate="fast"
      >
        {MAP_CLINICS.map((clinic) => (
          <MapClinicCard key={clinic.id} clinic={clinic} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: MAP_CLINIC_CAROUSEL_BOTTOM,
  },
  list: {
    paddingLeft: MAP_CLINIC_CAROUSEL_MARGIN_LEFT,
    paddingRight: MAP_CLINIC_CAROUSEL_MARGIN_LEFT,
    gap: MAP_CLINIC_CARD_GAP,
  },
});
