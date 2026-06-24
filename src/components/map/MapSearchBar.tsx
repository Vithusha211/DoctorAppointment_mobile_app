import {
  MAP_COLORS,
  MAP_SEARCH_HEIGHT,
  MAP_SEARCH_ICON_SIZE,
  MAP_SEARCH_PADDING_H,
} from '@/constants/map';
import { scale } from '@/constants/layout';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TextInput, View } from 'react-native';

export function MapSearchBar() {
  return (
    <View style={styles.container}>
      <Ionicons
        name="search-outline"
        size={MAP_SEARCH_ICON_SIZE}
        color={MAP_COLORS.placeholder}
      />
      <TextInput
        placeholder="Search Doctor, Hospital"
        placeholderTextColor={MAP_COLORS.placeholder}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: MAP_SEARCH_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(10),
    paddingHorizontal: MAP_SEARCH_PADDING_H,
    backgroundColor: MAP_COLORS.searchBg,
    borderBottomWidth: 1,
    borderBottomColor: MAP_COLORS.border,
  },
  input: {
    flex: 1,
    fontSize: scale(14),
    color: MAP_COLORS.title,
    height: '100%',
  },
});
