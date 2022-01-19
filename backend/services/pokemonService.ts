import { Pokemon } from "../models/pokemon";
import pokedex from "../db/pokedex-light.json"

enum Stats {
    PV_MAX,
    ATAQUE,
    DEFESA,
    ATAQUE_ESPECIAL,
    DEFESA_ESPECIAL,
    VELOCIDADE
}

class PokemonService {
    private _pokemons: Pokemon[] = [];

    constructor() {
        for (let pokemon of pokedex.pokemons) {
            this._pokemons.push(new Pokemon(pokemon.id,
                pokemon.name, 
                pokemon.types.flatMap((types) => types.type.name),
                pokemon.height, 
                pokemon.weight,
                pokemon.stats[Stats.PV_MAX].base_stat,
                pokemon.stats[Stats.ATAQUE].base_stat, 
                pokemon.stats[Stats.DEFESA].base_stat,
                pokemon.stats[Stats.ATAQUE_ESPECIAL].base_stat, 
                pokemon.stats[Stats.DEFESA_ESPECIAL].base_stat,
                pokemon.stats[Stats.VELOCIDADE].base_stat,)
            );
        }
    }

    getAll() {
        return this._pokemons;
    }

    getById(id: number) {

        if(id < 0 || id > this._pokemons.length) {
            return undefined;
        } else {
            return this._pokemons[id - 1];
        }

    }
}

export const pokemonService = new PokemonService();


