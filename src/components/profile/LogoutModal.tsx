import {
  PROFILE_COLORS,
  PROFILE_CONTENT_WIDTH,
  PROFILE_LOGOUT_BUTTON_GAP,
  PROFILE_LOGOUT_BUTTON_HEIGHT,
  PROFILE_LOGOUT_BUTTON_RADIUS,
  PROFILE_LOGOUT_BUTTON_TEXT_LINE_HEIGHT,
  PROFILE_LOGOUT_BUTTON_TEXT_SIZE,
  PROFILE_LOGOUT_DIVIDER_TO_MESSAGE_GAP,
  PROFILE_LOGOUT_MESSAGE_LINE_HEIGHT,
  PROFILE_LOGOUT_MESSAGE_SIZE,
  PROFILE_LOGOUT_MESSAGE_TO_BUTTONS_GAP,
  PROFILE_LOGOUT_MODAL_OVERLAY,
  PROFILE_LOGOUT_MODAL_PADDING_BOTTOM,
  PROFILE_LOGOUT_MODAL_PADDING_H,
  PROFILE_LOGOUT_MODAL_PADDING_TOP,
  PROFILE_LOGOUT_MODAL_RADIUS,
  PROFILE_LOGOUT_TITLE_LINE_HEIGHT,
  PROFILE_LOGOUT_TITLE_SIZE,
  PROFILE_LOGOUT_TITLE_TO_DIVIDER_GAP,
} from '@/constants/profile';
import { scale } from '@/constants/layout';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type LogoutModalProps = {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};

export function LogoutModal({ visible, onCancel, onConfirm }: LogoutModalProps) {
  const insets = useSafeAreaInsets();
  const buttonWidth =
    (PROFILE_CONTENT_WIDTH - PROFILE_LOGOUT_MODAL_PADDING_H * 2 - PROFILE_LOGOUT_BUTTON_GAP) / 2;

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onCancel}>
      <Pressable style={styles.overlay} onPress={onCancel}>
        <Pressable
          style={[
            styles.sheet,
            { paddingBottom: insets.bottom + PROFILE_LOGOUT_MODAL_PADDING_BOTTOM },
          ]}
          onPress={(event) => event.stopPropagation()}
        >
          <Text style={styles.title}>Logout</Text>

          <View style={{ height: PROFILE_LOGOUT_TITLE_TO_DIVIDER_GAP }} />

          <View style={styles.divider} />

          <View style={{ height: PROFILE_LOGOUT_DIVIDER_TO_MESSAGE_GAP }} />

          <Text style={styles.message}>Are you sure you want to log out?</Text>

          <View style={{ height: PROFILE_LOGOUT_MESSAGE_TO_BUTTONS_GAP }} />

          <View style={styles.actions}>
            <Pressable
              onPress={onCancel}
              style={[styles.button, styles.cancelButton, { width: buttonWidth }]}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </Pressable>

            <Pressable
              onPress={onConfirm}
              style={[styles.button, styles.logoutButton, { width: buttonWidth }]}
            >
              <Text style={styles.logoutText}>Yes, Logout</Text>
            </Pressable>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: PROFILE_LOGOUT_MODAL_OVERLAY,
    justifyContent: 'flex-end',
  },
  sheet: {
    width: '100%',
    backgroundColor: PROFILE_COLORS.white,
    borderTopLeftRadius: PROFILE_LOGOUT_MODAL_RADIUS,
    borderTopRightRadius: PROFILE_LOGOUT_MODAL_RADIUS,
    paddingTop: PROFILE_LOGOUT_MODAL_PADDING_TOP,
    paddingHorizontal: PROFILE_LOGOUT_MODAL_PADDING_H,
    alignItems: 'center',
  },
  title: {
    color: PROFILE_COLORS.title,
    fontSize: PROFILE_LOGOUT_TITLE_SIZE,
    fontWeight: '700',
    lineHeight: PROFILE_LOGOUT_TITLE_LINE_HEIGHT,
    textAlign: 'center',
  },
  divider: {
    alignSelf: 'stretch',
    height: 1,
    backgroundColor: PROFILE_COLORS.border,
  },
  message: {
    color: PROFILE_COLORS.subtitle,
    fontSize: PROFILE_LOGOUT_MESSAGE_SIZE,
    fontWeight: '400',
    lineHeight: PROFILE_LOGOUT_MESSAGE_LINE_HEIGHT,
    textAlign: 'center',
  },
  actions: {
    width: PROFILE_CONTENT_WIDTH,
    flexDirection: 'row',
    gap: PROFILE_LOGOUT_BUTTON_GAP,
  },
  button: {
    height: PROFILE_LOGOUT_BUTTON_HEIGHT,
    borderRadius: PROFILE_LOGOUT_BUTTON_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scale(8),
  },
  cancelButton: {
    backgroundColor: PROFILE_COLORS.cancelBg,
  },
  logoutButton: {
    backgroundColor: PROFILE_COLORS.logoutBg,
  },
  cancelText: {
    color: PROFILE_COLORS.cancelText,
    fontSize: PROFILE_LOGOUT_BUTTON_TEXT_SIZE,
    fontWeight: '600',
    lineHeight: PROFILE_LOGOUT_BUTTON_TEXT_LINE_HEIGHT,
  },
  logoutText: {
    color: PROFILE_COLORS.logoutText,
    fontSize: PROFILE_LOGOUT_BUTTON_TEXT_SIZE,
    fontWeight: '600',
    lineHeight: PROFILE_LOGOUT_BUTTON_TEXT_LINE_HEIGHT,
  },
});
