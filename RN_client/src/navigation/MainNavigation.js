import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RoleSelectionScreen from '../screens/RoleSelection/RoleSelectionScreen';
import WorkerLoginScreen from '../screens/WorkerLogin/WorkerLoginScreen';
import ParentLoginScreen from '../screens/ParentLogin/ParentLoginScreen';
import RegisterChildScreen from '../screens/RegisterChild/RegisterChildScreen';
import WorkerDashboardScreen from '../screens/WorkerDashboard/WorkerDashboardScreen';
import QRAttendanceScreen from '../screens/QRAttendance/QRAttendanceScreen';
import GrowthDataEntryScreen from '../screens/GrowthDataEntry/GrowthDataEntryScreen';
import HealthAlertsScreen from '../screens/HealthAlerts/HealthAlertsScreen';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="RoleSelection"
        screenOptions={{
          headerShown: false, // We are hiding default headers to use our custom UI
        }}
      >
        {/* Entry Point */}
        <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />

        {/* Worker Branch */}
        <Stack.Screen name="WorkerLogin" component={WorkerLoginScreen} />
        <Stack.Screen
          name="WorkerDashboard"
          component={WorkerDashboardScreen}
        />
        <Stack.Screen name="RegisterChild" component={RegisterChildScreen} />
        <Stack.Screen name="QRAttendance" component={QRAttendanceScreen} />
        <Stack.Screen
          name="GrowthDataEntry"
          component={GrowthDataEntryScreen}
        />
        <Stack.Screen name="HealthAlerts" component={HealthAlertsScreen} />

        <Stack.Screen name="ParentLogin" component={ParentLoginScreen} />

        {/* We will add ParentLogin here next! */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
