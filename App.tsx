import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import './styles.css';

export default function App() {
  return (
    <View className="h-full max-h-96">
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}