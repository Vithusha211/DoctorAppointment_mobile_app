import {
  AUTH_COLORS,
  VERIFY_CODE_CELL_GAP,
  VERIFY_CODE_CELL_RADIUS,
  VERIFY_CODE_CELL_SIZE,
  VERIFY_CODE_LENGTH,
} from '@/constants/auth';
import { scale } from '@/constants/layout';
import { useRef } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

type OtpInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export function OtpInput({ value, onChange }: OtpInputProps) {
  const inputRef = useRef<TextInput>(null);
  const digits = value.padEnd(VERIFY_CODE_LENGTH, ' ').split('').slice(0, VERIFY_CODE_LENGTH);

  const handleChange = (text: string) => {
    onChange(text.replace(/\D/g, '').slice(0, VERIFY_CODE_LENGTH));
  };

  const activeIndex =
    value.length < VERIFY_CODE_LENGTH ? value.length : -1;

  return (
    <Pressable style={styles.container} onPress={() => inputRef.current?.focus()}>
      {digits.map((digit, index) => {
        const isActive = index === activeIndex;
        const isFilled = digit.trim().length > 0;

        return (
          <View
            key={index}
            style={[
              styles.cell,
              isActive && styles.cellActive,
              isFilled && styles.cellFilled,
            ]}
          >
            {isFilled ? <Text style={styles.digit}>{digit}</Text> : null}
          </View>
        );
      })}

      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={handleChange}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        autoComplete="one-time-code"
        maxLength={VERIFY_CODE_LENGTH}
        style={styles.hiddenInput}
        caretHidden
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: VERIFY_CODE_CELL_GAP,
  },
  cell: {
    width: VERIFY_CODE_CELL_SIZE,
    height: VERIFY_CODE_CELL_SIZE,
    borderRadius: VERIFY_CODE_CELL_RADIUS,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  cellActive: {
    borderColor: AUTH_COLORS.border,
  },
  cellFilled: {
    backgroundColor: '#F3F4F6',
  },
  digit: {
    color: AUTH_COLORS.title,
    fontSize: scale(20),
    fontWeight: '600',
  },
  hiddenInput: {
    position: 'absolute',
    width: 1,
    height: 1,
    opacity: 0,
  },
});
