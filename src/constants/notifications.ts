import { scale } from './layout';

export const NOTIFICATIONS_HORIZONTAL_MARGIN = scale(24);
export const NOTIFICATIONS_CONTENT_WIDTH = scale(342);
export const NOTIFICATIONS_TOP_PADDING = scale(16);
export const NOTIFICATIONS_HEADER_HEIGHT = scale(30);
export const NOTIFICATIONS_HEADER_TO_LIST_GAP = scale(16);
export const NOTIFICATIONS_SECTION_HEADER_HEIGHT = scale(24);
export const NOTIFICATIONS_SECTION_TO_ITEMS_GAP = scale(16);
export const NOTIFICATIONS_SECTION_GAP = scale(16);
export const NOTIFICATIONS_BOTTOM_PADDING = scale(24);

export const NOTIFICATIONS_BADGE_HEIGHT = scale(25);
export const NOTIFICATIONS_BADGE_RADIUS = scale(12);
export const NOTIFICATIONS_BADGE_PADDING_H = scale(10);
export const NOTIFICATIONS_BADGE_TEXT_SIZE = scale(12);
export const NOTIFICATIONS_BADGE_TEXT_LINE_HEIGHT = scale(16);

export const NOTIFICATIONS_TITLE_SIZE = scale(18);
export const NOTIFICATIONS_TITLE_LINE_HEIGHT = scale(30);

export const NOTIFICATIONS_SECTION_LABEL_SIZE = scale(12);
export const NOTIFICATIONS_SECTION_LABEL_LINE_HEIGHT = scale(16);
export const NOTIFICATIONS_MARK_READ_SIZE = scale(14);
export const NOTIFICATIONS_MARK_READ_LINE_HEIGHT = scale(24);

export const NOTIFICATIONS_ITEM_HEIGHT = scale(86);
export const NOTIFICATIONS_ITEM_PADDING_V = scale(8);
export const NOTIFICATIONS_ITEM_PADDING_LEFT = scale(24);
export const NOTIFICATIONS_ITEM_ICON_COLUMN_WIDTH = scale(100);
export const NOTIFICATIONS_ITEM_CONTENT_WIDTH = scale(266);
export const NOTIFICATIONS_ITEM_ICON_SIZE = scale(48);
export const NOTIFICATIONS_ITEM_GAP = scale(16);
export const NOTIFICATIONS_ITEM_TITLE_SIZE = scale(14);
export const NOTIFICATIONS_ITEM_TITLE_LINE_HEIGHT = scale(20);
export const NOTIFICATIONS_ITEM_MESSAGE_SIZE = scale(12);
export const NOTIFICATIONS_ITEM_MESSAGE_LINE_HEIGHT = scale(16);
export const NOTIFICATIONS_ITEM_TITLE_TO_MESSAGE_GAP = scale(8);
export const NOTIFICATIONS_ITEM_TIMESTAMP_SIZE = scale(12);
export const NOTIFICATIONS_ITEM_TIMESTAMP_LINE_HEIGHT = scale(16);

export const NOTIFICATIONS_COLORS = {
  background: '#FFFFFF',
  title: '#1A2533',
  subtitle: '#6B7C93',
  sectionLabel: '#9CA3AF',
  markRead: '#1A2533',
  badgeBg: '#1A2533',
  badgeText: '#FFFFFF',
  unreadBg: '#F0F4F8',
  successIconBg: '#E8F5E9',
  successIcon: '#2E7D32',
  cancelledIconBg: '#FFEBEE',
  cancelledIcon: '#C62828',
  changedIconBg: '#F3F4F6',
  changedIcon: '#6B7C93',
  border: '#E5E7EB',
} as const;
