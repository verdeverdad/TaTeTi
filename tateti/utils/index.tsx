
export function calculateWinner(squares: any[]) {
  const lines = [
    [0, 1, 2], //declara todas lass jugadas posibles
    [3, 4, 5], // para compararlas y ver si hay un ganador
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// "X": Si el jugador "X" ha ganado.
// "O": Si el jugador "O" ha ganado.
// null: Si no hay ganador.

// a función define un array lines que contiene todas las combinaciones posibles 
// de tres casillas que resultan en una victoria. Cada sub-array en lines representa 
// una línea ganadora, donde los números son los índices de las casillas en el array squares.
//tera a través de cada línea ganadora en el array lines.
// Para cada línea, extrae los índices de las tres casillas (a, b, c).
// Verifica si las tres casillas correspondientes a la línea actual están ocupadas
//  por el mismo jugador (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]).
// Si esta condición es verdadera, significa que hay un ganador. Si se encuentra un ganador, 
// la función devuelve el símbolo del jugador ganador ("X" o "O").