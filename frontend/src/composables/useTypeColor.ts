import type { PokeType } from "@/types"

type MapTypeColor = {
    [x in PokeType]: string
} 

const TypeColor: MapTypeColor = {
    grass: "#78C850",
    poison: "#A040A0",
    fire: "#F08030",
    flying: "#A890F0",
    water: "#6890F0",
    bug: "#A8B820",
    normal: "#A8A878",
    electric: "#F8D030",
    ground: "#E0C068",
    fairy: "#EE99AC",
    fighting: "#C03028",
    psychic: "#F85888",
    rock: "#B8A038",
    steel: "#B8B8D0",
    ice: "#98D8D8",
    ghost: "#705898",
    dragon: "#7038F8",
    dark: "#705848",
}

function getByType(tipo: PokeType): string {
    return TypeColor[tipo]
}

export const useColor = (type: PokeType) => getByType(type)