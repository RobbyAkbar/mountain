import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '@/constants/theme';
import { Lightbulb as LightbulbIcon } from 'lucide-react-native';

export default function DailyTipCard() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <LightbulbIcon size={24} color={theme.colors.accent[800]} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Daily Hiking Tip</Text>
        <Text style={styles.tipText}>
          When hiking in changing weather, dress in layers. This allows you to add or remove clothing as needed to maintain a comfortable body temperature.
        </Text>
        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.moreButtonText}>More Tips</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.colors.accent[50],
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.accent[500],
  },
  iconContainer: {
    marginRight: 12,
    backgroundColor: theme.colors.accent[100],
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: theme.colors.accent[900],
    marginBottom: 4,
  },
  tipText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: theme.colors.neutral[800],
    lineHeight: 20,
    marginBottom: 8,
  },
  moreButton: {
    alignSelf: 'flex-start',
  },
  moreButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: theme.colors.accent[700],
    textDecorationLine: 'underline',
  },
});
