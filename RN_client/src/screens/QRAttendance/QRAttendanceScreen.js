import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView 
} from 'react-native';
import { colors } from '../../theme/colors';

const QRAttendanceScreen = ({ navigation }) => {
  // State to hold the list of children scanned today
  const [scannedChildren, setScannedChildren] = useState([
    { id: '1', name: 'Priya Singh', time: '09:05 AM' } // Mock initial data from your design
  ]);

  const handleSimulateScan = () => {
    // Simulating a successful camera scan
    const newChild = {
      id: Math.random().toString(),
      name: 'Ravi Kumar', // Mock name
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setScannedChildren([newChild, ...scannedChildren]);
    alert(`${newChild.name} marked present!`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Top Navigation */}
        <View style={styles.headerRow}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
        </View>

        {/* Header Title */}
        <View style={styles.headerContainer}>
          <Text style={styles.title}>QR Attendance</Text>
          <Text style={styles.subtitle}>Scan child's QR code</Text>
        </View>

        {/* Scanner Card */}
        <View style={styles.scannerCard}>
          <View style={styles.scannerBackground}>
            {/* The dashed frame representing the camera view */}
            <View style={styles.cameraFrame}>
              <Text style={styles.qrMockIcon}>📱</Text>
              {/* In production, <Camera /> goes here */}
            </View>
          </View>

          <Text style={styles.instructionTitle}>Position QR code within the frame</Text>
          <Text style={styles.instructionText}>Camera will automatically scan</Text>

          {/* Fallback / Simulation Button */}
          <TouchableOpacity style={styles.scanButton} onPress={handleSimulateScan}>
            <Text style={styles.scanButtonText}>Simulate Scan</Text>
          </TouchableOpacity>
        </View>

        {/* Today's Attendance List */}
        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Today's Attendance</Text>
          
          {scannedChildren.map((child) => (
            <View key={child.id} style={styles.listItem}>
              <View>
                <Text style={styles.childName}>{child.name}</Text>
                <Text style={styles.scanTime}>{child.time}</Text>
              </View>
              <View style={styles.checkIconContainer}>
                <Text style={styles.checkIcon}>✓</Text>
              </View>
            </View>
          ))}
          
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  headerRow: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  backArrow: {
    fontSize: 24,
    color: colors.textDark,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textDark,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textMuted,
  },
  scannerCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  scannerBackground: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#F3E8FF', // Soft purple background from design
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
  },
  cameraFrame: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#9333EA', // Purple dashed border
    borderStyle: 'dashed',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrMockIcon: {
    fontSize: 64,
  },
  instructionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textDark,
    marginBottom: 8,
    textAlign: 'center',
  },
  instructionText: {
    fontSize: 13,
    color: colors.textMuted,
    marginBottom: 24,
    textAlign: 'center',
  },
  scanButton: {
    backgroundColor: '#9333EA', // Purple accent for scanner
    width: '100%',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  scanButtonText: {
    color: colors.surface,
    fontSize: 16,
    fontWeight: '600',
  },
  listContainer: {
    width: '100%',
  },
  listTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textDark,
    marginBottom: 16,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.successBg, // Soft green for present
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#D1FAE5', // Light green border
  },
  childName: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.textDark,
    marginBottom: 4,
  },
  scanTime: {
    fontSize: 12,
    color: colors.textMuted,
  },
  checkIconContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.successText,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    color: colors.surface,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default QRAttendanceScreen;