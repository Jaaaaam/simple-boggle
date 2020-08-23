import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

const BoardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const BoardGrid = styled.div`
  margin: 25px;
  border: 5px solid #00a8a8;
  border-radius: 10px;
`;

const Square = styled.div`
  height: 80px;
  width: 80px;
  border: 2px solid #00a8a8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 45px;
  background-color: #fff;
  font-weight: bold;
  color: #3060a8;
`;

const Board = ({isBoardRefreshing, setIsBoardRefreshing, isTimerOn, shuffledDice}) => {

  const boardSize = 4;
  const [boardSizeArr, setBoardSizeArray] = useState([]);

  const generateBoardArray = () => {
    const currentBoardSizeArr = []
      for (let i = 0; i < boardSize; i++) {
        currentBoardSizeArr.push(Math.floor(Math.random() *6));
      }
      return currentBoardSizeArr;
  }

  useEffect(() => {
      setBoardSizeArray(generateBoardArray());
  }, [])

  useEffect(() => {
    if (isTimerOn) {
      setBoardSizeArray(generateBoardArray());
    }
  }, [isTimerOn])

  useEffect(() => {
    if (isBoardRefreshing) {
      setBoardSizeArray(generateBoardArray());
      setIsBoardRefreshing(false)
    }
  }, [isBoardRefreshing, setIsBoardRefreshing])

  const renderBoard = () => {
    
    console.log(boardSizeArr, 'RERENDER BOARD')
    return (<BoardWrapper>
        <BoardGrid>
          {shuffledDice.length && boardSizeArr.map((randomIndex, i) => {
            console.log(boardSizeArr, 'cjecl')
            return (<div key={i} style={{ display: 'flex' }}>
            <Square>{shuffledDice[0 + (boardSize * i)][randomIndex]}</Square>
            <Square>{shuffledDice[1 + (boardSize * i)][randomIndex]}</Square>
            <Square>{shuffledDice[2 + (boardSize * i)][randomIndex]}</Square>
            <Square>{shuffledDice[3 + (boardSize * i)][randomIndex]}</Square>
            </div>)
          })}
        </BoardGrid>
    </BoardWrapper>)
  }

  return (
    <div>
      { renderBoard() }
    </div>
  )
}

export default Board;