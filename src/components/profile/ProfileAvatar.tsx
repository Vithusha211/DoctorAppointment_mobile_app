import {
  PROFILE_AVATAR_EDIT_SIZE,
  PROFILE_AVATAR_SIZE,
  PROFILE_COLORS,
} from '@/constants/profile';
import { scale } from '@/constants/layout';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Pressable, StyleSheet, View } from 'react-native';

type ProfileAvatarProps = {
  imageUri?: string | null;
  onPress?: () => void;
};

export function ProfileAvatar({ imageUri, onPress }: ProfileAvatarProps) {
  return (
    <View style={styles.wrapper}>
      <Pressable onPress={onPress} style={styles.avatar}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} contentFit="cover" />
        ) : (
          <Ionicons
            name="person-outline"
            size={scale(64)}
            color={PROFILE_COLORS.placeholder}
          />
        )}
      </Pressable>

      <Pressable onPress={onPress} style={styles.editBadge}>
        <Ionicons name="pencil" size={scale(16)} color={PROFILE_COLORS.white} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: PROFILE_AVATAR_SIZE,
    height: PROFILE_AVATAR_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: PROFILE_AVATAR_SIZE,
    height: PROFILE_AVATAR_SIZE,
    borderRadius: PROFILE_AVATAR_SIZE / 2,
    backgroundColor: PROFILE_COLORS.avatarBg,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  editBadge: {
    position: 'absolute',
    right: scale(12),
    bottom: scale(8),
    width: PROFILE_AVATAR_EDIT_SIZE,
    height: PROFILE_AVATAR_EDIT_SIZE,
    borderRadius: PROFILE_AVATAR_EDIT_SIZE / 2,
    backgroundColor: PROFILE_COLORS.editBadge,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
