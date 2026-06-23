import {
  ONBOARDING_BUTTON_HEIGHT,
  ONBOARDING_BUTTON_RADIUS,
  ONBOARDING_COLORS,
  ONBOARDING_CONTENT_WIDTH,
} from '@/constants/onboarding';
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';

type ButtonProps = PressableProps & {
  title: string;
  width?: number;
  style?: ViewStyle;
};

export function Button({ title, width, style, ...props }: ButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        { width: width ?? ONBOARDING_CONTENT_WIDTH, opacity: pressed ? 0.9 : 1 },
        style,
      ]}
      {...props}
    >
      <Text style={styles.label}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: ONBOARDING_BUTTON_HEIGHT,
    borderRadius: ONBOARDING_BUTTON_RADIUS,
    backgroundColor: ONBOARDING_COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: ONBOARDING_COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
});
