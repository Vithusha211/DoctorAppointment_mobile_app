import {
  BOOK_APPOINTMENT_CALENDAR_DAY_GAP,
  BOOK_APPOINTMENT_CALENDAR_DAY_HEIGHT,
  BOOK_APPOINTMENT_CALENDAR_DAY_RADIUS,
  BOOK_APPOINTMENT_CALENDAR_DAY_WIDTH,
  BOOK_APPOINTMENT_CALENDAR_INNER_WIDTH,
  BOOK_APPOINTMENT_CALENDAR_PADDING,
  BOOK_APPOINTMENT_CALENDAR_RADIUS,
  BOOK_APPOINTMENT_CALENDAR_WEEKDAY_HEIGHT,
  BOOK_APPOINTMENT_COLORS,
  BOOK_APPOINTMENT_CONTENT_WIDTH,
} from '@/constants/book-appointment';
import { scale } from '@/constants/layout';
import {
  CalendarDay,
  formatMonthYear,
  getMonthDays,
  isSameDay,
  WEEKDAY_LABELS,
} from '@/data/appointment-slots';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type AppointmentCalendarProps = {
  visibleMonth: Date;
  selectedDate: Date;
  onMonthChange: (month: Date) => void;
  onSelectDate: (date: Date) => void;
};

function chunkWeeks(days: CalendarDay[]) {
  const weeks: CalendarDay[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return weeks;
}

export function AppointmentCalendar({
  visibleMonth,
  selectedDate,
  onMonthChange,
  onSelectDate,
}: AppointmentCalendarProps) {
  const year = visibleMonth.getFullYear();
  const month = visibleMonth.getMonth();
  const days = getMonthDays(year, month);
  const weeks = chunkWeeks(days);

  const handlePrevMonth = () => {
    onMonthChange(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    onMonthChange(new Date(year, month + 1, 1));
  };

  return (
    <View style={styles.card}>
      <View style={styles.monthHeader}>
        <Text style={styles.monthLabel}>{formatMonthYear(year, month)}</Text>
        <View style={styles.monthNav}>
          <Pressable onPress={handlePrevMonth} hitSlop={8} style={styles.navButton}>
            <Ionicons name="chevron-back" size={scale(18)} color={BOOK_APPOINTMENT_COLORS.title} />
          </Pressable>
          <Pressable onPress={handleNextMonth} hitSlop={8} style={styles.navButton}>
            <Ionicons name="chevron-forward" size={scale(18)} color={BOOK_APPOINTMENT_COLORS.title} />
          </Pressable>
        </View>
      </View>

      <View style={styles.weekdayRow}>
        {WEEKDAY_LABELS.map((label) => (
          <Text key={label} style={styles.weekday}>
            {label}
          </Text>
        ))}
      </View>

      <View style={styles.daysGrid}>
        {weeks.map((week, weekIndex) => (
          <View key={weekIndex} style={[styles.weekRow, weekIndex === weeks.length - 1 && styles.weekRowLast]}>
            {week.map((day) => (
              <DayCell
                key={day.date.toISOString()}
                day={day}
                selected={isSameDay(day.date, selectedDate)}
                onPress={() => onSelectDate(day.date)}
              />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

type DayCellProps = {
  day: CalendarDay;
  selected: boolean;
  onPress: () => void;
};

function DayCell({ day, selected, onPress }: DayCellProps) {
  const dayNumber = day.date.getDate();

  return (
    <Pressable onPress={onPress} style={styles.dayCell}>
      <View style={[styles.dayInner, selected && styles.daySelected]}>
        <Text
          style={[
            styles.dayText,
            !day.inCurrentMonth && styles.dayOutside,
            selected && styles.dayTextSelected,
          ]}
        >
          {dayNumber}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: BOOK_APPOINTMENT_CONTENT_WIDTH,
    padding: BOOK_APPOINTMENT_CALENDAR_PADDING,
    borderRadius: BOOK_APPOINTMENT_CALENDAR_RADIUS,
    backgroundColor: BOOK_APPOINTMENT_COLORS.cardBg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: scale(2) },
    shadowOpacity: 0.06,
    shadowRadius: scale(8),
    elevation: 2,
  },
  monthHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: scale(12),
  },
  monthLabel: {
    color: BOOK_APPOINTMENT_COLORS.title,
    fontSize: scale(16),
    fontWeight: '700',
  },
  monthNav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(8),
  },
  navButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  weekdayRow: {
    width: BOOK_APPOINTMENT_CALENDAR_INNER_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: scale(8),
  },
  weekday: {
    width: BOOK_APPOINTMENT_CALENDAR_DAY_WIDTH,
    height: BOOK_APPOINTMENT_CALENDAR_WEEKDAY_HEIGHT,
    textAlign: 'center',
    color: BOOK_APPOINTMENT_COLORS.subtitle,
    fontSize: scale(12),
    fontWeight: '500',
    lineHeight: BOOK_APPOINTMENT_CALENDAR_WEEKDAY_HEIGHT,
  },
  daysGrid: {
    width: BOOK_APPOINTMENT_CALENDAR_INNER_WIDTH,
  },
  weekRow: {
    width: BOOK_APPOINTMENT_CALENDAR_INNER_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: BOOK_APPOINTMENT_CALENDAR_DAY_GAP,
  },
  weekRowLast: {
    marginBottom: 0,
  },
  dayCell: {
    width: BOOK_APPOINTMENT_CALENDAR_DAY_WIDTH,
    height: BOOK_APPOINTMENT_CALENDAR_DAY_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayInner: {
    width: BOOK_APPOINTMENT_CALENDAR_DAY_HEIGHT,
    height: BOOK_APPOINTMENT_CALENDAR_DAY_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BOOK_APPOINTMENT_CALENDAR_DAY_RADIUS,
  },
  daySelected: {
    backgroundColor: BOOK_APPOINTMENT_COLORS.selectedBg,
  },
  dayText: {
    color: BOOK_APPOINTMENT_COLORS.title,
    fontSize: scale(14),
    fontWeight: '500',
  },
  dayOutside: {
    color: BOOK_APPOINTMENT_COLORS.muted,
  },
  dayTextSelected: {
    color: BOOK_APPOINTMENT_COLORS.selectedText,
    fontWeight: '700',
  },
});
