import { CircularProgress, colors } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Quiz.css';
import Questions from './Questions.js';

const Quiz = ({name,score,questions,setQuestions, setScore}) => {
  const [options,setOptions]=useState(0)
  const[currQuest,setCurrQues]=useState(0)
  const handleShuffle=(optionss)=>{
    return optionss.sort(()=>Math.random()-0.5)
  }
  useEffect(()=>{
    setOptions(questions && handleShuffle([questions[currQuest]?.correct_answer, ...questions[currQuest]?.incorrect_answers]))
  },[questions,currQuest]);
  console.log(questions)
  return (
    <div className='quiz'>
      <span className='subtitle'>Welcome, {name}</span>
      {questions?(
        <>
         <div className='quizInfo'>
          <span>{questions[currQuest].category}</span>
          <span>Score: {score}</span>
         </div>
         <Questions currQuest={currQuest}  setCurrQues={setCurrQues} questions={questions} options={options} correct={questions[currQuest]?.correct_answer} score={score} setScore={setScore} setQuestions={setQuestions} />
        </>
      ):(
        <CircularProgress style={{margin: 100}} color='inherit' size={150} thickness={1}/>
      )}
    </div>
  );
}

export default Quiz;
