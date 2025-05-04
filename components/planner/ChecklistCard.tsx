import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { theme } from '@/constants/theme';
import { CircleCheck as CheckCircle2, Circle, ChevronDown, ChevronUp } from 'lucide-react-native';

interface ChecklistItem {
  id: number;
  category: string;
  items: {
    id: number;
    name: string;
    checked: boolean;
  }[];
}

export default function ChecklistCard() {
  const [expandedCategories, setExpandedCategories] = useState<number[]>([1]);
  
  const toggleCategory = (categoryId: number) => {
    if (expandedCategories.includes(categoryId)) {
      setExpandedCategories(expandedCategories.filter(id => id !== categoryId));
    } else {
      setExpandedCategories([...expandedCategories, categoryId]);
    }
  };
  
  const toggleItem = (categoryId: number, itemId: number) => {
    // In a real app, this would update state
    console.log(`Toggled item ${itemId} in category ${categoryId}`);
  };
  
  const checklistData: ChecklistItem[] = [
    {
      id: 1,
      category: 'Essential Gear',
      items: [
        { id: 1, name: 'Hiking boots', checked: true },
        { id: 2, name: 'Backpack (25-30L)', checked: true },
        { id: 3, name: 'Water bottle/reservoir', checked: false },
        { id: 4, name: 'Food/snacks', checked: false },
        { id: 5, name: 'First aid kit', checked: false },
      ]
    },
    {
      id: 2,
      category: 'Clothing',
      items: [
        { id: 6, name: 'Moisture-wicking shirt', checked: false },
        { id: 7, name: 'Hiking pants/shorts', checked: false },
        { id: 8, name: 'Rain jacket', checked: false },
        { id: 9, name: 'Hat', checked: false },
        { id: 10, name: 'Extra socks', checked: false },
      ]
    },
    {
      id: 3,
      category: 'Navigation',
      items: [
        { id: 11, name: 'Map', checked: false },
        { id: 12, name: 'Compass', checked: false },
        { id: 13, name: 'Fully charged phone', checked: false },
        { id: 14, name: 'Power bank', checked: false },
      ]
    }
  ];
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Equipment Checklist</Text>
      <Text style={styles.subtitle}>For your upcoming trip:</Text>
      
      {checklistData.map((category) => (
        <View key={category.id} style={styles.categoryContainer}>
          <TouchableOpacity 
            style={styles.categoryHeader}
            onPress={() => toggleCategory(category.id)}
          >
            <Text style={styles.categoryTitle}>{category.category}</Text>
            {expandedCategories.includes(category.id) ? (
              <ChevronUp size={20} color={theme.colors.neutral[700]} />
            ) : (
              <ChevronDown size={20} color={theme.colors.neutral[700]} />
            )}
          </TouchableOpacity>
          
          {expandedCategories.includes(category.id) && (
            <View style={styles.itemsContainer}>
              {category.items.map((item) => (
                <TouchableOpacity 
                  key={item.id}
                  style={styles.checklistItem}
                  onPress={() => toggleItem(category.id, item.id)}
                >
                  {item.checked ? (
                    <CheckCircle2 size={20} color={theme.colors.primary[600]} />
                  ) : (
                    <Circle size={20} color={theme.colors.neutral[400]} />
                  )}
                  <Text style={[
                    styles.itemText,
                    item.checked && styles.checkedItemText
                  ]}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      ))}
      
      <TouchableOpacity style={styles.customizeButton}>
        <Text style={styles.customizeButtonText}>Customize Checklist</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    padding: 16,
    ...theme.shadows.small,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: theme.colors.neutral[900],
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: theme.colors.neutral[600],
    marginBottom: 16,
  },
  categoryContainer: {
    marginBottom: 8,
    borderWidth: 1,
    borderColor: theme.colors.neutral[200],
    borderRadius: 8,
    overflow: 'hidden',
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: theme.colors.neutral[50],
  },
  categoryTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: theme.colors.neutral[900],
  },
  itemsContainer: {
    padding: 12,
  },
  checklistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  itemText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: theme.colors.neutral[800],
    marginLeft: 12,
  },
  checkedItemText: {
    color: theme.colors.neutral[400],
    textDecorationLine: 'line-through',
  },
  customizeButton: {
    backgroundColor: theme.colors.primary[50],
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
    borderWidth: 1,
    borderColor: theme.colors.primary[200],
  },
  customizeButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: theme.colors.primary[700],
  },
});
