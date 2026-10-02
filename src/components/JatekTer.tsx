import type { MezoTipus } from "../adatok";
import "./jatekter.css";
import Mezo from "./Mezo";

interface JatekTerProps {
    lista: MezoTipus[],
    mezoKivalaszt:(index:number)=>void,
}

export default function JatekTer({ lista, mezoKivalaszt }: JatekTerProps) {
    return(
        <div className="jatekter">
            {lista.map((e, i) => (
                <Mezo mezom={e} index={i} key={i} mezoKivalaszt={mezoKivalaszt}/>
            ))}
        </div>
    )
}