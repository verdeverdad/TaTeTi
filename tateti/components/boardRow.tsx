import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

export const BoardRow = ({ children }: {children: React.ReactNode}) => {
  return <View style={styles.boardRow}>{children}</View>;
};
//children: Es una prop especial que representa los elementos hijos 
// que se pasan al componente BoardRow Define el tipo de la prop children 
// como React.ReactNode. Esto significa que children puede ser
//  cualquier cosa que React pueda renderizar, como otros componentes, 
// elementos JSX o cadenas de texto.