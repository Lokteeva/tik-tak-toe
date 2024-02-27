import { useState } from "react";
import * as Styled from "./styles";
import { Button } from "../components/Button/Button";

const SYMBOL_X = "X";
const SYMBOL_O = "O";

const computeWinner = (cells) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return [a, b, c];
    }
  }
};

export default function HomePage() {
  const [cells, setCells] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [currentStep, setCurrentStep] = useState(SYMBOL_O);
  const [winnerSequence, setWinnerSequence] = useState();

  const handleCellClick = (index) => {
    if (cells[index] || winnerSequence || isDraw) {
      return;
    }
    const cellsCopy = cells.slice();
    cellsCopy[index] = currentStep;
    const winner = computeWinner(cellsCopy);

    setCells(cellsCopy);
    setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);
    setWinnerSequence(winner);
  };

  const getSymbolClassName = (symbol) => {
    if (symbol === SYMBOL_O) return "symbol--o";
    if (symbol === SYMBOL_X) return "symbol--x";
    return "";
  };

  const renderSymbol = (symbol) => (
    <Styled.Span className={`symbol ${getSymbolClassName(symbol)}`}>
      {symbol}
    </Styled.Span>
  );

  const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined;
  const isDraw = !winnerSequence && cells.filter((value) => value).length === 9;

  const newGame = () => {
    setCells([null, null, null, null, null, null, null, null, null]);
    setCurrentStep(SYMBOL_X);
    setWinnerSequence();
  };

  return (
    <Styled.Wrapper>
      <Styled.Center style={{ fontSize: "30px" }}>
        {isDraw ? "Ничья! " : winnerSequence ? "Победитель: " : "Ход: "}
        {!isDraw && renderSymbol(winnerSymbol ?? currentStep)}
      </Styled.Center>
      <Styled.Grid>
        {cells.map((symbol, index) => {
          const isWinner = winnerSequence?.includes(index);
          return (
            <Styled.Cell
              key={index}
              className={`cell ${isWinner ? "cell--win" : ""}`}
              onClick={() => handleCellClick(index)}
            >
              {symbol ? renderSymbol(symbol) : null}
            </Styled.Cell>
          );
        })}
      </Styled.Grid>
      <Styled.Center>
        <Button onClick={newGame}>Новая игра</Button>
      </Styled.Center>
    </Styled.Wrapper>
  );
}
