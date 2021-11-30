import express from 'express';
import { pokemons } from "../models/pokemon";

export const router = express.Router();

router.get('/', (req, res) => {

    let content = "";

    for (const pokemon of pokemons) {
        content +=`<tr>
            <td>${pokemon.id}</td>
            <td><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"><br>${pokemon.nome}</td>
            <td>${pokemon.pvMax}</td>
            <td>${pokemon.ataque}</td>
            <td>${pokemon.defesa}</td>
            <td>${pokemon.ataqueEspecial}</td>
            <td>${pokemon.defesaEspecial}</td>
            <td>${pokemon.velocidade}</td>
            <td><a href="pokemons/${pokemon.id}">Ver detalhes</td>
        </tr>`;
    }
    
    res.send(
        `<html>
            <body>
                <table>
                    <caption>Pokedex</caption>
                    <thead>
                        <tr>
                            <th> Id </th>
                            <th> Nome </th>
                            <th> PvMax </th>
                            <th> Ataque </th>
                            <th> Defesa </th>
                            <th> Ataque Especial </th>
                            <th> Defesa Especial </th>
                            <th> Velocidade </th>
                            <th> Mais detalhes </th>
                        </tr>
                    </thead>
                    <tbody>
                    ${content}
                    </tbody>
                </table>
            </body>
        </html>
    `);

});

router.get('/:id', (req, res) => {

    const pokemonId = Number(req.params.id);

    if(pokemonId < 0 || pokemonId > pokemons.length) {
        res.status(404).send("Pokemon Not Found");
    }

    const pokemon = pokemons[pokemonId - 1];
    
    const content =`<tr>
        <td>${pokemon.id}</td>
        <td><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"><br>${pokemon.nome}</td>
        <td>${pokemon.pvMax}</td>
        <td>${pokemon.ataque}</td>
        <td>${pokemon.defesa}</td>
        <td>${pokemon.ataqueEspecial}</td>
        <td>${pokemon.defesaEspecial}</td>
        <td>${pokemon.velocidade}</td>
        <td>${pokemon.peso}</td>
        <td>${pokemon.altura}</td>
    </tr>`;
    
    
    res.status(200).send(
        `<html>
            <body>
                <table>
                    <caption>Pokedex</caption>
                    <thead>
                        <tr>
                            <th> Id </th>
                            <th> Nome </th>
                            <th> PvMax </th>
                            <th> Ataque </th>
                            <th> Defesa </th>
                            <th> Ataque Especial </th>
                            <th> Defesa Especial </th>
                            <th> Velocidade </th>
                            <th> Peso </th>
                            <th> Altura </th>
                        </tr>
                    </thead>
                    <tbody>
                    ${content}
                    </tbody>
                </table>
            </body>
        </html>
    `);


});
