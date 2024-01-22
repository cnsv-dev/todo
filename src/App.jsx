import './App.css';
import { useState } from 'react';


function App() {
const [text, setText]= useState("")
const [lista, setLista] = useState([])

function Add() {
  setLista([...lista, text])
}

function sterge(elem){
  const noualista=lista.filter((el)=> {
    if(el==elem){
      return 0;
    }
    else{
      return 1;
    }
  })
  setLista(noualista)
}

  return (
    <div>
        <input 
          placeholder='Scrie cv...' 
          value={text}
          onChange={(e)=>setText(e.target.value)}></input>
        <button onClick={Add}>ADD</button>
        <h1>{text}</h1>
        <ul>
          {
            lista.map((el) => {
              return (
                <li>
                  <button onClick={()=>sterge(el)}>-</button>
                  {el}</li>
              )
            })
          }
        </ul>
    </div>
  );
}

export default App;