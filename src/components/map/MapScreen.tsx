import { DoctorMapPin } from '@/components/map/DoctorMapPin';
import { MapClinicCarousel } from '@/components/map/MapClinicCarousel';
import { MapSearchBar } from '@/components/map/MapSearchBar';
import { MAP_COLORS, MAP_PIN_HEIGHT, MAP_PIN_WIDTH } from '@/constants/map';
import { MAP_BACKGROUND_IMAGE, MAP_DOCTOR_PINS } from '@/data/map-locations';
import { Image } from 'expo-image';
import { LayoutChangeEvent, useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function MapScreen() {
  const insets = useSafeAreaInsets();
  const [mapSize, setMapSize] = useState({ width: 0, height: 0 });

  const handleMapLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setMapSize({ width, height });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={{ paddingTop: insets.top }}>
        <MapSearchBar />
      </View>

      <View style={styles.mapArea} onLayout={handleMapLayout}>
        <Image
          source={{ uri: MAP_BACKGROUND_IMAGE }}
          style={StyleSheet.absoluteFill}
          contentFit="cover"
        />
        <View style={styles.mapOverlay} />

        {mapSize.width > 0 &&
          MAP_DOCTOR_PINS.map((pin) => (
            <View
              key={pin.id}
              style={[
                styles.pin,
                {
                  top: mapSize.height * pin.top,
                  left: mapSize.width * pin.left,
                },
              ]}
            >
              <DoctorMapPin image={pin.image} />
            </View>
          ))}

        <MapClinicCarousel />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MAP_COLORS.background,
  },
  mapArea: {
    flex: 1,
    position: 'relative',
  },
  mapOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(243, 244, 246, 0.35)',
  },
  pin: {
    position: 'absolute',
    transform: [
      { translateX: -MAP_PIN_WIDTH / 2 },
      { translateY: -MAP_PIN_HEIGHT / 2 },
    ],
  },
});
