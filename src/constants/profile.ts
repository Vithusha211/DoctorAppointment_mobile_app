import { scale, verticalScale } from './layout';

export const PROFILE_HORIZONTAL_MARGIN = scale(24);
export const PROFILE_CONTENT_WIDTH = scale(342);

/** Header */
export const PROFILE_HEADER_TOP_PADDING = scale(16);
export const PROFILE_HEADER_HEIGHT = scale(46);

/** Gap header → avatar */
export const PROFILE_HEADER_TO_AVATAR_GAP = scale(24);

/** Gap avatar → form */
export const PROFILE_AVATAR_TO_FORM_GAP = scale(32);

/** Avatar */
export const PROFILE_AVATAR_SIZE = scale(210);
export const PROFILE_AVATAR_EDIT_SIZE = scale(36);

/** Form fields */
export const PROFILE_INPUT_HEIGHT = scale(45);
export const PROFILE_INPUT_RADIUS = scale(10);
export const PROFILE_INPUT_GAP = scale(20);

/** Save button */
export const PROFILE_BUTTON_HEIGHT = scale(48);
export const PROFILE_BUTTON_RADIUS = scale(24);
export const PROFILE_FORM_BUTTON_GAP = scale(24);

/** Bottom spacing */
export const PROFILE_BOTTOM_MARGIN = verticalScale(120);

/** Success modal */
export const PROFILE_SUCCESS_MODAL_WIDTH = scale(337);
export const PROFILE_SUCCESS_MODAL_RADIUS = scale(32);
export const PROFILE_SUCCESS_PADDING_TOP = scale(32);
export const PROFILE_SUCCESS_PADDING_BOTTOM = scale(32);
export const PROFILE_SUCCESS_HORIZONTAL_PADDING = scale(60.5);
export const PROFILE_SUCCESS_ICON_SIZE = scale(131);
export const PROFILE_SUCCESS_GAP_ICON_TEXT = scale(32);
export const PROFILE_SUCCESS_GAP_TEXT_SPINNER = scale(32);
export const PROFILE_SUCCESS_SPINNER_SIZE = scale(57);
export const PROFILE_SUCCESS_REDIRECT_MS = 3000;
export const PROFILE_SUCCESS_OVERLAY = 'rgba(26, 37, 51, 0.45)';

/** Profile tab */
export const PROFILE_TAB_TOP_PADDING = scale(16);
export const PROFILE_TAB_TITLE_SIZE = scale(18);
export const PROFILE_TAB_TITLE_LINE_HEIGHT = scale(30);
export const PROFILE_TAB_TITLE_TO_AVATAR_GAP = scale(16);
export const PROFILE_TAB_AVATAR_SIZE = scale(202);
export const PROFILE_TAB_AVATAR_EDIT_SIZE = scale(34);
export const PROFILE_TAB_AVATAR_TO_NAME_GAP = scale(12);
export const PROFILE_TAB_NAME_SIZE = scale(18);
export const PROFILE_TAB_NAME_LINE_HEIGHT = scale(24);
export const PROFILE_TAB_NAME_TO_PHONE_GAP = scale(4);
export const PROFILE_TAB_PHONE_SIZE = scale(14);
export const PROFILE_TAB_PHONE_LINE_HEIGHT = scale(20);
export const PROFILE_TAB_INFO_TO_MENU_GAP = scale(16);
export const PROFILE_TAB_MENU_ICON_SIZE = scale(24);
export const PROFILE_TAB_MENU_ICON_GAP = scale(13.5);
export const PROFILE_TAB_MENU_ITEM_PADDING_V = scale(12);
export const PROFILE_TAB_MENU_LABEL_SIZE = scale(16);
export const PROFILE_TAB_MENU_LABEL_LINE_HEIGHT = scale(24);
export const PROFILE_TAB_MENU_CHEVRON_SIZE = scale(18);

/** Logout modal */
export const PROFILE_LOGOUT_MODAL_RADIUS = scale(24);
export const PROFILE_LOGOUT_MODAL_OVERLAY = 'rgba(0, 0, 0, 0.45)';
export const PROFILE_LOGOUT_MODAL_PADDING_TOP = scale(24);
export const PROFILE_LOGOUT_MODAL_PADDING_H = scale(24);
export const PROFILE_LOGOUT_MODAL_PADDING_BOTTOM = scale(21);
export const PROFILE_LOGOUT_TITLE_SIZE = scale(18);
export const PROFILE_LOGOUT_TITLE_LINE_HEIGHT = scale(30);
export const PROFILE_LOGOUT_TITLE_TO_DIVIDER_GAP = scale(16);
export const PROFILE_LOGOUT_DIVIDER_TO_MESSAGE_GAP = scale(16);
export const PROFILE_LOGOUT_MESSAGE_SIZE = scale(16);
export const PROFILE_LOGOUT_MESSAGE_LINE_HEIGHT = scale(24);
export const PROFILE_LOGOUT_MESSAGE_TO_BUTTONS_GAP = scale(24);
export const PROFILE_LOGOUT_BUTTON_HEIGHT = scale(41);
export const PROFILE_LOGOUT_BUTTON_RADIUS = scale(24);
export const PROFILE_LOGOUT_BUTTON_GAP = scale(16);
export const PROFILE_LOGOUT_BUTTON_TEXT_SIZE = scale(14);
export const PROFILE_LOGOUT_BUTTON_TEXT_LINE_HEIGHT = scale(24);

export const PROFILE_COLORS = {
  primary: '#1A2533',
  title: '#1A2533',
  subtitle: '#6B7C93',
  placeholder: '#9CA3AF',
  border: '#E5E7EB',
  white: '#FFFFFF',
  avatarBg: '#F3F4F6',
  editBadge: '#1A2533',
  cancelBg: '#F3F4F6',
  cancelText: '#1A2533',
  logoutBg: '#1A2533',
  logoutText: '#FFFFFF',
} as const;
