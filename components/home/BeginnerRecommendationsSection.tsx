import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { theme } from '@/constants/theme';
import { MapPin, Clock, TrendingUp } from 'lucide-react-native';
import { beginnerMountains } from '@/data/mountains';

export default function BeginnerRecommendationsSection() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>For Beginners</Text>
        <Text style={styles.subtitle}>Perfect for your first hikes</Text>
      </View>
      
      <FlatList
        data={beginnerMountains}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.recommendationCard}>
            <Image source={{ uri: item.imageUrl }} style={styles.mountainImage} />
            <View style={styles.contentContainer}>
              <Text style={styles.mountainName}>{item.name}</Text>
              <View style={styles.detailsContainer}>
                <View style={styles.detailItem}>
                  <MapPin size={16} color={theme.colors.primary[600]} />
                  <Text style={styles.detailText}>{item.location}</Text>
                </View>
                <View style={styles.detailItem}>
                  <Clock size={16} color={theme.colors.secondary[600]} />
                  <Text style={styles.detailText}>{item.duration}</Text>
                </View>
                <View style={styles.detailItem}>
                  <TrendingUp size={16} color={theme.colors.accent[600]} />
                  <Text style={styles.detailText}>{item.elevation}m</Text>
                </View>
              </View>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
        scrollEnabled={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  header: {
    marginBottom: 12,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: theme.colors.neutral[900],
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: theme.colors.neutral[600],
  },
  listContent: {
    gap: 16,
  },
  recommendationCard: {
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    overflow: 'hidden',
    ...theme.shadows.small,
  },
  mountainImage: {
    width: 100,
    height: '100%',
    resizeMode: 'cover',
  },
  contentContainer: {
    flex: 1,
    padding: 12,
  },
  mountainName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: theme.colors.neutral[900],
    marginBottom: 4,
  },
  detailsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 8,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.neutral[100],
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  detailText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: theme.colors.neutral[800],
    marginLeft: 4,
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: theme.colors.neutral[600],
    lineHeight: 18,
  },
});
