import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '@/constants/theme';
import { ChevronRight } from 'lucide-react-native';

interface LearningModuleCardProps {
  title: string;
  description: string;
  progress: number;
  icon: React.ReactNode;
  iconBgColor: string;
}

export default function LearningModuleCard({ 
  title, 
  description, 
  progress, 
  icon,
  iconBgColor
}: LearningModuleCardProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={[styles.iconContainer, { backgroundColor: iconBgColor }]}>
        {icon}
      </View>
      
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill, 
                { width: `${progress * 100}%` }
              ]} 
            />
          </View>
          <Text style={styles.progressText}>{Math.round(progress * 100)}%</Text>
        </View>
      </View>
      
      <ChevronRight size={20} color={theme.colors.neutral[400]} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    padding: 16,
    ...theme.shadows.small,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  textContainer: {
    marginBottom: 8,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: theme.colors.neutral[900],
    marginBottom: 2,
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: theme.colors.neutral[600],
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: theme.colors.neutral[200],
    borderRadius: 3,
    marginRight: 8,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: theme.colors.primary[600],
    borderRadius: 3,
  },
  progressText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: theme.colors.neutral[700],
    width: 36,
  },
});
