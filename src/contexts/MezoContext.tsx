import { createContext, useContext, useState, type ReactNode } from "react";
import { MEZOLISTA, type MezoTipus } from "../adatok";
import { gyozelemEllenorzes } from "../components/jatekLogika";

type MezoContextValue = {
    lista: MezoTipus[],
    lepes:number,
    jel:string,
    nincsTobbLepes: string,
    gyoztes: string | null,
    mezoKivalaszt: (index:number)=>void,
    kattintasKezeles: (index:number)=>void    
}

export const MezoContext = createContext<MezoContextValue | undefined>(undefined);

type MezoProviderProps = {
    children: ReactNode
}

export function MezoProvider({ children }: MezoProviderProps) {
    const [lista, setLista] = useState(MEZOLISTA);
    const [lepes, setLepes] = useState(0);
    const [gyoztes, setGyoztes] = useState<string | null>(null);
    
    function kattintasKezeles(index: number) {
        if (lista[index].jel === "" && !gyoztes) {
            mezoKivalaszt(index);
        }
    }

    function mezoKivalaszt(index: number) {
        if (lista[index].jel !=="") return;
        
        const ujLista: MezoTipus[] = [...lista];
        ujLista[index] = { ...ujLista[index], jel: lepes % 2 === 0 ? 'O' : 'X'};
        setLepes(lepes + 1);
        setLista(ujLista);

        const nyertesJel = gyozelemEllenorzes(ujLista);
        if (nyertesJel) {
            setGyoztes(nyertesJel);
        }
    }

    return (
        <MezoContext.Provider 
            value={{ 
                lista: lista,  
                lepes: lepes, 
                jel: lepes % 2 === 0 ? 'O' : 'X',
                nincsTobbLepes: lepes >= MEZOLISTA.length ? "nincsTobbLepes" : "",
                gyoztes,
                mezoKivalaszt, 
                kattintasKezeles,
            }}>
            {children}
        </MezoContext.Provider>
    );
}

export function useMezoContext() {
    const context = useContext(MezoContext);
    if (context === undefined) {
        throw new Error("useMezoContext must be used within a MezoProvider");
    }
    return context;
}