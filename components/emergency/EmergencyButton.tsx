import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { theme } from '@/constants/theme';
import { Siren, CircleAlert as AlertCircle, Phone, X } from 'lucide-react-native';

export default function EmergencyButton() {
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <>
      <TouchableOpacity 
        style={styles.emergencyButton}
        onPress={() => setModalVisible(true)}
      >
        <Siren size={24} color={theme.colors.error[500]} />
      </TouchableOpacity>
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <AlertCircle size={24} color={theme.colors.error[700]} />
              <Text style={styles.modalTitle}>Emergency Assistance</Text>
              <TouchableOpacity 
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <X size={20} color={theme.colors.neutral[700]} />
              </TouchableOpacity>
            </View>
            
            <Text style={styles.modalText}>
              This will share your current location and notify your emergency contacts.
            </Text>
            
            <TouchableOpacity style={styles.sosButton}>
              <Text style={styles.sosButtonText}>SOS</Text>
            </TouchableOpacity>
            
            <View style={styles.divider} />
            
            <Text style={styles.contactsTitle}>Emergency Numbers</Text>
            
            <TouchableOpacity style={styles.contactItem}>
              <View style={styles.contactIconContainer}>
                <Phone size={20} color={theme.colors.primary[700]} />
              </View>
              <View style={styles.contactInfo}>
                <Text style={styles.contactName}>Mountain Rescue</Text>
                <Text style={styles.contactNumber}>1-800-77-RESCUE</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.contactItem}>
              <View style={styles.contactIconContainer}>
                <Phone size={20} color={theme.colors.primary[700]} />
              </View>
              <View style={styles.contactInfo}>
                <Text style={styles.contactName}>Park Rangers</Text>
                <Text style={styles.contactNumber}>1-888-999-PARK</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.contactItem}>
              <View style={styles.contactIconContainer}>
                <Phone size={20} color={theme.colors.primary[700]} />
              </View>
              <View style={styles.contactInfo}>
                <Text style={styles.contactName}>Emergency Services</Text>
                <Text style={styles.contactNumber}>911</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  emergencyButton: {
    position: 'absolute',
    bottom: 80,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: theme.colors.error[600],
    justifyContent: 'center',
    alignItems: 'center',
    ...theme.shadows.medium,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '90%',
    backgroundColor: theme.colors.white,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.neutral[200],
  },
  modalTitle: {
    flex: 1,
    marginLeft: 12,
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: theme.colors.error[700],
  },
  closeButton: {
    padding: 4,
  },
  modalText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: theme.colors.neutral[800],
    lineHeight: 24,
    padding: 16,
  },
  sosButton: {
    backgroundColor: theme.colors.error[500],
    marginHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  sosButtonText: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: theme.colors.white,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.neutral[200],
    marginVertical: 16,
  },
  contactsTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: theme.colors.neutral[900],
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  contactIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.primary[50],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: theme.colors.neutral[900],
  },
  contactNumber: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: theme.colors.neutral[600],
  },
});
