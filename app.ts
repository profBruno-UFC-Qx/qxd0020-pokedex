import express from 'express';
import { router as pokemonRouter } from './routes/pokemons';

const app = express();
const PORT = 8080;

app.use('/pokemons', pokemonRouter);


app.get('/', (req, res) => {
    res.redirect('/pokemons');
});

app.listen(8080, () => {
    console.log(`Server listening on http://localhost:${PORT} `)
});