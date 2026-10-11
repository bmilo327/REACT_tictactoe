import type { MezoTipus } from "../adatok";

const NYERO_KOMBINACIOK = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

export function gyozelemEllenorzes(lista: MezoTipus[]): string | null {
    for (const kombi of NYERO_KOMBINACIOK) {
        const [a, b, c] = kombi;
        if (
            lista[a].jel !== "" &&
            lista[a].jel === lista[b].jel &&
            lista[a].jel === lista[c].jel
        ) {
            return lista[a].jel;
        }
    }
    return null;
}