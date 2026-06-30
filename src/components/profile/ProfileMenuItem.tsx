import {
  PROFILE_COLORS,
  PROFILE_CONTENT_WIDTH,
  PROFILE_TAB_MENU_CHEVRON_SIZE,
  PROFILE_TAB_MENU_ICON_GAP,
  PROFILE_TAB_MENU_ICON_SIZE,
  PROFILE_TAB_MENU_ITEM_PADDING_V,
  PROFILE_TAB_MENU_LABEL_LINE_HEIGHT,
  PROFILE_TAB_MENU_LABEL_SIZE,
} from '@/constants/profile';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type ProfileMenuItemProps = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  showChevron?: boolean;
  showDivider?: boolean;
  onPress?: () => void;
};

export function ProfileMenuItem({
  icon,
  label,
  showChevron = true,
  showDivider = true,
  onPress,
}: ProfileMenuItemProps) {
  return (
    <View style={styles.wrapper}>
      <Pressable onPress={onPress} style={styles.row}>
        <Ionicons
          name={icon}
          size={PROFILE_TAB_MENU_ICON_SIZE}
          color={PROFILE_COLORS.placeholder}
        />
        <Text style={styles.label}>{label}</Text>
        {showChevron ? (
          <Ionicons
            name="chevron-forward"
            size={PROFILE_TAB_MENU_CHEVRON_SIZE}
            color={PROFILE_COLORS.placeholder}
          />
        ) : (
          <View style={styles.chevronPlaceholder} />
        )}
      </Pressable>
      {showDivider ? <View style={styles.divider} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: PROFILE_CONTENT_WIDTH,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: PROFILE_TAB_MENU_ITEM_PADDING_V,
    gap: PROFILE_TAB_MENU_ICON_GAP,
  },
  label: {
    flex: 1,
    color: PROFILE_COLORS.title,
    fontSize: PROFILE_TAB_MENU_LABEL_SIZE,
    fontWeight: '400',
    lineHeight: PROFILE_TAB_MENU_LABEL_LINE_HEIGHT,
  },
  chevronPlaceholder: {
    width: PROFILE_TAB_MENU_CHEVRON_SIZE,
  },
  divider: {
    height: 1,
    backgroundColor: PROFILE_COLORS.border,
  },
});
