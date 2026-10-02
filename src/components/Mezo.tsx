import type { MezoTipus } from "../adatok";
import "./jatekter.css";

interface MezoProps {
    mezom: MezoTipus,
    index: number,
    mezoKivalaszt: (index:number)=>void
}

export default function Mezo({mezom, index, mezoKivalaszt}: MezoProps) {
    const uresE = mezom.jel !== "" ? "foglalt" : "ures";
    
    function kattintasKezeles() {
        if (mezom.jel === "") {
            mezoKivalaszt(index);
        }
    }

    return(
        <div className={`mezo ${uresE}`} onClick={kattintasKezeles}>
            <p>{mezom.jel}</p>
        </div>
    )
}