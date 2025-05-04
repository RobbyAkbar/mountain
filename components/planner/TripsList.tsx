import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '@/constants/theme';
import { Calendar, Clock, MapPin, ChevronRight } from 'lucide-react-native';

export default function TripsList() {
  const trips = [
    {
      id: 1,
      name: 'Mount Rainier Day Hike',
      date: 'June 15, 2025',
      location: 'Mount Rainier National Park',
      duration: '6 hours',
      status: 'upcoming',
    },
    {
      id: 2,
      name: 'Olympic Peninsula Weekend',
      date: 'July 8-10, 2025',
      location: 'Olympic National Park',
      duration: '3 days',
      status: 'planning',
    },
  ];
  
  return (
    <View style={styles.container}>
      {trips.map((trip) => (
        <TouchableOpacity key={trip.id} style={styles.tripCard}>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>
              {trip.status === 'upcoming' ? 'Upcoming' : 'Planning'}
            </Text>
          </View>
          <Text style={styles.tripName}>{trip.name}</Text>
          
          <View style={styles.tripDetails}>
            <View style={styles.detailItem}>
              <Calendar size={16} color={theme.colors.neutral[600]} />
              <Text style={styles.detailText}>{trip.date}</Text>
            </View>
            <View style={styles.detailItem}>
              <MapPin size={16} color={theme.colors.neutral[600]} />
              <Text style={styles.detailText}>{trip.location}</Text>
            </View>
            <View style={styles.detailItem}>
              <Clock size={16} color={theme.colors.neutral[600]} />
              <Text style={styles.detailText}>{trip.duration}</Text>
            </View>
          </View>
          
          <View style={styles.tripActions}>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewButton}>
              <Text style={styles.viewButtonText}>View</Text>
              <ChevronRight size={16} color={theme.colors.secondary[600]} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  tripCard: {
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    padding: 16,
    ...theme.shadows.small,
  },
  statusBadge: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.secondary[50],
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 8,
  },
  statusText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: theme.colors.secondary[700],
  },
  tripName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: theme.colors.neutral[900],
    marginBottom: 12,
  },
  tripDetails: {
    gap: 8,
    marginBottom: 16,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: theme.colors.neutral[700],
    marginLeft: 8,
  },
  tripActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: theme.colors.neutral[100],
  },
  editButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: theme.colors.neutral[700],
  },
  viewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: theme.colors.secondary[50],
  },
  viewButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: theme.colors.secondary[700],
    marginRight: 4,
  },
});
