import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  FONT_FAMILY_BOLD,
  FONT_SIZE_MEDIUM,
  LIGHTBLUE,
  WHITE,
} from "../assets/styles/styles";

const Botao = ({ titulo, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.botaoContainer}>
        <Text style={styles.botaoTexto}>{titulo}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  botaoContainer: {
    backgroundColor: LIGHTBLUE,
    padding: 20,
    borderRadius: 6,
  },
  botaoTexto: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_MEDIUM,
    color: WHITE,
  },
});
export default Botao;
