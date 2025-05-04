import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { theme } from '@/constants/theme';
import Header from '@/components/common/Header';
import MountainCard from '@/components/explore/MountainCard';
import FilterSection from '@/components/explore/FilterSection';
import { Search } from 'lucide-react-native';
import { mountainData } from '@/data/mountains';

export default function ExploreScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMountains, setFilteredMountains] = useState(mountainData);
  const [filtersVisible, setFiltersVisible] = useState(false);
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Header title="Explore Mountains" />
      
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Search size={20} color={theme.colors.neutral[500]} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search mountains"
            placeholderTextColor={theme.colors.neutral[400]}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity 
          style={styles.filterButton}
          onPress={() => setFiltersVisible(!filtersVisible)}
        >
          <Text style={styles.filterButtonText}>Filters</Text>
        </TouchableOpacity>
      </View>
      
      {filtersVisible && <FilterSection />}
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {filteredMountains.map((mountain) => (
          <MountainCard key={mountain.id} mountain={mountain} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.neutral[50],
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
    alignItems: 'center',
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: theme.colors.neutral[200],
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: theme.colors.neutral[900],
    marginLeft: 8,
    paddingVertical: 4,
  },
  filterButton: {
    backgroundColor: theme.colors.primary[50],
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.primary[300],
  },
  filterButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: theme.colors.primary[700],
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    gap: 16,
    paddingBottom: 32,
  },
});
