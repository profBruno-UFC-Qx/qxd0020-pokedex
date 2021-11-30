import { pokemons } from "../models/pokemon"

console.table(pokemons, ["id", "_nome", "_pvMax", "_ataque", "_defesa", "_ataqueEspecial", "_defesaEspecial", "_velocidade" ]);