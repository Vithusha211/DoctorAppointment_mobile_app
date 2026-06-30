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
  AUTH_SUBTITLE_FORM_GAP,
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

export function ForgetPasswordScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState('');

  const handleSendCode = () => {
    router.push('/auth/verify-code');
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

        <Text style={styles.title}>Forget Password?</Text>
        <Text style={styles.subtitle}>
          Enter your Email, we will send you a verification code.
        </Text>

        <View style={{ height: AUTH_SUBTITLE_FORM_GAP }} />

        <Input
          icon="mail-outline"
          placeholder="Your Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <View style={{ height: AUTH_FORGOT_PASSWORD_FORM_BUTTON_GAP }} />

        <Button
          title="Send Code"
          width={AUTH_CONTENT_WIDTH}
          onPress={handleSendCode}
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
  primaryButton: {
    height: AUTH_BUTTON_HEIGHT,
    borderRadius: AUTH_BUTTON_RADIUS,
    backgroundColor: AUTH_COLORS.primary,
  },
});
