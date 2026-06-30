import { scale } from './layout';

export const DOCTORS_HORIZONTAL_MARGIN = scale(24);
export const DOCTORS_CONTENT_WIDTH = scale(342);
export const DOCTORS_TOP_PADDING = scale(16);
export const DOCTORS_HEADER_HEIGHT = scale(44);
export const DOCTORS_HEADER_TO_SEARCH_GAP = scale(14);
export const DOCTORS_SEARCH_TO_CHIPS_GAP = scale(24);
export const DOCTORS_CHIPS_TO_RESULTS_GAP = scale(16);
export const DOCTORS_RESULTS_TO_LIST_GAP = scale(16);
export const DOCTORS_SEARCH_HEIGHT = scale(46);
export const DOCTORS_SEARCH_RADIUS = scale(12);
export const DOCTORS_CHIP_HEIGHT = scale(37);
export const DOCTORS_CHIP_GAP = scale(8);
export const DOCTORS_CHIP_RADIUS = scale(20);
export const DOCTORS_CHIP_PADDING_H = scale(16);
export const DOCTORS_CARD_HEIGHT = scale(133);
export const DOCTORS_CARD_GAP = scale(8);
export const DOCTORS_CARD_RADIUS = scale(16);
export const DOCTORS_CARD_PADDING = scale(12);
export const DOCTORS_CARD_IMAGE_SIZE = scale(109);
export const DOCTORS_CARD_IMAGE_RADIUS = scale(12);
export const DOCTORS_CARD_IMAGE_GAP = scale(12);
export const DOCTORS_CARD_NAME_TO_SPECIALTY_GAP = scale(8);
export const DOCTORS_CARD_DETAIL_GAP = scale(4);
export const DOCTORS_CARD_HEART_SIZE = scale(20);
export const DOCTORS_CARD_NAME_FONT_SIZE = scale(16);
export const DOCTORS_CARD_SPECIALTY_FONT_SIZE = scale(14);
export const DOCTORS_CARD_DETAIL_FONT_SIZE = scale(12);
export const DOCTORS_TOTAL_FOUND = 532;

export const DOCTORS_COLORS = {
  background: '#FFFFFF',
  title: '#1A2533',
  subtitle: '#6B7C93',
  placeholder: '#9CA3AF',
  border: '#E5E7EB',
  searchBg: '#F9FAFB',
  chipActiveBg: '#1A2533',
  chipActiveText: '#FFFFFF',
  chipInactiveBg: '#FFFFFF',
  chipInactiveText: '#1A2533',
  chipInactiveBorder: '#E5E7EB',
  star: '#F59E0B',
  cardBg: '#FFFFFF',
} as const;
