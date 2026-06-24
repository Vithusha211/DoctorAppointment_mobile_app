import { AUTH_BACK_BUTTON_SIZE, AUTH_COLORS } from '@/constants/auth';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

export function AuthBackButton() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()} hitSlop={12} style={styles.button}>
        <Ionicons
          name="arrow-back"
          size={AUTH_BACK_BUTTON_SIZE}
          color={AUTH_COLORS.title}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: AUTH_BACK_BUTTON_SIZE,
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'flex-start',
  },
});
