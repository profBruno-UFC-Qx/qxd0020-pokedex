import { pokemonService } from "../services/pokemonService"

console.table(pokemonService.getAll(), ["id", "_nome", "_pvMax", "_ataque", "_defesa", "_ataqueEspecial", "_defesaEspecial", "_velocidade" ]);