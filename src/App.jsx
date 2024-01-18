import './App.css';
import { useState } from 'react';


function App() {

  const [todo, setTodo] = useState("");
  const [lista, setLista] = useState([]);

  function adauga(){
    setLista([...lista, todo]);
    setTodo("");
  }

  // functie pentru 
  function reset(){
    setLista([]);
  }

  function removeItem(item){
    // facem o lista noua, bazata pe lista originala
    let listaNoua = lista.filter((el) => {
      // Daca elementul curent este diferit de item
      //(ce vrem sa eliminam), il pastram
      if(el!==item){
        return true; // Daca returnam true, pastreaza elementul
      }
      else return false; // Daca returnam false, elimina elementul
    })

    // Actualizam state-ul lista
    setLista(listaNoua);
  }
  //


  return (
    <div>
      <input 
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Ce vrei sa faci?'
      />
      <br/>
      <button onClick={adauga}>Adauga</button>
      <br/>
      <button onClick={reset}>Reset</button>


      <ul>
        {
          lista.map((el) => {
            return (
              <li>
                {el}
                <button onClick={() => removeItem(el)}>Sterge</button>
              </li>
            )
          })
        }
      </ul>

    </div>
  );
}

export default App;
