import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Square } from "./square";
import { calculateWinner } from "@/utils";


export const Tablero = () => {

    
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
  
    const winner = calculateWinner(squares);
    const status = winner
      ? `Ganador: ${winner}`
      : `Próximo Jugador: ${xIsNext ? "X" : "O"}`;
return <View style={styles.boardContainer}>
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
    </View>;
}

