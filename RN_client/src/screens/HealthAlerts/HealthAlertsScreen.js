import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../../theme/colors';

const HealthAlertsScreen = ({ navigation }) => {
  // Mock data representing children that require attention
  const [alerts, setAlerts] = useState([
    {
      id: '1',
      name: 'Ravi Kumar',
      age: '3 Yrs',
      mobile: '9876543210',
      status: 'Severe', // Triggers red theme
      metric1: 'Weight Loss: 1.2 kg',
      metric2: 'Status: SAM',
    },
    {
      id: '2',
      name: 'Priya Singh',
      age: '4 Yrs',
      mobile: '9123456789',
      status: 'Moderate', // Triggers yellow theme
      metric1: 'Status: MAM',
      metric2: 'Trend: Below Avg',
    },
    {
      id: '3',
      name: 'Amit Patel',
      age: '2 Yrs',
      mobile: '9988776655',
      status: 'Moderate',
      metric1: 'Weight: 8.5 kg',
      metric2: 'Trend: Stagnant',
    },
  ]);

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

        {/* Header Section */}
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Health Alerts</Text>
          <Text style={styles.subtitle}>Children needing attention</Text>
        </View>

        {/* MOCK Tabs/Filters Section */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={[styles.tabText, styles.activeTabText]}>All (3)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Severe (1)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Moderate (2)</Text>
          </TouchableOpacity>
        </View>

        {/* Alerts List */}
        <View style={styles.listContainer}>
          {alerts.map(alert => {
            // Determine colors dynamically based on status
            const isSevere = alert.status === 'Severe';
            const themeBg = isSevere ? colors.severeBg : colors.moderateBg;
            const themeText = isSevere
              ? colors.severeText
              : colors.moderateText;

            return (
              <View
                key={alert.id}
                style={[styles.alertCard, { borderColor: themeBg }]}
              >
                {/* Status Tag */}
                <View style={[styles.statusTag, { backgroundColor: themeBg }]}>
                  <Text style={[styles.statusTagText, { color: themeText }]}>
                    {alert.status}
                  </Text>
                </View>

                {/* Main Content Area */}
                <View style={styles.cardHeader}>
                  <Text style={styles.childName}>{alert.name}</Text>
                  <Text style={styles.childStats}>
                    {alert.age} | {alert.mobile}
                  </Text>
                </View>

                <View style={styles.divider} />

                {/* Metrics */}
                <View style={styles.metricsRow}>
                  <Text style={[styles.metricItem, { color: themeText }]}>
                    {alert.metric1}
                  </Text>
                  <Text style={styles.metricDivider}>|</Text>
                  <Text style={[styles.metricItem, { color: themeText }]}>
                    {alert.metric2}
                  </Text>
                </View>

                {/* Action Buttons */}
                <View style={styles.actionsRow}>
                  <TouchableOpacity style={styles.historyBtn}>
                    <Text style={styles.historyBtnText}>View History</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.actionBtn, { backgroundColor: themeText }]}
                  >
                    <Text style={styles.actionBtnText}>Log Nutrition</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
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
    marginBottom: 24,
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
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    padding: 6,
    borderRadius: 12,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: colors.background,
  },
  tabText: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.textMuted,
  },
  activeTabText: {
    color: colors.textDark,
    fontWeight: '600',
  },
  listContainer: {
    gap: 16,
  },
  alertCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 20,
    paddingTop: 16, // Extra padding for the status tag
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 16,
  },
  statusTag: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 10,
    marginBottom: 12,
  },
  statusTagText: {
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  cardHeader: {
    marginBottom: 16,
  },
  childName: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textDark,
    marginBottom: 4,
  },
  childStats: {
    fontSize: 13,
    color: colors.textMuted,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginBottom: 16,
  },
  metricsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20,
    paddingVertical: 8,
    backgroundColor: colors.background,
    borderRadius: 8,
  },
  metricItem: {
    fontSize: 13,
    fontWeight: '500',
  },
  metricDivider: {
    color: colors.border,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  historyBtn: {
    flex: 1,
    height: 44,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  historyBtnText: {
    color: colors.textDark,
    fontSize: 14,
    fontWeight: '500',
  },
  actionBtn: {
    flex: 1,
    height: 44,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBtnText: {
    color: colors.surface,
    fontSize: 14,
    fontWeight: '600',
  },
});

export default HealthAlertsScreen;
