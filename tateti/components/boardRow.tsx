import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

export const BoardRow = ({ children }: {children: React.ReactNode}) => {
  return <View style={styles.boardRow}>{children}</View>;
};