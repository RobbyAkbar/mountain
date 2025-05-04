import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { theme } from '@/constants/theme';
import Header from '@/components/common/Header';
import { Play, Award, BookOpen, Cloud, TriangleAlert as AlertTriangle } from 'lucide-react-native';
import LearningModuleCard from '@/components/learn/LearningModuleCard';

export default function LearnScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Header title="Learn" />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Educational Hub</Text>
        <Text style={styles.subtitle}>Master hiking skills with our guides</Text>
        
        <LearningModuleCard 
          title="Basic Hiking Safety"
          description="Learn essential safety practices for beginners"
          progress={0.75}
          icon={<AlertTriangle size={24} color={theme.colors.warning[500]} />}
          iconBgColor={theme.colors.warning[50]}
        />
        
        <LearningModuleCard 
          title="Equipment Usage"
          description="How to properly use and maintain your gear"
          progress={0.4}
          icon={<BookOpen size={24} color={theme.colors.secondary[500]} />}
          iconBgColor={theme.colors.secondary[50]}
        />
        
        <LearningModuleCard 
          title="Navigation Skills"
          description="Map reading, compass use, and trail markers"
          progress={0.2}
          icon={<Award size={24} color={theme.colors.primary[500]} />}
          iconBgColor={theme.colors.primary[50]}
        />
        
        <LearningModuleCard 
          title="Weather Interpretation"
          description="Understanding weather patterns and forecasts"
          progress={0}
          icon={<Cloud size={24} color={theme.colors.info[500]} />}
          iconBgColor={theme.colors.info[50]}
        />
        
        <View style={styles.featuredVideoCard}>
          <Image 
            source={{ uri: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg' }}
            style={styles.videoThumbnail}
          />
          <View style={styles.playButton}>
            <Play size={24} color={theme.colors.white} fill={theme.colors.white} />
          </View>
          <View style={styles.videoContent}>
            <Text style={styles.videoTitle}>Emergency Procedures</Text>
            <Text style={styles.videoSubtitle}>What to do in critical situations</Text>
            <TouchableOpacity style={styles.downloadButton}>
              <Text style={styles.downloadButtonText}>Download for Offline</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.quizSection}>
          <Text style={styles.quizTitle}>Test Your Knowledge</Text>
          <Text style={styles.quizDescription}>
            Take our interactive quizzes to reinforce your learning
          </Text>
          <TouchableOpacity style={styles.startQuizButton}>
            <Text style={styles.startQuizButtonText}>Start Quiz</Text>
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
    gap: 16,
    paddingBottom: 32,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: theme.colors.neutral[900],
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: theme.colors.neutral[600],
    marginBottom: 8,
  },
  featuredVideoCard: {
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: theme.colors.neutral[900],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginTop: 8,
  },
  videoThumbnail: {
    width: '100%',
    height: 180,
  },
  playButton: {
    position: 'absolute',
    top: 70,
    left: '45%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContent: {
    padding: 16,
  },
  videoTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: theme.colors.neutral[900],
  },
  videoSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: theme.colors.neutral[600],
    marginBottom: 12,
  },
  downloadButton: {
    backgroundColor: theme.colors.primary[50],
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: theme.colors.primary[200],
  },
  downloadButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: theme.colors.primary[700],
  },
  quizSection: {
    backgroundColor: theme.colors.secondary[50],
    padding: 16,
    borderRadius: 12,
    marginTop: 8,
  },
  quizTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: theme.colors.secondary[800],
  },
  quizDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: theme.colors.secondary[700],
    marginTop: 4,
    marginBottom: 16,
  },
  startQuizButton: {
    backgroundColor: theme.colors.secondary[600],
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  startQuizButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: theme.colors.white,
  },
});
