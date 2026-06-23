import { AUTH_COLORS } from '@/constants/auth';
import { scale } from '@/constants/layout';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <Pressable onPress={() => router.push('/auth/register')}>
        <Text style={styles.link}>Create Account</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    gap: scale(16),
  },
  text: {
    color: AUTH_COLORS.title,
    fontSize: 18,
  },
  link: {
    color: AUTH_COLORS.link,
    fontSize: scale(14),
    fontWeight: '600',
  },
});
