import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Modal,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

import Colors from "../constants/colors";

const StartGameScreen = (props) => {
  const [enterdValue, setEnterdValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const numberInputHandler = (enterdText) => {
    setEnterdValue(enterdText.replace(/[\D]/g, ""));
  };

  const resetInputHandler = () => {
    setEnterdValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enterdValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99)
      return Alert.alert(
        "Invalid number",
        "Number has to be a number between 1 and 99.",
        [{ text: "OK", style: "destructive", onPress: resetInputHandler }]
      );
    setConfirmed(true);
    setSelectedValue(chosenNumber);
    setEnterdValue("");
    Keyboard.dismiss();
  };

  let confirmedOutPut;

  if (confirmed) {
    confirmedOutPut = (
      <Card style={styles.summaryContainer}>
        <Text>You Selected</Text>
        <NumberContainer>{selectedValue}</NumberContainer>
        <View
          style={{ ...styles.buttonContainer, width: "75%", marginTop: 15 }}
        >
          <Button
            styles={styles.button}
            title="START GAME"
            color={Colors.primary}
            onPress={() => props.onStartGame(selectedValue)}
          />
        </View>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>START A NEW GAME</Text>
        <Card style={styles.inputContainer}>
          <Text>SELECT A NUMBER</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enterdValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                onPress={confirmInputHandler}
                title="CONFIRM"
                color={Colors.primary}
              />
            </View>
            <View style={styles.button}>
              <Button
                onPress={resetInputHandler}
                title="RESET"
                color={Colors.accent}
              />
            </View>
          </View>
        </Card>
        {confirmedOutPut}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: "45%",
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  summaryContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StartGameScreen;
