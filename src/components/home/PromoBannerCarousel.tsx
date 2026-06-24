import {
  HOME_BANNER_HEIGHT,
  HOME_BANNER_RADIUS,
  HOME_COLORS,
  HOME_CONTENT_WIDTH,
} from '@/constants/home';
import { PROMO_BANNERS } from '@/data/promo-banners';
import { scale } from '@/constants/layout';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export function PromoBannerCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(
      event.nativeEvent.contentOffset.x / HOME_CONTENT_WIDTH,
    );
    setActiveIndex(index);
  };

  return (
    <View>
      <FlatList
        data={PROMO_BANNERS}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <View style={styles.bannerWrapper}>
            <LinearGradient
              colors={[HOME_COLORS.bannerGradientStart, HOME_COLORS.bannerGradientEnd]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.banner}
            >
              <View style={styles.textBlock}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
              </View>
              <Image source={{ uri: item.image }} style={styles.image} contentFit="cover" />
              <View style={styles.dots}>
                {PROMO_BANNERS.map((banner, index) => (
                  <View
                    key={banner.id}
                    style={[styles.dot, index === activeIndex && styles.dotActive]}
                  />
                ))}
              </View>
            </LinearGradient>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bannerWrapper: {
    width: HOME_CONTENT_WIDTH,
  },
  banner: {
    width: HOME_CONTENT_WIDTH,
    height: HOME_BANNER_HEIGHT,
    borderRadius: HOME_BANNER_RADIUS,
    flexDirection: 'row',
    overflow: 'hidden',
    paddingLeft: scale(16),
    paddingVertical: scale(16),
    position: 'relative',
  },
  textBlock: {
    flex: 1,
    justifyContent: 'center',
    paddingRight: scale(8),
  },
  title: {
    color: HOME_COLORS.background,
    fontSize: scale(16),
    fontWeight: '700',
    lineHeight: scale(22),
    marginBottom: scale(6),
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: scale(12),
    fontWeight: '400',
    lineHeight: scale(18),
  },
  image: {
    width: scale(130),
    height: '100%',
  },
  dots: {
    position: 'absolute',
    bottom: scale(12),
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: scale(6),
  },
  dot: {
    width: scale(6),
    height: scale(6),
    borderRadius: scale(3),
    backgroundColor: 'rgba(255, 255, 255, 0.45)',
  },
  dotActive: {
    backgroundColor: HOME_COLORS.background,
    width: scale(20),
    height: scale(6),
    borderRadius: scale(3),
  },
});
