import React from 'react';
import './App.css';



const Li = (props)=> {
    return <li>{props.nome}</li>
}

const Ul = (props)=> { 
  const nomi=props.elenco.map(nomelenco => <Li nome={nomelenco}/>)
  return <ul>
    {nomi}
  </ul>
}

const ELENCO= ["Sara","Andrea","Gabriele"] ; // tutto maiuscolo perchè è una costante, enon utilizzare le grafe


class App extends React.Component {
  state={statoInput:"a"}

  gestisciOnChange=(event)=>{

    console.log(event.target.value) // qui mi stampa quello che scrivo nella console 
    console.log("test.stato.input",this.state) // qui mi stampa lo stato nella console con (un valore in meno )
    this.setState ({ statoInput: event.target.value}, ()=>console.log("test.stato.input",this.state)) //qui mi stampa il valore completo ()=>
    
  }
  
  render(){ 
     //const listaFiltrata = ELENCO

    const listaFiltrata = ELENCO.filter(elemento=>(elemento.indexOf(this.state.statoInput)>=0)) //const al posto di Var
    console.log(listaFiltrata)
   

  return ( // il valore di Elenco tra quadre perchè sto passando il dato della props
    <div className="App">
      <header className="App-header">
      <input onChange={this.gestisciOnChange}/>
      <Ul elenco={listaFiltrata}/>
      </header>
    </div>
  );
}
}

export default App;
