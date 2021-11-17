import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../constants/colors";
import Title from "./Title";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Title style={styles.headerTitle}>{props.title}</Title>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "black",
    fontSize: 20,
    fontFamily:'open-sans-bold'
  },
});

export default Header;
