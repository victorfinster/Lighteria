import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  FONT_FAMILY_BOLD,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_X_LARGE,
  FONT_SIZE_SMALL,
  WHITE,
  FONT_FAMILY_REGULAR,
  BLACK,
  FONT_SIZE_LARGE,
  LIGHTERGRAY,
  LIGHTGRAY,
} from "../../../../assets/styles/styles";
import Botao from "../../../../components/botao";
import { formataValor } from "../../../../utils/utils";

const DescricaoItem = ({
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
    <View style={styles.itemContainer}>
      <View style={styles.itemPosicao}>
        <View style={styles.item}>
          <View style={styles.textoPosicao}>
            <View>
              <Text>{estudio}</Text>
              <Text>{itemName}</Text>
              <Text>{titulo}</Text>
            </View>
            <Image source={imagem} style={styles.imageItem} />
          </View>
          <Text style={styles.textoDescricao}>{itemDesc}</Text>
          <View style={styles.rodape}>
            <Text style={styles.moeda}>{formataValor(preco)}</Text>
            <Botao
              titulo={"COMPRAR"}
              width="100%"
              onPress={() => navigation.push("Checkout")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    flex: 4,
    marginTop: -60,
  },
  itemPosicao: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  imageItem: {
    width: 32,
    height: 72,
  },
  item: {
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 28,
    width: "80%",
    elevation: 4,
  },
  textoPosicao: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textSuperior: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_MEDIUM,
    marginBottom: 4,
  },
  textMedio: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_X_LARGE,
    marginBottom: 4,
  },
  textInferior: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_SMALL,
    color: LIGHTGRAY,
    marginBottom: 12,
  },
  textoDescricao: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_SMALL,
    color: LIGHTERGRAY,
  },
  rodape: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  moeda: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_LARGE,
    marginTop: 10,
    color: BLACK,
  },
});
export default DescricaoItem;
