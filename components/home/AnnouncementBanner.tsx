import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '@/constants/theme';

export default function AnnouncementBanner() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>New Safety Guidelines</Text>
        <Text style={styles.description}>
          Updated mountain safety protocols for 2024 season. Tap to learn more.
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary[50],
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    overflow: 'hidden',
  },
  content: {
    padding: 16,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: theme.colors.primary[900],
    marginBottom: 4,
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: theme.colors.primary[700],
  },
});
