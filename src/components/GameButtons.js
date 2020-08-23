import React from 'react';
import styled from 'styled-components';

import { FiRefreshCcw } from 'react-icons/fi';
import { FaPlay, FaCog, FaStop } from 'react-icons/fa';


const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 25px;
`;

const Button = styled.div`
  background: none;
  color: #f06078;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 15px;
  font-size: 25px;
  cursor: pointer;
`;

const GameButtons  = ({isTimerOn, setIsTimerOn, setIsBoardRefreshing}) => {


  const openSettings = () => {

  }

  return (
    <ButtonsWrapper>
      <Button onClick={() => {setIsBoardRefreshing(true)}}><FiRefreshCcw /></Button>
      {
        isTimerOn ? 
        <Button onClick={() => {setIsTimerOn(false)}}><FaStop /></Button>
        :
        <Button onClick={() => {setIsTimerOn(true)}}><FaPlay /></Button>
      }
      <Button onClick={() => {openSettings()}}><FaCog /></Button>
    </ButtonsWrapper>
  )
}

export default GameButtons;