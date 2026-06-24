import {
  MAP_COLORS,
  MAP_PIN_HEIGHT,
  MAP_PIN_WIDTH,
} from '@/constants/map';
import { scale } from '@/constants/layout';
import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type DoctorMapPinProps = {
  image: string;
};

export function DoctorMapPin({ image }: DoctorMapPinProps) {
  const avatarSize = scale(32);

  return (
    <View style={styles.container}>
      <View style={[styles.avatarWrap, { width: avatarSize, height: avatarSize }]}>
        <Image source={{ uri: image }} style={styles.avatar} contentFit="cover" />
      </View>
      <Svg width={MAP_PIN_WIDTH} height={MAP_PIN_HEIGHT * 0.45} viewBox="0 0 44 23">
        <Path
          d="M22 23C22 23 2 10 2 6C2 2.686 10.059 0 22 0C33.941 0 42 2.686 42 6C42 10 22 23 22 23Z"
          fill={MAP_COLORS.pin}
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: MAP_PIN_WIDTH,
    alignItems: 'center',
  },
  avatarWrap: {
    borderRadius: scale(16),
    borderWidth: 2,
    borderColor: MAP_COLORS.pin,
    overflow: 'hidden',
    marginBottom: scale(-4),
    zIndex: 1,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
});
