import React, {useState} from 'react';
import { RiCloseCircleFill } from 'react-icons/ri';

import styled from 'styled-components';

const FormWrapper = styled.div`
  min-width: 200px;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  border: 3px solid #d8c030;
  border-radius: 10px;
  line-height: 25px;
  outline: none;
  font-family: 'Nunito', sans-serif;
  font-size: 18px;
  font-weight: 700;
  padding: 5px;
  color: #486090;

  :disabled {
    border: 3px solid #9e9e9e;
  }
`;

const AnswersWrapper = styled.div`
  color: #486090;
  font-size: 16px;
  font-weight: 700;
  max-height: 400px;
  overflow: scroll;
  background: white;
  border-radius: 10px;
  margin-top: 10px;
  border: 1px solid #e0e0e0;
`;

const Button = styled.div`
  background: none;
  color: #f06078;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

const Answer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`;

const ScoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  font-size: 30px;
  color: #00a8a8;
  font-weight: bold;
`;

const UserAnswers = ({isTimerOn}) => {
  const [answers, setAnswers] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    console.log(e.target.value)
    setInputValue(e.target.value)
  }

  const submitAnswer = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    let score = inputValue.length - 2;
    setAnswers([{ value: inputValue, score }, ...answers])
    setInputValue('')
  }

  const deleteAnswer = (index) => {
    const currentAnswers = [...answers]

    currentAnswers.splice(index, 1);
    setAnswers(currentAnswers);
  }

  const calculateScore = () => {
    console.log(answers.reduce((acc, currentValue) => (acc + currentValue.score), 0), 'TEST')
    return answers.reduce((acc, currentValue) => {
      console.log(currentValue, 'CHECK VAL')
      return acc + currentValue.score
    }, 0)
  }

  return (
    <FormWrapper>
      <div>
      <form onSubmit={(e) => { submitAnswer(e) }}>
        <Input value={ inputValue } onChange={(e) => { handleInputChange(e) }} disabled={!isTimerOn}/>
      </form>
      {
        !!answers.length && !isTimerOn && <ScoreWrapper>
          SCORE: {calculateScore()}
        </ScoreWrapper>
      }
      {!!answers.length && <AnswersWrapper>
        {
          !!answers.length && answers.map((answer, i) => 
          (<Answer key={i}>{answer.value.toUpperCase()} <Button onClick={() => {deleteAnswer(i)}}> <RiCloseCircleFill /> </Button>  </Answer>)
          )
        }
      </AnswersWrapper>}
      </div>
    </FormWrapper>
  )
}

export default UserAnswers;