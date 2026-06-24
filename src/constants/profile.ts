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

export const PROFILE_COLORS = {
  primary: '#1A2533',
  title: '#1A2533',
  placeholder: '#9CA3AF',
  border: '#E5E7EB',
  white: '#FFFFFF',
  avatarBg: '#F3F4F6',
  editBadge: '#1A2533',
} as const;
