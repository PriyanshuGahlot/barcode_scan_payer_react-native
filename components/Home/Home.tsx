import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Scan from './Scan';
import ScaningScreen from '../ScaningScreen/ScaningScreen';
import UserTopBar from './UserTopBar';
import RecentScans from './RecentScans';

export type HomeStackParamList = {
  HomeMain: undefined;
  ScanningScreen: undefined;
};

const Stack = createStackNavigator<HomeStackParamList>();


function HomeMain({ navigation }: any) {
  return (
    <View>
      <UserTopBar />
      <Scan navigation={navigation} />
      <RecentScans />
    </View>
  );
}

export default function Home() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeMain} />
      <Stack.Screen name="ScanningScreen" component={ScaningScreen} />
    </Stack.Navigator>
  );
}
