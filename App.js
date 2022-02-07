import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import GameScreen from './screrens/GameScreen';
import StartNameScreen from './screrens/StartGameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  let content = <StartNameScreen startGameHandler={startGameHandler} />

  if (userNumber) {
    content = <GameScreen userNumber={userNumber} />
  }


  return (
    <View style={styles.screen}>
      <Header title="Guessing Game" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})


