import { AuthBackButton } from '@/components/auth/AuthBackButton';
import { AuthHeader } from '@/components/auth/AuthHeader';
import { OtpInput } from '@/components/auth/OtpInput';
import { Button } from '@/components/common/Button';
import {
  AUTH_BUTTON_HEIGHT,
  AUTH_BUTTON_RADIUS,
  AUTH_COLORS,
  AUTH_CONTENT_WIDTH,
  AUTH_FOOTER_BOTTOM,
  AUTH_FORGOT_PASSWORD_HEADER_GAP,
  AUTH_FORGOT_PASSWORD_TOP_PADDING,
  AUTH_HORIZONTAL_MARGIN,
  AUTH_TITLE_SUBTITLE_GAP,
  AUTH_VERIFY_CODE_BUTTON_TO_RESEND_GAP,
  AUTH_VERIFY_CODE_OTP_TO_BUTTON_GAP,
  AUTH_VERIFY_CODE_SUBTITLE_TO_OTP_GAP,
} from '@/constants/auth';
import { scale } from '@/constants/layout';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function VerifyCodeScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [code, setCode] = useState('');

  const handleVerify = () => {
    router.push('/auth/reset-password');
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

        <Text style={styles.title}>Verify Code</Text>
        <Text style={styles.subtitle}>
          Enter the code we just sent you on your registered Email
        </Text>

        <View style={{ height: AUTH_VERIFY_CODE_SUBTITLE_TO_OTP_GAP }} />

        <View style={styles.otpContainer}>
          <OtpInput value={code} onChange={setCode} />
        </View>

        <View style={{ height: AUTH_VERIFY_CODE_OTP_TO_BUTTON_GAP }} />

        <Button
          title="Verify"
          width={AUTH_CONTENT_WIDTH}
          onPress={handleVerify}
          style={styles.primaryButton}
        />

        <View style={{ height: AUTH_VERIFY_CODE_BUTTON_TO_RESEND_GAP }} />

        <Pressable hitSlop={8} style={styles.resend}>
          <Text style={styles.resendText}>
            Didn&apos;t get the Code?{' '}
            <Text style={styles.resendLink}>Resend</Text>
          </Text>
        </Pressable>
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
  otpContainer: {
    width: AUTH_CONTENT_WIDTH,
    alignItems: 'center',
  },
  primaryButton: {
    height: AUTH_BUTTON_HEIGHT,
    borderRadius: AUTH_BUTTON_RADIUS,
    backgroundColor: AUTH_COLORS.primary,
  },
  resend: {
    width: AUTH_CONTENT_WIDTH,
    alignItems: 'center',
  },
  resendText: {
    color: AUTH_COLORS.subtitle,
    fontSize: scale(14),
    textAlign: 'center',
  },
  resendLink: {
    color: AUTH_COLORS.link,
    fontWeight: '600',
  },
});
