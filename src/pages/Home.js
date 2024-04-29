import React, { useState } from 'react';
import './Home.css';
import { Button, MenuItem, TextField } from '@mui/material';
import Categories from '../data/Categories';
import { useNavigate } from 'react-router';
import ErrorMessage from '../components/ErrorMessage';

const Home = ({name,setName,fetchQuestions}) => {
const[category,setCategory]=useState('')
const [difficulty,setDifficulty]=useState('')
const [error,setError]=useState(false)
const navigate=useNavigate()
const handleSubmit=()=>{
    if(!category || !difficulty ||!name){
        setError(true)
        return
    }
    else{
        setError(false)
        fetchQuestions(category,difficulty)
        navigate('/quiz')
    }
}
  return (
    <div className='content'>
      <div className='settings'>
        <span style={{fontSize:30}}>Quiz Settings</span>
        <div className='settings_select'>
            {error && <ErrorMessage>Please fil the fields</ErrorMessage>}
            <TextField style={{marginBottom:25}} label='Enter your name' variant='outlined' onChange={(e)=>setName(e.target.value)} value={name}/>
            <TextField select label='Select category' variant='outlined' style={{marginBottom:30}}onChange={(e)=>setCategory(e.target.value)} value={category}>
            {Categories.map((category)=>(
                <MenuItem key={category.category} value={category.value}>{category.category}</MenuItem>
            ))}
            </TextField>
            <TextField select label='Select difficulty' variant='outlined' style={{marginBottom:30}} onChange={(e)=>setDifficulty(e.target.value)} value={difficulty} >
            <MenuItem key='Easy' value='easy'>Easy</MenuItem>
            <MenuItem key='Medium' value='medium'>Medium</MenuItem>
            <MenuItem key='Hard' value='hard'>Hard</MenuItem>
            </TextField>
            <Button variant='contained' color='primary' size='large' onClick={handleSubmit}>Start Quiz</Button>
        </div>
      </div>
      <img src='/quiz.svg' className='banner' alt='quiz img'/>
    </div>
  );
}

export default Home;
