import { LogoutModal } from '@/components/profile/LogoutModal';
import { ProfileAvatar } from '@/components/profile/ProfileAvatar';
import { ProfileMenuItem } from '@/components/profile/ProfileMenuItem';
import { ProfileTabHeader } from '@/components/profile/ProfileTabHeader';
import { HOME_TAB_BAR_HEIGHT } from '@/constants/home';
import { scale } from '@/constants/layout';
import {
  PROFILE_COLORS,
  PROFILE_CONTENT_WIDTH,
  PROFILE_HORIZONTAL_MARGIN,
  PROFILE_TAB_AVATAR_EDIT_SIZE,
  PROFILE_TAB_AVATAR_SIZE,
  PROFILE_TAB_AVATAR_TO_NAME_GAP,
  PROFILE_TAB_INFO_TO_MENU_GAP,
  PROFILE_TAB_NAME_LINE_HEIGHT,
  PROFILE_TAB_NAME_SIZE,
  PROFILE_TAB_NAME_TO_PHONE_GAP,
  PROFILE_TAB_PHONE_LINE_HEIGHT,
  PROFILE_TAB_PHONE_SIZE,
  PROFILE_TAB_TITLE_TO_AVATAR_GAP,
  PROFILE_TAB_TOP_PADDING,
} from '@/constants/profile';
import { CURRENT_USER } from '@/data/user';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function ProfileScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  return (
    <>
      <ScrollView
        style={styles.flex}
        contentContainerStyle={[
          styles.content,
          {
            paddingTop: insets.top + PROFILE_TAB_TOP_PADDING,
            paddingBottom: HOME_TAB_BAR_HEIGHT + insets.bottom + scale(16),
          },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.inner}>
          <ProfileTabHeader />

          <View style={{ height: PROFILE_TAB_TITLE_TO_AVATAR_GAP }} />

          <View style={styles.profileSection}>
            <ProfileAvatar
              imageUri={CURRENT_USER.avatar}
              size={PROFILE_TAB_AVATAR_SIZE}
              editSize={PROFILE_TAB_AVATAR_EDIT_SIZE}
              onPress={() => router.push('/auth/create-profile')}
            />

            <View style={{ height: PROFILE_TAB_AVATAR_TO_NAME_GAP }} />

            <Text style={styles.name}>{CURRENT_USER.fullName}</Text>

            <View style={{ height: PROFILE_TAB_NAME_TO_PHONE_GAP }} />

            <Text style={styles.phone}>{CURRENT_USER.phone}</Text>
          </View>

          <View style={{ height: PROFILE_TAB_INFO_TO_MENU_GAP }} />

          <View style={styles.menu}>
            <ProfileMenuItem
              icon="create-outline"
              label="Edit Profile"
              onPress={() => router.push('/auth/create-profile')}
            />
            <ProfileMenuItem
              icon="heart-outline"
              label="Favorite"
              onPress={() => router.push('/favorites')}
            />
            <ProfileMenuItem
              icon="notifications-outline"
              label="Notifications"
              onPress={() => router.push('/notifications')}
            />
            <ProfileMenuItem icon="settings-outline" label="Settings" />
            <ProfileMenuItem icon="chatbubble-ellipses-outline" label="Help and Support" />
            <ProfileMenuItem icon="shield-checkmark-outline" label="Terms and Conditions" />
            <ProfileMenuItem
              icon="log-out-outline"
              label="Log Out"
              showChevron={false}
              showDivider={false}
              onPress={() => setShowLogoutModal(true)}
            />
          </View>
        </View>
      </ScrollView>

      <LogoutModal
        visible={showLogoutModal}
        onCancel={() => setShowLogoutModal(false)}
        onConfirm={() => {
          setShowLogoutModal(false);
          router.replace('/auth/onboarding');
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: PROFILE_COLORS.white,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: PROFILE_HORIZONTAL_MARGIN,
  },
  inner: {
    width: PROFILE_CONTENT_WIDTH,
    alignItems: 'center',
  },
  profileSection: {
    alignItems: 'center',
    width: '100%',
  },
  name: {
    color: PROFILE_COLORS.title,
    fontSize: PROFILE_TAB_NAME_SIZE,
    fontWeight: '700',
    lineHeight: PROFILE_TAB_NAME_LINE_HEIGHT,
    textAlign: 'center',
  },
  phone: {
    color: PROFILE_COLORS.subtitle,
    fontSize: PROFILE_TAB_PHONE_SIZE,
    fontWeight: '400',
    lineHeight: PROFILE_TAB_PHONE_LINE_HEIGHT,
    textAlign: 'center',
  },
  menu: {
    width: '100%',
  },
});
