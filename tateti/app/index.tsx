import React, { useState } from "react";
import { SafeAreaView, Text, View, Button, TouchableOpacity, Alert } from "react-native";
import { styles } from "@/components/styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { calculateWinner } from "@/utils";
import { Square } from "@/components/square";


export default function Index() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const onPressHandler = (index: number) => () => {
    if (squares[index] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[index] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };
  const onRestartHandler = () => {
    setXIsNext(true);
    setSquares(Array(9).fill(null));
  };
  const alerta = () => {
    Alert.alert(`jugador ${winner} es el ganador`);
  };
  const winner = calculateWinner(squares);
  const status = winner ? `Ganador: ${alerta()} ${onRestartHandler()}`
    : `Próximo Jugador: ${xIsNext ? "X" : "O"}`;

 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.headerText}>{status}</Text>
          <TouchableOpacity onPress={onRestartHandler}>
            <MaterialCommunityIcons name="restart" size={52} color="white" />
          </TouchableOpacity>;
        </View>
        <View style={styles.boardContainer}>

          <View style={styles.boardRow}>
            <Square value={squares[0]} onSquarePress={onPressHandler(0)} />
            <Square value={squares[1]} onSquarePress={onPressHandler(1)} />
            <Square value={squares[2]} onSquarePress={onPressHandler(2)} />
          </View>
          <View style={styles.boardRow}>
            <Square value={squares[3]} onSquarePress={onPressHandler(3)} />
            <Square value={squares[4]} onSquarePress={onPressHandler(4)} />
            <Square value={squares[5]} onSquarePress={onPressHandler(5)} />
          </View>
          <View style={styles.boardRow}>
            <Square value={squares[6]} onSquarePress={onPressHandler(6)} />
            <Square value={squares[7]} onSquarePress={onPressHandler(7)} />
            <Square value={squares[8]} onSquarePress={onPressHandler(8)} />
          </View>
        </View>
        <View style={styles.footer}>
          <Button title="Mostrar Historial" color={"skyblue"} onPress={() => { }} />
        </View>
      </View>;

    </SafeAreaView>
  );
}