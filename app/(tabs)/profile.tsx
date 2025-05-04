import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { theme } from '@/constants/theme';
import Header from '@/components/common/Header';
import { Settings, Award, Flag, Clock, Calendar, MapPin } from 'lucide-react-native';
import AchievementCard from '@/components/profile/AchievementCard';
import HikingLogItem from '@/components/profile/HikingLogItem';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Header 
        title="Profile" 
        rightElement={
          <TouchableOpacity style={styles.settingsButton}>
            <Settings size={24} color={theme.colors.neutral[700]} />
          </TouchableOpacity>
        }
      />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profileHeader}>
          <Image 
            source={{ uri: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg' }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Sarah Johnson</Text>
            <Text style={styles.profileBio}>Beginner hiker • Nature lover</Text>
            <View style={styles.profileStats}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>12</Text>
                <Text style={styles.statLabel}>Hikes</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>8,754m</Text>
                <Text style={styles.statLabel}>Elevation</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>86km</Text>
                <Text style={styles.statLabel}>Distance</Text>
              </View>
            </View>
          </View>
        </View>
        
        <Text style={styles.sectionTitle}>Achievements</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.achievementsContainer}
        >
          <AchievementCard 
            title="Early Bird"
            description="Complete 5 sunrise hikes"
            icon={<Award size={24} color={theme.colors.accent[500]} />}
            progress={0.6}
          />
          <AchievementCard 
            title="Peak Bagger"
            description="Reach 3 mountain summits"
            icon={<Flag size={24} color={theme.colors.primary[500]} />}
            progress={0.33}
          />
          <AchievementCard 
            title="Endurance"
            description="Hike for more than 5 hours"
            icon={<Clock size={24} color={theme.colors.secondary[500]} />}
            progress={1}
            completed
          />
        </ScrollView>
        
        <Text style={styles.sectionTitle}>Hiking Log</Text>
        <View style={styles.hikingLog}>
          <HikingLogItem 
            mountain="Mount Rainier"
            date="June 15, 2025"
            duration="4h 20m"
            elevation="1,280m"
            distance="8.5km"
          />
          <HikingLogItem 
            mountain="Columbia River Gorge"
            date="May 28, 2025"
            duration="3h 45m"
            elevation="820m"
            distance="7.2km"
          />
          <HikingLogItem 
            mountain="Crater Lake Rim"
            date="May 10, 2025"
            duration="5h 15m"
            elevation="1,100m"
            distance="11.3km"
          />
        </View>
        
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllButtonText}>View All Hikes</Text>
        </TouchableOpacity>
        
        <View style={styles.emergencyContactsSection}>
          <Text style={styles.emergencyContactsTitle}>Emergency Contacts</Text>
          <TouchableOpacity style={styles.contactItem}>
            <Text style={styles.contactName}>John Smith (Husband)</Text>
            <Text style={styles.contactPhone}>+1 (555) 123-4567</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactItem}>
            <Text style={styles.contactName}>Maria Johnson (Sister)</Text>
            <Text style={styles.contactPhone}>+1 (555) 987-6543</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addContactButton}>
            <Text style={styles.addContactButtonText}>Add Emergency Contact</Text>
          </TouchableOpacity>
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
    paddingBottom: 32,
  },
  settingsButton: {
    padding: 8,
  },
  profileHeader: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: theme.colors.white,
  },
  profileInfo: {
    marginLeft: 16,
    flex: 1,
    justifyContent: 'center',
  },
  profileName: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: theme.colors.neutral[900],
  },
  profileBio: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: theme.colors.neutral[600],
    marginBottom: 8,
  },
  profileStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: theme.colors.primary[700],
  },
  statLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: theme.colors.neutral[500],
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: theme.colors.neutral[900],
    marginBottom: 12,
  },
  achievementsContainer: {
    paddingBottom: 8,
    gap: 12,
  },
  hikingLog: {
    gap: 12,
    marginBottom: 16,
  },
  viewAllButton: {
    backgroundColor: theme.colors.neutral[200],
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 24,
  },
  viewAllButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: theme.colors.neutral[700],
  },
  emergencyContactsSection: {
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    padding: 16,
    shadowColor: theme.colors.neutral[900],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  emergencyContactsTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: theme.colors.neutral[900],
    marginBottom: 12,
  },
  contactItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.neutral[200],
  },
  contactName: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: theme.colors.neutral[900],
  },
  contactPhone: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: theme.colors.neutral[600],
  },
  addContactButton: {
    backgroundColor: theme.colors.neutral[100],
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  addContactButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: theme.colors.neutral[700],
  },
});
