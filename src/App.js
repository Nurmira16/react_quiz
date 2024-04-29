import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Result from './pages/Result';
import Quiz from './pages/Quiz';
import axios from 'axios';
const App = () => {
  const [name,setName]=useState("")
  const [questions,setQuestions]=useState()
  const [score,setScore]=useState(0)
  const fetchQuestions=async(category="",difficulty="")=>{
    const {data}=await axios.get(`https://opentdb.com/api.php?amount=10${
      category && `&category=${category}`
    }${difficulty && `&difficulty=${difficulty}`}&type=multiple`);
    setQuestions(data.results)
  }
  console.log(questions);
  
  return (
    <>
    <div className='app' style={{backgroundImage:'url(../q.png)'}}>
      <Header/>
      <Routes>
        <Route path='/'exact element={<Home fetchQuestions={fetchQuestions} name={name} setName={setName}/>}></Route>
        <Route path='/result'exact element={<Result score={score} name={name}/>}></Route>
        <Route path='/quiz'exact element={<Quiz name={name} questions={questions} setScore={setScore} score={score} setQuestions={setQuestions} />}></Route>
      </Routes>
    </div>

    <Footer/>
    </>
  );
}

export default App;
