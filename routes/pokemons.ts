import express from 'express';
import { pokemons } from "../models/pokemon";

export const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        pageTitle: 'My Pokedex',
        pokemons: pokemons
    } );
});

router.get('/:id', (req, res) => {

    const pokemonId = Number(req.params.id);

    if(pokemonId < 0 || pokemonId > pokemons.length) {
        res.status(404).send("Pokemon Not Found");
    } else {
        const pokemon = pokemons[pokemonId - 1];
        res.render('show', {
            pageTitle: pokemon.nome,
            pokemon: pokemon
        });
    }
});
