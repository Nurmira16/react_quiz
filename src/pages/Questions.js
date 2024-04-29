import React, { useState } from 'react';
import './Questions.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
import ErrorMessage from '../components/ErrorMessage';

const Questions = ({currQuest, setCurrQues, questions, options ,correct ,score,setScore}) => {
  const [selected,setSelected]=useState()
  const [error,setError]=useState(false)
  const navigator=useNavigate()
  const handleCheck=(i)=>{
    setSelected(i);
    if(i===correct) setScore(score+1);
    setError(false)
  }
  const handleSelect=(i)=>{
    if(selected===i && selected===correct){
      return 'select'
    }
    else if(selected===i && selected!==correct){
      return 'wrong'
    }
    else if(i===correct){
      return 'select'
    }
  }
  const handleQuit=()=>{

  }
  const handleNext=()=>{
    if(currQuest>8){
      navigator('/result')
    }
    else if(selected){
      setCurrQues(currQuest+1)
      setSelected()
    }
    else{
      setError("Please select an option first")
    }
  }
  return (
    <div className='question'>
      <h1>Question {currQuest+1}</h1>
      <div className='singleQuestion'>
        <h2>{questions[currQuest].question}</h2>
        <div className='options'>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options && options.map(i=>(
            <button onClick={()=>handleCheck(i)} className={`singleOption ${selected && handleSelect(i)}`} key={i} disabled={selected} >
              {i}
            </button>
          ))}
          <div className='controls'>
            <Button variant='contained' color='secondary' size='large' style={{width:185}} href='/' onClick={handleQuit}>Quit</Button>
            <Button variant='contained' color='primary' size='large' style={{width:185}}onClick={handleNext} >Next Question</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
