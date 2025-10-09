export interface Pokemon {
    id: number,
    nome: string,
    img: string,
    tipos: PokeType[],
    peso: number,
    altura: number,
    pvMax: number,
    ataque: number,
    defesa: number,
    ataqueEspecial: number,
    defesaEspecial: number,
    velocidade: number,
}

export type PokeType = 'grass' | 'poison' | 'fire' |
 'flying' | 'water' |'bug' | 'normal' | 'electric' | 'ground' | 'fairy' |
 'fighting'| 'psychic' | 'rock' | 'steel' | 'ice' | 'ghost' | 'dragon' | 'dark'