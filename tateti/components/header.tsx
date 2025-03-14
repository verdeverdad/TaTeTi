import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface headerProps {
  status: string,
  onRefreshPress: any
}

export const Header = ({ status, onRefreshPress }: headerProps) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{status}</Text>
      <TouchableOpacity onPress={onRefreshPress}>
        <MaterialCommunityIcons name="restart" size={40} color="#e1e1e1" />
      </TouchableOpacity>
    </View>
  );
};