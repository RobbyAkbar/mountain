import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '@/constants/theme';

interface AchievementCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  progress: number;
  completed?: boolean;
}

export default function AchievementCard({
  title,
  description,
  icon,
  progress,
  completed = false
}: AchievementCardProps) {
  return (
    <View style={[
      styles.container,
      completed && styles.completedContainer
    ]}>
      <View style={styles.iconContainer}>
        {icon}
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View 
            style={[
              styles.progressFill, 
              { width: `${progress * 100}%` },
              completed && styles.completedProgressFill
            ]} 
          />
        </View>
        <Text style={styles.progressText}>
          {completed ? 'Complete!' : `${Math.round(progress * 100)}%`}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 160,
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    padding: 16,
    ...theme.shadows.small,
  },
  completedContainer: {
    borderWidth: 2,
    borderColor: theme.colors.success[300],
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.neutral[100],
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: theme.colors.neutral[900],
    marginBottom: 4,
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: theme.colors.neutral[600],
    marginBottom: 12,
  },
  progressContainer: {
    marginTop: 'auto',
  },
  progressBar: {
    height: 6,
    backgroundColor: theme.colors.neutral[200],
    borderRadius: 3,
    marginBottom: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: theme.colors.primary[600],
    borderRadius: 3,
  },
  completedProgressFill: {
    backgroundColor: theme.colors.success[500],
  },
  progressText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: theme.colors.neutral[700],
    textAlign: 'right',
  },
});
