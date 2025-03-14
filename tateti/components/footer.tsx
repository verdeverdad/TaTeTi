import React from "react";
import { View, Button } from "react-native";
import { styles } from "./styles";
import { HistoryModal } from "./modal";

export const Footer = ({ onShowHistory }: any) => {
    return (
      <View style={styles.footer}>
        <Button title="Mostrar Historial" onPress={onShowHistory} />
      </View>
    );
  };