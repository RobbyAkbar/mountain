import { Stack } from 'expo-router';

export default function BookingLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="registration" />
      <Stack.Screen name="payment" />
      <Stack.Screen name="confirmation" />
    </Stack>
  );
}
