import { ProfileAvatar } from '@/components/profile/ProfileAvatar';
import { ProfileField, ProfileSelectField } from '@/components/profile/ProfileField';
import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { Button } from '@/components/common/Button';
import {
  AUTH_COLORS,
  AUTH_CONTENT_WIDTH,
  AUTH_BUTTON_HEIGHT,
  AUTH_BUTTON_RADIUS,
} from '@/constants/auth';
import {
  PROFILE_AVATAR_TO_FORM_GAP,
  PROFILE_BOTTOM_MARGIN,
  PROFILE_COLORS,
  PROFILE_CONTENT_WIDTH,
  PROFILE_FORM_BUTTON_GAP,
  PROFILE_HEADER_TO_AVATAR_GAP,
  PROFILE_HEADER_TOP_PADDING,
  PROFILE_HORIZONTAL_MARGIN,
  PROFILE_INPUT_GAP,
} from '@/constants/profile';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function CreateProfileScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [fullName, setFullName] = useState('Michael Jordan');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');

  const handleSave = () => {
    router.replace('/auth/success');
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
            paddingTop: insets.top + PROFILE_HEADER_TOP_PADDING,
            paddingBottom: Math.max(insets.bottom, PROFILE_BOTTOM_MARGIN),
          },
        ]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <ProfileHeader />

        <View style={{ height: PROFILE_HEADER_TO_AVATAR_GAP }} />

        <ProfileAvatar />

        <View style={{ height: PROFILE_AVATAR_TO_FORM_GAP }} />

        <View style={styles.form}>
          <ProfileField
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
          />
          <View style={{ height: PROFILE_INPUT_GAP }} />
          <ProfileField
            placeholder="Nickname"
            value={nickname}
            onChangeText={setNickname}
          />
          <View style={{ height: PROFILE_INPUT_GAP }} />
          <ProfileField
            placeholder="name@example.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <View style={{ height: PROFILE_INPUT_GAP }} />
          <ProfileField
            placeholder="Date of Birth"
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
            leftIcon="calendar-outline"
          />
          <View style={{ height: PROFILE_INPUT_GAP }} />
          <ProfileSelectField
            placeholder="Gender"
            value={gender}
            onPress={() => setGender(gender ? '' : 'Male')}
          />
        </View>

        <View style={{ height: PROFILE_FORM_BUTTON_GAP }} />

        <Button
          title="Save"
          width={PROFILE_CONTENT_WIDTH}
          onPress={handleSave}
          style={styles.saveButton}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: PROFILE_COLORS.white,
  },
  scrollContent: {
    alignItems: 'center',
    paddingHorizontal: PROFILE_HORIZONTAL_MARGIN,
  },
  form: {
    width: PROFILE_CONTENT_WIDTH,
    alignItems: 'center',
  },
  saveButton: {
    height: AUTH_BUTTON_HEIGHT,
    borderRadius: AUTH_BUTTON_RADIUS,
    backgroundColor: AUTH_COLORS.primary,
    width: AUTH_CONTENT_WIDTH,
  },
});
