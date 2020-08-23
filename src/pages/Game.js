import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Board from '../components/Board';
import Timer from '../components/Timer';
import UserAnswers from '../components/UserAnswers';
import GameButtons from '../components/GameButtons';

import { dice } from '../constants/board';
import { shuffle } from '../helpers/utils';


const MainWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;

`;

const GameWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

function Game() {
  const [shuffledDice, setShuffledDice] = useState([]);
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [isBoardRefreshing, setIsBoardRefreshing] = useState(false);

  useEffect(() => {
    setShuffledDice(shuffle(dice))
  }, [])
  return (
    <MainWrapper>
      <GameWrapper>
        <GameButtons
          isTimerOn={isTimerOn}
          setIsTimerOn={setIsTimerOn}
          setIsBoardRefreshing={setIsBoardRefreshing} />
        <Board
          isBoardRefreshing={isBoardRefreshing}
          setIsBoardRefreshing={setIsBoardRefreshing}
          shuffledDice={shuffledDice}
          setShuffledDice={setShuffledDice}
          isTimerOn={isTimerOn}
        />
        <Timer
          isTimerOn={isTimerOn}
          setIsTimerOn={setIsTimerOn} />
        <UserAnswers isTimerOn={isTimerOn} />
      </GameWrapper>
    </MainWrapper>
  );
}

export default Game;
