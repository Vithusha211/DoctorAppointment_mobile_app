import { scale, verticalScale } from './layout';

/** Horizontal margin from screen edge to content */
export const ONBOARDING_HORIZONTAL_MARGIN = scale(39.5);

/** Content block width */
export const ONBOARDING_CONTENT_WIDTH = scale(311);

/** Hero image height */
export const ONBOARDING_HERO_HEIGHT = verticalScale(560.5);

/** White card top corner radius */
export const ONBOARDING_CARD_RADIUS = scale(24);

/** Padding from white card top to title */
export const ONBOARDING_CONTENT_TOP_PADDING = scale(35);

/** Gap between title and subtitle */
export const ONBOARDING_TITLE_SUBTITLE_GAP = scale(8);

/** Gap between subtitle and primary button */
export const ONBOARDING_SUBTITLE_BUTTON_GAP = scale(72);

/** Primary button */
export const ONBOARDING_BUTTON_HEIGHT = scale(48);
export const ONBOARDING_BUTTON_RADIUS = scale(24);

/** Pagination indicator group */
export const ONBOARDING_DOT_HEIGHT = scale(8);
export const ONBOARDING_DOT_ACTIVE_WIDTH = scale(24);
export const ONBOARDING_DOT_INACTIVE_WIDTH = scale(8);
export const ONBOARDING_DOT_GAP = scale(6);

/** Gap below button area to screen bottom (includes skip) */
export const ONBOARDING_BOTTOM_SECTION = verticalScale(113.5);

/** Skip link bottom margin */
export const ONBOARDING_SKIP_BOTTOM = scale(29);

/** Gap between button and pagination */
export const ONBOARDING_BUTTON_PAGINATION_GAP = scale(24);

/** Gap between pagination and skip */
export const ONBOARDING_PAGINATION_SKIP_GAP = scale(20);

export const ONBOARDING_COLORS = {
  primary: '#1A2533',
  title: '#1A2533',
  body: '#6B7C93',
  skip: '#9CA3AF',
  white: '#FFFFFF',
  dotActive: '#1A2533',
  dotInactive: '#D1D5DB',
} as const;
