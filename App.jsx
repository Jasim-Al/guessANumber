import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRound, setGuessRound] = useState(0);

  const configNewGameHandler = () => {
    setGuessRound(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  const gameOverHandler = (numberOfRounds) => {
    setGuessRound(numberOfRounds);
  };

  if (userNumber && guessRound <= 0) {
    content = (
      <GameScreen onGameOver={gameOverHandler} userChoice={userNumber} />
    );
  } else if (guessRound > 0) {
    content = (
      <GameOverScreen
        onNewGame={configNewGameHandler}
        userNumber={userNumber}
        guessRound={guessRound}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="GUESS A NUMBER" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
