import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { theme } from '@/constants/theme';
import { ChevronRight, Star } from 'lucide-react-native';
import { popularMountains } from '@/data/mountains';

export default function PopularMountainsSection() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Popular Mountains</Text>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View All</Text>
          <ChevronRight size={16} color={theme.colors.primary[600]} />
        </TouchableOpacity>
      </View>
      
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {popularMountains.map((mountain) => (
          <TouchableOpacity key={mountain.id} style={styles.mountainCard}>
            <Image source={{ uri: mountain.imageUrl }} style={styles.mountainImage} />
            <View style={styles.contentContainer}>
              <Text style={styles.mountainName}>{mountain.name}</Text>
              <Text style={styles.mountainLocation}>{mountain.location}</Text>
              <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>{mountain.elevation}m</Text>
                  <Text style={styles.statLabel}>Elevation</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>{mountain.difficulty}/5</Text>
                  <Text style={styles.statLabel}>Difficulty</Text>
                </View>
                <View style={styles.ratingContainer}>
                  <Star size={16} color={theme.colors.accent[500]} fill={theme.colors.accent[500]} />
                  <Text style={styles.ratingText}>{mountain.rating}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: theme.colors.neutral[900],
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: theme.colors.primary[600],
    marginRight: 4,
  },
  scrollContent: {
    paddingLeft: 16,
    paddingRight: 8,
    gap: 16,
  },
  mountainCard: {
    width: 280,
    backgroundColor: theme.colors.white,
    borderRadius: 16,
    overflow: 'hidden',
    ...theme.shadows.medium,
  },
  mountainImage: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: 12,
  },
  mountainName: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: theme.colors.neutral[900],
  },
  mountainLocation: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: theme.colors.neutral[600],
    marginBottom: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  statItem: {},
  statValue: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: theme.colors.neutral[800],
  },
  statLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: theme.colors.neutral[500],
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.neutral[100],
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  ratingText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: theme.colors.neutral[800],
    marginLeft: 4,
  },
});
