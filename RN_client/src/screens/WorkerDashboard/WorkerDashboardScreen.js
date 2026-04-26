import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../../theme/colors';
import RegisterChildScreen from '../RegisterChild/RegisterChildScreen';

const WorkerDashboardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Welcome, Worker</Text>
            <Text style={styles.centerText}>Anganwadi Center #123</Text>
          </View>
          <TouchableOpacity
            style={styles.logoutBtn}
            onPress={() => navigation.navigate('RoleSelection')}
          >
            <Text style={styles.logoutIcon}>🚪</Text>
          </TouchableOpacity>
        </View>

        {/* Today's Summary Card */}
        <View style={styles.summaryCard}>
          <Text style={styles.sectionTitle}>Today's Summary</Text>
          <View style={styles.summaryRow}>
            <View style={[styles.statBox, styles.statBoxSuccess]}>
              <Text style={[styles.statNumber, { color: colors.successText }]}>
                24
              </Text>
              <Text style={[styles.statLabel, { color: colors.successText }]}>
                Children Present
              </Text>
            </View>
            <View style={[styles.statBox, styles.statBoxAlert]}>
              <Text style={[styles.statNumber, { color: colors.severeText }]}>
                3
              </Text>
              <Text style={[styles.statLabel, { color: colors.severeText }]}>
                Alerts
              </Text>
            </View>
          </View>
        </View>

        {/* Action Menu */}
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              navigation.navigate('RegisterChild');
            }}
          >
            <View style={[styles.iconBox, { backgroundColor: '#E0E7FF' }]}>
              <Text style={styles.menuIcon}>👤</Text>
            </View>
            <View style={styles.menuTextContent}>
              <Text style={styles.menuTitle}>Register Child</Text>
              <Text style={styles.menuSubtitle}>Add new child to system</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              navigation.navigate('QRAttendance');
            }}
          >
            <View style={[styles.iconBox, { backgroundColor: '#F3E8FF' }]}>
              <Text style={styles.menuIcon}>📱</Text>
            </View>
            <View style={styles.menuTextContent}>
              <Text style={styles.menuTitle}>Scan Attendance</Text>
              <Text style={styles.menuSubtitle}>QR code scanner</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('GrowthDataEntry')}
          >
            <View style={[styles.iconBox, { backgroundColor: '#DCFCE7' }]}>
              <Text style={styles.menuIcon}>📈</Text>
            </View>
            <View style={styles.menuTextContent}>
              <Text style={styles.menuTitle}>Enter Growth Data</Text>
              <Text style={styles.menuSubtitle}>Height & weight tracking</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              navigation.navigate('HealthAlerts');
            }}
          >
            <View style={[styles.iconBox, { backgroundColor: '#FEE2E2' }]}>
              <Text style={styles.menuIcon}>🔔</Text>
            </View>
            <View style={styles.menuTextContent}>
              <Text style={styles.menuTitle}>View Alerts</Text>
              <Text style={styles.menuSubtitle}>
                Children needing attention
              </Text>
            </View>
          </TouchableOpacity>
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
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
    marginTop: 10,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textDark,
  },
  centerText: {
    fontSize: 14,
    color: colors.textMuted,
    marginTop: 4,
  },
  logoutBtn: {
    width: 44,
    height: 44,
    backgroundColor: colors.surface,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  logoutIcon: {
    fontSize: 18,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textDark,
    marginBottom: 16,
  },
  summaryCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  summaryRow: {
    flexDirection: 'row',
    gap: 12,
  },
  statBox: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 4, // for older RN versions if gap doesn't work
  },
  statBoxSuccess: {
    backgroundColor: colors.successBg,
  },
  statBoxAlert: {
    backgroundColor: colors.severeBg,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    fontWeight: '500',
  },
  menuContainer: {
    gap: 12, // Use marginBottom on menuItem if gap isn't supported in your RN version
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  menuIcon: {
    fontSize: 20,
  },
  menuTextContent: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textDark,
    marginBottom: 4,
  },
  menuSubtitle: {
    fontSize: 13,
    color: colors.textMuted,
  },
});

export default WorkerDashboardScreen;
