import './App.css';
import { useState } from 'react';


function App() {

  // let lista = ["mancare", "somn", "1", "citit"];
  const [todo, setTodo] = useState("");
  const [lista, setLista] = useState([]);

  function adauga(){
    setLista([...lista, todo]);
    setTodo("");
  }

  function sterge(){
    setLista([]);
  }


  return (
    <div>
      <input 
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Ce vrei sa faci?'
      />
      <button onClick={adauga}>Adauga</button>
      <button onClick={sterge}>Sterge</button>


      <ol>
        {
          lista.map((el) => {
            return (
              <li>{el}</li>
            )
          })
        }
      </ol>

    </div>
  );
}

export default App;
