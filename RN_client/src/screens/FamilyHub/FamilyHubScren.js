import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from '../../theme/colors';

const FamilyHubScreen = ({ navigation }) => {
  // Mock data representing children linked to this parent's phone number
  const children = [
    { id: '1', name: 'Priya Singh', center: 'Anganwadi Center #123', age: '4 Yrs' },
    { id: '2', name: 'Ravi Kumar', center: 'Anganwadi Center #123', age: '2 Yrs' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Family Hub</Text>
          <Text style={styles.subtitle}>Select a child to view their status</Text>
        </View>

        <ScrollView style={styles.list}>
          {children.map((child) => (
            <TouchableOpacity 
              key={child.id} 
              style={styles.childCard}
              onPress={() => navigation.navigate('ParentDashboard', { childName: child.name })}
            >
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{child.name.charAt(0)}</Text>
              </View>
              <View style={styles.childInfo}>
                <Text style={styles.childName}>{child.name}</Text>
                <Text style={styles.centerName}>{child.center}</Text>
              </View>
              <Text style={styles.arrow}>➔</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { flex: 1, padding: 24 },
  headerContainer: { marginBottom: 32, alignItems: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', color: colors.textDark },
  subtitle: { fontSize: 14, color: colors.textMuted, marginTop: 8 },
  list: { flex: 1 },
  childCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.parentLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  avatarText: { fontSize: 20, fontWeight: 'bold', color: colors.parentPrimary },
  childInfo: { flex: 1 },
  childName: { fontSize: 18, fontWeight: '600', color: colors.textDark },
  centerName: { fontSize: 13, color: colors.textMuted, marginTop: 2 },
  arrow: { fontSize: 18, color: colors.parentPrimary },
});

export default FamilyHubScreen;