import {
  DOCTOR_DETAILS_COLORS,
  DOCTOR_DETAILS_CONTENT_WIDTH,
  DOCTOR_DETAILS_STAT_ICON_RADIUS,
  DOCTOR_DETAILS_STAT_ICON_SIZE,
  DOCTOR_DETAILS_STAT_ICON_TO_TEXT_GAP,
  DOCTOR_DETAILS_STAT_LABEL_FONT_SIZE,
  DOCTOR_DETAILS_STAT_LINE_HEIGHT,
  DOCTOR_DETAILS_STAT_VALUE_FONT_SIZE,
} from '@/constants/doctor-details';
import { DoctorDetail } from '@/data/doctors';
import { scale } from '@/constants/layout';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

type DoctorStatsRowProps = {
  doctor: DoctorDetail;
};

type StatItem = {
  icon: keyof typeof Ionicons.glyphMap;
  value: string;
  label: string;
};

export function DoctorStatsRow({ doctor }: DoctorStatsRowProps) {
  const stats: StatItem[] = [
    { icon: 'people-outline', value: doctor.patients, label: 'patients' },
    { icon: 'ribbon-outline', value: doctor.experience, label: 'experience' },
    {
      icon: 'star-outline',
      value: Number.isInteger(doctor.rating) ? String(doctor.rating) : doctor.rating.toFixed(1),
      label: 'rating',
    },
    {
      icon: 'chatbubble-outline',
      value: doctor.reviews.toLocaleString('en-US'),
      label: 'reviews',
    },
  ];

  return (
    <View style={styles.row}>
      {stats.map((stat) => (
        <View key={stat.label} style={styles.item}>
          <View style={styles.iconCircle}>
            <Ionicons name={stat.icon} size={scale(20)} color={DOCTOR_DETAILS_COLORS.title} />
          </View>
          <View style={{ height: DOCTOR_DETAILS_STAT_ICON_TO_TEXT_GAP }} />
          <Text style={styles.statText}>
            <Text style={styles.value}>{stat.value} </Text>
            <Text style={styles.label}>{stat.label}</Text>
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    width: DOCTOR_DETAILS_CONTENT_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    flex: 1,
    alignItems: 'center',
  },
  iconCircle: {
    width: DOCTOR_DETAILS_STAT_ICON_SIZE,
    height: DOCTOR_DETAILS_STAT_ICON_SIZE,
    borderRadius: DOCTOR_DETAILS_STAT_ICON_RADIUS,
    backgroundColor: DOCTOR_DETAILS_COLORS.statIconBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statText: {
    textAlign: 'center',
    lineHeight: DOCTOR_DETAILS_STAT_LINE_HEIGHT,
  },
  value: {
    color: DOCTOR_DETAILS_COLORS.title,
    fontSize: DOCTOR_DETAILS_STAT_VALUE_FONT_SIZE,
    fontWeight: '700',
  },
  label: {
    color: DOCTOR_DETAILS_COLORS.subtitle,
    fontSize: DOCTOR_DETAILS_STAT_LABEL_FONT_SIZE,
    fontWeight: '400',
  },
});
