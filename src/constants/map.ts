import { scale } from './layout';

export const MAP_SEARCH_HEIGHT = scale(40);
export const MAP_SEARCH_ICON_SIZE = scale(24);
export const MAP_SEARCH_PADDING_H = scale(16);
export const MAP_SEARCH_PADDING_V = scale(8);
export const MAP_PIN_WIDTH = scale(44);
export const MAP_PIN_HEIGHT = scale(51);
export const MAP_CLINIC_CARD_WIDTH = scale(232);
export const MAP_CLINIC_CARD_HEIGHT = scale(252);
export const MAP_CLINIC_CARD_IMAGE_HEIGHT = scale(121);
export const MAP_CLINIC_CARD_RADIUS = scale(16);
export const MAP_CLINIC_CARD_GAP = scale(16);
export const MAP_CLINIC_CAROUSEL_MARGIN_LEFT = scale(24);
export const MAP_CLINIC_CAROUSEL_BOTTOM = scale(19);

export const MAP_COLORS = {
  background: '#F3F4F6',
  searchBg: '#FFFFFF',
  title: '#1A2533',
  subtitle: '#6B7C93',
  placeholder: '#9CA3AF',
  border: '#E5E7EB',
  pin: '#1A2533',
  star: '#F59E0B',
  cardBg: '#FFFFFF',
} as const;
