import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import Header from "./components/Header";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRound, setGuessRound] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(error) =>
          Alert.alert("Error", "An error occurd" + error, [
            { text: "Ok", style: "destructive" },
          ])
        }
      />
    );
  }

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
