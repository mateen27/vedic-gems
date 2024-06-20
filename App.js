import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './src/navigation/stack/StackNavigator';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <StackNavigator/>
    </>
  );
}
