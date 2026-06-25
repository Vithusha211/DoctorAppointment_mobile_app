import {
  FAVORITES_COLORS,
  FAVORITES_CONTENT_WIDTH,
  FAVORITES_TAB_INDICATOR_HEIGHT,
  FAVORITES_TABS_HEIGHT,
} from '@/constants/favorites';
import { FAVORITE_TABS, FavoriteTab } from '@/data/favorites';
import { scale } from '@/constants/layout';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type FavoritesTabsProps = {
  activeTab: FavoriteTab;
  onTabChange: (tab: FavoriteTab) => void;
};

export function FavoritesTabs({ activeTab, onTabChange }: FavoritesTabsProps) {
  return (
    <View style={styles.container}>
      {FAVORITE_TABS.map((tab) => {
        const isActive = tab.id === activeTab;

        return (
          <Pressable key={tab.id} onPress={() => onTabChange(tab.id)} style={styles.tab}>
            <Text style={[styles.tabText, isActive ? styles.tabTextActive : styles.tabTextInactive]}>
              {tab.label}
            </Text>
            {isActive ? <View style={styles.indicator} /> : <View style={styles.indicatorPlaceholder} />}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: FAVORITES_CONTENT_WIDTH,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: FAVORITES_TABS_HEIGHT + FAVORITES_TAB_INDICATOR_HEIGHT,
    borderBottomWidth: 1,
    borderBottomColor: FAVORITES_COLORS.border,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
  },
  tabText: {
    fontSize: scale(14),
    fontWeight: '600',
    lineHeight: FAVORITES_TABS_HEIGHT,
    marginBottom: scale(6),
  },
  tabTextActive: {
    color: FAVORITES_COLORS.tabActive,
  },
  tabTextInactive: {
    color: FAVORITES_COLORS.tabInactive,
  },
  indicator: {
    width: scale(72),
    height: FAVORITES_TAB_INDICATOR_HEIGHT,
    backgroundColor: FAVORITES_COLORS.tabActive,
    borderRadius: FAVORITES_TAB_INDICATOR_HEIGHT / 2,
  },
  indicatorPlaceholder: {
    height: FAVORITES_TAB_INDICATOR_HEIGHT,
  },
});
