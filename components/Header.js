import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}> SHOPPING LIST ASSIGNMENT </Text>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "transparent",
  },
  headerText: {
    color: "green",
    paddingVertical: 15,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
  },
});
