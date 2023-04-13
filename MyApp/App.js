import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bonjour tt les monde !</Text>
      <StatusBar style="auto" />
    </View>
    
  );
  return (
    <View style={styles.containere}>
      <TextInput></TextInput>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containere: {
    flex: 1,
    backgroundColor: '#yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
