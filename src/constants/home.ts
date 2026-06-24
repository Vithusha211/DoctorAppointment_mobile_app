import { scale } from './layout';

export const HOME_HORIZONTAL_MARGIN = scale(24);
export const HOME_CONTENT_WIDTH = scale(342);
export const HOME_TOP_PADDING = scale(16);
export const HOME_LOCATION_SEARCH_GAP = scale(14);
export const HOME_SEARCH_HEIGHT = scale(46);
export const HOME_SEARCH_RADIUS = scale(12);
export const HOME_BANNER_HEIGHT = scale(163);
export const HOME_BANNER_RADIUS = scale(16);
export const HOME_SECTION_GAP = scale(24);
export const HOME_SECTION_HEADER_MARGIN = scale(16);
export const HOME_CATEGORY_COLUMNS = 4;
export const HOME_CATEGORY_ROW_GAP = scale(16);
export const HOME_CATEGORY_ICON_SIZE = scale(56);
export const HOME_CATEGORY_ICON_RADIUS = scale(16);
export const HOME_MEDICAL_CARD_WIDTH = scale(232);
export const HOME_MEDICAL_CARD_IMAGE_HEIGHT = scale(121);
export const HOME_MEDICAL_CARD_RADIUS = scale(16);
export const HOME_MEDICAL_CARD_GAP = scale(16);
export const HOME_NOTIFICATION_BUTTON_SIZE = scale(34);
export const HOME_TAB_ICON_SIZE = scale(24);
export const HOME_TAB_ITEM_SIZE = scale(48);
export const HOME_TAB_BAR_PADDING_H = scale(48);
export const HOME_TAB_BAR_PADDING_V = scale(14);
export const HOME_TAB_BAR_HEIGHT =
  HOME_TAB_BAR_PADDING_V * 2 + HOME_TAB_ITEM_SIZE;

export const HOME_COLORS = {
  background: '#FFFFFF',
  title: '#1A2533',
  subtitle: '#6B7C93',
  placeholder: '#9CA3AF',
  border: '#E5E7EB',
  searchBg: '#F9FAFB',
  notificationDot: '#EF4444',
  bannerGradientStart: '#1F8A8A',
  bannerGradientEnd: '#3CB8A0',
  tabActiveBg: '#1A2533',
  tabInactive: '#9CA3AF',
  seeAll: '#3B82F6',
  cardTitle: '#1A2533',
} as const;
