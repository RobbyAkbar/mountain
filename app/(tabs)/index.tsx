import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { theme } from '@/constants/theme';
import Header from '@/components/common/Header';
import PopularMountainsSection from '@/components/home/PopularMountainsSection';
import BeginnerRecommendationsSection from '@/components/home/BeginnerRecommendationsSection';
import DailyTipCard from '@/components/home/DailyTipCard';
import WeatherAlertCard from '@/components/home/WeatherAlertCard';
import EmergencyButton from '@/components/emergency/EmergencyButton';
import UpcomingTripsSection from '@/components/home/UpcomingTripsSection';
import AnnouncementBanner from '@/components/home/AnnouncementBanner';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Header title="Mountain Guide" />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.welcomeText}>
          Welcome to your hiking journey!
        </Text>
        
        <AnnouncementBanner />
        <WeatherAlertCard />
        <UpcomingTripsSection />
        <PopularMountainsSection />
        <BeginnerRecommendationsSection />
        <DailyTipCard />
      </ScrollView>
      
      <EmergencyButton />
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
    paddingBottom: 32,
  },
  welcomeText: {
    fontFamily: 'Inter-Bold',
    fontSize: 22,
    color: theme.colors.neutral[900],
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 16,
  },
});
