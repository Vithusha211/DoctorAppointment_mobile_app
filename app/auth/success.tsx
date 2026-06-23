import { StyleSheet, Text, View } from 'react-native';

export default function SuccessScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Account Created!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    color: '#1A2533',
    fontSize: 18,
    fontWeight: '600',
  },
});
