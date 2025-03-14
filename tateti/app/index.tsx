import {  useState } from "react";
import { SafeAreaView } from "react-native";
import { styles } from "@/components/styles";
import { Footer } from "@/components/footer";
import { Board } from "@/components/tablero";
import { HistoryModal } from "@/components/modal";

export default function Game() {
  // const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);// array inicial todos los valores null
  const [isModalVisible, setIsModalVisible] = useState(false); // modal de historial en principio oculto
  const [currentMove, setCurrentMove] = useState(0); // jugada actual en inicio 0
  const xIsNext = currentMove % 2 === 0 //jugada si es par o impar si es par es "x"
  const currentSquares = history[currentMove]; //jugada actual

  const onRestartHandler = () => {
    setCurrentMove(0);  //la jugada vuelve a cero
    setHistory([Array(9).fill(null)]); // el array inicial todo en null
  };

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  function handlePlay(nextSquares: any) { // sobre escribe el array del inicio y lo guarda en nextHistory
    setHistory([...history, nextSquares]);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1)
  }

  const onShowHistoryModal = () => { //muestra el modal
    setIsModalVisible(true);
  };

  const onHideHistoryModal = () => {//oculta el modal
    setIsModalVisible(false);
  };

 

  return (
    <SafeAreaView style={styles.container}>
      <Board
        xIsNext={xIsNext}
        squares={currentSquares}
        onRestart={onRestartHandler}
        onPlay={handlePlay}
      />
      <Footer onShowHistory={onShowHistoryModal} />
      <HistoryModal
        isVisible={isModalVisible}
        onClose={onHideHistoryModal}
        history={history}
        onHistoryButtonPress={jumpTo}
      />
      
    </SafeAreaView>
  );
}

