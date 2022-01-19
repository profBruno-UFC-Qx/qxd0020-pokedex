import express from 'express';
import { router as pokemonRouter } from './routes/pokemons';
import { engine } from 'express-handlebars';
import cors from 'cors';

const app = express();
const PORT = 8080;

app.engine('hbs', engine({
    layoutsDir: __dirname + `/../views/layouts`,
    extname: '.hbs'
}));

app.set('view engine', '.hbs');
app.set('views', './views');

app.use(cors({ origin: 'http://localhost:3000'}))
app.use('/pokemons', pokemonRouter)


app.get('/', (req, res) => {
    res.redirect('/pokemons')
})

app.listen(8080, () => {
    console.log(`Server listening on http://localhost:${PORT} `)
})