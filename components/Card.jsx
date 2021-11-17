import React from "react";
import { StyleSheet, View } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 4,
    shadowOpacity: 0.26,
    elevation: 5,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "white",
  },
});

export default Card;
