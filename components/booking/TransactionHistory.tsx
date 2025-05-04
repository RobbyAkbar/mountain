import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '@/constants/theme';
import { Calendar, CreditCard, Download, ChevronRight } from 'lucide-react-native';

const transactions = [
  {
    id: 1,
    tripName: 'Mount Rainier Summit Trek',
    date: 'June 28, 2025',
    amount: '$598',
    method: 'Bank Transfer',
    status: 'completed',
  },
  {
    id: 2,
    tripName: 'Olympic Mountains Weekend',
    date: 'June 15, 2025',
    amount: '$249',
    method: 'QRIS',
    status: 'pending',
  },
];

export default function TransactionHistory() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Transaction History</Text>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View All</Text>
          <ChevronRight size={16} color={theme.colors.primary[600]} />
        </TouchableOpacity>
      </View>
      
      {transactions.map((transaction) => (
        <TouchableOpacity key={transaction.id} style={styles.transactionCard}>
          <View style={styles.transactionHeader}>
            <Text style={styles.tripName}>{transaction.tripName}</Text>
            <View style={[
              styles.statusBadge,
              transaction.status === 'completed' ? styles.completedBadge : styles.pendingBadge
            ]}>
              <Text style={[
                styles.statusText,
                transaction.status === 'completed' ? styles.completedText : styles.pendingText
              ]}>
                {transaction.status === 'completed' ? 'Completed' : 'Pending'}
              </Text>
            </View>
          </View>
          
          <View style={styles.details}>
            <View style={styles.detailRow}>
              <Calendar size={16} color={theme.colors.neutral[600]} />
              <Text style={styles.detailText}>{transaction.date}</Text>
            </View>
            <View style={styles.detailRow}>
              <CreditCard size={16} color={theme.colors.neutral[600]} />
              <Text style={styles.detailText}>{transaction.method}</Text>
            </View>
            <Text style={styles.amount}>{transaction.amount}</Text>
          </View>
          
          {transaction.status === 'completed' && (
            <TouchableOpacity style={styles.downloadButton}>
              <Download size={16} color={theme.colors.primary[600]} />
              <Text style={styles.downloadText}>Download Receipt</Text>
            </TouchableOpacity>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: theme.colors.neutral[900],
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  viewAllText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: theme.colors.primary[600],
  },
  transactionCard: {
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    padding: 16,
    ...theme.shadows.small,
  },
  transactionHeader: {
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
  completedBadge: {
    backgroundColor: theme.colors.success[50],
  },
  pendingBadge: {
    backgroundColor: theme.colors.warning[50],
  },
  statusText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
  },
  completedText: {
    color: theme.colors.success[700],
  },
  pendingText: {
    color: theme.colors.warning[700],
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
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
  amount: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: theme.colors.primary[700],
    marginLeft: 'auto',
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: theme.colors.primary[50],
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 12,
  },
  downloadText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: theme.colors.primary[600],
  },
});
