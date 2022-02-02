import express from 'express';
import { pokemonService } from "../services/pokemonService";

export const router = express.Router()

router.get('/', (req, res) => {
    res.json(pokemonService.getAll())
});

router.get('/:id', (req, res) => {

    const pokemon = pokemonService.getById(Number(req.params.id))

    if(pokemon) {
        res.json(pokemon);
    } else {
        res.status(404).json({msg: "Pokemon não encontrado"})
    }
})
