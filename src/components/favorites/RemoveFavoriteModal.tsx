import {
  FAVORITES_COLORS,
  FAVORITES_CONTENT_WIDTH,
  FAVORITES_REMOVE_BUTTON_GAP,
  FAVORITES_REMOVE_BUTTON_HEIGHT,
  FAVORITES_REMOVE_BUTTON_RADIUS,
  FAVORITES_REMOVE_BUTTON_TEXT_LINE_HEIGHT,
  FAVORITES_REMOVE_BUTTON_TEXT_SIZE,
  FAVORITES_REMOVE_CARD_TO_BUTTONS_GAP,
  FAVORITES_REMOVE_DIVIDER_TO_CARD_GAP,
  FAVORITES_REMOVE_MODAL_OVERLAY,
  FAVORITES_REMOVE_MODAL_PADDING_BOTTOM,
  FAVORITES_REMOVE_MODAL_PADDING_H,
  FAVORITES_REMOVE_MODAL_PADDING_TOP,
  FAVORITES_REMOVE_MODAL_RADIUS,
  FAVORITES_REMOVE_TITLE_LINE_HEIGHT,
  FAVORITES_REMOVE_TITLE_SIZE,
  FAVORITES_REMOVE_TITLE_TO_DIVIDER_GAP,
} from '@/constants/favorites';
import { scale } from '@/constants/layout';
import { Modal, Pressable, StyleSheet, Text, View, type ReactNode } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type RemoveFavoriteModalProps = {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  children: ReactNode;
};

export function RemoveFavoriteModal({
  visible,
  onCancel,
  onConfirm,
  children,
}: RemoveFavoriteModalProps) {
  const insets = useSafeAreaInsets();
  const buttonWidth =
    (FAVORITES_CONTENT_WIDTH - FAVORITES_REMOVE_MODAL_PADDING_H * 2 - FAVORITES_REMOVE_BUTTON_GAP) /
    2;

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onCancel}>
      <Pressable style={styles.overlay} onPress={onCancel}>
        <Pressable
          style={[styles.sheet, { paddingBottom: insets.bottom + FAVORITES_REMOVE_MODAL_PADDING_BOTTOM }]}
          onPress={(event) => event.stopPropagation()}
        >
          <Text style={styles.title}>Remove from Favorites?</Text>

          <View style={{ height: FAVORITES_REMOVE_TITLE_TO_DIVIDER_GAP }} />

          <View style={styles.divider} />

          <View style={{ height: FAVORITES_REMOVE_DIVIDER_TO_CARD_GAP }} />

          <View style={styles.preview}>{children}</View>

          <View style={{ height: FAVORITES_REMOVE_CARD_TO_BUTTONS_GAP }} />

          <View style={styles.actions}>
            <Pressable onPress={onCancel} style={[styles.button, styles.cancelButton, { width: buttonWidth }]}>
              <Text style={styles.cancelText}>Cancel</Text>
            </Pressable>

            <Pressable onPress={onConfirm} style={[styles.button, styles.removeButton, { width: buttonWidth }]}>
              <Text style={styles.removeText}>Yes, Remove</Text>
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
    backgroundColor: FAVORITES_REMOVE_MODAL_OVERLAY,
    justifyContent: 'flex-end',
  },
  sheet: {
    width: '100%',
    backgroundColor: FAVORITES_COLORS.cardBg,
    borderTopLeftRadius: FAVORITES_REMOVE_MODAL_RADIUS,
    borderTopRightRadius: FAVORITES_REMOVE_MODAL_RADIUS,
    paddingTop: FAVORITES_REMOVE_MODAL_PADDING_TOP,
    paddingHorizontal: FAVORITES_REMOVE_MODAL_PADDING_H,
    alignItems: 'center',
  },
  title: {
    color: FAVORITES_COLORS.title,
    fontSize: FAVORITES_REMOVE_TITLE_SIZE,
    fontWeight: '700',
    lineHeight: FAVORITES_REMOVE_TITLE_LINE_HEIGHT,
    textAlign: 'center',
  },
  divider: {
    alignSelf: 'stretch',
    height: 1,
    backgroundColor: FAVORITES_COLORS.border,
  },
  preview: {
    width: FAVORITES_CONTENT_WIDTH,
    alignItems: 'center',
  },
  actions: {
    width: FAVORITES_CONTENT_WIDTH,
    flexDirection: 'row',
    gap: FAVORITES_REMOVE_BUTTON_GAP,
  },
  button: {
    height: FAVORITES_REMOVE_BUTTON_HEIGHT,
    borderRadius: FAVORITES_REMOVE_BUTTON_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scale(8),
  },
  cancelButton: {
    backgroundColor: FAVORITES_COLORS.cancelBg,
  },
  removeButton: {
    backgroundColor: FAVORITES_COLORS.removeBg,
  },
  cancelText: {
    color: FAVORITES_COLORS.cancelText,
    fontSize: FAVORITES_REMOVE_BUTTON_TEXT_SIZE,
    fontWeight: '600',
    lineHeight: FAVORITES_REMOVE_BUTTON_TEXT_LINE_HEIGHT,
  },
  removeText: {
    color: FAVORITES_COLORS.removeText,
    fontSize: FAVORITES_REMOVE_BUTTON_TEXT_SIZE,
    fontWeight: '600',
    lineHeight: FAVORITES_REMOVE_BUTTON_TEXT_LINE_HEIGHT,
  },
});
