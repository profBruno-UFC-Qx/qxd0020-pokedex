export interface Pokemon {
    id: number,
    nome: string,
    img: string,
    tipos: string[],
    peso: number,
    altura: number,
    pvMax: number,
    ataque: number,
    defesa: number,
    ataqueEspecial: number,
    defesaEspecial: number,
    velocidade: number,
}