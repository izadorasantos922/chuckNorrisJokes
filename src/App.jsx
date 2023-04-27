import { useEffect, useState } from 'react'
import chuck from './assets/chuck.png'
import './App.css'

function App() {
  const [joke, setJoke] = useState("");
  

const getJoke = () =>{
  fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data => setJoke(data.value));
}

  return (
    <div className='card'>
    <img src={chuck} alt="Chuck Noris" />
      <h1>Click the button to read a joke </h1>
      { joke ? (
        <p>"{joke}"</p>
      ) : (
        <p></p>
      )}
    <button type="button" onClick={getJoke}>New joke</button>
  </div>
  )
}

export default App
