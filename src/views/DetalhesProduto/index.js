import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Background from "./components/Background";
import DescricaoItem from "./components/DescricaoItem";

const DetalhesProduto = ({ route }) => {
  const {
    imagem,
    titulo,
    id,
    estudio,
    itemName,
    preco,
    itemDesc,
  } = route.params;
  return (
    <View style={styles.container}>
      <Background />
      <DescricaoItem
        imagem={imagem}
        titulo={titulo}
        id={id}
        estudio={estudio}
        itemName={itemName}
        preco={preco}
        itemDesc={itemDesc}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DetalhesProduto;
