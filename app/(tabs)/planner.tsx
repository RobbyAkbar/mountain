import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { theme } from '@/constants/theme';
import Header from '@/components/common/Header';
import { Plus, Share2 } from 'lucide-react-native';
import TripsList from '@/components/planner/TripsList';
import ChecklistCard from '@/components/planner/ChecklistCard';

export default function PlannerScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Header 
        title="Trip Planner" 
        rightElement={
          <TouchableOpacity style={styles.shareButton}>
            <Share2 size={20} color={theme.colors.neutral[700]} />
          </TouchableOpacity>
        }
      />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Your Trips</Text>
          <TouchableOpacity style={styles.addButton}>
            <Plus size={20} color={theme.colors.white} />
            <Text style={styles.addButtonText}>New Trip</Text>
          </TouchableOpacity>
        </View>
        
        <TripsList />
        
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Equipment</Text>
        </View>
        
        <ChecklistCard />
        
        <View style={styles.resourceCalculator}>
          <Text style={styles.resourceTitle}>Resource Calculator</Text>
          <View style={styles.resourceItems}>
            <View style={styles.resourceItem}>
              <Text style={styles.resourceLabel}>Water</Text>
              <Text style={styles.resourceValue}>2.5 L/day</Text>
            </View>
            <View style={styles.resourceItem}>
              <Text style={styles.resourceLabel}>Food</Text>
              <Text style={styles.resourceValue}>2100 cal/day</Text>
            </View>
            <View style={styles.resourceItem}>
              <Text style={styles.resourceLabel}>Budget</Text>
              <Text style={styles.resourceValue}>$250</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.neutral[50],
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    gap: 24,
    paddingBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: theme.colors.neutral[900],
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primary[600],
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    gap: 4,
  },
  addButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: theme.colors.white,
  },
  shareButton: {
    padding: 8,
  },
  resourceCalculator: {
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    padding: 16,
    shadowColor: theme.colors.neutral[900],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  resourceTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: theme.colors.neutral[900],
    marginBottom: 12,
  },
  resourceItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  resourceItem: {
    alignItems: 'center',
    flex: 1,
  },
  resourceLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: theme.colors.neutral[500],
    marginBottom: 4,
  },
  resourceValue: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: theme.colors.secondary[600],
  },
});
