import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Main.css'
export default function Main() {

    const inputRef = useRef(null)
  return (
    <div className='container'>
        <h1 className='title text-light'> Quiz Application</h1>

        <ol>
            <li>You will be asked 10 questions one after another</li>
            <li>Each question have three options. you can choose only one</li>
            <li>You can review and change answer before the quiz finish </li>
            <li>The result will be declared at end of the quiz</li>

        </ol>

        <form id ='form'>
            <input ref={inputRef} className='userid' type='text' placeholder='Username*'/>
        </form>

        <div className='start'>
<Link className='btn' to={'quiz'}>Start Quiz</Link>
        </div>
    </div>
  )
}

