import { AuthBackButton } from '@/components/auth/AuthBackButton';
import { AuthHeader } from '@/components/auth/AuthHeader';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import {
  AUTH_BUTTON_HEIGHT,
  AUTH_BUTTON_RADIUS,
  AUTH_COLORS,
  AUTH_CONTENT_WIDTH,
  AUTH_FOOTER_BOTTOM,
  AUTH_FORGOT_PASSWORD_FORM_BUTTON_GAP,
  AUTH_FORGOT_PASSWORD_HEADER_GAP,
  AUTH_FORGOT_PASSWORD_TOP_PADDING,
  AUTH_HORIZONTAL_MARGIN,
  AUTH_INPUT_GAP,
  AUTH_RESET_PASSWORD_SUBTITLE_TO_FORM_GAP,
  AUTH_TITLE_SUBTITLE_GAP,
} from '@/constants/auth';
import { scale } from '@/constants/layout';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function ResetPasswordScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = () => {
    router.replace('/auth/login');
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingTop: insets.top + AUTH_FORGOT_PASSWORD_TOP_PADDING,
            paddingBottom: Math.max(insets.bottom, AUTH_FOOTER_BOTTOM),
          },
        ]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <AuthBackButton />

        <View style={{ height: AUTH_FORGOT_PASSWORD_HEADER_GAP }} />

        <AuthHeader />

        <View style={{ height: AUTH_FORGOT_PASSWORD_HEADER_GAP }} />

        <Text style={styles.title}>Create new password</Text>
        <Text style={styles.subtitle}>
          Your new password must be different from previously used password
        </Text>

        <View style={{ height: AUTH_RESET_PASSWORD_SUBTITLE_TO_FORM_GAP }} />

        <View style={styles.form}>
          <Input
            icon="lock-closed-outline"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <View style={{ height: AUTH_INPUT_GAP }} />
          <Input
            icon="lock-closed-outline"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>

        <View style={{ height: AUTH_FORGOT_PASSWORD_FORM_BUTTON_GAP }} />

        <Button
          title="Reset Password"
          width={AUTH_CONTENT_WIDTH}
          onPress={handleResetPassword}
          style={styles.primaryButton}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: AUTH_COLORS.white,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: AUTH_HORIZONTAL_MARGIN,
  },
  title: {
    color: AUTH_COLORS.title,
    fontSize: scale(24),
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: scale(30),
    marginBottom: AUTH_TITLE_SUBTITLE_GAP,
  },
  subtitle: {
    color: AUTH_COLORS.subtitle,
    fontSize: scale(14),
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: scale(21),
    maxWidth: AUTH_CONTENT_WIDTH,
  },
  form: {
    width: AUTH_CONTENT_WIDTH,
    alignItems: 'center',
  },
  primaryButton: {
    height: AUTH_BUTTON_HEIGHT,
    borderRadius: AUTH_BUTTON_RADIUS,
    backgroundColor: AUTH_COLORS.primary,
  },
});
