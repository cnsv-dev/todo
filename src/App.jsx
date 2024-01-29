import './App.css';


function ElementLista(){
  return(

    <div className='elementLista'>
    <p className='textLista'>dadada</p>
    <button className='Butonescu'>ok</button>
    </div>
  )
}
function App() {

  return (
    <div className='lista'>
      <ElementLista/>
      <ElementLista/>
    </div>
  );
}

export default App;