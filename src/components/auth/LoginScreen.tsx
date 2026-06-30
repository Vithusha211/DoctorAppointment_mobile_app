import { AuthHeader, AUTH_HEADER_SPACING } from '@/components/auth/AuthHeader';
import { DividerOr } from '@/components/auth/DividerOr';
import { SocialLoginButtons } from '@/components/auth/SocialLoginButtons';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import {
  AUTH_BUTTON_HEIGHT,
  AUTH_BUTTON_RADIUS,
  AUTH_COLORS,
  AUTH_CONTENT_WIDTH,
  AUTH_FOOTER_BOTTOM,
  AUTH_FORGOT_PASSWORD_FOOTER_GAP,
  AUTH_FORGOT_PASSWORD_TOP_GAP,
  AUTH_FORM_BUTTON_GAP,
  AUTH_HORIZONTAL_MARGIN,
  AUTH_INPUT_GAP,
  AUTH_OR_SECTION_HEIGHT,
  AUTH_SOCIAL_FOOTER_GAP,
  AUTH_SUBTITLE_FORM_GAP,
  AUTH_TITLE_SUBTITLE_GAP,
  AUTH_TOP_MARGIN,
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

export function LoginScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    router.replace('/(tabs)');
  };

  const handleSignUp = () => {
    router.push('/auth/register');
  };

  const handleForgotPassword = () => {
    router.push('/auth/forgot-password');
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
            paddingTop: Math.max(insets.top, AUTH_TOP_MARGIN),
            paddingBottom: Math.max(insets.bottom, AUTH_FOOTER_BOTTOM),
          },
        ]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <AuthHeader />

        <View style={{ height: AUTH_HEADER_SPACING }} />

        <Text style={styles.title}>Hi, Welcome Back!</Text>
        <Text style={styles.subtitle}>Hope you&apos;re doing fine.</Text>

        <View style={{ height: AUTH_SUBTITLE_FORM_GAP }} />

        <View style={styles.form}>
          <Input
            icon="mail-outline"
            placeholder="Your Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <View style={{ height: AUTH_INPUT_GAP }} />
          <Input
            icon="lock-closed-outline"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <View style={{ height: AUTH_FORM_BUTTON_GAP }} />

        <Button
          title="Sign In"
          width={AUTH_CONTENT_WIDTH}
          onPress={handleSignIn}
          style={styles.primaryButton}
        />

        <View style={{ height: AUTH_OR_SECTION_HEIGHT }} />

        <DividerOr />

        <View style={{ height: AUTH_OR_SECTION_HEIGHT }} />

        <SocialLoginButtons
          googleLabel="Sign In with Google"
          facebookLabel="Sign In with Facebook"
        />

        <View style={{ height: AUTH_FORGOT_PASSWORD_TOP_GAP }} />

        <Pressable hitSlop={8} style={styles.forgotPassword} onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </Pressable>

        <View style={styles.spacer} />

        <View style={{ height: AUTH_FORGOT_PASSWORD_FOOTER_GAP }} />

        <Pressable onPress={handleSignUp} hitSlop={8} style={styles.footer}>
          <Text style={styles.footerText}>
            Don&apos;t have an account yet?{' '}
            <Text style={styles.footerLink}>Sign up</Text>
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
  forgotPassword: {
    width: AUTH_CONTENT_WIDTH,
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: AUTH_COLORS.link,
    fontSize: scale(14),
    fontWeight: '600',
    textAlign: 'center',
  },
  spacer: {
    flex: 1,
    minHeight: AUTH_SOCIAL_FOOTER_GAP,
  },
  footer: {
    marginBottom: scale(8),
  },
  footerText: {
    color: AUTH_COLORS.subtitle,
    fontSize: scale(14),
    textAlign: 'center',
  },
  footerLink: {
    color: AUTH_COLORS.link,
    fontWeight: '600',
  },
});
