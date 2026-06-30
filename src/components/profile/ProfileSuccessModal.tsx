import { DotSpinner } from '@/components/profile/DotSpinner';
import { SuccessShieldIcon } from '@/components/profile/SuccessShieldIcon';
import {
  PROFILE_COLORS,
  PROFILE_SUCCESS_GAP_ICON_TEXT,
  PROFILE_SUCCESS_GAP_TEXT_SPINNER,
  PROFILE_SUCCESS_HORIZONTAL_PADDING,
  PROFILE_SUCCESS_MODAL_RADIUS,
  PROFILE_SUCCESS_MODAL_WIDTH,
  PROFILE_SUCCESS_OVERLAY,
  PROFILE_SUCCESS_PADDING_BOTTOM,
  PROFILE_SUCCESS_PADDING_TOP,
  PROFILE_SUCCESS_REDIRECT_MS,
} from '@/constants/profile';
import { scale } from '@/constants/layout';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';

type ProfileSuccessModalProps = {
  visible: boolean;
};

export function ProfileSuccessModal({ visible }: ProfileSuccessModalProps) {
  const router = useRouter();

  useEffect(() => {
    if (!visible) {
      return;
    }

    const timer = setTimeout(() => {
      router.replace('/(tabs)');
    }, PROFILE_SUCCESS_REDIRECT_MS);

    return () => clearTimeout(timer);
  }, [visible, router]);

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.card}>
          <SuccessShieldIcon />

          <View style={{ height: PROFILE_SUCCESS_GAP_ICON_TEXT }} />

          <View style={styles.textBlock}>
            <Text style={styles.title}>Congratulations!</Text>
            <Text style={styles.message}>
              Your account is ready to use. You will be redirected to the Home
              Page in a few seconds...
            </Text>
          </View>

          <View style={{ height: PROFILE_SUCCESS_GAP_TEXT_SPINNER }} />

          <DotSpinner />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: PROFILE_SUCCESS_OVERLAY,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scale(27),
  },
  card: {
    width: PROFILE_SUCCESS_MODAL_WIDTH,
    backgroundColor: PROFILE_COLORS.white,
    borderRadius: PROFILE_SUCCESS_MODAL_RADIUS,
    alignItems: 'center',
    paddingTop: PROFILE_SUCCESS_PADDING_TOP,
    paddingBottom: PROFILE_SUCCESS_PADDING_BOTTOM,
    paddingHorizontal: PROFILE_SUCCESS_HORIZONTAL_PADDING,
  },
  textBlock: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    color: PROFILE_COLORS.title,
    fontSize: scale(22),
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: scale(8),
  },
  message: {
    color: '#6B7C93',
    fontSize: scale(14),
    fontWeight: '400',
    lineHeight: scale(22),
    textAlign: 'center',
  },
});
