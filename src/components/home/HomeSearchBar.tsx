import {
  HOME_COLORS,
  HOME_CONTENT_WIDTH,
  HOME_SEARCH_HEIGHT,
  HOME_SEARCH_RADIUS,
} from '@/constants/home';
import { scale } from '@/constants/layout';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';

type HomeSearchBarProps = {
  value?: string;
  onChangeText?: (text: string) => void;
  onPress?: () => void;
  autoFocus?: boolean;
};

export function HomeSearchBar({
  value,
  onChangeText,
  onPress,
  autoFocus,
}: HomeSearchBarProps) {
  const content = (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={scale(20)} color={HOME_COLORS.placeholder} />
      <TextInput
        placeholder="Search doctor..."
        placeholderTextColor={HOME_COLORS.placeholder}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        editable={!onPress}
        pointerEvents={onPress ? 'none' : 'auto'}
        autoFocus={autoFocus}
      />
    </View>
  );

  if (onPress) {
    return (
      <Pressable onPress={onPress} style={styles.pressable}>
        {content}
      </Pressable>
    );
  }

  return content;
}

const styles = StyleSheet.create({
  pressable: {
    width: HOME_CONTENT_WIDTH,
  },
  container: {
    width: HOME_CONTENT_WIDTH,
    height: HOME_SEARCH_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(10),
    paddingHorizontal: scale(14),
    borderRadius: HOME_SEARCH_RADIUS,
    borderWidth: 1,
    borderColor: HOME_COLORS.border,
    backgroundColor: HOME_COLORS.searchBg,
  },
  input: {
    flex: 1,
    fontSize: scale(14),
    color: HOME_COLORS.title,
    height: '100%',
  },
});
