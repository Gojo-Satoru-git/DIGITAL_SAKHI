import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { colors } from '../../theme/colors';

const ParentLoginScreen = ({ navigation }) => {
  const [mobile, setMobile] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  const handleRequestOTP = () => {
    if (mobile.length === 10) {
      // In a real app, this triggers an API call to your Node backend
      setOtpSent(true);
    } else {
      alert("Please enter a valid 10-digit number");
    }
  };

  const handleLogin = () => {
    if (otp.length > 0) {
      // In a real app, this verifies the OTP with your backend
      // and navigates to the Family Hub upon success
      alert("OTP Verified! Proceeding to Dashboard...");
      // navigation.navigate('FamilyHub'); // We will build this next!
    } else {
      alert("Please enter the OTP");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.content}
      >
        {/* Top Navigation */}
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>

        {/* Header Section */}
        <View style={styles.headerContainer}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarEmoji}>👨‍👩‍👧</Text>
          </View>
          <Text style={styles.title}>Parent Login</Text>
          <Text style={styles.subtitle}>
            {otpSent ? "Enter the OTP sent to your phone" : "Enter your mobile to receive an OTP"}
          </Text>
        </View>

        {/* Login Card */}
        <View style={styles.card}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Mobile Number</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.icon}>📞</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter 10-digit number"
                placeholderTextColor={colors.textMuted}
                keyboardType="phone-pad"
                maxLength={10}
                value={mobile}
                onChangeText={setMobile}
                editable={!otpSent} // Lock input if OTP is sent
              />
            </View>
          </View>

          {/* Conditional Rendering: Only show OTP input if request was sent */}
          {otpSent && (
            <View style={[styles.inputGroup, { marginTop: 16 }]}>
              <Text style={styles.label}>Enter OTP</Text>
              <View style={styles.inputContainer}>
                <Text style={styles.icon}>💬</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter 6-digit OTP"
                  placeholderTextColor={colors.textMuted}
                  keyboardType="number-pad"
                  maxLength={6}
                  value={otp}
                  onChangeText={setOtp}
                />
              </View>
            </View>
          )}

          {/* Main Action Button toggles based on state */}
          <TouchableOpacity 
            style={styles.loginButton}
            onPress={otpSent ? handleLogin : handleRequestOTP}
          >
            <Text style={styles.loginButtonText}>
              {otpSent ? "Verify & Login" : "Request OTP"}
            </Text>
          </TouchableOpacity>

          {/* Secondary Action */}
          {otpSent && (
            <TouchableOpacity style={styles.secondaryActionBtn} onPress={() => setOtpSent(false)}>
              <Text style={styles.secondaryActionText}>Change Mobile Number</Text>
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  backButton: {
    marginTop: 20,
    marginBottom: 10,
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
  // Notice we use the Parent Theme colors here
  avatarContainer: {
    width: 72,
    height: 72,
    backgroundColor: colors.parentPrimary, 
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarEmoji: {
    fontSize: 32,
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
    textAlign: 'center',
    paddingHorizontal: 20,
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
    marginBottom: 8, // Reduced since we manage spacing with conditional render
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textDark,
    marginBottom: 8,
  },
  inputContainer: {
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
  input: {
    flex: 1,
    fontSize: 15,
    color: colors.textDark,
  },
  loginButton: {
    backgroundColor: colors.parentPrimary, // Parent Theme Emerald Green
    borderRadius: 12,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 8,
  },
  loginButtonText: {
    color: colors.surface,
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryActionBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  secondaryActionText: {
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: '500',
  },
});

export default ParentLoginScreen;