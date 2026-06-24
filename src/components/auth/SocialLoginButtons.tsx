import {
  AUTH_COLORS,
  AUTH_CONTENT_WIDTH,
  AUTH_SOCIAL_BUTTON_GAP,
  AUTH_SOCIAL_BUTTON_HEIGHT,
  AUTH_SOCIAL_RADIUS,
} from '@/constants/auth';
import { scale } from '@/constants/layout';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type SocialLoginButtonsProps = {
  onGooglePress?: () => void;
  onFacebookPress?: () => void;
  googleLabel?: string;
  facebookLabel?: string;
};

function SocialButton({
  icon,
  iconColor,
  label,
  onPress,
}: {
  icon: 'logo-google' | 'logo-facebook';
  iconColor: string;
  label: string;
  onPress?: () => void;
}) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={icon} size={scale(18)} color={iconColor} />
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

export function SocialLoginButtons({
  onGooglePress,
  onFacebookPress,
  googleLabel = 'Continue with Google',
  facebookLabel = 'Continue with Facebook',
}: SocialLoginButtonsProps) {
  return (
    <View style={styles.container}>
      <SocialButton
        icon="logo-google"
        iconColor="#EA4335"
        label={googleLabel}
        onPress={onGooglePress}
      />
      <View style={{ height: AUTH_SOCIAL_BUTTON_GAP }} />
      <SocialButton
        icon="logo-facebook"
        iconColor="#1877F2"
        label={facebookLabel}
        onPress={onFacebookPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: AUTH_CONTENT_WIDTH,
    alignItems: 'center',
  },
  button: {
    width: AUTH_CONTENT_WIDTH,
    height: AUTH_SOCIAL_BUTTON_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: scale(10),
    borderWidth: 1,
    borderColor: AUTH_COLORS.border,
    borderRadius: AUTH_SOCIAL_RADIUS,
    backgroundColor: AUTH_COLORS.white,
  },
  pressed: {
    backgroundColor: '#F9FAFB',
  },
  label: {
    color: AUTH_COLORS.title,
    fontSize: scale(14),
    fontWeight: '500',
  },
});
