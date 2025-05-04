import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '@/constants/theme';
import { Calendar, Clock, TrendingUp, MapPin } from 'lucide-react-native';

interface HikingLogItemProps {
  mountain: string;
  date: string;
  duration: string;
  elevation: string;
  distance: string;
}

export default function HikingLogItem({
  mountain,
  date,
  duration,
  elevation,
  distance
}: HikingLogItemProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.mountainName}>{mountain}</Text>
      
      <View style={styles.detailsRow}>
        <View style={styles.detailItem}>
          <Calendar size={16} color={theme.colors.neutral[600]} />
          <Text style={styles.detailText}>{date}</Text>
        </View>
        <View style={styles.detailItem}>
          <Clock size={16} color={theme.colors.neutral[600]} />
          <Text style={styles.detailText}>{duration}</Text>
        </View>
      </View>
      
      <View style={styles.stats}>
        <View style={styles.statItem}>
          <TrendingUp size={16} color={theme.colors.primary[600]} />
          <Text style={styles.statText}>{elevation}</Text>
        </View>
        <View style={styles.statItem}>
          <MapPin size={16} color={theme.colors.secondary[600]} />
          <Text style={styles.statText}>{distance}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    padding: 16,
    ...theme.shadows.small,
  },
  mountainName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: theme.colors.neutral[900],
    marginBottom: 8,
  },
  detailsRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 12,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: theme.colors.neutral[600],
    marginLeft: 4,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: theme.colors.neutral[200],
    paddingTop: 12,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: theme.colors.neutral[800],
    marginLeft: 4,
  },
});
