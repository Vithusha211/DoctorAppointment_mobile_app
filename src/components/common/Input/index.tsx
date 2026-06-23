import {
  AUTH_COLORS,
  AUTH_CONTENT_WIDTH,
  AUTH_INPUT_HEIGHT,
  AUTH_INPUT_RADIUS,
} from '@/constants/auth';
import { scale } from '@/constants/layout';
import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

type InputIcon = 'person-outline' | 'mail-outline' | 'lock-closed-outline';

type InputProps = TextInputProps & {
  icon: InputIcon;
};

export function Input({ icon, style, ...props }: InputProps) {
  return (
    <View style={styles.container}>
      <Ionicons
        name={icon}
        size={scale(18)}
        color={AUTH_COLORS.placeholder}
        style={styles.icon}
      />
      <TextInput
        placeholderTextColor={AUTH_COLORS.placeholder}
        style={[styles.input, style]}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: AUTH_CONTENT_WIDTH,
    height: AUTH_INPUT_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: AUTH_COLORS.border,
    borderRadius: AUTH_INPUT_RADIUS,
    backgroundColor: AUTH_COLORS.inputBg,
    paddingHorizontal: scale(14),
  },
  icon: {
    marginRight: scale(10),
  },
  input: {
    flex: 1,
    fontSize: scale(14),
    color: AUTH_COLORS.title,
    height: '100%',
  },
});
