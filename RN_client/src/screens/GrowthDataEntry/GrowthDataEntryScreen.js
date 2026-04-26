import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { colors } from '../../theme/colors';

const GrowthDataEntryScreen = ({ navigation }) => {
  // In a real app, 'selectedChild' would be chosen from a Dropdown populated by WatermelonDB
  const [selectedChild, setSelectedChild] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  // Check if form is valid to enable/disable the submit button
  const isFormValid =
    selectedChild.length > 0 && height.length > 0 && weight.length > 0;

  const handleSubmit = () => {
    if (!isFormValid) return;

    // TODO: In the future, we will call our checkMalnutrition(weight, age) function here
    // and save the resulting Status (Normal, Moderate, Severe) to WatermelonDB.

    alert(`Growth data saved! Height: ${height}cm, Weight: ${weight}kg`);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
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

          {/* Header Section */}
          <View style={styles.headerContainer}>
            <View style={styles.iconContainer}>
              <Text style={styles.headerIcon}>📈</Text>
            </View>
            <Text style={styles.title}>Growth Data Entry</Text>
            <Text style={styles.subtitle}>Record height and weight</Text>
          </View>

          {/* Form Card */}
          <View style={styles.card}>
            {/* Child Selection Dropdown Mock */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Select Child</Text>
              <View style={styles.dropdownMock}>
                <TextInput
                  style={styles.dropdownInput}
                  placeholder="Choose a child"
                  placeholderTextColor={colors.textMuted}
                  value={selectedChild}
                  onChangeText={setSelectedChild}
                />
                <Text style={styles.dropdownIcon}>▼</Text>
              </View>
            </View>

            {/* Metrics Row */}
            <View style={styles.metricsRow}>
              <View style={[styles.inputGroup, { flex: 1, marginRight: 12 }]}>
                <Text style={styles.label}>Height (cm)</Text>
                <TextInput
                  style={styles.metricInput}
                  placeholder="e.g. 85"
                  placeholderTextColor={colors.textMuted}
                  keyboardType="decimal-pad"
                  value={height}
                  onChangeText={setHeight}
                  textAlign="center"
                />
              </View>

              <View style={[styles.inputGroup, { flex: 1 }]}>
                <Text style={styles.label}>Weight (kg)</Text>
                <TextInput
                  style={styles.metricInput}
                  placeholder="e.g. 12.5"
                  placeholderTextColor={colors.textMuted}
                  keyboardType="decimal-pad"
                  value={weight}
                  onChangeText={setWeight}
                  textAlign="center"
                />
              </View>
            </View>

            {/* Submit Button (Changes color based on validity) */}
            <TouchableOpacity
              style={[
                styles.submitButton,
                isFormValid
                  ? styles.submitButtonActive
                  : styles.submitButtonInactive,
              ]}
              onPress={handleSubmit}
              disabled={!isFormValid}
            >
              <Text
                style={[
                  styles.submitButtonText,
                  isFormValid
                    ? styles.submitButtonTextActive
                    : styles.submitButtonTextInactive,
                ]}
              >
                Submit Data
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
  iconContainer: {
    width: 64,
    height: 64,
    backgroundColor: colors.successBg, // Soft green background
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerIcon: {
    fontSize: 28,
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
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textDark,
    marginBottom: 8,
  },
  dropdownMock: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.workerPrimary, // Using primary blue for the select outline
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 52,
  },
  dropdownInput: {
    flex: 1,
    fontSize: 15,
    color: colors.textDark,
  },
  dropdownIcon: {
    fontSize: 12,
    color: colors.textDark,
  },
  metricsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metricInput: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    height: 52,
    fontSize: 16,
    color: colors.textDark,
    fontWeight: '500',
  },
  submitButton: {
    borderRadius: 12,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  submitButtonActive: {
    backgroundColor: colors.workerPrimary,
  },
  submitButtonInactive: {
    backgroundColor: '#E5E7EB', // Grayed out state matching design
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  submitButtonTextActive: {
    color: colors.surface,
  },
  submitButtonTextInactive: {
    color: '#9CA3AF',
  },
});

export default GrowthDataEntryScreen;
