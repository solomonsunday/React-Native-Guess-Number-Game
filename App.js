import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartNameScreen from './screrens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guessing Game" />
      <StartNameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})


