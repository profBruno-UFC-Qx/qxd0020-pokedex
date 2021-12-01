import express from 'express';
import { pokemonService } from "../services/pokemonService";

export const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        pageTitle: 'My Pokedex',
        pokemons: pokemonService.getAll()
    } );
});

router.get('/:id', (req, res) => {

    const pokemon = pokemonService.getById(Number(req.params.id));

    if(pokemon) {
        res.render('show', {
            pageTitle: pokemon.nome,
            pokemon: pokemon
        });
    } else {
        res.status(404).send("Pokemon Not Found");
    }
});
