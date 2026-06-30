import {
  PROFILE_AVATAR_EDIT_SIZE,
  PROFILE_AVATAR_SIZE,
  PROFILE_COLORS,
} from '@/constants/profile';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Pressable, StyleSheet, View } from 'react-native';

type ProfileAvatarProps = {
  imageUri?: string | null;
  onPress?: () => void;
  size?: number;
  editSize?: number;
};

export function ProfileAvatar({
  imageUri,
  onPress,
  size = PROFILE_AVATAR_SIZE,
  editSize = PROFILE_AVATAR_EDIT_SIZE,
}: ProfileAvatarProps) {
  const placeholderIconSize = size * 0.3;
  const editIconSize = editSize * 0.47;

  return (
    <View style={[styles.wrapper, { width: size, height: size }]}>
      <Pressable
        onPress={onPress}
        style={[styles.avatar, { width: size, height: size, borderRadius: size / 2 }]}
      >
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} contentFit="cover" />
        ) : (
          <Ionicons
            name="person-outline"
            size={placeholderIconSize}
            color={PROFILE_COLORS.placeholder}
          />
        )}
      </Pressable>

      <Pressable
        onPress={onPress}
        style={[
          styles.editBadge,
          {
            right: size * 0.06,
            bottom: size * 0.04,
            width: editSize,
            height: editSize,
            borderRadius: editSize / 2,
          },
        ]}
      >
        <Ionicons name="pencil" size={editIconSize} color={PROFILE_COLORS.white} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
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
    backgroundColor: PROFILE_COLORS.editBadge,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
