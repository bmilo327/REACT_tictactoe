import type { MezoTipus } from "../adatok";
import { useMezoContext } from "../contexts/MezoContext";
import "./jatekter.css";

interface MezoProps {
    mezom: MezoTipus,
    index: number,
    mezoKivalaszt: (index:number)=>void
}

export default function Mezo({mezom, index}: MezoProps) {
    const { kattintasKezeles } = useMezoContext();
    const uresE = mezom.jel !== "" ? "foglalt" : "ures";

    return(
        <div className={`mezo ${uresE}`} onClick={() => kattintasKezeles(index)}>
            <p>{mezom.jel}</p>
        </div>
    )
}