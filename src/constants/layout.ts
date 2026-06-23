import { Dimensions } from 'react-native';

/** Base design width (iPhone 14 / 15 frame) */
export const DESIGN_WIDTH = 390;

/** Base design height used for vertical spacing */
export const DESIGN_HEIGHT = 844;

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export const scale = (size: number) => (SCREEN_WIDTH / DESIGN_WIDTH) * size;

export const verticalScale = (size: number) =>
  (SCREEN_HEIGHT / DESIGN_HEIGHT) * size;

/** Loader — logo block (95 × 107) */
export const LOADER_LOGO_WIDTH = scale(95);
export const LOADER_LOGO_HEIGHT = scale(107);

/** Horizontal inset to logo center: 147.5px each side on 390px frame */
export const LOADER_HORIZONTAL_INSET = scale(147.5);

/** Vertical distance from screen edge to logo vertical center: 368.5px */
export const LOADER_VERTICAL_CENTER_OFFSET = verticalScale(368.5);

/** Background card grid */
export const GRID_COLUMNS = 3;
export const GRID_GAP = scale(8);
export const GRID_HORIZONTAL_PADDING = scale(10);
export const CARD_BORDER_RADIUS = scale(20);
export const CARD_WIDTH =
  (SCREEN_WIDTH - GRID_HORIZONTAL_PADDING * 2 - GRID_GAP * (GRID_COLUMNS - 1)) /
  GRID_COLUMNS;
export const CARD_HEIGHT = scale(168);

export const COLORS = {
  background: '#0A0A0A',
  overlay: 'rgba(10, 10, 10, 0.55)',
  white: '#FFFFFF',
  logoText: '#FFFFFF',
  lavender: '#8B7FA8',
  dustyRose: '#B89090',
  sageGreen: '#7A9B7E',
  navy: '#2E3F5C',
  brown: '#8B6B55',
  darkTeal: '#3A6368',
} as const;
