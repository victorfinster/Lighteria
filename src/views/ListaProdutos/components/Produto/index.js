import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
export const Item = ({
  imagem,
  titulo,
  id,
  estudio,
  itemName,
  preco,
  itemDesc,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push("DetalhesProduto", {
          imagem,
          titulo,
          id,
          estudio,
          itemName,
          preco,
          itemDesc,
        });
      }}
      style={styles.containerItem}
    >
      <Image style={styles.imagem} source={imagem} resizeMode="contain" />
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    height: 168,
    backgroundColor: "#fff",
    borderRadius: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  imagem: {
    height: 84,
  },
  texto: {
    marginTop: 8,
    fontFamily: "OpenSans-SemiBold",
    fontSize: 14,
    color: "#848486",
  },
});
