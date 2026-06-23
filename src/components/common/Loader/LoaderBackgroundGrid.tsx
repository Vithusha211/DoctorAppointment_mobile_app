import { Image } from 'expo-image';
import { useMemo } from 'react';
import { scale } from '@/constants/layout';
import { Dimensions, StyleSheet, View } from 'react-native';
import {
  CARD_BORDER_RADIUS,
  CARD_HEIGHT,
  CARD_WIDTH,
  COLORS,
  GRID_COLUMNS,
  GRID_GAP,
  GRID_HORIZONTAL_PADDING,
} from '@/constants/layout';

type GridCell =
  | { type: 'color'; color: string }
  | { type: 'image'; uri: string };

const DOCTOR_IMAGES = [
  'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
  'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
  'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
  'https://images.unsplash.com/photo-1537368910022-70084f02642b?w=400&q=80',
  'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80',
];

const COLUMN_PATTERNS: GridCell[][] = [
  [
    { type: 'image', uri: DOCTOR_IMAGES[0] },
    { type: 'color', color: COLORS.lavender },
    { type: 'image', uri: DOCTOR_IMAGES[1] },
    { type: 'color', color: COLORS.brown },
    { type: 'image', uri: DOCTOR_IMAGES[2] },
    { type: 'color', color: COLORS.darkTeal },
  ],
  [
    { type: 'color', color: COLORS.dustyRose },
    { type: 'image', uri: DOCTOR_IMAGES[3] },
    { type: 'color', color: COLORS.sageGreen },
    { type: 'image', uri: DOCTOR_IMAGES[4] },
    { type: 'color', color: COLORS.navy },
    { type: 'image', uri: DOCTOR_IMAGES[5] },
  ],
  [
    { type: 'image', uri: DOCTOR_IMAGES[1] },
    { type: 'color', color: COLORS.navy },
    { type: 'image', uri: DOCTOR_IMAGES[4] },
    { type: 'color', color: COLORS.lavender },
    { type: 'image', uri: DOCTOR_IMAGES[0] },
    { type: 'color', color: COLORS.dustyRose },
  ],
];

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const ROWS_NEEDED = Math.ceil(SCREEN_HEIGHT / (CARD_HEIGHT + GRID_GAP)) + 3;

/** Middle column offset for masonry stagger */
const COLUMN_OFFSETS = [0, scale(36), 0];

function GridCard({ cell }: { cell: GridCell }) {
  if (cell.type === 'color') {
    return <View style={[styles.card, { backgroundColor: cell.color }]} />;
  }

  return (
    <Image
      source={{ uri: cell.uri }}
      style={styles.card}
      contentFit="cover"
      transition={200}
    />
  );
}

export function LoaderBackgroundGrid() {
  const columns = useMemo(() => {
    return Array.from({ length: GRID_COLUMNS }, (_, columnIndex) => {
      const pattern = COLUMN_PATTERNS[columnIndex % COLUMN_PATTERNS.length];
      const cells: GridCell[] = [];

      for (let row = 0; row < ROWS_NEEDED; row += 1) {
        cells.push(pattern[row % pattern.length]);
      }

      return cells;
    });
  }, []);

  return (
    <View style={styles.grid}>
      {columns.map((column, columnIndex) => (
        <View
          key={`col-${columnIndex}`}
          style={[styles.column, { marginTop: COLUMN_OFFSETS[columnIndex] }]}
        >
          {column.map((cell, rowIndex) => (
            <GridCard key={`cell-${columnIndex}-${rowIndex}`} cell={cell} />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    paddingHorizontal: GRID_HORIZONTAL_PADDING,
    gap: GRID_GAP,
  },
  column: {
    width: CARD_WIDTH,
    gap: GRID_GAP,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: CARD_BORDER_RADIUS,
    overflow: 'hidden',
  },
});
