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

const ParentDashboardScreen = ({ route, navigation }) => {
  const { childName } = route.params || { childName: 'Child' };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Profile Header */}
        <View style={styles.header}>
          <View style={styles.profileInfo}>
            <Text style={styles.welcomeText}>Hello, Parent!</Text>
            <Text style={styles.childNameText}>{childName}'s Daily Status</Text>
          </View>
          <TouchableOpacity
            style={styles.logoutBtn}
            onPress={() => navigation.navigate('RoleSelection')}
          >
            <Text>🚪</Text>
          </TouchableOpacity>
        </View>

        {/* Status Summary Card */}
        <View style={styles.summaryCard}>
          <View style={styles.statusRow}>
            <View style={styles.statusItem}>
              <Text style={styles.statusLabel}>Attendance</Text>
              <Text
                style={[styles.statusValue, { color: colors.parentPrimary }]}
              >
                Present
              </Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.statusItem}>
              <Text style={styles.statusLabel}>Health Alerts</Text>
              <Text
                style={[styles.statusValue, { color: colors.parentPrimary }]}
              >
                No Alerts
              </Text>
            </View>
          </View>
        </View>

        {/* Parent Quick Actions */}
        <View style={styles.grid}>
          <TouchableOpacity style={styles.gridItem}>
            <Text style={styles.gridIcon}>📊</Text>
            <Text style={styles.gridTitle}>Growth</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
            <Text style={styles.gridIcon}>🗓️</Text>
            <Text style={styles.gridTitle}>Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
            <Text style={styles.gridIcon}>🆔</Text>
            <Text style={styles.gridTitle}>Digital ID</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
            <Text style={styles.gridIcon}>💡</Text>
            <Text style={styles.gridTitle}>Tips</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  scrollContent: { padding: 24 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  welcomeText: { fontSize: 16, color: colors.textMuted },
  childNameText: { fontSize: 22, fontWeight: 'bold', color: colors.textDark },
  logoutBtn: {
    width: 44,
    height: 44,
    backgroundColor: colors.surface,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  summaryCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 24,
    marginBottom: 24,
    elevation: 4,
  },
  statusRow: { flexDirection: 'row', alignItems: 'center' },
  statusItem: { flex: 1, alignItems: 'center' },
  statusLabel: { fontSize: 12, color: colors.textMuted, marginBottom: 4 },
  statusValue: { fontSize: 18, fontWeight: 'bold' },
  divider: { width: 1, height: 40, backgroundColor: colors.border },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '47%',
    backgroundColor: colors.surface,
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 16,
    elevation: 2,
  },
  gridIcon: { fontSize: 24, marginBottom: 8 },
  gridTitle: { fontSize: 14, fontWeight: '600', color: colors.textDark },
});

export default ParentDashboardScreen;
