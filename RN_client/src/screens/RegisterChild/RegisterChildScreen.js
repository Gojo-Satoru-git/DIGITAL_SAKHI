import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView,
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { colors } from '../../theme/colors';

const RegisterChildScreen = ({ navigation }) => {
  const [childName, setChildName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState(''); // In a real app, use a Picker/Dropdown library
  const [parentName, setParentName] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSave = () => {
    if (!childName || !age || !parentName || !mobile) {
      alert("Please fill in all fields");
      return;
    }
    // Here is where we will eventually save to WatermelonDB and generate the QR UUID!
    alert(`Child ${childName} registered successfully! QR Code generated.`);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          
          {/* Top Navigation & Header */}
          <View style={styles.headerRow}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.backArrow}>←</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.headerContainer}>
            <Text style={styles.title}>Register Child</Text>
            <Text style={styles.subtitle}>Add new child to system</Text>
          </View>

          {/* Form Card */}
          <View style={styles.card}>
            
            {/* Child Name */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Child Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter child's name"
                placeholderTextColor={colors.textMuted}
                value={childName}
                onChangeText={setChildName}
              />
            </View>

            {/* Age & Gender Row */}
            <View style={styles.row}>
              <View style={[styles.inputGroup, { flex: 1, marginRight: 12 }]}>
                <Text style={styles.label}>Age</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Years"
                  placeholderTextColor={colors.textMuted}
                  keyboardType="numeric"
                  value={age}
                  onChangeText={setAge}
                />
              </View>

              <View style={[styles.inputGroup, { flex: 1 }]}>
                <Text style={styles.label}>Gender</Text>
                {/* Simplified as a TextInput for now. Consider react-native-picker/picker for production */}
                <TextInput
                  style={styles.input}
                  placeholder="Select"
                  placeholderTextColor={colors.textMuted}
                  value={gender}
                  onChangeText={setGender}
                />
              </View>
            </View>

            {/* Parent Name */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Parent Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter parent's name"
                placeholderTextColor={colors.textMuted}
                value={parentName}
                onChangeText={setParentName}
              />
            </View>

            {/* Mobile Number */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Mobile Number</Text>
              <View style={styles.inputWithIcon}>
                <Text style={styles.icon}>📞</Text>
                <TextInput
                  style={styles.inputNoBorder}
                  placeholder="10-digit number"
                  placeholderTextColor={colors.textMuted}
                  keyboardType="phone-pad"
                  maxLength={10}
                  value={mobile}
                  onChangeText={setMobile}
                />
              </View>
            </View>

            {/* Submit Button */}
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Generate QR Code & Save</Text>
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
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textDark,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 52,
    fontSize: 15,
    color: colors.textDark,
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 52,
  },
  icon: {
    fontSize: 16,
    marginRight: 12,
    color: colors.textMuted,
  },
  inputNoBorder: {
    flex: 1,
    fontSize: 15,
    color: colors.textDark,
  },
  saveButton: {
    backgroundColor: colors.workerPrimary, // Blue theme for Worker
    borderRadius: 12,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  saveButtonText: {
    color: colors.surface,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default RegisterChildScreen;