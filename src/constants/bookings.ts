import { scale } from './layout';

export const BOOKINGS_HORIZONTAL_MARGIN = scale(24);
export const BOOKINGS_CONTENT_WIDTH = scale(342);
export const BOOKINGS_CARD_INNER_WIDTH = scale(310);
export const BOOKINGS_TOP_PADDING = scale(24);
export const BOOKINGS_TITLE_SIZE = scale(18);
export const BOOKINGS_TITLE_LINE_HEIGHT = scale(30);
export const BOOKINGS_TITLE_TO_TABS_GAP = scale(16);
export const BOOKINGS_TABS_HEIGHT = scale(24);
export const BOOKINGS_TABS_TO_LIST_GAP = scale(16);
export const BOOKINGS_CARD_RADIUS = scale(16);
export const BOOKINGS_CARD_PADDING = scale(16);
export const BOOKINGS_CARD_GAP = scale(16);
export const BOOKINGS_CARD_IMAGE_SIZE = scale(109);
export const BOOKINGS_CARD_IMAGE_RADIUS = scale(12);
export const BOOKINGS_CARD_IMAGE_GAP = scale(12);
export const BOOKINGS_DATE_TO_DIVIDER_GAP = scale(12);
export const BOOKINGS_DIVIDER_TO_CONTENT_GAP = scale(12);
export const BOOKINGS_NAME_TO_SPECIALTY_GAP = scale(8);
export const BOOKINGS_SPECIALTY_TO_LOCATION_GAP = scale(4);
export const BOOKINGS_CONTENT_TO_BUTTONS_GAP = scale(12);
export const BOOKINGS_BUTTON_HEIGHT = scale(48);
export const BOOKINGS_BUTTON_RADIUS = scale(24);
export const BOOKINGS_BUTTON_GAP = scale(16);
export const BOOKINGS_BUTTON_TEXT_SIZE = scale(14);
export const BOOKINGS_BUTTON_TEXT_LINE_HEIGHT = scale(24);
export const BOOKINGS_TAB_INDICATOR_HEIGHT = scale(3);

export const BOOKINGS_COLORS = {
  background: '#F9FAFB',
  cardBg: '#FFFFFF',
  title: '#1A2533',
  subtitle: '#6B7C93',
  muted: '#9CA3AF',
  border: '#E5E7EB',
  tabActive: '#1A2533',
  tabInactive: '#9CA3AF',
  secondaryBg: '#F3F4F6',
  secondaryText: '#1A2533',
  primaryBg: '#1A2533',
  primaryText: '#FFFFFF',
} as const;
