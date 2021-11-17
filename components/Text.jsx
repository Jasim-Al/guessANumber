import React from "react";
import { StyleSheet, Text as RnText } from "react-native";

const Text = (props) => (
  <RnText style={{ ...styles.text, ...props.style }}>{props.children}</RnText>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans",
  },
});

export default Text;
