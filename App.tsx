/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import ContainerForm from './src/components/ContainerForm/ContainerForm';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ContainerForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
