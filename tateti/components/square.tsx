import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface SquareProps {
    value: string;
    onSquarePress: VoidFunction

}

export const Square = ({ value, onSquarePress }: SquareProps )=> {
    return (
      <View style={styles.square}>
        <TouchableOpacity style={styles.pressable} onPress={onSquarePress}>
          <Text style={styles.squareText}>{value}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  