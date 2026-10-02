import { MEZOLISTA } from "../adatok";

interface SugoProps {
    lepes:number,
    jel:string
}

export default function Sugo({ lepes, jel }: SugoProps) {
    
    const nincsTobbLepes = lepes >= MEZOLISTA.length ? lepes = 8 : "";

    return(
        <>
            <div className={`sugo ${nincsTobbLepes}`}>
                <p>{jel} játékos következik</p>
                <p>lépés: {lepes+1}</p>
            </div>
        </>
    )
}