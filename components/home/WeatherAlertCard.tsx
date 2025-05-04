import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '@/constants/theme';
import { CloudRain, TriangleAlert as AlertTriangle } from 'lucide-react-native';

export default function WeatherAlertCard() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <CloudRain size={20} color={theme.colors.info[700]} />
        </View>
        <Text style={styles.title}>Weather Alert</Text>
        <TouchableOpacity style={styles.closeButton}>
          <Text style={styles.closeButtonText}>✕</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.alertIconContainer}>
          <AlertTriangle size={20} color={theme.colors.warning[700]} />
        </View>
        <Text style={styles.alertText}>
          Heavy rainfall expected in Olympic Mountains region (May 28-29). Consider changing your hiking plans if heading to this area.
        </Text>
      </View>
      <TouchableOpacity style={styles.detailsButton}>
        <Text style={styles.detailsButtonText}>View Forecast</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.info[50],
    borderRadius: 12,
    margin: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: theme.colors.info[200],
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.info[600],
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  iconContainer: {
    marginRight: 8,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: theme.colors.info[700],
    flex: 1,
  },
  closeButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: theme.colors.info[700],
  },
  content: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'flex-start',
  },
  alertIconContainer: {
    marginRight: 12,
    marginTop: 2,
  },
  alertText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: theme.colors.neutral[800],
    flex: 1,
    lineHeight: 20,
  },
  detailsButton: {
    borderTopWidth: 1,
    borderTopColor: theme.colors.info[200],
    padding: 12,
    alignItems: 'center',
    backgroundColor: theme.colors.info[100],
  },
  detailsButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: theme.colors.info[800],
  },
});
