import {
  PROFILE_COLORS,
  PROFILE_CONTENT_WIDTH,
  PROFILE_INPUT_HEIGHT,
  PROFILE_INPUT_RADIUS,
} from '@/constants/profile';
import { scale } from '@/constants/layout';
import { Ionicons } from '@expo/vector-icons';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

type IconName = React.ComponentProps<typeof Ionicons>['name'];

type ProfileFieldProps = TextInputProps & {
  leftIcon?: IconName;
  rightIcon?: IconName;
  onPress?: () => void;
};

export function ProfileField({
  leftIcon,
  rightIcon,
  onPress,
  editable = true,
  style,
  ...props
}: ProfileFieldProps) {
  const Container = onPress ? Pressable : View;

  return (
    <Container
      onPress={onPress}
      style={[styles.container, !editable && styles.pressable]}
    >
      {leftIcon ? (
        <Ionicons
          name={leftIcon}
          size={scale(18)}
          color={PROFILE_COLORS.placeholder}
          style={styles.leftIcon}
        />
      ) : null}

      <TextInput
        editable={editable && !onPress}
        pointerEvents={onPress ? 'none' : 'auto'}
        placeholderTextColor={PROFILE_COLORS.placeholder}
        style={[styles.input, style]}
        {...props}
      />

      {rightIcon ? (
        <Ionicons
          name={rightIcon}
          size={scale(18)}
          color={PROFILE_COLORS.placeholder}
        />
      ) : null}
    </Container>
  );
}

export function ProfileSelectField({
  placeholder,
  value,
  onPress,
}: {
  placeholder: string;
  value?: string;
  onPress?: () => void;
}) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text
        style={[styles.selectText, !value && styles.placeholder]}
        numberOfLines={1}
      >
        {value || placeholder}
      </Text>
      <Ionicons
        name="chevron-down"
        size={scale(18)}
        color={PROFILE_COLORS.placeholder}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: PROFILE_CONTENT_WIDTH,
    height: PROFILE_INPUT_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: PROFILE_COLORS.border,
    borderRadius: PROFILE_INPUT_RADIUS,
    backgroundColor: PROFILE_COLORS.white,
    paddingHorizontal: scale(14),
  },
  pressable: {
    justifyContent: 'space-between',
  },
  leftIcon: {
    marginRight: scale(10),
  },
  input: {
    flex: 1,
    fontSize: scale(14),
    color: PROFILE_COLORS.title,
    height: '100%',
  },
  selectText: {
    flex: 1,
    fontSize: scale(14),
    color: PROFILE_COLORS.title,
  },
  placeholder: {
    color: PROFILE_COLORS.placeholder,
  },
});
