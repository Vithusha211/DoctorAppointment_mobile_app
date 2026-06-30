import {
  HOME_COLORS,
  HOME_TAB_BAR_PADDING_H,
  HOME_TAB_BAR_PADDING_V,
  HOME_TAB_ICON_SIZE,
  HOME_TAB_ITEM_SIZE,
} from '@/constants/home';
import { scale } from '@/constants/layout';
import { Ionicons } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type TabRoute = keyof typeof TAB_ICONS;

const TAB_ICONS = {
  index: { active: 'home', inactive: 'home-outline' },
  map: { active: 'location', inactive: 'location-outline' },
  calendar: { active: 'calendar', inactive: 'calendar-outline' },
  profile: { active: 'person', inactive: 'person-outline' },
} as const;

function getTabIcon(routeName: string, isFocused: boolean) {
  const icons = TAB_ICONS[routeName as TabRoute];
  if (!icons) {
    return 'ellipse-outline';
  }

  return isFocused ? icons.active : icons.inactive;
}

export function HomeTabBar({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { paddingBottom: Math.max(insets.bottom, HOME_TAB_BAR_PADDING_V) },
      ]}
    >
      <View style={styles.tabRow}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const iconName = getTabIcon(route.name, isFocused);

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <Pressable
              key={route.key}
              onPress={onPress}
              style={styles.tab}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
            >
              <View style={[styles.iconWrap, isFocused && styles.iconWrapActive]}>
                <Ionicons
                  name={iconName as keyof typeof Ionicons.glyphMap}
                  size={HOME_TAB_ICON_SIZE}
                  color={isFocused ? HOME_COLORS.background : HOME_COLORS.tabInactive}
                />
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: HOME_COLORS.background,
    borderTopWidth: 1,
    borderTopColor: HOME_COLORS.border,
    paddingTop: HOME_TAB_BAR_PADDING_V,
    paddingHorizontal: HOME_TAB_BAR_PADDING_H,
  },
  tabRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tab: {
    width: HOME_TAB_ITEM_SIZE,
    height: HOME_TAB_ITEM_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrap: {
    width: HOME_TAB_ITEM_SIZE,
    height: HOME_TAB_ITEM_SIZE,
    borderRadius: HOME_TAB_ITEM_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapActive: {
    backgroundColor: HOME_COLORS.tabActiveBg,
  },
});
