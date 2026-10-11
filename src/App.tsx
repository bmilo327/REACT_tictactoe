import './App.css'
import JatekTer from './components/JatekTer'
import Sugo from './components/Sugo';
import { useMezoContext } from './contexts/MezoContext';

export default function App() {
  const { lista, lepes, mezoKivalaszt } = useMezoContext();

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
