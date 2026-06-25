import { scale } from './layout';

export const FAVORITES_HORIZONTAL_MARGIN = scale(24);
export const FAVORITES_CONTENT_WIDTH = scale(342);
export const FAVORITES_TOP_PADDING = scale(16);
export const FAVORITES_HEADER_HEIGHT = scale(44);
export const FAVORITES_HEADER_TO_TABS_GAP = scale(16);
export const FAVORITES_TABS_HEIGHT = scale(24);
export const FAVORITES_TAB_INDICATOR_HEIGHT = scale(3);
export const FAVORITES_TABS_TO_LIST_GAP = scale(16);
export const FAVORITES_CARD_GAP = scale(10);
export const FAVORITES_CARD_CONTENT_WIDTH = scale(221);
export const FAVORITES_BOTTOM_PADDING = scale(24);

export const FAVORITES_HOSPITAL_CARD_RADIUS = scale(16);
export const FAVORITES_HOSPITAL_IMAGE_HEIGHT = scale(120);
export const FAVORITES_HOSPITAL_CONTENT_PADDING = scale(12);
export const FAVORITES_HOSPITAL_INFO_GAP = scale(8);
export const FAVORITES_HOSPITAL_FOOTER_PADDING_V = scale(12);
export const FAVORITES_HOSPITAL_HEART_SIZE = scale(28);
export const FAVORITES_HOSPITAL_NAME_SIZE = scale(16);
export const FAVORITES_HOSPITAL_NAME_LINE_HEIGHT = scale(21);
export const FAVORITES_HOSPITAL_DETAIL_SIZE = scale(12);
export const FAVORITES_HOSPITAL_DETAIL_LINE_HEIGHT = scale(16);
export const FAVORITES_HOSPITAL_RATING_SIZE = scale(14);
export const FAVORITES_HOSPITAL_STAR_SIZE = scale(14);

export const FAVORITES_REMOVE_MODAL_RADIUS = scale(24);
export const FAVORITES_REMOVE_MODAL_OVERLAY = 'rgba(0, 0, 0, 0.45)';
export const FAVORITES_REMOVE_MODAL_PADDING_TOP = scale(24);
export const FAVORITES_REMOVE_MODAL_PADDING_H = scale(24);
export const FAVORITES_REMOVE_MODAL_PADDING_BOTTOM = scale(24);
export const FAVORITES_REMOVE_TITLE_SIZE = scale(18);
export const FAVORITES_REMOVE_TITLE_LINE_HEIGHT = scale(30);
export const FAVORITES_REMOVE_TITLE_TO_DIVIDER_GAP = scale(16);
export const FAVORITES_REMOVE_DIVIDER_TO_CARD_GAP = scale(16);
export const FAVORITES_REMOVE_CARD_TO_BUTTONS_GAP = scale(24);
export const FAVORITES_REMOVE_BUTTON_HEIGHT = scale(41);
export const FAVORITES_REMOVE_BUTTON_RADIUS = scale(24);
export const FAVORITES_REMOVE_BUTTON_GAP = scale(16);
export const FAVORITES_REMOVE_BUTTON_TEXT_SIZE = scale(14);
export const FAVORITES_REMOVE_BUTTON_TEXT_LINE_HEIGHT = scale(24);

export const FAVORITES_COLORS = {
  background: '#F9FAFB',
  title: '#1A2533',
  subtitle: '#6B7C93',
  border: '#E5E7EB',
  tabActive: '#1A2533',
  tabInactive: '#6B7C93',
  cardBg: '#FFFFFF',
  star: '#F59E0B',
  favoriteHeart: '#1A2533',
  imageHeart: '#FFFFFF',
  imageHeartBg: 'rgba(0, 0, 0, 0.35)',
  cancelBg: '#F3F4F6',
  cancelText: '#1A2533',
  removeBg: '#1A2533',
  removeText: '#FFFFFF',
} as const;
