import { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import { PROFILE_SUCCESS_SPINNER_SIZE } from '@/constants/profile';

const DOT_COUNT = 8;

type DotSpinnerProps = {
  size?: number;
};

export function DotSpinner({ size = PROFILE_SUCCESS_SPINNER_SIZE }: DotSpinnerProps) {
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );

    animation.start();
    return () => animation.stop();
  }, [rotation]);

  const rotate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const dotSize = size * 0.14;
  const radius = size / 2 - dotSize;

  return (
    <Animated.View
      style={[styles.container, { width: size, height: size, transform: [{ rotate }] }]}
    >
      {Array.from({ length: DOT_COUNT }, (_, index) => {
        const angle = (index / DOT_COUNT) * 2 * Math.PI - Math.PI / 2;
        const opacity = 0.25 + (index / DOT_COUNT) * 0.75;

        return (
          <View
            key={index}
            style={[
              styles.dot,
              {
                width: dotSize,
                height: dotSize,
                borderRadius: dotSize / 2,
                opacity,
                left: size / 2 + radius * Math.cos(angle) - dotSize / 2,
                top: size / 2 + radius * Math.sin(angle) - dotSize / 2,
              },
            ]}
          />
        );
      })}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  dot: {
    position: 'absolute',
    backgroundColor: '#6B7280',
  },
});
