import { CategoriesSection } from '@/components/home/CategoriesSection';
import { HomeHeader } from '@/components/home/HomeHeader';
import { HomeSearchBar } from '@/components/home/HomeSearchBar';
import { MedicalCentersSection } from '@/components/home/MedicalCentersSection';
import { PromoBannerCarousel } from '@/components/home/PromoBannerCarousel';
import {
  HOME_COLORS,
  HOME_HORIZONTAL_MARGIN,
  HOME_LOCATION_SEARCH_GAP,
  HOME_SECTION_GAP,
  HOME_TOP_PADDING,
} from '@/constants/home';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={styles.flex}
      contentContainerStyle={[
        styles.content,
        { paddingTop: insets.top + HOME_TOP_PADDING },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <HomeHeader />

      <View style={{ height: HOME_LOCATION_SEARCH_GAP }} />

      <HomeSearchBar />

      <View style={{ height: HOME_SECTION_GAP }} />

      <PromoBannerCarousel />

      <View style={{ height: HOME_SECTION_GAP }} />

      <CategoriesSection />

      <View style={{ height: HOME_SECTION_GAP }} />

      <MedicalCentersSection />

      <View style={{ height: HOME_SECTION_GAP }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: HOME_COLORS.background,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: HOME_HORIZONTAL_MARGIN,
    paddingBottom: HOME_SECTION_GAP,
  },
});
