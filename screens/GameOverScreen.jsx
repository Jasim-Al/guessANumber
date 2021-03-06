import React from "react";
import { Button, StyleSheet, View } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";

import Text from "../components/Text";
import Title from "../components/Title";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Title>The Game Is Over!</Title>
      <Card style={styles.card}>
        <Text>Your oponent had to guess {props.guessRound} times!</Text>
        <Text>The Number Was {props.userNumber}</Text>
        <Text>Your Score Is</Text>
        <NumberContainer>{Math.floor(props.guessRound * 100)}</NumberContainer>
        <Button title="NEW GAME" onPress={props.onNewGame} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 300,
    maxWidth: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginTop:10
  },
});

export default GameOverScreen;
