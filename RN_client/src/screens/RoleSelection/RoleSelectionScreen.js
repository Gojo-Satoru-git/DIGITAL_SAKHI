import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RoleSelectionScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Header Section */}
        <View style={styles.headerContainer}>
          <View style={styles.iconPlaceholder}>
            <Text style={styles.iconText}>👥</Text>
          </View>
          <Text style={styles.title}>ICDS Smart App</Text>
          <Text style={styles.subtitle}>Smart Anganwadi System</Text>
        </View>

        {/* Buttons Section */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.workerButton]}
            onPress={() => navigation.navigate('WorkerLogin')}
          >
            <Text style={styles.buttonText}>Login as Worker</Text>
            <Text style={styles.emoji}>👩‍⚕️</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.parentButton]}
            onPress={() => navigation.navigate('ParentLogin')}
          >
            <Text style={styles.buttonText}>Login as Parent</Text>
            <Text style={styles.emoji}>👨‍👩‍👧</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <Text style={styles.footerText}>Powered by ICDS</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FB',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
  iconPlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: '#2563EB',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconText: {
    fontSize: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A3673',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
  buttonContainer: {
    width: '100%',
    gap: 16, // Requires newer React Native versions, otherwise use margin on items
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  workerButton: {
    backgroundColor: '#2563EB',
  },
  parentButton: {
    backgroundColor: '#059669',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  emoji: {
    fontSize: 24,
  },
  footerText: {
    textAlign: 'center',
    color: '#6B7280',
    fontSize: 14,
    marginBottom: 20,
  },
});

export default RoleSelectionScreen;
