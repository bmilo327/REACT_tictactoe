import { useMezoContext } from "../contexts/MezoContext";

interface SugoProps {
    lepes:number,
    jel:string
}

export default function Sugo({ lepes, jel }: SugoProps) {
    const { nincsTobbLepes, gyoztes } = useMezoContext();
    
    return(
        <>
            <div className={`sugo ${nincsTobbLepes}`}>
            {gyoztes ? (
                <p><strong>Győztes: {gyoztes} játékos!</strong></p>
            ) : lepes >= 9 ? (
                <h2>Döntetlen!</h2>
            ) : (
                <>
                    <p>{jel} játékos következik!</p>
                    <p>Lépés: {lepes + 1}</p>
                </>
            )}
        </div>
        </>
    )
}