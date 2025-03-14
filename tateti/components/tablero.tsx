import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Header } from "@/components/header";
import { Square } from "@/components/square";
import { BoardRow } from "@/components/boardRow";
import { calculateWinner } from "@/utils";

type SquareValue = null | "X" | "O"; 
interface BoardProps {
  xIsNext: boolean;
  squares: SquareValue[];
  onRestart: () => void; 
  onPlay: (squares: SquareValue[]) => void; 
}

export const Board = ({ xIsNext, squares, onRestart, onPlay }: BoardProps) => {
  const onPressHandler = (index: number) => () => {
    if (squares[index] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[index] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `Ganador: ${winner}`
    : `Próximo Jugador: ${xIsNext ? "X" : "O"}`;

  return (
    <>
      <Header status={status} onRefreshPress={onRestart} />
      <View style={styles.boardContainer}>
        <BoardRow>
          <Square value={squares[0]} onSquarePress={onPressHandler(0)} />
          <Square value={squares[1]} onSquarePress={onPressHandler(1)} />
          <Square value={squares[2]} onSquarePress={onPressHandler(2)} />
        </BoardRow>
        <BoardRow>
          <Square value={squares[3]} onSquarePress={onPressHandler(3)} />
          <Square value={squares[4]} onSquarePress={onPressHandler(4)} />
          <Square value={squares[5]} onSquarePress={onPressHandler(5)} />
        </BoardRow>
        <BoardRow>
          <Square value={squares[6]} onSquarePress={onPressHandler(6)} />
          <Square value={squares[7]} onSquarePress={onPressHandler(7)} />
          <Square value={squares[8]} onSquarePress={onPressHandler(8)} />
        </BoardRow>
      </View>
    </>
  );
};