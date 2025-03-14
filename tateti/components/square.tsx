import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface SquareProps {
    value: null | "X" | "O";
    onSquarePress: () => void;

}

export const Square = ({ value, onSquarePress }: SquareProps )=> {
    return ( //cuando se presiona ejecuta la funcion y muestra el valor x u o
      <View style={styles.square}> 
        <TouchableOpacity style={styles.pressable} onPress={onSquarePress}> 
          <Text style={styles.squareText}>{value}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  