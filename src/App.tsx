import { useState } from 'react'

import './App.css'
import JatekTer from './components/JatekTer'
import { MEZOLISTA, type MezoTipus } from './adatok'
import Sugo from './components/Sugo';

export default function App() {
  const [lista, setLista] = useState(MEZOLISTA);
  const [lepes, setLepes] = useState(0);

  function mezoKivalaszt(index: number) {
    if (lista[index].jel !=="") return;
    
    const ujLista: MezoTipus[] = [...lista];
    ujLista[index] = { ...ujLista[index], jel: lepes % 2 === 0 ? 'O' : 'X'};
    setLepes(lepes + 1);
    setLista(ujLista);
  }

  return (
    <>
      <header>
        <h1>TicTacToe</h1>
      </header>
      <article>
        <JatekTer lista={lista} mezoKivalaszt={mezoKivalaszt}/>
        <Sugo lepes={lepes} jel={lepes % 2 === 0 ? 'O' : 'X'}/>
      </article>
      <footer>
        <p>Bernáth Milán</p>
      </footer>
    </>
  )
}
