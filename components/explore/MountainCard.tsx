import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { theme } from '@/constants/theme';
import { MapPin, ArrowRight, Mountain } from 'lucide-react-native';

interface MountainProps {
  mountain: {
    id: number;
    name: string;
    location: string;
    elevation: string;
    imageUrl: string;
    difficulty: number;
    description: string;
  };
}

export default function MountainCard({ mountain }: MountainProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: mountain.imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.header}>
          <View>
            <Text style={styles.name}>{mountain.name}</Text>
            <View style={styles.locationContainer}>
              <MapPin size={16} color={theme.colors.neutral[600]} />
              <Text style={styles.location}>{mountain.location}</Text>
            </View>
          </View>
          <View style={styles.difficultyBadge}>
            <Text style={styles.difficultyText}>
              Difficulty: {mountain.difficulty}/5
            </Text>
          </View>
        </View>
        
        <Text style={styles.description} numberOfLines={2}>
          {mountain.description}
        </Text>
        
        <View style={styles.footer}>
          <View style={styles.elevationContainer}>
            <Mountain size={16} color={theme.colors.secondary[600]} />
            <Text style={styles.elevationText}>{mountain.elevation} elevation</Text>
          </View>
          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsButtonText}>Details</Text>
            <ArrowRight size={16} color={theme.colors.primary[600]} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    borderRadius: 16,
    overflow: 'hidden',
    ...theme.shadows.medium,
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  name: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: theme.colors.neutral[900],
    marginBottom: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: theme.colors.neutral[600],
    marginLeft: 4,
  },
  difficultyBadge: {
    backgroundColor: theme.colors.primary[50],
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.primary[200],
  },
  difficultyText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: theme.colors.primary[700],
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: theme.colors.neutral[700],
    lineHeight: 20,
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  elevationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  elevationText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: theme.colors.secondary[700],
    marginLeft: 4,
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primary[50],
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  detailsButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: theme.colors.primary[600],
    marginRight: 4,
  },
});
