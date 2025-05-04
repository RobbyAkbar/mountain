import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { theme } from '@/constants/theme';
import { X } from 'lucide-react-native';

export default function FilterSection() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<number | null>(null);
  const [selectedElevation, setSelectedElevation] = useState<string | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<string | null>(null);
  
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.filterGroup}>
          <Text style={styles.filterLabel}>Difficulty</Text>
          <View style={styles.optionsRow}>
            {[1, 2, 3, 4, 5].map((level) => (
              <TouchableOpacity
                key={`difficulty-${level}`}
                style={[
                  styles.optionButton,
                  selectedDifficulty === level && styles.selectedOptionButton
                ]}
                onPress={() => setSelectedDifficulty(selectedDifficulty === level ? null : level)}
              >
                <Text
                  style={[
                    styles.optionText,
                    selectedDifficulty === level && styles.selectedOptionText
                  ]}
                >
                  {level}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        <View style={styles.filterGroup}>
          <Text style={styles.filterLabel}>Elevation</Text>
          <View style={styles.optionsRow}>
            {['0-500m', '500-1500m', '1500m+'].map((elevation) => (
              <TouchableOpacity
                key={`elevation-${elevation}`}
                style={[
                  styles.optionButton,
                  selectedElevation === elevation && styles.selectedOptionButton
                ]}
                onPress={() => setSelectedElevation(selectedElevation === elevation ? null : elevation)}
              >
                <Text
                  style={[
                    styles.optionText,
                    selectedElevation === elevation && styles.selectedOptionText
                  ]}
                >
                  {elevation}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        <View style={styles.filterGroup}>
          <Text style={styles.filterLabel}>Duration</Text>
          <View style={styles.optionsRow}>
            {['<3h', '3-6h', '6h+', '1 day+'].map((duration) => (
              <TouchableOpacity
                key={`duration-${duration}`}
                style={[
                  styles.optionButton,
                  selectedDuration === duration && styles.selectedOptionButton
                ]}
                onPress={() => setSelectedDuration(selectedDuration === duration ? null : duration)}
              >
                <Text
                  style={[
                    styles.optionText,
                    selectedDuration === duration && styles.selectedOptionText
                  ]}
                >
                  {duration}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.clearButton}>
          <X size={16} color={theme.colors.neutral[600]} />
          <Text style={styles.clearButtonText}>Clear All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply Filters</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.neutral[200],
  },
  filterGroup: {
    marginRight: 16,
    paddingLeft: 16,
  },
  filterLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: theme.colors.neutral[800],
    marginBottom: 8,
  },
  optionsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  optionButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: theme.colors.neutral[100],
    borderWidth: 1,
    borderColor: theme.colors.neutral[200],
  },
  selectedOptionButton: {
    backgroundColor: theme.colors.primary[600],
    borderColor: theme.colors.primary[600],
  },
  optionText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: theme.colors.neutral[700],
  },
  selectedOptionText: {
    color: theme.colors.white,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: theme.colors.neutral[200],
    marginTop: 12,
  },
  clearButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  clearButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: theme.colors.neutral[700],
    marginLeft: 4,
  },
  applyButton: {
    backgroundColor: theme.colors.primary[600],
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  applyButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: theme.colors.white,
  },
});
