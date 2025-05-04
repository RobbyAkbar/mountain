import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { theme } from '@/constants/theme';
import { Calendar, Users, Clock, Tag } from 'lucide-react-native';

const upcomingTrips = [
  {
    id: 1,
    title: 'Mount Rainier Summer Expedition',
    date: 'July 15-17, 2025',
    slots: '5 slots left',
    price: '$299',
    image: 'https://images.pexels.com/photos/1647972/pexels-photo-1647972.jpeg',
    isPromoted: true,
  },
  {
    id: 2,
    title: 'Olympic Mountains Weekend Trek',
    date: 'July 22-24, 2025',
    slots: '8 slots left',
    price: '$249',
    image: 'https://images.pexels.com/photos/2440024/pexels-photo-2440024.jpeg',
    isPromoted: false,
  },
];

export default function UpcomingTripsSection() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Upcoming Trips</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {upcomingTrips.map((trip) => (
          <TouchableOpacity key={trip.id} style={styles.tripCard}>
            <Image source={{ uri: trip.image }} style={styles.tripImage} />
            {trip.isPromoted && (
              <View style={styles.promotedBadge}>
                <Text style={styles.promotedText}>Special Offer</Text>
              </View>
            )}
            <View style={styles.tripContent}>
              <Text style={styles.tripTitle}>{trip.title}</Text>
              <View style={styles.tripDetails}>
                <View style={styles.detailRow}>
                  <Calendar size={16} color={theme.colors.neutral[600]} />
                  <Text style={styles.detailText}>{trip.date}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Users size={16} color={theme.colors.neutral[600]} />
                  <Text style={styles.detailText}>{trip.slots}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Tag size={16} color={theme.colors.primary[600]} />
                  <Text style={styles.priceText}>{trip.price}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.bookButton}>
                <Text style={styles.bookButtonText}>Book Now</Text>
              </TouchableOpacity>
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
  viewAllText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: theme.colors.primary[600],
  },
  scrollContent: {
    paddingLeft: 16,
    paddingRight: 8,
    gap: 16,
  },
  tripCard: {
    width: 300,
    backgroundColor: theme.colors.white,
    borderRadius: 16,
    overflow: 'hidden',
    ...theme.shadows.medium,
  },
  tripImage: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  promotedBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: theme.colors.accent[500],
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  promotedText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: theme.colors.white,
  },
  tripContent: {
    padding: 16,
  },
  tripTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: theme.colors.neutral[900],
    marginBottom: 8,
  },
  tripDetails: {
    gap: 8,
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: theme.colors.neutral[600],
  },
  priceText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: theme.colors.primary[600],
  },
  bookButton: {
    backgroundColor: theme.colors.primary[600],
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  bookButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: theme.colors.white,
  },
});
