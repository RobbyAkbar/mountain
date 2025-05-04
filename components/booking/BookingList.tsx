import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '@/constants/theme';
import { Calendar, Users, Clock, Tag, CircleAlert as AlertCircle } from 'lucide-react-native';
import { useRouter } from 'expo-router';

const bookings = [
  {
    id: 1,
    tripName: 'Mount Rainier Summit Trek',
    date: 'July 15-17, 2025',
    participants: 2,
    status: 'confirmed',
    totalAmount: '$598',
    paymentStatus: 'paid',
  },
  {
    id: 2,
    tripName: 'Olympic Mountains Weekend',
    date: 'August 5-7, 2025',
    participants: 1,
    status: 'pending',
    totalAmount: '$249',
    paymentStatus: 'awaiting_payment',
  },
];

export default function BookingList() {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Upcoming Trips</Text>
      
      {bookings.map((booking) => (
        <TouchableOpacity 
          key={booking.id} 
          style={styles.bookingCard}
          onPress={() => router.push('/booking/details')}
        >
          <View style={styles.header}>
            <Text style={styles.tripName}>{booking.tripName}</Text>
            <View style={[
              styles.statusBadge,
              booking.status === 'confirmed' ? styles.confirmedBadge : styles.pendingBadge
            ]}>
              <Text style={[
                styles.statusText,
                booking.status === 'confirmed' ? styles.confirmedText : styles.pendingText
              ]}>
                {booking.status === 'confirmed' ? 'Confirmed' : 'Pending'}
              </Text>
            </View>
          </View>
          
          <View style={styles.details}>
            <View style={styles.detailRow}>
              <Calendar size={16} color={theme.colors.neutral[600]} />
              <Text style={styles.detailText}>{booking.date}</Text>
            </View>
            <View style={styles.detailRow}>
              <Users size={16} color={theme.colors.neutral[600]} />
              <Text style={styles.detailText}>{booking.participants} participants</Text>
            </View>
            <View style={styles.detailRow}>
              <Tag size={16} color={theme.colors.primary[600]} />
              <Text style={styles.detailText}>{booking.totalAmount}</Text>
            </View>
          </View>
          
          {booking.paymentStatus === 'awaiting_payment' && (
            <View style={styles.paymentAlert}>
              <AlertCircle size={16} color={theme.colors.warning[600]} />
              <Text style={styles.paymentAlertText}>Payment pending - Due in 24h</Text>
              <TouchableOpacity 
                style={styles.payButton}
                onPress={() => router.push('/booking/payment')}
              >
                <Text style={styles.payButtonText}>Pay Now</Text>
              </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: theme.colors.neutral[900],
    marginBottom: 8,
  },
  bookingCard: {
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    padding: 16,
    ...theme.shadows.small,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  tripName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: theme.colors.neutral[900],
    flex: 1,
    marginRight: 12,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  confirmedBadge: {
    backgroundColor: theme.colors.success[50],
  },
  pendingBadge: {
    backgroundColor: theme.colors.warning[50],
  },
  statusText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
  },
  confirmedText: {
    color: theme.colors.success[700],
  },
  pendingText: {
    color: theme.colors.warning[700],
  },
  details: {
    gap: 8,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: theme.colors.neutral[700],
  },
  paymentAlert: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.warning[50],
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
    gap: 8,
  },
  paymentAlertText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: theme.colors.warning[700],
    flex: 1,
  },
  payButton: {
    backgroundColor: theme.colors.warning[600],
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  payButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: theme.colors.white,
  },
});
