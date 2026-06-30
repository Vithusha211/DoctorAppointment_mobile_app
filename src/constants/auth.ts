import { scale, verticalScale } from './layout';

/** Top margin to logo block */
export const AUTH_TOP_MARGIN = verticalScale(83);

/** Horizontal screen margin */
export const AUTH_HORIZONTAL_MARGIN = scale(24);

/** Form content width */
export const AUTH_CONTENT_WIDTH = scale(342);

/** Logo block height */
export const AUTH_LOGO_BLOCK_HEIGHT = scale(107);

/** Logo icon size */
export const AUTH_LOGO_SIZE = scale(40);

/** Gap after logo block */
export const AUTH_LOGO_TO_TITLE_GAP = scale(24);

/** Title to subtitle gap */
export const AUTH_TITLE_SUBTITLE_GAP = scale(8);

/** Subtitle to form gap */
export const AUTH_SUBTITLE_FORM_GAP = scale(24);

/** Input field */
export const AUTH_INPUT_HEIGHT = scale(45);
export const AUTH_INPUT_RADIUS = scale(10);
export const AUTH_INPUT_GAP = scale(20);

/** Primary button */
export const AUTH_BUTTON_HEIGHT = scale(48);
export const AUTH_BUTTON_RADIUS = scale(24);

/** Form to button gap */
export const AUTH_FORM_BUTTON_GAP = scale(24);

/** Divider section height */
export const AUTH_OR_SECTION_HEIGHT = scale(24);

/** Social login buttons */
export const AUTH_SOCIAL_BUTTON_HEIGHT = scale(41);
export const AUTH_SOCIAL_BUTTON_GAP = scale(16);
export const AUTH_SOCIAL_RADIUS = scale(10);

/** Footer bottom spacing */
export const AUTH_FOOTER_BOTTOM = scale(32);

/** Social to footer gap */
export const AUTH_SOCIAL_FOOTER_GAP = scale(24);

/** Forgot password link spacing */
export const AUTH_FORGOT_PASSWORD_TOP_GAP = scale(24);
export const AUTH_FORGOT_PASSWORD_FOOTER_GAP = scale(24);

/** Forget password screen */
export const AUTH_BACK_BUTTON_SIZE = scale(24);
export const AUTH_FORGOT_PASSWORD_TOP_PADDING = scale(16);
export const AUTH_FORGOT_PASSWORD_HEADER_GAP = scale(41);
export const AUTH_FORGOT_PASSWORD_FORM_BUTTON_GAP = scale(80);

/** Verify code screen */
export const VERIFY_CODE_LENGTH = 5;
export const VERIFY_CODE_CELL_GAP = scale(16);
export const VERIFY_CODE_CELL_SIZE =
  (AUTH_CONTENT_WIDTH - VERIFY_CODE_CELL_GAP * (VERIFY_CODE_LENGTH - 1)) /
  VERIFY_CODE_LENGTH;
export const VERIFY_CODE_CELL_RADIUS = scale(12);
export const AUTH_VERIFY_CODE_SUBTITLE_TO_OTP_GAP = scale(112);
export const AUTH_VERIFY_CODE_OTP_TO_BUTTON_GAP = scale(80);
export const AUTH_VERIFY_CODE_BUTTON_TO_RESEND_GAP = scale(72);

/** Reset password screen */
export const AUTH_RESET_PASSWORD_SUBTITLE_TO_FORM_GAP = scale(112);

export const AUTH_COLORS = {
  primary: '#1A2533',
  title: '#1A2533',
  subtitle: '#6B7C93',
  placeholder: '#9CA3AF',
  border: '#E5E7EB',
  white: '#FFFFFF',
  link: '#3B82F6',
  brandText: '#6B7C93',
  inputBg: '#FFFFFF',
} as const;
